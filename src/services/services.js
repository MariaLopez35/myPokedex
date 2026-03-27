export const getAll = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
  const data = await response.json();

  const detailedPokemon = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default,
        types: details.types,
      };
    })
  );

  return detailedPokemon;
};