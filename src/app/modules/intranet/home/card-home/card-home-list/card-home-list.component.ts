
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-card-home-list',
  templateUrl: './card-home-list.component.html',
  styleUrls: ['./card-home-list.component.scss']
})

export class CardHomeListComponent {
  @Input()
  public cardList: ICard[] = [];

  @Output()
  public clickCardEmitter = new EventEmitter<ICard>();

  public cardImgFallback = 'assets/image/set.background.png';

  constructor(
  ) { }

  public onClickCard(card: ICard): void {
    this.clickCardEmitter.emit(card);
  }

  public trackByCardItems(index: number, card: ICard): number {
    return card.id;
  }
}
