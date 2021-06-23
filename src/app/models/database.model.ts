export type TTableNames = 'cards' | 'info';
export type TDatabaseName = 'hearthstone-db';

export type TFormatQueryToInsert = {
  keys: string[];
  values: (number | string | boolean)[];
};
export type TFormatQueryToInsertMultiple = {
  keys: string[];
  values: (number | string | boolean)[][];
};

export type TValuesSeparator = 'πø';

export interface IPaginationQuery {
  lastValue: number;
  limitValue: number;
  tableName: TTableNames;
  columnName?: string;
}
