"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// ===================== store =======================
let products = [
  {
    name: "Critical Whey Protein 2kg, Applied Nutrition Fraise",
    brand: "Applied Nutrition",
    price: 849.0,
    description:
      "Support muscle development and maintenance¹ with a formula that delivers a delicious taste and mixes instantly. Packed with high levels of protein and BCAAs, it's designed to fuel your performance. Trusted by athletes, this product is tested by Informed-Sport and certified Halal, ensuring both quality and compliance.¹Proteins contribute to the growth and maintenance of muscle mass.",
    image: "assets/images/PRODUCT/Nutrition-Fraise.jpg",
  },
  {
    name: "Critical Whey Protein 2kg, Applied Nutrition Chocolat",
    brand: "Applied Nutrition",
    price: 849.0,
    description:
      "Designed to help develop and maintain muscle mass¹, this product offers a delicious taste and mixes instantly. It delivers high levels of protein and BCAAs to support your performance. Tested for athletes by Informed-Sport and Halal-certified, it ensures premium quality and safe consumption.",
    image: "assets/images/PRODUCT/Nutrition-Chocolat.jpg",
  },
  {
    name: "Critical Whey Protein 2kg, Applied Nutrition Vanille",
    brand: "Applied Nutrition",
    price: 849.0,
    description:
      "Designed to help develop and maintain muscle mass¹, this product offers a delicious taste and mixes instantly. It delivers high levels of protein and BCAAs to support your performance. Tested for athletes by Informed-Sport and Halal-certified, it ensures premium quality and safe consumption.",
    image: "assets/images/PRODUCT/Nutrition-Vanille.jpg",
  },
  {
    name: "Critical Whey Protein 2kg, Applied Nutrition Cheescake",
    brand: "Applied Nutrition",
    price: 849.0,
    description:
      "Designed to help develop and maintain muscle mass¹, this product offers a delicious taste and mixes instantly. It delivers high levels of protein and BCAAs to support your performance. Tested for athletes by Informed-Sport and Halal-certified, it ensures premium quality and safe consumption.",
    image: "assets/images/PRODUCT/Nutrition-Cheescake.jpg",
  },
  {
    name: "Applied Nutrition, ISO XP, Isolat de Protéine Pure 1,8kg Chocolat Dessert",
    brand: "Applied Nutrition",
    price: 849.0,
    description:
      "ISO-XP is a high-quality whey protein isolate with 90% protein, low sugar, carbs, and fat, and soy-free. Each 1.8 kg pack provides 72 servings, easy to mix with water or skim milk. It’s perfect for quickly boosting daily protein intake, especially after waking up. You can add it to oats, cereals, or use it in baking for extra protein. Made from milk of European grass-fed cows.",
    image: "assets/images/PRODUCT/Chocolat-Dessert.jpg",
  },
  // {
  //   name: "Applied Nutrition, ABE, ALL BLACK EVERYTHING Booster, Pre-workout, 30 doses Fruit Punch",
  //   brand: "Applied Nutrition",
  //   price: 450.0,
  //   description:
  //     "ABE – Applied Nutrition est un pré-entraînement extrêmement puissant qui vous procurera une énergie maximale ainsi qu’une congestion musculaire exceptionnelle. ABE augmente instantanément et de manière significative la force et la puissance musculaire. De plus, il favorisera une concentration extrême pour rester pleinement concentré lors de vos séances d’entraînement. Attention, il est crucial de ne jamais dépasser la dose recommandée de 10,5g.",
  //   image: "assets/images/PRODUCT/Fruit-Punch.jpg",
  // },
  
  {
    name: "Applied Nutrition, CRITICAL MASS PROFESSIONAL, Gainer de Qualité, Bananeet6 kg",
    brand: "Applied Nutrition",
    price: 899.0,
    description:
      "Critical Mass ™ est tout simplement le supplément de gain de masse préféré et fiable du Royaume-Uni. Il utilise des ingrédients de la plus haute qualité, qui ont tous été soigneusement sélectionnés pour leur capacité à fournir des GAINS DE MASSE MAIGRE de qualité vous permettant d’accumuler les calories pour votre compte quotidien. Notre formulation de masse maigre contient 42 g de protéines à digestion rapide et lente par portion, y compris l’isolat de protéines de lactosérum ISO-XP™.",
    image: "assets/images/PRODUCT/Bananeet6-kg.jpg",
  },
  {
    name: "Applied Nutrition ORIGINAL FORMULA CRITICAL MASS 6KG Chocolat",
    brand: "Applied Nutrition",
    price: 850.0,
    description:
      "ISO-XP whey protein isolate supports muscle growth and maintenance, helps boost intense performance, and enhances recovery from fatigue. It contains 90% protein, is low in sugar, carbs, and fat, and is soy-free. Easy to mix with water or skim milk, ISO-XP is perfect for quickly increasing your daily protein intake, especially after waking up. You can also add it to cereals or use it in baking. Made from milk of European grass-fed cows.",
    image: "assets/images/PRODUCT/MASS-6KG-Chocolat.jpg",
  },
  {
    name: "Applied Nutrition ORIGINAL FORMULA CRITICAL MASS 6KG Cookies And Cream",
    brand: "Applied Nutrition",
    price: 850.0,
    description:
      "ISO-XP whey protein isolate supports muscle growth and maintenance, helps boost intense performance, and enhances recovery from fatigue. It contains 90% protein, is low in sugar, carbs, and fat, and is soy-free. Easy to mix with water or skim milk, ISO-XP is perfect for quickly increasing your daily protein intake, especially after waking up. You can also add it to cereals or use it in baking. Made from milk of European grass-fed cows.",
    image: "assets/images/PRODUCT/MASS-6KG-Cookies-And-Cream.jpg",
  },
  {
    name: "Applied Nutrition, ABE, ALL BLACK EVERYTHING Booster, Pre-workout, 30 doses Bubble Gum",
    brand: "Applied Nutrition",
    price: 450.0,
    description:
      "ABE – Applied Nutrition est un pré-entraînement extrêmement puissant qui vous procurera une énergie maximale ainsi qu’une congestion musculaire exceptionnelle. ABE augmente instantanément et de manière significative la force et la puissance musculaire. De plus, il favorisera une concentration extrême pour rester pleinement concentré lors de vos séances d’entraînement. Attention, il est crucial de ne jamais dépasser la dose recommandée de 10,5g.",
    image: "assets/images/PRODUCT/Bubble-Gum.jpg",
  },
  {
    name: "Wawan Nutrition, Pre-Workout, Camel, 600g, Tang Mango",
    brand: "Applied Nutrition",
    price: 449.0,
    description: "Wawan Camel est un PRE-WORKOUT complet à base d’ingrédients optimisés, adapté aux végétariens et approuvé Halal,",
    image: "assets/images/PRODUCT/Tang-Mango.jpg",
  },
  {
    name: "GAT SPORT, NITRAFLEX, PRE WORKOUT 30 SERVINGS, WATERMELON",
    brand: "Applied Nutrition",
    price: 449.0,
    description:
      "Maximize your workouts with Nitraflex by GAT Sport — an ultra-intense pre-workout formula. It boosts muscle pumps and blood flow, increases energy, strength, and endurance, and sharpens mental focus with cognitive enhancers. Nitraflex also supports free testosterone levels while reducing estrogen for optimal muscle gains. Enjoy powerful results and amazing flavor — all with just one dose and no artificial colors.",
    image: "assets/images/PRODUCT/WATERMELON.jpg",
  },
  {
    name: "DIET WHEY PROTEIN 1 KG , APPLIED NUTRITION Strawberry Milkshake",
    brand: "Applied Nutrition",
    price: 480.0,
    description:
      "Diet Whey delivers 20g of protein and over 4g of BCAAs per serving. It includes CLA powder, L-carnitine, and green tea extract to support weight management. With low carbs and sugars, it’s ideal for lean goals. Athlete-tested and Halal-certified for trusted quality.",
    image: "assets/images/PRODUCT/DIET.jpg",
  },
];


let producList = document.getElementById("product-list");

products.forEach((product) => {
  let productItem = `<li class="scrollbar-item">
                <div class="product-card">
                  <img src=${product.image} />
                  <div class="product-info">
                    <div class="product-category">
                      brand: ${product.brand}
                    </div>
                    <div class="product-title">
                      ${product.name}
                    </div>
                    <div class="product-price">${product.price} MAD</div>
                  </div>
                </div>
              </li>`
  
        producList.innerHTML += productItem;
              
});



// JavaScript to handle the modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('productModal');
  const orderForm = document.getElementById('orderForm');
  let currentProduct = null;

  // Make product cards clickable
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
      const productId = this.getAttribute('data-product-id');
      const product = products.find(p => p.id == productId);
      
      if (product) {
        currentProduct = product;
        // Show product info
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductCompany').textContent = product.brand;
        document.getElementById('modalProductDescription').textContent = product.description;
        
        // Reset form and show product view
        orderForm.style.display = 'none';
        document.querySelector('.modal-product-view').style.display = 'flex';
        modal.style.display = 'block';
      }
    });
  });

  // Quantity buttons
  document.querySelector('.quantity-btn.minus').addEventListener('click', function() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
      quantityInput.value--;
    }
  });

  document.querySelector('.quantity-btn.plus').addEventListener('click', function() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value++;
  });

  // Buy button shows form
  document.querySelector('.buy-button').addEventListener('click', function() {
    document.querySelector('.modal-product-view').style.display = 'none';
    orderForm.style.display = 'block';
  });

  // Cancel order button
  document.querySelector('.cancel-order').addEventListener('click', function() {
    orderForm.style.display = 'none';
    document.querySelector('.modal-product-view').style.display = 'flex';
  });

  // Close modal
  document.querySelector('.close-modal').addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  // WhatsApp order form submission
  document.getElementById('whatsappOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const notes = document.getElementById('customerNotes').value.trim();
    const total = currentProduct.price * quantity;

    const whatsappNumber = "212663375051";

    // Format WhatsApp message
    const message =
      `🛒 *New Order Request*%0A%0A` +
      `*Product:* ${currentProduct.name}%0A` +
      `*Brand:* ${currentProduct.brand}%0A` +
      `*Unit Price:* ${currentProduct.price} MAD%0A` +
      `*Quantity:* ${quantity}%0A` +
      `*Total:* ${total} MAD%0A%0A` +
      `*Customer Info*%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Address: ${address}%0A` +
      `Notes: ${notes || 'None'}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    // Close modal
    modal.style.display = 'none';

    // Reset form
    this.reset();
    document.getElementById('quantity').value = 1;
  });

});


let btnsPlan = document.querySelectorAll(".btn-plan");
      btnsPlan.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const cardPlan = event.target.closest(".scrollbar-item");
          const plan = cardPlan.getAttribute("data-plan");
          
          const phoneNumber = "212663375051";
          const message = `HELLO, I would like to subscribe to the ${plan}. Please contact me for further details.`;
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, "_blank");
        });
      });

