import { api } from '@/api/instance';

export type GetDungeonsConfig = AxiosRequestConfig;

export const getDungeons = async ({ config }: GetDungeonsConfig) =>
  api.get<DungeonTypeList>('/dungeons', config);
