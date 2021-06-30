import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { getSearchContentStyle } from 'src/app/config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('openCloseSearchContent', [
      transition(':enter', [
        style(
          getSearchContentStyle('calc(100% - 2rem)', '4.5rem', '0.5rem', '1rem', '0.5rem')
        ),
        animate('0.5s', style(getSearchContentStyle('*', '*', '*', '0', '0'))),
      ]),
      transition(':leave', [
        style(getSearchContentStyle('*', '*', '0', '*', '*')),
        animate('0.5s', style(
          getSearchContentStyle('calc(100% - 2rem)', '4.5rem', '0.5rem', '1rem', '0.5rem')
        )),
      ]),
    ]),
    trigger('openCloseSearchIcon', [
      transition('iconClosed => iconOpen', [
        style({ transform: 'rotate(-90deg)' }),
        animate('0.25s', style({ transform: 'none' }))
      ]),
      transition('iconOpen => iconClosed', [
        style({ transform: 'rotate(90deg)' }),
        animate('0.25s', style({ transform: 'none' }))
      ]),
    ])
  ]
})
export class SearchComponent implements OnInit {
  @Input()
  public placeholder = '';

  public isOpen = false;
  public searchIconName = 'search';

  constructor() { }

  ngOnInit(): void { }

  public open(): void {
    this.searchIconName = 'arrow-back';
    this.isOpen = true;
  }
  public close(): void {
    if (!this.isOpen) {
      this.open();
      return;
    }
    this.searchIconName = 'search';
    this.isOpen = false;
  }
}
