<script>
    let { data } = $props();
  </script>
  
  <h3>Postagens de {data.mes}/{data.ano}</h3>
  
  {#each data.posts as post}
    <p><a href="/03/posts/{post.slug}">{post.title}</a></p>
  {:else}
    <p>Nenhuma postagem nesse mês!</p>
  {/each}