var productArray = ['productImages/air.png','productImages/can.png','productImages/cannedMusic.png','productImages/canOfErasers.png','productImages/canOfGlue.png','productImages/canOfPaper.png','productImages/halfTable.png','productImages/paperclip.png','productImages/bucketOfBatteries.png','productImages/doorknob.png','productImages/lightbulb.png','productImages/tree.png','productImages/bikeWheel.png','productImages/spork.png','productImages/seashell.png','productImages/mug.png','productImages/garbage.png','productImages/crayon.png','productImages/clock.png','productImages/mailbox.png','productImages/box.png']
var productName = ['Air','Can','Canned Music','Can of Erasers','Can of Glue','Can of Paper','1/2 Table','The Paperclip','Batteries','Doorknob','Lightbulb','A Tree','Bike Wheel','Spork','Seashell','Coffee Mug','Garbage Can','Blue Crayon','3:07:03 Clock','Mailbox','Empty Box']
var productPrice = ['$79.99','$19.99','$5.99','$29.99','$12.99','$34.99','$199.99','$899.99','$49.99','$24.99','$6.99','$16.99','$32.99','$0.99','$3.99','$5.99','$24.99','$4.99','$23.99','$33.99','$12.99']
var productDescription = ["Buy this can of air to enjoy fresh air on the go!  Contains 100% fresh air.","Buy this empty can to store anything you want!  You can store food, more cans, water, and more!  Made with 1% recycled aluminum.","Tired of listening to the same old music?  Buy music in a can to listen to music from anywhere!","Always running out of erasers whenver you need to write an essay?  Buy this can of 1,000 mini erasers to ensure you never run out!","Can of Glue is perfect for crafts and repairs.  Great for fixing broken lamps and cans.","Don't want to carry around binders full of paper anymore?  Buy Can of Paper to keep all of the paper you need in one can!  Holds up to half a sheet of computer paper and must be folded 20 times before using.","Did you break a corner off of your table but don't want to replace the entire table?  Buy this half table replacement today!  We cut a regular sized table in half so you don't have to.  It's also half the price of a full-sized table!","Do you need just one paperclip and not a box of 100?  The Paperclip is the best paperclip in the world.  Made with the melted metal of other paperclips, buy this rare paperclip to keep all of your papers organized!","Are you always running out of batteries?  Are small packages of batteries never enough?  Buy a gallon of batteries today!  They come in a large bucket with over 10,000 mini batteries.  Each battery will last for up to one hour!","This doorknob can be attached to any door.  Made with 99% plastic, it's the perfect replacement for any broken doorknob.  Warning, this doorknob does not work.","This lightbulb is perfect for lighting up rooms anywhere.  Just place the lightbulb in any lamp and turn it on to use it!  Does not work in the dark.","Buy this tree to plant in your yard or on the sidewalk.  Growing up to 12 feet tall, this tree looses its leaves in the fall and grows new ones in the spring.","This bike wheel is a perfect replacement wheel for any bike missing a wheel!  It works with almost any bike and spins twice as fast!  Note, bike wheel is only 1 inch in diameter.","The spork is a perfect blend of the benefits of a fork and spoon.  Use this spork to drink soup or to eat a meal.  This spork is washable and can be taken anywhere.","This seashell was collected from a beach.","Buy this coffee mug as the perfect gift for anyone!  It doesn't have to hold coffee.  It can also hold soup, erasers, and pencils!  It's the perfect gift!","Garbage can is perfect for holding garbage!  It's 5 feet tall and made with 100% recycled metal.  It can also be used to hold other things like erasers.","Includes one blue crayon.","This clock tells the correct time twice a day!  If you want it to tell the correct time at all times of the day, please purchase the bucket of batteries sold separately and change the batteries every hour.","This mailbox is the world's first mailbox that allows you to receive both real letters and digital e-mails!","This is just an empty box.  Buy this today and we'll ship this empty box inside of another empty box."]
var reviews = ["This was the WORST purchase I've ever made.  I order three of these from this site and they all came in empty boxes!","Best purchase I've ever made!  This is my favorite product!  I will buy this again!","It's alright.  It works exactly as advertised and the price is very reasonable.","WORST PRODUCT EVER.  I ASKED FOR A REFUND AND THEY REFUSED TO LISTEN TO ME.  WHEN I GOT IT IT WAS BROKEN ALREADY!","It's a great product.  It's very well made and is sold for a great price.  I would buy this again.","The product seems like it was poorly made.","I bought this by accident. :(","I think this is a fantastic product!  I want to buy another!"]
var usernames = ["pencil","bucket_of_batteries_fan","emptybox","apple","thePaperclipFan","earth","thisIsMyUsername","myUsername","theUsername"]

var params = new URLSearchParams(location.search);
var product = params.get('val');

document.getElementById("prodImgDisplay").src = productArray[product];
document.getElementById("productName").innerHTML = productName[product];
document.getElementById("productPrice").innerHTML = productPrice[product];
document.getElementById("productDescription").innerHTML = productDescription[product];

// https://stackoverflow.com/questions/17094230/how-do-i-loop-through-children-objects-in-javascript
var reviewListChildren = document.getElementById("reviewList").children;
var usedNums = [];

for (var i = 0; i < reviewListChildren.length; i++) {
    var childElement = reviewListChildren[i];

    for (;;) {
        var num = Math.floor(Math.random() * reviews.length);
        if (!usedNums.includes(num)){
            usedNums.push(num)
            childElement.querySelector(".reviewDescription").innerHTML = reviews[num];
            childElement.querySelector(".username").innerHTML = usernames[num];
            break;
        }
    }

    childElement.style.animation = "fadeIn 5s";
}

// https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
function saveItem() {
    document.getElementById("addItemCart").style.animation = "addToCart 2s alternate-reverse";

    if (localStorage.getItem("shoppingCart") == null) {
        var shoppingCart = [];
        shoppingCart.push(product);
        console.log(shoppingCart);
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
    } else {
        var shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
        shoppingCart.push(product);
        console.log(shoppingCart);
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
    }
}