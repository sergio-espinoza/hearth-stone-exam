import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ViewDidEnter } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardDatabaseService } from 'src/app/core/database';
import { CardService } from 'src/app/core/services/card.service';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card-home.page.html',
  styleUrls: ['./card-home.page.scss'],
})
export class CardHomePage implements ViewDidEnter {
  @ViewChild(IonInfiniteScroll)
  public infiniteScroll: IonInfiniteScroll;

  public cardList: ICard[] = [];
  public cardList$?: Observable<ICard[]>;

  private lastCardIndex = 85;
  private lastGettedCardLength = 0;

  constructor(
    private cardSvc: CardService,
    private cardsDatabaseSvc: CardDatabaseService
  ) { }


  public loadCardsByScroll(event: any): void {
    setTimeout(() => {
      event.target.complete();
      this.loadCards();
      if (this.lastGettedCardLength < 5) {
        event.target.disabled = true;
      }
    }, 500);
  }

  ionViewDidEnter(): void {
    this.loadCards();
  }

  public loadCards(): void {
    this.cardsDatabaseSvc.getCardPagination(5, this.lastCardIndex).pipe(
      map(cardLocalResponse => cardLocalResponse.values)
    ).subscribe(cardLocalValues => {
      this.cardList.push(...cardLocalValues);
      this.lastGettedCardLength = cardLocalValues.length;
      this.lastCardIndex += 5;
    });
  }
}
