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
        { column: 'cardId', value: 'TEXT NOT NULL' },
        { column: 'dbfId', value: 'TEXT' },
        { column: 'name', value: 'TEXT' },
        { column: 'cardSet', value: 'TEXT' },
        { column: 'type', value: 'TEXT' },
        { column: 'faction', value: 'TEXT' },
        { column: 'rarity', value: 'TEXT' },
        { column: 'cost', value: 'INTEGER' },
        { column: 'attack', value: 'INTEGER' },
        { column: 'health', value: 'INTEGER' },
        { column: 'text', value: 'TEXT' },
        { column: 'flavor', value: 'TEXT' },
        { column: 'artist', value: 'TEXT' },
        { column: 'collectible', value: 'INTEGER' },
        { column: 'elite', value: 'INTEGER' },
        { column: 'race', value: 'TEXT' },
        { column: 'playerClass', value: 'TEXT' },
        { column: 'howTogGet', value: 'TEXT' },
        { column: 'howToGetDiamond', value: 'TEXT' },
        { column: 'img', value: 'TEXT' },
        { column: 'imgGold', value: 'TEXT' },
        { column: 'locale', value: 'TEXT' },
        { column: 'mechanics', value: 'TEXT' },
        { column: 'lastModified', value: `INTEGER DEFAULT (strftime('%s', 'now'))` }
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
