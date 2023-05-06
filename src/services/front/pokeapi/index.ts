import { UseQueryOptions, useQuery } from "react-query";
import { IQueryParams } from "@/interfaces/common";
import { feRequest } from "@/utils/apiRequest/feRequest";

export const useGetPokemon = <TDataResponse>({
  queryParams,
  options,
}: {
  queryParams?: IQueryParams;
  options?: Omit<UseQueryOptions<unknown, unknown, TDataResponse, string[]>, "queryKey" | "queryFn"> | undefined;
}) => {
  return useQuery(
    ["get-pokemon"],
    async () => {
      const { data } = await feRequest<TDataResponse>("/pokeapi/get-pokemon", "GET", queryParams);
      return data;
    },
    options
  );
};
