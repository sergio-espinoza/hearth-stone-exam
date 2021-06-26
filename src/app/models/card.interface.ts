export interface ICard {
  cardId: string;
  dbfId?: string;
  name?: string;
  cardSet: string;
  type: string;
  faction?: string;
  rarity?: string;
  cost?: number;
  attack?: number;
  health?: number;
  text?: string;
  flavor?: string;
  artist?: string;
  collectible?: boolean | number;
  elite?: boolean | number;
  race?: string;
  playerClass?: string;
  howToGet?: string;
  howToGetGold?: string;
  howToGetDiamond?: string;
  img?: string;
  imgGold?: string;
  locale?: string;
  mechanics?: ICardMechanic[];
}
export interface ICardMechanic {
  name?: string;
}
