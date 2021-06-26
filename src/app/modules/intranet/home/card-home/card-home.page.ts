import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ViewDidEnter } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardDatabaseService } from 'src/app/core/database';
import { CardService } from 'src/app/core/services/card.service';
import { CardStateService } from 'src/app/core/state-management';
import { ICard } from 'src/app/models';

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

  public selectedSegment: [string, number | string];
  private lastCardIndex = 0;
  private lastGettedCardLength = 0;

  constructor(
    private cardsDatabaseSvc: CardDatabaseService,
    private router: Router,
    private cardSvc: CardService,
    private cardStateSvc: CardStateService
  ) { }


  public loadCardsByScroll(event: any): void {
    setTimeout(() => {
      event.target.complete();
      this.loadCards(this.selectedSegment);
      if (this.lastGettedCardLength < 5) {
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
      this.lastGettedCardLength = cardLocalValues.length;
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
    this.lastGettedCardLength = 0;
    this.lastCardIndex = 0;
  }
}
