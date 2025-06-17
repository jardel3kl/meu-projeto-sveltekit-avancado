import{fail, redirect} from '@sveltejs/kit;';


export const actions = {

  guerreiros: async ({ request }) => {
    const data = await request.formData();
    const nascimento = (data.get('nascimento'));
    const forca = Number(data.get('forca'));

    if (forca < 7)  return fail (400,{error: 'precisa treinar mais!'})

    const atual = new Date, aniversario = new Date(nascimento)
    const idade = atual - aniversario;
    if (idade < 5679933600000) return fail(400, { error: 'Precisa de ao menos 18 anos' });
    redirect(303, '07/irmandade/guerreiros');
    },

magos: async ({request}) => {},
artesaos: async ({request}) => {},
  };
