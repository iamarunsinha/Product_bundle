document.addEventListener('DOMContentLoaded', function () {
    const chocolates = document.querySelectorAll('.chocolate');
    const selectedList = document.getElementById('selectedList');
    const totalPrice = document.getElementById('totalPrice');

    let selectedChocolates = [];

    chocolates.forEach(chocolate => {
        chocolate.addEventListener('click', function () {
            const name = chocolate.dataset.name;
            const price = parseFloat(chocolate.dataset.price);

            if (selectedChocolates.length < 8) {
                selectedChocolates.push({ name, price });
                updateSelectedList();
                updateTotalPrice();
            }
        });
    });

    function updateSelectedList() {
        selectedList.innerHTML = '';
        selectedChocolates.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'selected-item';
            listItem.innerHTML = `<span>${item.name}</span><span>${item.price.toFixed(2)} Rs</span>`;
            selectedList.appendChild(listItem);
        });
    }

    function updateTotalPrice() {
        const total = selectedChocolates.reduce((acc, item) => acc + item.price, 0);
        totalPrice.textContent = total.toFixed(2);
    }
});