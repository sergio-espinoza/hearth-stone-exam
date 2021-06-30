import { Injectable } from '@angular/core';
import { capSQLiteValues } from '@capacitor-community/sqlite';
import { TFormatQueryToInsert, TValuesSeparator, IInfo } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class InfoService {
  private info?: IInfo;

  constructor() { }

  public getInfoData(): IInfo {
    return { ... this.info };
  }

  public setInfoData(infoData: IInfo): void {
    this.info = { ...infoData };
  }

  public formatInfoHttpToDatabase(
    infoResponseBody: IInfo, valueSeparator: TValuesSeparator = 'πø'
  ): TFormatQueryToInsert {
    return {
      keys: Object.keys(infoResponseBody),
      values: Object.values(infoResponseBody)
        .map(v => JSON.stringify(v).replace(/,/g, valueSeparator).replace(/"/g, '`'))
    };
  }

  public formInfoDatabaseToShow(
    { values }: capSQLiteValues, valueSeparator: TValuesSeparator = 'πø'
  ): IInfo {
    if (!values?.length) { return {} as IInfo; }

    const [firtValue] = values;

    return Object.entries(firtValue).reduce((acc, [key, value]) => ({
      ...acc, [key]: this.transformInfoDataFromDatabase('' + value)
    }), {} as IInfo);
  }

  private transformInfoDataFromDatabase(value: string): any {
    return JSON.parse(`{ "val": ${(value).replace(/πø/g, ',').replace(/\`/g, '\"')} }`).val;
  }
}
