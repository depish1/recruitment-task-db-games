import { ParamsStateType } from 'src/types/params.types';

export type PlatformType = { platform: { id: number; name: string; slug: string } | null };

export type GameType = {
  background_image: string;
  id: number;
  name: string;
  platforms: PlatformType[];
  released: string;
};

export type GetGamesResponseType = {
  count: number;
  next: string;
  previous: string;
  results: GameType[];
};

export type GetGamesParamsType = ParamsStateType;
