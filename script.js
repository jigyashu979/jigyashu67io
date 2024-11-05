let orderList = [];
let total = 0;

function addToOrder(item, price) {
    orderList.push({ item, price });
    total += price;
    displayOrder();
}

function displayOrder() {
    const orderListElement = document.getElementById('orderList');
    orderListElement.innerHTML = '';

    orderList.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `${order.item} - $${order.price.toFixed(2)}`;
        orderListElement.appendChild(li);
    });

    document.getElementById('totalPrice').textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    if (orderList.length === 0) {
        alert("Your order is empty!");
    } else {
        alert("Thank you for your order!\nTotal: $" + total.toFixed(2));
        orderList = [];
        total = 0;
        displayOrder();
    }
}
