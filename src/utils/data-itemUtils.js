import template from '../templates/item.hbs';
export function createItem(data){
    const item = document.createElement('div');

    const getData = template(data);

    item.innerHTML = getData;

    return item;
}

export function createItems(data){

    if(!Array.isArray(data)) return;

    let items = [];

    data.forEach(item => {
        items.push(createItem(item));
    });

    return items;
}

export function addItemsToContainer(container, items){
    if(container === null) return;
    if(items == null || !Array.isArray(items) || items.length === 0) return;

    items.forEach(item => container.appendChild(item));
}
