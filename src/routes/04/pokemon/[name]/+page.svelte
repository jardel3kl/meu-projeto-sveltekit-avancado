<script>
  let { data } = $props();
</script>

<h1>{data.pokemon.name}</h1>
<img src={data.pokemon.sprites.front_default} alt="Imagem Do pokemon" />

<ul>
  <li><strong>Altura: </strong>{data.pokemon.height}</li>
  <li><strong>Peso: </strong>{data.pokemon.weight}</li>
</ul>
<ul>
  <li><strong>Habilidades: </strong>{data.pokemon.ability}</li>
  {#each data.pokemon.abilities as habilidade}
    <li>{habilidade.ability.name}</li>
  {/each}
</ul>

<ul>
  <li><strong>Tipos: </strong>{data.pokemon.type}</li>
  {#each data.pokemon.types as tipo}
    <li>{tipo.type.name}</li>
  {/each}
</ul>



