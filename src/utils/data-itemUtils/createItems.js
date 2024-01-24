import createItem from './createItem.js';

export default function createItems(data){

    if(!Array.isArray(data)) return;

    let items = [];

    data.forEach(item => {
        items.push(createItem(item));
    });

    return items;
}
