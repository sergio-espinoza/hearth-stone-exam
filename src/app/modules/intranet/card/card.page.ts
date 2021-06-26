import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardDatabaseService } from 'src/app/core/database';
import { CardService } from 'src/app/core/services/card.service';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements ViewDidEnter {
  // public cardList: ICard[] = [];
  public cardList$?: Observable<ICard[]>;

  constructor(
    private cardSvc: CardService,
    private cardsDatabaseSvc: CardDatabaseService
  ) { }


  ionViewDidEnter(): void {
    // this.cardList = this.cardSvc.getCurrentCardData() || [];
    this.loadCards();
  }

  public loadCards(): void {
    this.cardList$ = this.cardsDatabaseSvc.getCardPagination(5, 1).pipe(
      map(cardLocalResponse => cardLocalResponse.values)
    );
  }
}
