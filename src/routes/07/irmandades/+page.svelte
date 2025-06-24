<script>
let {form} = $props();
</script>

<form method="post">
  nome: <input name="nome" type="text" placeholder="Nome do aprendiz" />
  nascimento: <input name="nascimento" type="date" />
  Força: <input name="forca" type="number" min="1" max="10" />
  Inteligência: <input name="inteligencia" type="number" min="1" max="10" />
  Destreza: <input name="destreza" type="number" min="1" max="10" />
  Conhecimento de Magia: <input name="magia" type="checkbox" />
  Ferramentas de artesão: <input name="ferramentas" type="checkbox" />
  <button formaction="?/guerreiros">Inscrever na Ordem dos Guerreiros</button>
  <button formaction="?/magos">Inscrever no Círculo dos Magos</button>
  <button formaction="?/artesaos">Inscrever na Guilda dos Artesãos</button>
</form>


{#if form?.error}
<p style="color: red">{form.error}</p>
{/if}