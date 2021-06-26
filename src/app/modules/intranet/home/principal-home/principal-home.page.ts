import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { CardDatabaseService, InfoDatabaseService } from 'src/app/core/database';
import { InfoHttpService } from 'src/app/core/http';
import { CardHttpService } from 'src/app/core/http/card.http.service';
import { CardService } from 'src/app/core/services/card.service';
import { DatabaseStateService } from 'src/app/core/state-management';
import { TMainAPISegments } from 'src/app/models';
import { IInfo, IStringifyInfo } from 'src/app/models/info.interface';
@Component({
  selector: 'app-principal-home',
  templateUrl: './principal-home.page.html',
  styleUrls: ['./principal-home.page.scss'],
})
export class PrincipalHomePage implements OnInit {
  public infos$: Observable<IInfo | IStringifyInfo>;

  constructor(
    private infoHttpSvc: InfoHttpService,
    private infoDatabaseSvc: InfoDatabaseService,
    private cardDatabaseSvc: CardDatabaseService,
    private cardHttpSvc: CardHttpService,
    private cardSvc: CardService,
    private router: Router,
    private databaseStateSvc: DatabaseStateService
  ) { }

  ngOnInit(): void {
    this.loadInfoData();
    this.loadCards();
  }

  public getCardForSet(segment: TMainAPISegments, setName: string): void {
    this.cardHttpSvc.getCardsForSegment(segment, setName).subscribe(
      cardList => {
        this.cardSvc.setCurrentCardData(cardList);
        this.router.navigate(['/intranet/card']);
      }
    );
  }

  private async loadCards(): Promise<void> {
    const [cardsQuantity] = (await this.cardDatabaseSvc.countCards()).values;
    if (cardsQuantity?.['COUNT(*)']) { return; }
    this.getAllCardsFromExternal();
  }

  private getAllCardsFromExternal(): void {
    this.cardHttpSvc.getAllCards().pipe(
      map(cardsResponse => this.cardSvc.formatCardsHttpResponseToInsert(cardsResponse)),
      switchMap(subQuery => this.cardDatabaseSvc.insertMultiple(subQuery))
    ).subscribe();
  }

  private loadInfoData(): void {
    this.infos$ = this.databaseStateSvc.getIsReadyState$().pipe(
      filter(readyState => readyState),
      switchMap(() => this.getInfoFromInternalDatabase$()),
      take(1)
    );
  }

  private getInfoFromInternalDatabase$(): Observable<IInfo> {
    return this.infoDatabaseSvc.selectAllInfo().pipe(
      switchMap(infoBody => {
        if (JSON.stringify(infoBody) !== '{}') {
          return of(infoBody);
        }
        return this.getInfoFromExternalDatabase$();
      }),
    );
  }

  private getInfoFromExternalDatabase$(): Observable<IInfo> {
    let anchorData = {} as IInfo;
    return this.infoHttpSvc.getInfo$().pipe(
      switchMap(infoBody => {
        anchorData = infoBody;
        return this.infoDatabaseSvc.insertIntoInfo(infoBody);
      }),
      map(() => anchorData)
    );
  }

}
