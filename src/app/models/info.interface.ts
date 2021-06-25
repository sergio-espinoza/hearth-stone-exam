export interface IInfo {
  patch: string;
  classes: string[];
  sets: string[];
  standard: string[];
  wild: string[];
  types: string[];
  factions: string[];
  qualities: string[];
  races: string[];
  locales: { [key: string]: string };
}
export interface IStringifyInfo {
  patch: string;
  classes: string;
  sets: string;
  standard: string;
  wild: string;
  types: string;
  factions: string;
  qualities: string;
  races: string;
  locales: string;
}
