export const databaseConfig = {
  database: 'hearthstone-db',
  version: 1,
  encrypted: false,
  mode: 'full',
  tables: [
    {
      name: 'cards',
      schema: [
        { column: 'id', value: 'INTEGER PRIMARY KEY NOT NULL' },
        { column: 'cardId', value: 'TEXT' },
        { column: 'dbfId', value: 'TEXT' },
        { column: 'name', value: 'TEXT' },
        { column: 'cardSet', value: 'TEXT' },
        { column: 'type', value: 'TEXT' },
        { column: 'faction', value: 'TEXT' },
        { column: 'rarity', value: 'TEXT' },
        { column: 'cost', value: 'TEXT' },
        { column: 'attack', value: 'TEXT' },
        { column: 'health', value: 'TEXT' },
        { column: 'text', value: 'TEXT' },
        { column: 'flavor', value: 'TEXT' },
        { column: 'artist', value: 'TEXT' },
        { column: 'collectible', value: 'TEXT' },
        { column: 'elite', value: 'TEXT' },
        { column: 'race', value: 'TEXT' },
        { column: 'playerClass', value: 'TEXT' },
        { column: 'howToGet', value: 'TEXT' },
        { column: 'howToGetGold', value: 'TEXT' },
        { column: 'howToGetDiamond', value: 'TEXT' },
        { column: 'img', value: 'TEXT' },
        { column: 'imgGold', value: 'TEXT' },
        { column: 'locale', value: 'TEXT' },
        { column: 'mechanics', value: 'TEXT' },
      ]
    },
    {
      name: 'info',
      schema: [
        { column: 'id', value: 'INTEGER PRIMARY KEY NOT NULL' },
        { column: 'patch', value: 'TEXT NOT NULL' },
        { column: 'classes', value: 'TEXT' },
        { column: 'sets', value: 'TEXT' },
        { column: 'standard', value: 'TEXT' },
        { column: 'wild', value: 'TEXT' },
        { column: 'types', value: 'TEXT' },
        { column: 'factions', value: 'TEXT' },
        { column: 'qualities', value: 'TEXT' },
        { column: 'races', value: 'TEXT' },
        { column: 'locales', value: 'TEXT' }
      ]
    }
  ]
};
