import { Injectable } from '@angular/core';
import { capSQLiteValues } from '@capacitor-community/sqlite';
import { ICard, TFormatQueryToInsert, TValuesSeparator } from 'src/app/models';
import { IInfo } from 'src/app/models/info.interface';

@Injectable({ providedIn: 'root' })
export class CardService {
  private cards?: ICard[] = [];
  private currentCards?: ICard[] = [];

  constructor() { }

  public getCardData(): ICard[] {
    return this.cards.slice();
  }
  public getCurrentCardData(): ICard[] {
    return this.currentCards.slice();
  }

  public setCardData(cards: ICard[]): void {
    this.cards.push(...cards);
  }
  public setCurrentCardData(cards: ICard[]): void {
    this.currentCards = cards;
  }

  public formatCardHttpToDatabase(
    infoResponseBody: IInfo, valueSeparator: TValuesSeparator = 'πø'
  ): TFormatQueryToInsert {
    return {
      keys: Object.keys(infoResponseBody),
      values: Object.values(infoResponseBody)
        .map(v => JSON.stringify(v).replace(/,/g, valueSeparator).replace(/"/g, '`'))
    };
  }

  public formCardDatabaseToShow(
    { values }: capSQLiteValues, valueSeparator: TValuesSeparator = 'πø'
  ): IInfo {
    if (!values?.length) { return {} as IInfo; }

    const [firtValue] = values;

    return Object.entries(firtValue).reduce((acc, [key, value]) => ({
      ...acc, [key]: ('' + value).replace(/πø/g, ',').replace(/\`/g, '\'')
    }), {} as IInfo);
  }
}
