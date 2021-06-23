import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { CardService } from 'src/app/core/services/card.service';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements ViewDidEnter {
  public cardList: ICard[] = [];

  constructor(
    private cardSvc: CardService
  ) { }


  ionViewDidEnter(): void {
    this.cardList = this.cardSvc.getCurrentCardData() || [];
    console.log(this.cardList);
  }
}
