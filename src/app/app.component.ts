import { Component } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { delay, filter, take, tap } from 'rxjs/operators';
import { DatabaseService } from './core/database/database.service';
import { DatabaseStateService } from './core/state-management';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private databaseSvc: DatabaseService,
    private loadingCtrl: LoadingController,
    private databaseStateSvc: DatabaseStateService
  ) {
    this.initializeApp();
    this.loaderPresent();
  }

  private async initializeApp(): Promise<void> {
    await this.platform.ready();
    await this.databaseSvc.init('hearthstone-db');
  }

  private async loaderPresent(): Promise<void> {
    const loader = await this.loadingCtrl.create({
      message: 'Cargando Datos',
      spinner: 'bubbles'
    });
    loader.present();

    this.databaseStateSvc.getIsReadyState$()
      .pipe(
        filter(state => state),
        delay(1000),
        take(1)
      )
      .subscribe(
        _ => loader.dismiss()
      );
  }
}
