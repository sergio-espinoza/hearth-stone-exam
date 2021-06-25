import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorSQLite } from '@capacitor-community/sqlite';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { InfoDatabaseService } from 'src/app/core/database';
import { InfoHttpService } from 'src/app/core/http';
import { CardHttpService } from 'src/app/core/http/card.http.service';
import { CardService } from 'src/app/core/services/card.service';
import { DatabaseStateService } from 'src/app/core/state-management';
import { TMainAPISegments } from 'src/app/models';
import { IInfo, IStringifyInfo } from 'src/app/models/info.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public infos$: Observable<IInfo | IStringifyInfo>;

  constructor(
    private infoHttpSvc: InfoHttpService,
    private infoDabaseSvc: InfoDatabaseService,
    private cardHttpSvc: CardHttpService,
    private cardSvc: CardService,
    private router: Router,
    private databaseStateSvc: DatabaseStateService
  ) { }

  ngOnInit(): void {
    this.loadInfoData();
  }

  public getCardForSet(segment: TMainAPISegments, setName: string) {
    this.cardHttpSvc.getCardsForSegment(segment, setName).subscribe(
      cardList => {
        this.cardSvc.setCurrentCardData(cardList);
        this.router.navigate(['/intranet/card']);
      }
    );
  }

  private loadInfoData(): void {
    this.infos$ = this.databaseStateSvc.getIsReadyState$().pipe(
      filter(readyState => readyState),
      switchMap(() => this.getInfoFromInternalDatabase$()),
      take(1)
    );
  }

  private getInfoFromInternalDatabase$(): Observable<IInfo> {
    return this.infoDabaseSvc.selectAllInfo().pipe(
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
        return this.infoDabaseSvc.insertIntoInfo(infoBody);
      }),
      map(() => anchorData)
    );
  }

}
