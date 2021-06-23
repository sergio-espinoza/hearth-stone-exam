import { Injectable } from '@angular/core';
import { IPaginationQuery, TTableNames } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class QueryDatabaseService {
  public getPaginationQuery({
    lastValue, limitValue, tableName, columnName = 'id'
  }: IPaginationQuery): string {

    return `
      SELECT * FROM ${tableName}
      WHERE ${columnName} > ${lastValue}
      ORDER BY ${columnName}
      LIMIT ${limitValue};
    `.replace(/\n+ */g, ' ').trim();
  }

  public getInsertMultipleIntoQuery(
    tableName: TTableNames, columns: string[], valuesList: string[][]
  ): string {
    return `
      INSERT INTO ${tableName} (${columns.join(',')})
      VALUES
        ()
    `.replace(/\n+ */g, ' ').trim();
  }

  public getInsertIntoQuery(
    tableName: TTableNames,
    columns: string[],
    values: (string | number | boolean)[]
  ): string {
    return `
      INSERT INTO ${tableName} (${columns.join(',')})
      VALUES ("${values.join('\",\"')}")
    `.replace(/\n+ */g, ' ').trim();
  }
}
