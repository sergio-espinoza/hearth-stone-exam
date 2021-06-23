
import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})

export class CardListComponent {
  @Input()
  public cardList: ICard[] = [];

  public cardImgFallback = 'assets/image/set.background.png';

  constructor(
  ) { }
}
