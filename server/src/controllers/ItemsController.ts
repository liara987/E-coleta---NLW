import {Request, Response} from 'express';
import knex from '../database/connection';
class ItemsController{
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
        const serealizedItems = items.map(item => {
            return ({
                id: item.id,
                titulo: item.titulo,
                image_url: `http://10.0.0.107:3333/uploads/${item.image}`,
            });
        })
        return response.json(serealizedItems);
    }
}

export default ItemsController;