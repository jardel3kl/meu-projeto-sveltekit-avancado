<script>
  export let form;
  let rangeValue = 50;

  const opcoes = Array.from({ length: 10 }, (_, i) => i + 1);
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap');

  body {
    background: url('https://www.transparenttextures.com/patterns/parchment.png');
    font-family: 'MedievalSharp', cursive;
    color: #3e2d1c;
  }

  form {
    background: #fdf5e6;
    border: 2px solid #8b5e3c;
    border-radius: 12px;
    padding: 2rem;
    max-width: 600px;
    margin: 2rem auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  label {
    font-weight: bold;
    font-size: 1rem;
  }

  .field {
    margin-bottom: 1rem;
  }

  input[type="text"],
  input[type="date"],
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #8b5e3c;
    border-radius: 6px;
    background-color: #fffaf0;
    font-family: inherit;
  }

  input[type="range"] {
    width: 100%;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    margin-top: 1rem;
    background: #6b4226;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.75rem;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  button:hover {
    background: #4e2d1c;
  }

  .error {
    color: red;
    margin-top: 1rem;
    font-weight: bold;
    text-align: center;
  }

  .section-title {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    border-bottom: 1px solid #8b5e3c;
    padding-bottom: 0.25rem;
  }
</style>

<form method="post">
  <h2>Ficha do Aprendiz</h2>

  <div class="field">
    <label for="nome">Nome do Personagem</label>
    <input id="nome" name="nome" type="text" placeholder="Ex: Alaric, o Bravo" />
  </div>

  <div class="field">
    <label for="nascimento">Nascimento</label>
    <input id="nascimento" name="nascimento" type="date" />
  </div>

  <div class="section-title">Atributos</div>

  <div class="field">
    <label for="forca">Força</label>
    <select id="forca" name="forca">
      {#each opcoes as n}
        <option value={n}>{n}</option>
      {/each}
    </select>
  </div>

  <div class="field">
    <label for="inteligencia">Inteligência</label>
    <select id="inteligencia" name="inteligencia">
      {#each opcoes as n}
        <option value={n}>{n}</option>
      {/each}
    </select>
  </div>

  <div class="field">
    <label for="destreza">Destreza</label>
    <select id="destreza" name="destreza">
      {#each opcoes as n}
        <option value={n}>{n}</option>
      {/each}
    </select>
  </div>

  <div class="field">
    <label for="customRange4">Força Bruta (Escala 0–100)</label>
    <input
      type="range"
      name="forcaPercentual"
      min="0"
      max="100"
      bind:value={rangeValue}
      id="customRange4"
    />
    <output>{rangeValue}</output>
  </div>

  <div class="section-title">Conhecimentos</div>

  <div class="checkbox-group">
    <input type="checkbox" name="magia" id="magia" />
    <label for="magia">Conhecimento de Magia</label>
  </div>

  <div class="checkbox-group">
    <input type="checkbox" name="ferramentas" id="ferramentas" />
    <label for="ferramentas">Ferramentas de Artesão</label>
  </div>

  <div class="section-title">Ordens</div>

  <button formaction="?/guerreiros">Inscrever na Ordem dos Guerreiros</button>
  <button formaction="?/magos">Inscrever no Círculo dos Magos</button>
  <button formaction="?/artesaos">Inscrever na Guilda dos Artesãos</button>

  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}
</form>
