import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter } from '@ionic/angular';
import { CardHttpService } from 'src/app/core/http/card.http.service';
import { InfoService } from 'src/app/core/services';
import { CardService } from 'src/app/core/services/card.service';
import { IInfo } from 'src/app/models/info.interface';

@Component({
  selector: 'app-deck-home',
  templateUrl: './deck-home.page.html',
  styleUrls: ['./deck-home.page.scss'],
})
export class DeckHomePage implements OnInit, ViewDidEnter {
  public info: IInfo;

  constructor(
    private infoSvc: InfoService,
    private cardSvc: CardService,
    private cardHttpSvc: CardHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ionViewDidEnter(): void {
    this.info = this.infoSvc.getInfoData();
  }

  public getCardForSet(deckName: string) {
    this.cardHttpSvc.getCardsForSegment('sets', deckName).subscribe(
      cardList => {
        this.cardSvc.setCurrentCardData(cardList);
        this.router.navigate(['/intranet/card']);
      }
    );
  }

}
