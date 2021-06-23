import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapacitorSQLite, JsonSQLite } from '@capacitor-community/sqlite';

import { AlertController } from '@ionic/angular';
import { TDatabaseName } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  private dbReady = false;
  private dbName = 'hearthstone-db';

  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController
  ) { }

  public async init(dbName: TDatabaseName): Promise<void> {
    try {
      if (!this.getDbReady()) {
        this.downloadDatabase();
        return;
      }
      await this.enableDB('hearthstone-db');
      this.setDbReady(true);

    } catch (error) {
      const alertElement = await this.alertCtrl.create({
        message: error
      });
      await alertElement.present();
    }

  }

  public getDbReady(): boolean {
    return this.dbReady;
  }

  public setDbReady(ready: boolean): void {
    this.dbReady = ready;
  }

  private async enableDB(databaseName: TDatabaseName): Promise<void> {
    await CapacitorSQLite.createConnection({ database: databaseName });
    await CapacitorSQLite.open({ database: databaseName });
  }



  private downloadDatabase(update = false): void {
    this.http.get<any>('assets/database/database.init.json').subscribe(
      async (jsonExport: JsonSQLite) => {
        try {

          const jsonstring = JSON.stringify(jsonExport);
          const isValid = await CapacitorSQLite.isJsonValid({ jsonstring });

          if (!isValid.result) { return; }

          this.dbName = jsonExport.database;
          await CapacitorSQLite.importFromJson({ jsonstring });

          if (!this.getDbReady()) {
            await this.enableDB('hearthstone-db');
          }

          const databaseSetState = !update ?
            () => CapacitorSQLite.createSyncTable({ database: this.dbName }) :
            () => CapacitorSQLite.setSyncDate({ database: this.dbName, syncdate: '' + new Date().getTime() });

          await databaseSetState();

          this.setDbReady(true);

        } catch (error) {
          const alertElement = await this.alertCtrl.create({
            message: 'Conected again!!'
          });
          await alertElement.present();
        }
      }
    );
  }

}
