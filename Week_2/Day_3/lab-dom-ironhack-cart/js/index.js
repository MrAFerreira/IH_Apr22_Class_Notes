// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  let result = price.innerHTML * quantity.value;

  subtotal.innerHTML = result;

  return result;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  let allProducts = document.getElementsByClassName('product');

  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  let totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = total;

  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(
    'The target in remove is:',
    target.parentNode.parentNode.parentNode
  );

  const rowToRemove = target.parentNode.parentNode;

  const tbody = target.parentNode.parentNode.parentNode;

  tbody.removeChild(rowToRemove);
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector('input[type="text"]');
  let newProductPrice = document.querySelector(
    '.create-product input[type="number"]'
  );

  let fixedPrice = Number(newProductPrice.value).toFixed(2);
  let tbody = document.getElementsByTagName('tbody')[0];

  let newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `<td class="name">
  <span>${newProductName.value}</span>
</td>
<td class="price">$<span>${fixedPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  tbody.appendChild(newProductRow);
  const removeBtn = newProductRow.querySelector('.btn-remove');
  removeBtn.onclick = removeProduct;

  newProductName.value = '';
  newProductPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Gets all remove buttons
  const allRemoveButtons = document.getElementsByClassName('btn-remove');
  //PAsses the function to every button
  for (let i = 0; i < allRemoveButtons.length; i++) {
    allRemoveButtons[i].onclick = removeProduct;
  }

  //Get the create button and pass the function
  const createBtn = document.getElementById('create');
  createBtn.onclick = createProduct;

  //... your code goes here
});
