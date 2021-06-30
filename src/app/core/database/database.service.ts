import { Injectable } from '@angular/core';
import { CapacitorSQLite, JsonSQLite } from '@capacitor-community/sqlite';

import { AlertController } from '@ionic/angular';
import { TDatabaseName } from 'src/app/models';
import { databaseConfig } from 'src/app/config';
import { DatabaseStateService } from '../state-management';
import { Storage } from '@capacitor/storage';

@Injectable({ providedIn: 'root' })
export class DatabaseService {

  constructor(
    private alertCtrl: AlertController,
    private databaseStateSvc: DatabaseStateService
  ) { }

  public async init(dbName: TDatabaseName): Promise<void> {
    try {
      const dbSetupDone = await Storage.get({ key: 'dbSetupDone' });

      if (!dbSetupDone?.value) {
        this.downloadDatabase();
        return;
      }

      await this.enableDB(dbName);
      this.changeStateDatabase(true);

    } catch (error) {
      this.changeStateDatabase(false);
      const alertElement = await this.alertCtrl.create({
        message: error
      });
      alertElement.present();
    }
  }

  private async enableDB(databaseName: TDatabaseName): Promise<void> {

    try {
      await CapacitorSQLite.createConnection({ database: databaseName });
      await CapacitorSQLite.open({ database: databaseName });

    } catch (error) {
      this.changeStateDatabase(false);
    }

  }

  private async downloadDatabase(update = false): Promise<void> {
    try {
      const jsonstring = JSON.stringify(databaseConfig);
      const isValid = await CapacitorSQLite.isJsonValid({ jsonstring });

      if (!isValid.result) { return; }

      const dbName = databaseConfig.database;
      await CapacitorSQLite.importFromJson({ jsonstring });
      await Storage.set({ key: 'dbSetupDone', value: 'true' });

      await this.enableDB('hearthstone-db');

      const databaseSetState = !update ?
        () => CapacitorSQLite.createSyncTable({ database: dbName }) :
        () => CapacitorSQLite.setSyncDate({ database: dbName, syncdate: '' + new Date().getTime() });

      await databaseSetState();
      this.changeStateDatabase(true);

    } catch (error) {
      this.changeStateDatabase(false);
      const alertElement = await this.alertCtrl.create({
        message: error
      });
      alertElement.present();
    }
  }

  private changeStateDatabase(state: boolean): void {
    this.databaseStateSvc.setIsReady$(state);
  }

}
