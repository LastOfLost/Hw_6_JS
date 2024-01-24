import createItems from './utils/data-itemUtils/createItems';
import addItemsToContainer from './utils/data-itemUtils/addItemsToContainer';

const container = document.querySelector('.general-panel');
const data = createItems(db.notebook);
addItemsToContainer(container, data);