console.log('Hello Cybersoft');

var arrProduct = [
  {
    id: 1,
    name: "iphone X",
    price: 1000,
    img: "https://picsum.photos/id/1/200/200",
  },
  {
    id: 2,
    name: "iphone Xs",
    price: 2000,
    img: "https://picsum.photos/id/2/200/200",
  },
  {
    id: 3,
    name: "iphone Xs10",
    price: 3000,
    img: "https://picsum.photos/id/3/200/200",
  },
];

function renderProduct() {
    console.log('Mình mới vừa viết hàm này - dev A');
    var content = '';
    for (var i = 0; i < arrProduct.length; i++){
        let product = arrProduct[i];
        content +=
            `<div class="col-4 mt-2">
                <div class="card">
                    <img src="${product.img}"/>
                    <div class="card-body">
                        <p>${product.price}</p>
                        <button>Mua hàng</button>
                    </div>
                </div>
            </div>
            `
    }

    document.querySelector('#arrProduct').innerHTML = content;
}

renderProduct();