import { Image } from "antd";
import DescriptionsComponent from "@/components/pokeapi/descriptions";
import FormSearchPkm from "@/components/pokeapi/form";
import { IPokeApiContainer } from "@/interfaces/pokeapi";

const PokeApiContainer = ({ dataPokemon, onSearchPokemon }: IPokeApiContainer) => {
  return (
    <>
      {dataPokemon?.sprites && <Image alt="sprite-pokemon" src={dataPokemon?.sprites?.front_default} />}
      <FormSearchPkm onSearchPokemon={onSearchPokemon} />
      {dataPokemon?.id && <DescriptionsComponent dataPokemon={dataPokemon} />}
    </>
  );
};

export default PokeApiContainer;
