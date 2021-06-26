import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.page.html',
  styleUrls: ['./view-card.page.scss'],
})
export class ViewCardPage implements OnInit {
  public card: ICard;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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
