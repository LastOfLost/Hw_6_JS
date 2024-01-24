
export default function addItemsToContainer(container, items){
    if(container === null) return;
    if(items == null || !Array.isArray(items) || items.length === 0) return;

    items.forEach(item => container.insertAdjacentHTML("beforeend",item));
}