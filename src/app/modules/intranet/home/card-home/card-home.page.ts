import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ViewDidEnter } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardDatabaseService } from 'src/app/core/database';
import { CardStateService } from 'src/app/core/state-management';
import { ICard, TWhereQuery } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card-home.page.html',
  styleUrls: ['./card-home.page.scss'],
})
export class CardHomePage implements OnInit, ViewDidEnter {
  @ViewChild(IonInfiniteScroll)
  public infiniteScroll: IonInfiniteScroll;

  public cardList: ICard[] = [];
  public cardList$?: Observable<ICard[]>;

  public selectedSegment: TWhereQuery;
  private lastCardIndex = 0;

  constructor(
    private cardsDatabaseSvc: CardDatabaseService,
    private router: Router,
    private cardStateSvc: CardStateService
  ) { }

  public loadCardsByScroll(event: any): void {
    setTimeout(() => {
      event.target.complete();
      this.loadCards(this.selectedSegment);
      if (this.cardList.length >= 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  ngOnInit(): void {
    // this.loadCards(this.selectedSegment);
  }

  ionViewDidEnter(): void {
    if (!this.isSegmentValueChanged()) {
      return;
    }
    this.loadCards(this.selectedSegment);
  }

  public loadCards(selectedSegment: [string, string | number]): void {
    this.cardsDatabaseSvc.getCardPagination(
      5, this.lastCardIndex, selectedSegment
    ).pipe(
      map(cardLocalResponse => cardLocalResponse.values)
    ).subscribe(cardLocalValues => {
      if (cardLocalValues.length === 0) { return; }
      this.cardList.push(...cardLocalValues);
      this.lastCardIndex = cardLocalValues[cardLocalValues.length - 1].id;
    });
  }

  public goToDetail(card: ICard): void {
    this.router.navigate(['/intranet/view-card'], { state: card });
  }

  private isSegmentValueChanged(): boolean {
    const [key , value] = this.cardStateSvc.getRouterState();
    if (!this.selectedSegment) {
      this.selectedSegment = [key, value];
      return true;
    }
    const [selectedKey, selectedValue] = this.selectedSegment;

    if (key === selectedKey && value === selectedValue) {
      return false;
    }
    this.resetCardValues();
    this.selectedSegment = [key, value];
    return true;
  }

  private resetCardValues(): void {
    this.cardList = [];
    this.lastCardIndex = 0;
  }
}
