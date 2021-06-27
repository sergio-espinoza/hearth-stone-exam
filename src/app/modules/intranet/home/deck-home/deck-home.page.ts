import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewDidEnter } from '@ionic/angular';
import { CardHttpService } from 'src/app/core/http/card.http.service';
import { InfoService } from 'src/app/core/services';
import { CardService } from 'src/app/core/services/card.service';
import { IDeck } from 'src/app/models';
@Component({
  selector: 'app-deck-home',
  templateUrl: './deck-home.page.html',
  styleUrls: ['./deck-home.page.scss'],
})
export class DeckHomePage implements OnInit, ViewDidEnter {
  public decks: IDeck[] = [
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 1' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 2' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 3' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 4' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 5' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 6' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 7' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 8' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 9' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 10' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 11' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 12' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 13' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 14' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 15' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 16' },
    { cardList: [], image: 'assets/image/sets/hall-of-fame.png', name: 'Deck 17' },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ionViewDidEnter(): void {
  }

  public goToDetailDeck(deck: IDeck): void {
    this.router.navigate(['/intranet/view-deck'], { state: { deck } });
  }

}
