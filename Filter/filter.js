let products = {
    data: [
        {
            productName: "Jordan Stadium 90",
            category:"jordan",
            price:"12795",
            image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/00166372-1221-4ff0-92ee-f8d990044fdf/jordan-stadium-90-shoes-Jn6ZH4.png"
        },
        {
            productName: "Jumpman MVP",
            category:"jordan",
            price:"15295",
            image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba08723a-a8e4-496e-b0f5-66436807076e/jumpman-mvp-shoes-JV1HCs.png"
        },
        {
            productName: "Jumpman MVP",
            category:"jordan",
            price:"15295",
            image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cfe79686-a844-4a29-adb2-4442bf989c3c/jumpman-mvp-shoes-JV1HCs.png"
        },
        {
            productName: "Nike Dunk Low Retro",
            category:"Lifestyle",
            price:"8695",
            image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5ce0216a-3c5c-4518-b3a9-4731dd1de836/dunk-low-retro-shoes-bCzchX.png"
        },
        {
            productName: "Nike Air Force 1'07",
            category:"Lifestyle",
            price:"9695",
            image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71e80796-373d-46fe-a161-088d7a1ca383/air-force-1-07-shoes-VWCc04.png"
        },
        {
            productName: "Nike InfinityRN 4",
            category:"Running",
            price:"14995",
            image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed45ceac-1a49-450c-a71d-3ffedbb376d0/infinityrn-4-road-running-shoes-mLRjcz.png"
        },
        {
            productName: "Nike Ultafly",
            category:"Running",
            price:"21695",
            image :"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a0ec91e-e95c-46bd-967d-8fc92cda9e7b/ultrafly-trail-running-shoes-4DRfrN.png"
        },
        {
            productName: "Nike Mercurial Vapor 15 Elite By You",
            category:"Football",
            price:"24999",
            image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/83ccaa96-74f6-4ece-b7c0-09a96f827894/custom-mercurial-vapor-15-elite-shoes-by-you.png"
        },
        {
            productName: "Nike Mercurial Vapor 9 Elite By You",
            category:"Football",
            price:"26995",
            image :"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/374e452e-6d3b-4647-8e97-f360105b7a48/custom-mercurial-superfly-9-elite-shoes-by-you.png"
        },
    ]
 }
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };