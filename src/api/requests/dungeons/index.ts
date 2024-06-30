import { api } from '@/api/instance';

// interface GetDungeonsParams {
//   title?: string;
//   limit?: number;
// }

export type GetDungeonsConfig = AxiosRequestConfig;

export const getDungeons = async ({ config }: GetDungeonsConfig) =>
  // const queryUrl = params ?? new URLSearchParams(params).toString();
  api.get<DungeonType>(`/dungeons`, config);
