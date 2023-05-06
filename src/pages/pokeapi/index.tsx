import Head from "next/head";
import { useEffect, useState } from "react";
import { message } from "antd";
import PokeApiContainer from "@/containers/pokeapi";
import { useGetPokemon } from "@/services/front/pokeapi";
import { IPokemon, IPokemonFormData } from "@/interfaces/pokeapi";
import { IMessageErrorApi } from "@/interfaces/common";

const pokemonInitialValues = {
  name: "",
  enabled: false,
};

type IDataPokemon = IPokemon & IMessageErrorApi;

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(pokemonInitialValues);

  const { data: dataPokemonApi = {} as IDataPokemon } = useGetPokemon<IDataPokemon>({
    queryParams: {
      pokemon: pokemon?.name,
    },
    options: {
      enabled: pokemon?.enabled,
    },
  });

  const onSearchPokemon = ({ name }: IPokemonFormData) => {
    setPokemon({
      name,
      enabled: true,
    });
  };

  useEffect(() => {
    if (pokemon?.enabled)
      setPokemon({
        ...pokemon,
        enabled: false,
      });
  }, [pokemon]);

  useEffect(() => {
    if (dataPokemonApi?.status === 404 && pokemon?.enabled) {
      setPokemon({
        ...pokemon,
        enabled: false,
      });
      message.info(dataPokemonApi?.message);
    }
  }, [dataPokemonApi, pokemon]);

  return (
    <>
      <Head>
        <title>PokeApi</title>
      </Head>
      <PokeApiContainer dataPokemon={dataPokemonApi} onSearchPokemon={onSearchPokemon} />
    </>
  );
};

export default Pokemon;
