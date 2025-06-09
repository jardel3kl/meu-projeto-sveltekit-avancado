const posts = [
    { slug: 'um', title: 'Primeiro Post', publish_date: '2025-03-12', content: 'Conteúdo do primeiro post' },
    { slug: 'outro', title: 'Outro Post', publish_date: '2025-03-25', content: 'Conteúdo do outro post' },
    { slug: 'algum', title: 'Mais um Post', publish_date: '2024-11-22', content: 'Conteúdo de mais um post' },
    { slug: 'ainda', title: 'Ainda Outro Post', publish_date: '2024-11-02', content: 'Conteúdo de ainda outro post' }
  ];
  
  export function getAll(){ 
    return posts;
  }
  export function getByYearMonth(ano, mes){
    let resultado=[]
    for(const post of posts){
        if(post.publish_date.substring(0,4)==ano
        && post.publish_date.substring(5,7)==mes)
            resultado.push(post)
    }
   }
  export function getBySlug(slug){
    for(const post of posts)
        if(post.slug == slug)
        return post
   }
 