
import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-card-home-list',
  templateUrl: './card-home-list.component.html',
  styleUrls: ['./card-home-list.component.scss']
})

export class CardHomeListComponent {
  @Input()
  public cardList: ICard[] = [];

  public cardImgFallback = 'assets/image/set.background.png';

  constructor(
  ) { }
}
