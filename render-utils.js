export function renderItem(item) {
    const div = document.createElement('div');
    div.textContent = `${item.quantity} ${item.name}`;
}