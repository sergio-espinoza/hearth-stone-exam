import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  public card: ICard;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCard();
  }

  public loadCard(): void {
    const selectedCardByState = this.router.getCurrentNavigation()?.extras?.state;

    if (!selectedCardByState) {
      return;
    }
    this.card = selectedCardByState as ICard;
  }

}
