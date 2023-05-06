import type { NextApiRequest, NextApiResponse } from "next";
import { IPokemon } from "@/interfaces/pokeapi";
import { IMessageErrorApi } from "@/interfaces/common";
import { serviceGetPokemon } from "@/services/back/pokeapi";

const getPokemon = async (request: NextApiRequest, response: NextApiResponse<IPokemon | IMessageErrorApi>) => {
  try {
    const result = await serviceGetPokemon(request);
    response.status(200).json(result);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const data = {
      status: error?.response?.status,
      message: error?.response?.data,
    };
    response.status(200).json(data);
  }
};

export default getPokemon;
