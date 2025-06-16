import { fail } from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const dados{
            nome: data.get('nome')
            email: data.get('email')
            senha: data.get('senha')
            confirmacaosenha: data.get('confirmacaosenha')
            nascimento: data.get('nascimento')


        }
    }
}