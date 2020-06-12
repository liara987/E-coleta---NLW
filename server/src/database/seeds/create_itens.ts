import Knex from "knex";

export async function seed(knex: Knex) {
    await knex('items').insert([
        { titulo: 'Lampada', image: 'lampadas.svg' },
        { titulo: 'Pilhas e Baterias', image: 'baterias.svg' },
        { titulo: 'Papeis e Papelão', image: 'papeis-papelao.svg' },
        { titulo: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { titulo: 'Óleo de Cozinha', image: 'oleo.svg' },
        { titulo: 'Resíduos Eletronicos', image: 'eletronicos.svg' },
    ]);
}