export async function load({ params }) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const pokemon = await resposta.json();

    return { pokemon };
}

