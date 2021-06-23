import { Component } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { DatabaseService } from './core/database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private databaseSvc: DatabaseService,
    private loadingCtrl: LoadingController
  ) {
    this.initializeApp();
  }

  private async initializeApp(): Promise<void> {
    await this.platform.ready();
    // const loading = await this.loadingCtrl.create({
    //   message: 'Loading...',
    //   showBackdrop: true
    // });
    // await loading.present();

    this.databaseSvc.init('hearthstone-db');
    if (!this.databaseSvc.getDbReady()) { return; }
    // loading.dismiss();
  }
}
