import { Descriptions } from "antd";
import { IDescriptionsComponent } from "@/interfaces/pokeapi";

const DescriptionsComponent = ({ dataPokemon }: IDescriptionsComponent): JSX.Element => {
  const { id, name, types, weight } = dataPokemon;
  const pokemonTypes = types?.map(({ type }) => type?.name);

  return (
    <Descriptions title="Pokémon Info">
      <Descriptions.Item label="Id">{id}</Descriptions.Item>
      <Descriptions.Item label="Name">{name}</Descriptions.Item>
      <Descriptions.Item label="Weight">{weight}</Descriptions.Item>
      <Descriptions.Item label="Types">{new Intl.ListFormat("es").format(pokemonTypes)}</Descriptions.Item>
    </Descriptions>
  );
};

export default DescriptionsComponent;
