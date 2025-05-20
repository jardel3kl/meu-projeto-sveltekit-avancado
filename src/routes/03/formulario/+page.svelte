
<script>
    let { data } = $props();
</script>

<form>
    <input type="text" name="fruta" placeholder="Qual tua fruta preferida?" />
    <input type="text" name="legume" placeholder="E legume?" />
    <button type="submit">buscar</button>
</form>

{#if data.fruta && data.legume}
Você gosta da fruta {data.fruta} e do Legume {data.legume}
{:else}
Informe uma fruta e um legume...
{/if}
