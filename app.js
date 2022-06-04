



const firebaseConfig = {
  apiKey: "AIzaSyAxROl4p9WpYKnNWWQXbTWerT-ZkI39xWA",
  authDomain: "irsa-41b7b.firebaseapp.com",
  databaseURL: "https://irsa-41b7b-default-rtdb.firebaseio.com",
  projectId: "irsa-41b7b",
  storageBucket: "irsa-41b7b.appspot.com",
  messagingSenderId: "950656548104",
  appId: "1:950656548104:web:8469e2335e6062b71080bd",
  measurementId: "G-E032ZQCLNP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = google.getAnalytics(app);


// Data Push in Database

var databaseref = app.database().ref('/').child('products')

//   databaseref.push([
//       { title : "STEP BY STEP NAMAZ",
//      imgsrc : "./Images/IRSA WEBSITE/STEP BY STEP NAMAZ/step_720_720.png",
//     price : "500",
//     shortdes : "Do you want to teach your child how to offer prayers, step by step? With these cards, you can teach them in an engaging and in detail way all the steps of Namaz. ",
//     longdes : "Do you want to teach your child how to offer prayers, step by step? With these cards, you can teach them in an engaging and in detail way all the steps of Namaz. This bundle of 30 cards contains 4 categories of cards: 1. Learn and correct your wudu 2. Step by step Namaz for boys OR Step by step Namaz for girls 3. 5 Prayer Timings  4. Dua cards On each card, there is a picture on the front showing a step which ll make it easy for visual learners and a complete description on the back.  You can also play sequencing game with these cards that ll be a fun and easy way for your kids to learn step by step Namaz.  There are four extra cards for all the supplications and the Quranic verses recite during Namaz. These cards are hard laminated to ensure long term durability. These can be a best gift for the kids around you. "} ,
//     {
//       title : "WUDU POSTER",
//     imgsrc : "./Images/IRSA WEBSITE/WUDU POSTER/wudu_720_720.png",
//     price : "100",
//     shortdes : "These posters show the steps in performing wudu. ",
//     longdes : "These posters show the steps in performing wudu. The colourful illustrations make it fun and exciting for children as they practise the steps in wudu, while referring to the poster as a reminder. There are two variants available each for a girl and a boy in a pink and a purple color respectively. The WUDU POSTER is laminated so it is durable and waterproof as well. It comes with a adhesive tape on the back so you may stick it to the wall easily. "},

//     {
//       title : "NAMAZ TRACKER",
//  imgsrc : "./Images/IRSA WEBSITE/NAMAZ TRACKER/tracker_720_720.png",
//       price : "150",
//       shortdes : "Encourage your child to pray the five daily Namaz regularly through our simple Namaz Tracker. ",
//       longdes : "Encourage your child to pray the five daily Namaz regularly through our simple Namaz Tracker. This tracker is designed for one week. Promise a reward to your child every week when they complete the tracker. It's great for motivating kids to perform their namaz at the teaching stage. A helpful resource for parents, home schoolers and teachers. Our Namaz tracker is laminated so it is durable, reusable and suitable to use with dry erase markers. It comes with an adhesive tape on the back so you may stick it to the wall easily. It comes with a complementary dry erase marker."},

//       {
//         title : "MY NAMAZ BOX",
// imgsrc : "./Images/IRSA WEBSITE/MY NAMAZ BOX/Namaz_720_720.png",
//         price : "2000",
//         shortdes : "Do you want to introduce your child to pray five times daily? Make it interesting for them. Give them our 'My Namaz Box'. " ,
//         longdes : "Do you want to introduce your child to pray five times daily? Make it interesting for them.Give them our 'My Namaz Box'. 'My Namaz box' is designed to be fun, engaging and interactive with a scope of learning. What's in the box?1. Namaz Flash Cards (set of 15) (Hard laminated) with a pouch2. Wudu poster (hard laminated, waterproof and can be stick on wall)3. Namaz Tracker with a dry erase marker (Rewritable and can be stick on wall)4. Tasbeeh Making kit 5. Jigsaw Puzzle Set (20 pieces) 6. 3D Masjid Template (Make and color your own 3D Masjid Model) 7. Kibla Marker and other coloring sheets Complementary Islamic stickers and bookmark."},

// {
//     title : "DUA REMINDERS",
// imgsrc : "./Images/IRSA WEBSITE/DUA REMINDER/dua_720_720.jpg",
//     price : "800",
//     shortdes : "Do you want your kids to remember Allah before and after the regular things in their life like eating, sleeping and entering home? " ,
//     longdes : "Do you want your kids to remember Allah before and after the regular things in their life like eating, sleeping and entering home? You'll need a set of timely reminders at the right place, which will remind them an appropriate duas to say at the right time. That's what our Dua Reminders do. It is a set of six large cards that you may place at the most common and repeated places you visit in your home. Cards have narrow portrait design so it can be fit on the any wall of the home. The size of the Arabic text is big enough to read from the distance. English translations are also included so that they may know what they are saying. Beautiful Eye-catching illustration will capture your kid’s attention at the right time and place. The set of six display cards are designed to be placed at key locations in your: Bedroom (Sleeping & Waking Up) Kitchen (Before & After Eating) Front Door (Entering & Leaving Home) Window (Morning & Evening)  Cupboard (Getting Dressed)  Toilet (Enter and Exit) Each card measured 11.7 inches tall and is waterproof, hard laminated comes with the adhesive on the back."},


// {
//   title : "ISLAMIC ABC FLASHCARDS",
//      imgsrc : "./Images/IRSA WEBSITE/ISLAMIC ABC FLASHCARDS/ABC_720_720.png",
//   price : "900",
//   shortdes : "Teach your toddlers ABC through our Islamic ABC Flashcards in an Islamic way. This will increase their Islamic vocabulary and knowledge about Islamic concepts." ,
//   longdes : "Teach your toddlers ABC through our Islamic ABC Flashcards in an Islamic way. This will increase their Islamic vocabulary and knowledge about Islamic concepts.These cards are hard laminated to ensure long term durability. These can be a best gift for your kids as well as kids around you. "},



// {
//   title : "ISLAMIC JIGSAW PUZZLES",
// imgsrc : "./Images/IRSA WEBSITE/JIGSAW PUZZLES/jigsaw_720_720.png",
//   price : "600",
//   shortdes : "Do you know Jigsaw puzzles make your entire brain work? " ,
//   longdes : "Do you know Jigsaw puzzles make your entire brain work? Proudly introducing our own Made in Pakistan, high quality ISLAMIC JIGSAW PUZZLE SERIES. <br /> 3 designs are available: 1. Allah created everything 2. Pillars of Islam. 3. Pillars of Hajj/Steps of Hajj Exquisite box & Islamic educational game set is an ideal gift for Muslim Children.  This floor puzzle consists of well-made thick and large cardboard pieces that prevents bending, wear & tear and size is good for little hands.  The small Storage box is easy to carry and to take with you for puzzle time away from home.  Finished puzzle size: 11.7' x 16.5 No. Of pieces: 20Box size 5 × 5 × 3 inches." },

// {
//   title : "MY RAMADAN TREASURE",
// imgsrc : "./Images/IRSA WEBSITE/MY RAMADAN TREASURE/ramazan_720_720.png",
//   price : "1500",
//   shortdes : "My Ramadan Treasure is a Ramadan journal and activity book, specially designed for our little Muslims to record their Ramadan Journey, in a fun and exciting way along with activities which will enhance their learning about this holy month. " ,
//   longdes : "My Ramadan Treasure is a Ramadan journal and activity book, specially designed for our little Muslims to record their Ramadan Journey, in a fun and exciting way along with activities which will enhance their learning about this holy month. The journal in this book will help your child to track their daily progress and keep their interest alive throughout the month. The activities in this book are infused with Ramadan so they can learn with fun.  This book is designed for the ages 6 to 12. However, every child is different and this just a recommended age range. Book contains: Tons of knowledge Interactive Activities Ramadan Tracking Journal Cut-outs for puzzles, Ramadan banners and Eid card Sticker Sheets 7 Posters And a lot to treasure. Format: Paperback Pages: 90. " }
// ])

var productdiv = document.getElementById("productdiv")
var buynowmodal = document.getElementById('buynowmodal')
var addtocartmodal = document.getElementById('addtocartmodal')
var topmaincontainer = document.getElementById('topmaincontainer')
var cartcounter = document.getElementById('cartcounter')
var addtocarcounter = 0

databaseref.once('value', function (snapshot) {
  snapshot.forEach((childsnapshot) => {
    childData = childsnapshot.val()





    // create cart item
    for (var i = 0; i < childData.length; i++) {
      var linebr = document.createElement('br')

      var topdiv = document.createElement('div')
      topdiv.setAttribute('class', 'card carditem')
      topdiv.setAttribute('productid', `${i}`)
      topdiv.setAttribute('style', ' width : 20rem;')
      productdiv.appendChild(topdiv)


      var img = document.createElement('img')
      img.setAttribute('src', childData[i].imgsrc)
      img.setAttribute('class', 'card-img-top')
      topdiv.appendChild(img)

      var cardbodyDiv = document.createElement('div')
      cardbodyDiv.setAttribute('class', 'card-body')
      topdiv.appendChild(cardbodyDiv)


      var h5 = document.createElement('h5')
      h5.setAttribute('class', 'card-title')
      var h5Title = document.createTextNode(childData[i].title)
      h5.appendChild(h5Title)
      cardbodyDiv.appendChild(h5)

      var h6 = document.createElement('h6')
      h6.setAttribute('class', 'card-subtitle mb-2 pricolor')
      var h6Title = document.createTextNode(`Rs. ${childData[i].price}`)
      h6.appendChild(h6Title)
      // h6.appendChild(linebr)
      // h6.appendChild(linebr)
      cardbodyDiv.appendChild(h6)



      var para = document.createElement('p')
      para.setAttribute('class', 'card-text')
      var paraText = document.createTextNode(childData[i].shortdes.substring(0, 70))
      para.appendChild(paraText)
      cardbodyDiv.appendChild(para)

      var btnaddtocart = document.createElement('a')
      btnaddtocart.setAttribute('class', 'btn btn-addtocart')
      btnaddtocart.setAttribute('onclick', 'addtocart(this)')

      var btnaddtocartText = document.createTextNode('Add to Cart')
      btnaddtocart.appendChild(btnaddtocartText)
    
      cardbodyDiv.appendChild(btnaddtocart)

      var btnbuynow = document.createElement('a')
      btnbuynow.setAttribute('class', 'btn btn-buynow')
      btnbuynow.setAttribute('onclick', `buynow(this)`)
      var btnbuynowText = document.createTextNode('Buy Now')
      btnbuynow.appendChild(btnbuynowText)
      cardbodyDiv.appendChild(btnbuynow)





    }








  })
})


function buynow(e) {
  var productID = e.parentElement.parentElement.getAttribute('productid')



  var buynowdiv = document.createElement('div')
  buynowdiv.setAttribute('class', 'container mt-5 mb-5')

  buynowmodal.appendChild(buynowdiv)

  buynowmodal.classList.remove('hidden')
  topmaincontainer.classList.add('blur')

  var buynowdiv2 = document.createElement('div')
  buynowdiv2.setAttribute('class', 'row d-flex justify-content-center')
  buynowdiv.appendChild(buynowdiv2)

  var buynowdiv3 = document.createElement('div')
  buynowdiv3.setAttribute('class', 'col-md-10')
  buynowdiv2.appendChild(buynowdiv3)

  var buynowdiv4 = document.createElement('div')
  buynowdiv4.setAttribute('class', 'card')
  buynowdiv3.appendChild(buynowdiv4)

  var buynowdiv5 = document.createElement('div')
  buynowdiv5.setAttribute('class', 'row')
  buynowdiv4.appendChild(buynowdiv5)

  var buynowdiv6 = document.createElement('div')
  buynowdiv6.setAttribute('class', 'col-md-6')
  buynowdiv5.appendChild(buynowdiv6)

  var buynowdiv7 = document.createElement('div')
  buynowdiv7.setAttribute('class', 'images p-3')
  buynowdiv6.appendChild(buynowdiv7)

  var buynowdiv8 = document.createElement('div')
  buynowdiv8.setAttribute('class', 'text-center p-4')
  buynowdiv7.appendChild(buynowdiv8)

  var buynowdimg = document.createElement('img')
  buynowdimg.setAttribute('id', 'main-image')
  buynowdimg.setAttribute('src', childData[productID].imgsrc)
  buynowdimg.setAttribute('width', '500')
  buynowdiv8.appendChild(buynowdimg)




  var buynowdiv9 = document.createElement('div')
  buynowdiv9.setAttribute('class', 'col-md-6')
  buynowdiv5.appendChild(buynowdiv9)



  var buynowdiv10 = document.createElement('div')
  buynowdiv10.setAttribute('class', 'product p-4')
  buynowdiv9.appendChild(buynowdiv10)

  var buynowdiv11 = document.createElement('div')
  buynowdiv11.setAttribute('class', 'd-flex align-items-center justify-content-end')
  buynowdiv10.appendChild(buynowdiv11)


  var buynowi = document.createElement('i')
  buynowi.setAttribute('class', 'fa fa-times fa-2x')
  buynowi.setAttribute('onclick', 'classhidden(this)')
  buynowdiv11.appendChild(buynowi)

  var buynowspan = document.createElement('span')
  buynowspan.setAttribute('class', 'ml-1')
  buynowdiv11.appendChild(buynowspan)

  var buynowspanText = document.createTextNode('close')
  buynowspan.appendChild(buynowspanText)




  // var buynowi2 = document.createElement('i')
  // buynowi2.setAttribute('class', 'fa fa-shopping-cart text-muted')
  // buynowdiv10.appendChild(buynowi2)


  var buynowdiv12 = document.createElement('div')
  buynowdiv12.setAttribute('class', 'mt-4 mb-3')
  buynowdiv10.appendChild(buynowdiv12)


  var buynowspan2 = document.createElement('span')
  buynowspan2.setAttribute('class', 'text-uppercase text-muted brand')
  buynowdiv12.appendChild(buynowspan2)

  var buynowspanText2 = document.createTextNode('IRSA')
  buynowspan2.appendChild(buynowspanText2)

  var buynowh = document.createElement('h5')
  buynowspan2.setAttribute('class', 'text-uppercase')
  buynowdiv12.appendChild(buynowh)

  var buynowhText = document.createTextNode(e.parentNode.firstChild.innerHTML)
  buynowh.appendChild(buynowhText)


  var buynowdiv13 = document.createElement('div')
  buynowdiv13.setAttribute('class', 'price d-flex flex-row align-items-center')
  buynowdiv12.appendChild(buynowdiv13)

  var buynowspan3 = document.createElement('span')
  buynowspan3.setAttribute('class', 'act-price pricolor')
  buynowdiv13.appendChild(buynowspan3)

  var buynowspanText3 = document.createTextNode(`Rs. ${childData[productID].price}`)
  buynowspan3.appendChild(buynowspanText3)


  var buynowpara = document.createElement('p')
  buynowspan3.setAttribute('class', 'about')
  buynowdiv10.appendChild(buynowpara)

  var buynowparaText = document.createTextNode(childData[productID].longdes)
  buynowpara.appendChild(buynowparaText)



  var buynowdiv14 = document.createElement('div')
  buynowdiv14.setAttribute('class', 'cart mt-4 align-item-center')
  buynowdiv10.appendChild(buynowdiv14)

  var buynowbutton = document.createElement('button')
  buynowbutton.setAttribute('class', 'btn btn-danger text-uppercase mr-2 px-4')
  buynowdiv14.appendChild(buynowbutton)

  var buynowbuttonText = document.createTextNode('Check Out')
  buynowbutton.appendChild(buynowbuttonText)


  console.log(productID)

}

function classhidden() {
  addtocartmodal.classList.add('hidden')
  buynowmodal.classList.add('hidden')
  topmaincontainer.classList.remove('blur')
  buynowmodal.innerHTML = ""

}

function addtocart(e) {
  var productID = e.parentElement.parentElement.getAttribute('productid')
  addtocarcounter++;
  cartcounter.classList.remove('hidden')



  var addtocartdiv = document.createElement('div')
  addtocartdiv.setAttribute('class', 'card rounded-3 mb-4')
  addtocartmodal.appendChild(addtocartdiv)

  // addtocartmodal.classList.remove('hidden')
  // topmaincontainer.classList.add('blur')

  var addtocartdiv2 = document.createElement('div')
  addtocartdiv2.setAttribute('class', 'card-body p-4')
  addtocartdiv.appendChild(addtocartdiv2)

  var addtocartdiv3 = document.createElement('div')
  addtocartdiv3.setAttribute('class', 'row d-flex justify-content-between align-items-center')
  addtocartdiv2.appendChild(addtocartdiv3)

  var addtocartdiv4 = document.createElement('div')
  addtocartdiv4.setAttribute('class', 'col-md-2 col-lg-2 col-xl-2')
  addtocartdiv3.appendChild(addtocartdiv4)

  var addtocartdimg = document.createElement('img')
  addtocartdimg.setAttribute('src', childData[productID].imgsrc)
  addtocartdimg.setAttribute('width', '200px')
  addtocartdiv4.appendChild(addtocartdimg)


  var addtocartdiv9 = document.createElement('div')
  addtocartdiv9.setAttribute('class', 'col-md-3 col-lg-3 col-xl-3')
  addtocartdiv3.appendChild(addtocartdiv9)


  var addtocarth = document.createElement('h5')
  addtocarth.setAttribute('class', 'col-md-3 col-lg-3 col-xl-3')
  addtocartdiv9.appendChild(addtocarth)

  var addtocarthText = document.createTextNode(childData[productID].title )
  addtocarth.appendChild(addtocarthText)

  var addtocartpara = document.createElement('p')
  addtocartpara.setAttribute('class', 'about')
  addtocartdiv9.appendChild(addtocartpara)

  var addtocartparaText = document.createTextNode(childData[productID].shortdes.substring(0 , 40))
  addtocartpara.appendChild(addtocartparaText)






  var addtocartdiv10 = document.createElement('div')
  addtocartdiv10.setAttribute('class', 'col-md-3 col-lg-3 col-xl-2 d-flex')
  addtocartdiv3.appendChild(addtocartdiv10)

  var addtocartdiv11 = document.createElement('div')
  addtocartdiv11.setAttribute('class', 'col-md-3 col-lg-2 col-xl-2 offset-lg-1')
  addtocartdiv10.appendChild(addtocartdiv11)

  // var priceheading = document.createElement('h5')
  // priceheading.setAttribute('class', 'mb-0')
  // addtocartdiv3.appendChild(priceheading)

  // var priceheadingText = document.createTextNode(`Rs. ${childData[productID].price}` )
  // priceheading.appendChild(priceheadingText)

  var deldiv = document.createElement('div')
  deldiv.setAttribute('class' , 'col-md-1 col-lg-1 col-xl-1 text-end')
  addtocartdiv3.appendChild(deldiv)

  var deldiva = document.createElement('a')
  deldiva.setAttribute('class' , 'text-danger')
  deldiv.appendChild(deldiva)


  var addtocarti = document.createElement('i')
  addtocarti.setAttribute('class', 'fas fa-trash fa-lg')
  addtocarti.setAttribute('onclick', 'delitemaddtocart(this)')
  deldiva.appendChild(addtocarti)

  var addtocartspan = document.createElement('span')
  addtocartspan.setAttribute('class', 'ml-1')
  addtocartdiv11.appendChild(addtocartspan)

  var addtocartspanText = document.createTextNode('close')
  addtocartspan.appendChild(addtocartspanText)




  // var addtocarti2 = document.createElement('i')
  // addtocarti2.setAttribute('class', 'fa fa-shopping-cart text-muted')
  // addtocartdiv10.appendChild(addtocarti2)


  var addtocartdiv12 = document.createElement('div')
  addtocartdiv12.setAttribute('class', 'mt-4 mb-3')
  addtocartdiv10.appendChild(addtocartdiv12)


  var addtocartspan2 = document.createElement('span')
  addtocartspan2.setAttribute('class', 'text-uppercase text-muted brand')
  addtocartdiv12.appendChild(addtocartspan2)

  var addtocartspanText2 = document.createTextNode('IRSA')
  addtocartspan2.appendChild(addtocartspanText2)

 


  var addtocartdiv13 = document.createElement('div')
  addtocartdiv13.setAttribute('class', 'price d-flex flex-row align-items-center')
  addtocartdiv12.appendChild(addtocartdiv13)

  var addtocartspan3 = document.createElement('span')
  addtocartspan3.setAttribute('class', 'act-price pricolor')
  addtocartdiv13.appendChild(addtocartspan3)

  var addtocartspanText3 = document.createTextNode(`Rs. ${childData[productID].price}`)
  addtocartspan3.appendChild(addtocartspanText3)


 


  

  cartcounter.innerHTML = addtocarcounter;


  console.log(productID)

}

function cart() {
  
  addtocartmodal.classList.remove('hidden')
  topmaincontainer.classList.add('blur') 

}







/* <div class="card carditem" style="width: 18rem;">
      <img src="./Images/IRSA WEBSITE/DUA REMINDER/dua_720_720.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Dua Reminder</h5>
        <h6 class="card-subtitle mb-2 pricolor">Rs. 2000</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <a href="#" onclick="addtocart(this)" class="btn btn-addtocart">Add to Cart</a>
        <a href="#" onclick="buynow(this)" class="btn btn-buynow">Buy Now</a>
        </div>
    </div> */





var cartTitle = document.querySelectorAll('.cart-title')
var cartmodal = document.getElementById('addtocartmodal')
