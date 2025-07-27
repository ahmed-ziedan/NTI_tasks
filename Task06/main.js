let allProducts = [];

let form = document.getElementById("mainForm");
let table = document.getElementById("tableBody");

form.addEventListener("submit", function fun(event) {
  event.preventDefault();

  var theName = document.getElementById("name").value;
  //console.log(theName);
  var thePrice = document.getElementById("price").value;
  var theDesc = document.getElementById("description").value;
  var theCategory = document.getElementById("category").value;
  var isAvailable = document.getElementById("availability").checked;

  let newProduct = {
    name: theName,
    price: thePrice,
    desc: theDesc,
    cate: theCategory,
    available: isAvailable,
  };

  allProducts.unshift(newProduct);

  displayItemsToTable();
  form.reset();
});

// table function
function displayItemsToTable() {
  table.innerHTML = "";
  allProducts.forEach((newProduct, index) => {
    let newElment = document.createElement("tr");
    const availabilityText = newProduct.available
      ? "Available"
      : "Not Available";
    newElment.innerHTML = `
  <td>${newProduct.name}</td>
  <td>${newProduct.price}</td>
  <td>${newProduct.desc}</td>
  <td>${newProduct.cate}</td>
   <td><span>${availabilityText}</span></td> 
        <td><button id="delBtn" onclick="delFun(${index})">DELETE</button></td>
  
  `;
    table.appendChild(newElment);
    console.log(allProducts);
  });
}

function delFun(index) {
  let sure = confirm(
    `Are you sure you want to delete ${allProducts[index].name}?`
  );
  if (sure) {
    allProducts.splice(index, 1);

    displayItemsToTable();
  }
}
