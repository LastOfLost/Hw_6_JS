import {createItems, addItemsToContainer} from './utils/data-itemUtils';
import db from './db.json';

const container = document.querySelector('.general-panel');
const data = createItems(db.notebook);
addItemsToContainer(container, data);