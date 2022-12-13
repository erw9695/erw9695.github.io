var productName = ['Air','Can','Canned Music','Can of Erasers','Can of Glue','Can of Paper','1/2 Table','The Paperclip','Batteries','Doorknob','Lightbulb','A Tree','Bike Wheel','Spork','Seashell','Coffee Mug','Garbage Can','Blue Crayon','3:07:03 Clock','Mailbox','Empty Box']
var productPrice = ['$79.99','$19.99','$5.99','$29.99','$12.99','$34.99','$199.99','$899.99','$49.99','$24.99','$6.99','$16.99','$32.99','$0.99','$3.99','$5.99','$24.99','$4.99','$23.99','$33.99','$12.99']

var cart = localStorage.getItem("shoppingCart");
var shoppingCart = JSON.parse(cart);

var listItem = document.getElementById("liItem");

var totalPrice = 0;

for (var i = 0; i < shoppingCart.length; i++) {
    var itemClone = listItem.cloneNode(true)

    totalPrice += parseFloat(productPrice[shoppingCart[i]].substring(1));

    itemClone.id = itemClone.id+i;
    itemClone.querySelector(".itemName").innerHTML = productName[shoppingCart[i]];
    itemClone.querySelector(".itemPrice").innerHTML = productPrice[shoppingCart[i]];
    itemClone.style.display = "block";

    document.getElementById("shoppingCartListItems").appendChild(itemClone);

    itemClone.style.animation = "fadeIn 3s";
}

document.getElementById("subTotal").innerHTML = "Subtotal Price: $" + totalPrice.toFixed(2);
document.getElementById("tax").innerHTML = "Tax: $" + (totalPrice*.08).toFixed(2);
document.getElementById("totalPrice").innerHTML = "Total Price: $" + (totalPrice*1.08).toFixed(2);

listItem.style.display = "none";

function clearCart() {
    if (shoppingCart.length > 0) {
        localStorage.clear();
        var listChildren = document.getElementById("shoppingCartListItems").children;
        for (var i = 0; i < listChildren.length; i++) {
            listChildren[i].style.display = "none";
        }
    }      
}

function purchaseClick() {
    if (shoppingCart.length > 0) {
        localStorage.clear();
        document.getElementById("cartPage").style.animation = "fadeOut 2s";
        document.getElementById("cartPage").addEventListener("animationend",continuePurchaseClick);       
    }
}

function continuePurchaseClick() {
    document.getElementById("bottomBanner").style.display = "none";
    document.getElementById("cartPage").style.display = "none";
    document.getElementById("confirmPurchase").style.animation = "fadeIn 2s";
    document.getElementById("confirmPurchase").style.display = "block";
}