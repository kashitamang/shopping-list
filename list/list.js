import { checkAuth, logout, fetchListItems, togglePurchased } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const shoppingListElem = document.getElementById('shopping-list');
const error = document.getElementById('error');
//console.log(shoppingListElem);

async function displayListItems() {
    shoppingListElem.textContent = '';
    const data = await fetchListItems();
    if (data) {
        for (let item of data) {
            const listElem = renderItem(item);
            listElem.addEventListener('click', async (e) => {
                e.preventDefault();
                await togglePurchased(item);
                displayListItems();
            });
            shoppingListElem.append(listElem);
        }
    } else {
        error.textContent = 'uh oh...somethings not right';
    }
}

displayListItems();