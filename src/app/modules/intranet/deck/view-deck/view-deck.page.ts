import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeck } from 'src/app/models';

@Component({
  selector: 'app-view-deck',
  templateUrl: './view-deck.page.html',
  styleUrls: ['./view-deck.page.scss'],
})
export class ViewDeckPage implements OnInit {
  public deck: IDeck = {
    cardList: [],
    image: '',
    name: ''
  };

  constructor(
    private router: Router
  ) {
    this.loadDeckFromRouterStatus();
  }

  ngOnInit(): void {
  }

  private loadDeckFromRouterStatus(): void {
    const routerStatus = this.router.getCurrentNavigation()?.extras?.state;
    console.log(routerStatus);
    if (!routerStatus?.deck) { return; }

    this.deck = routerStatus.deck;
  }

}
