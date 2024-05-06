window.addEventListener('DOMContentLoaded', ()=>{
const shopBtn = document.querySelector('.shopBtn')
const cartBtn = document.querySelector('.cartBtn')
const itemContainer = document.querySelector('')
const shopSec = document.querySelector('.shop')
const cartSec = document.querySelector('.cart')

shopBtn.addEventListener('click', ()=>{
    cartSec.style.display="none"
    shopBtn.style.display="block"
})

shopBtn.addEventListener('click', ()=>{
    shopSec.style.display="none"
    cartSec.style.display="block"
})

fetch('http://localhost:5000/Flower-Store/myserver.php', {
    method: 'GET',
    header:{
        'Content-Type':'applicatio/json',
        'Accept':'application/json'
    }
}).then(res=>res.json())
.then(data => {
    data.forEach(product=>{
        const div = document.createElement('div')
        div.classList.add('item')
        div.setAttribute('item-id', product.id)
        div.innerHTML = `
        <img src="./images/${product.image}">
        <h3>${product.title}</h3>
        <span class="price">$${product.price/100}/kg</span>
        <button class="btn add-btn">Add To Cart</button
        `
        itemContainer.appendChild(div)
    })
})
})



export default Script;