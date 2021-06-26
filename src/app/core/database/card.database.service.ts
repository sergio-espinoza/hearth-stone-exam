import { Injectable } from '@angular/core';
import { CapacitorSQLite, capSQLiteChanges, capSQLiteValues } from '@capacitor-community/sqlite';
import { from, Observable, of } from 'rxjs';
import { çcardIndexes } from 'src/app/config';
import { DatabaseService } from './database.service';
import { QueryDatabaseService } from './query.database.service';

@Injectable({ providedIn: 'root' })
export class CardDatabaseService {
  constructor(
    private dataBaseSvc: DatabaseService,
    private queryDatabaseSvc: QueryDatabaseService
  ) { }

  public getCards(): Observable<capSQLiteValues> {
    const statement = 'SELECT * FROM cards;';
    return from(CapacitorSQLite.query({ database: 'hearthstone-db', statement, values: [] }));
  }

  public getCardPagination(
    limitValue: number, lastValue = 0
  ): Observable<capSQLiteValues> {
    const statement = this.queryDatabaseSvc.getPaginationQuery({
      lastValue, limitValue, tableName: 'cards', columnName: 'id'
    });

    return from(CapacitorSQLite.query({ database: 'hearthstone-db', statement, values: [] }));
  }

  public insertMultiple(
    list: string
  ): Observable<capSQLiteChanges> {
    const statement = this.queryDatabaseSvc.getInsertMultipleIntoQuery('cards', çcardIndexes, list);
    return from(CapacitorSQLite.execute({ database: 'hearthstone-db', statements: statement }));
  }

  public countCards(
    selector?: [string, number]
  ): Promise<capSQLiteValues> {
    const statement = this.queryDatabaseSvc.getCountRowsQuery(
      'cards', selector
    );
    return CapacitorSQLite.query({ database: 'hearthstone-db', values: [], statement });
  }

}

