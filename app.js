

console.log(12*6)
const counter = document.querySelector(".counter");
const cart = [];
const buttons = document.querySelectorAll(".btn_2");

buttons.forEach(button=>{
    button.addEventListener("click", (e)=>{
        
        const el = e.target
        const name = el.parentElement.children[0].innerText;
        const price = el.parentElement.children[1].innerText;
        const image= el.parentElement.parentElement.children[0].src;

        const cartItem = {
            name,
            price:parseInt(price.substring(5)),
            image
        }

        if(el.innerText=="Shop Now"){
            cart.push(cartItem)
            el.innerText = "Already added";
            el.style.backgroundColor = "gray";
            counter.innerText = cart.length;

        }

        

        console.log(e.target.parentElement.children[3])
    })
})
