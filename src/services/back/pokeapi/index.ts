import { NextApiRequest } from "next";
import axios from "axios";
// import { beRequest } from "@/utils/apiRequest/beRequest";

export const serviceGetPokemon = async (request: NextApiRequest) => {
  const { query } = request;
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query?.pokemon}`);
  return data;
};
