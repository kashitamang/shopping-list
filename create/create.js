import { createListItem } from '../fetch-utils.js';

const form = document.querySelector('.item-form');
const error = document.getElementById('error');

//console.log(error);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(form);
    const data = await createListItem(itemData.get('item'), itemData.get('quantity'));
    console.log(data);
    if (data) {
        window.location.href = '/list/index.html';
    } else {
        error.textContent = 'uh oh...somethings not right';
    }
});