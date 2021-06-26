import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { CardDatabaseService, InfoDatabaseService } from 'src/app/core/database';
import { InfoHttpService } from 'src/app/core/http';
import { CardHttpService } from 'src/app/core/http/card.http.service';
import { CardService } from 'src/app/core/services/card.service';
import { DatabaseStateService } from 'src/app/core/state-management';
import { TMainAPISegments } from 'src/app/models';
import { IInfo, IStringifyInfo } from 'src/app/models/info.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {

  }

  ngOnInit(): void {

  }
}
