
function Producto(producto, precio){
    this.producto= producto;
    this.precio= precio;
}

let cart = JSON.parse(localStorage.getItem("Products")) ?? []
let timerInterval
const btnEmptyCart = document.querySelector("#empty-cart")
const btnBuyCart = document.querySelector("#buy-cart")
const lista = document.querySelector("#lista")
const productos = [];

function pushProd(producto, precio){
    productos.push(new Producto(producto, precio))
}
pushProd("Prensa francesa", 11300);
pushProd("Cafetera italiana", 48500);
pushProd("Cafetera chemex", 5400);
pushProd("Café Brasil", 3600);
pushProd("Café Colombia", 4500);
pushProd("Café  Perú", 4200);
pushProd("Pitcher basic", 7500);
pushProd("Tamper madera", 32700);
pushProd("Filtro de tela", 11500);

function showList(i){
    let item = document.createElement("li");
    item.innerHTML = `<span id="span"><strong>${i.producto}</strong> Precio: $${i.precio}</span>`
    lista.append(item)
}
cart.forEach((el)=> {
    showList(el)
});

function addToCart(producto){
    showList(producto)

    const product = {producto: producto.producto, precio: producto.precio}
    cart = [...cart, product]
    localStorage.setItem("Products", JSON.stringify(cart))
}

function listCart(){
    cart.forEach((el)=>{
        el.producto
    })
}
function emptyCart(){
    lista.innerHTML = ''
    cart = []
    localStorage.removeItem("Products")
}
const cartP1 = document.querySelector("#cart-p1");
const cartP2 = document.querySelector("#cart-p2");
const cartP3 = document.querySelector("#cart-p3");
const cartP4 = document.querySelector("#cart-p4");
const cartP5 = document.querySelector("#cart-p5");
const cartP6 = document.querySelector("#cart-p6");
const cartP7 = document.querySelector("#cart-p7");
const cartP8 = document.querySelector("#cart-p8");
const cartP9 = document.querySelector("#cart-p9");

cartP1.addEventListener("click",(e)=>{
    addToCart(productos[0])
})
cartP2.addEventListener("click",(e)=>{
    addToCart(productos[1])
})
cartP3.addEventListener("click",(e)=>{
    addToCart(productos[2])
})
cartP4.addEventListener("click",(e)=>{
    addToCart(productos[3])
})
cartP5.addEventListener("click",(e)=>{
    addToCart(productos[4])
})
cartP6.addEventListener("click",(e)=>{
    addToCart(productos[5])
})
cartP7.addEventListener("click",(e)=>{
    addToCart(productos[6])
})
cartP8.addEventListener("click",(e)=>{
    addToCart(productos[7])
})
cartP9.addEventListener("click",(e)=>{
    addToCart(productos[8])
})
btnEmptyCart.addEventListener("click",(e)=>{
    emptyCart()
})
btnBuyCart.addEventListener("click",(e=>{
    console.log(cart)
    const total = cart.reduce((acc, el) => acc + el.precio,0)
    Swal.fire({
        title: "¿Confirmar la compra?",
        text: `El monto total de la compra es de $${total}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Comprar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            emptyCart()
            Swal.fire({
            title: `¡Gracias por su compra!`,
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            }
            });
        }
    });
}))