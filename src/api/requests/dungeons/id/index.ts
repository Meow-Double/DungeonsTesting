import { api } from '@/api/instance';

type GetDungeonsIdParams = {
  id: number;
};

export type GetDungeonsIdConfig = AxiosRequestConfig<GetDungeonsIdParams>;

export const getDungeonsId = async ({ params, config }: GetDungeonsIdConfig) =>
  api.get<DungeonType>(`/dungeons/${params.id}`, config);
