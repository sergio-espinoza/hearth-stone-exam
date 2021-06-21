import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ISet } from 'src/app/models';

@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {
  public decks: ISet[] = [
    { name: 'Crecimiento', image: '' }
  ];


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', {
      headers: {
        'x-rapidapi-key': '348c7a342fmshce5c176bb32306ep157695jsnf510b9c3ab44',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        useQueryString: true as any
      },
    }).subscribe(d => console.log(JSON.stringify(d)));
  }

}
