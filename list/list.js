import { checkAuth, logout, fetchListItems, togglePurchased, deleteItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const deleteButton = document.getElementById('delete-button');
const shoppingListElem = document.getElementById('shopping-list');
const error = document.getElementById('error');
const backButton = document.getElementById('back-button');

logoutButton.addEventListener('click', () => {
    logout();
});

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

deleteButton.addEventListener('click', () => {
    window.confirm('are you sure you want to delete your whole list?');
    if (confirm) {
        deleteItems();
        displayListItems();
    } else 
        displayListItems();
});

// console.log(backButton);
backButton.addEventListener('click', () => {
    window.location.href = '../create/index.html';
});
