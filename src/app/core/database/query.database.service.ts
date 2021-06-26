import { Injectable } from '@angular/core';
import { IPaginationQuery, TTableNames } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class QueryDatabaseService {
  public getPaginationQuery(
    { lastValue, limitValue, tableName, columnName = 'id' }: IPaginationQuery,
    [key, value]: [string, string | number] = ['', '']
    ): string {

    const segmentStatement = (key || value) ? `AND ${key}=${value} ` : '';

    return `
      SELECT * FROM ${tableName}
      WHERE ${columnName} > ${lastValue} ${segmentStatement}
      ORDER BY ${columnName}
      LIMIT ${limitValue};
    `.replace(/\n+ */g, ' ').trim();
  }

  public getInsertMultipleIntoQuery(
    tableName: TTableNames, columns: string[], valuesList: string
  ): string {
    return `INSERT INTO ${tableName} (${columns.join(',')}) VALUES (${valuesList});`.replace(/\n+ *|'\n'/g, ' ').trim();
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

  public getQuatityQuery(
    tableName: TTableNames,
    condition?: { [key: string]: string | number }
  ) {
    return `SELECT COUNT(column_name) FROM table_name WHERE condition;`;
  }

  public getCountRowsQuery(tableName: TTableNames, [selector, value]: [string, number | string] = ['', 0]): string {
    const whereCondition = selector || value ? ` WHERE ${selector}=${value}` : '';
    return `SELECT COUNT(*) FROM ${tableName}${whereCondition};`.trim();
  }
}
