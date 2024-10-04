document.addEventListener("DOMContentLoaded", (e) => {
  // async function fetchProducts(category = "") {
  //   const spinner = document.getElementById("spinner");
  //   const productContainer = document.getElementById("product-container");

  //   // Show the spinner and clear product container
  //   spinner.style.display = "block";
  //   productContainer.innerHTML = "";

  //   try {
  //     const url = category
  //       ? `https://shopfront-tagname.onrender.com/api/v1/products?category=${category}`
  //       : `https://shopfront-tagname.onrender.com/api/v1/products`;
  //     const response = await fetch(url);
  //     const data = await response.json();

  //     // Clear existing products
  //     productContainer.innerHTML = "";

  //     // Hide the spinner after products are loaded
  //     spinner.style.display = "none";

  //     data.forEach((product) => {
  //       const productCard = document.createElement("div");
  //       productCard.className = "card";

  //       const productImage = document.createElement("img");
  //       productImage.src = product.imageUrl;
  //       productImage.alt = product.name;

  //       const productName = document.createElement("h4");
  //       productName.textContent = product.name;

  //       const productPrice = document.createElement("p");
  //       productPrice.className = "price";
  //       productPrice.textContent = `GHS ${product.price}`;

  //       const buyBtn = document.createElement("button");
  //       buyBtn.className = "buyBtn";
  //       buyBtn.textContent = "Buy Now";

  //       // Add event listener for click event
  //       buyBtn.addEventListener("click", function () {
  //         const userConfirmed = confirm(
  //           "Are you sure you want to confirm your order?"
  //         );

  //         if (userConfirmed) {
  //           alert("Your order has been confirmed!"); // For demo purposes
  //         } else {
  //           alert("Your order has been canceled.");
  //         }
  //       });

  //       productCard.appendChild(productImage);
  //       productCard.appendChild(productName);
  //       productCard.appendChild(productPrice);
  //       productCard.appendChild(buyBtn);

  //       productContainer.appendChild(productCard);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching products:", error);

  //     // Hide the spinner even if there is an error
  //     spinner.style.display = "none";
  //   }
  // }

  // function setupTabs() {
  //   const tabs = document.querySelectorAll(".tab");
  //   tabs.forEach((tab) => {
  //     tab.addEventListener("click", function () {
  //       document.querySelector(".tab.active").classList.remove("active");
  //       this.classList.add("active");
  //       const category = this.getAttribute("data-category");
  //       fetchProducts(category);
  //     });
  //   });
  // }

  // // Initial fetch to load all products
  // fetchProducts();
  // setupTabs();

  // async function fetchProducts(category = "", searchQuery = "") {
  //   const spinner = document.getElementById("spinner");
  //   const productContainer = document.getElementById("product-container");

  //   // Show the spinner and clear product container
  //   spinner.style.display = "block";
  //   productContainer.innerHTML = "";

  //   try {
  //     let url = `https://shopfront-tagname.onrender.com/api/v1/products`;

  //     if (category) {
  //       url += `?category=${category}`;
  //     }

  //     if (searchQuery) {
  //       url += category ? `&search=${searchQuery}` : `?search=${searchQuery}`;
  //     }

  //     const response = await fetch(url);
  //     const data = await response.json();

  //     // Clear existing products
  //     productContainer.innerHTML = "";

  //     // Hide the spinner after products are loaded
  //     spinner.style.display = "none";

  //     data.forEach((product) => {
  //       const productCard = document.createElement("div");
  //       productCard.className = "card";

  //       const productImage = document.createElement("img");
  //       productImage.src = product.imageUrl;
  //       productImage.alt = product.name;

  //       const productName = document.createElement("h4");
  //       productName.textContent = product.name;

  //       const productPrice = document.createElement("p");
  //       productPrice.className = "price";
  //       productPrice.textContent = `GHS ${product.price}`;

  //       const buyBtn = document.createElement("button");
  //       buyBtn.className = "buyBtn";
  //       buyBtn.textContent = "Buy Now";

  //       // Add event listener for click event
  //       buyBtn.addEventListener("click", function () {
  //         const userConfirmed = confirm(
  //           "Are you sure you want to confirm your order?"
  //         );

  //         if (userConfirmed) {
  //           alert("Your order has been confirmed!"); // For demo purposes
  //         } else {
  //           alert("Your order has been canceled.");
  //         }
  //       });

  //       productCard.appendChild(productImage);
  //       productCard.appendChild(productName);
  //       productCard.appendChild(productPrice);
  //       productCard.appendChild(buyBtn);

  //       productContainer.appendChild(productCard);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching products:", error);

  //     // Hide the spinner even if there is an error
  //     spinner.style.display = "none";
  //   }
  // }

  // function setupTabs() {
  //   const tabs = document.querySelectorAll(".tab");
  //   tabs.forEach((tab) => {
  //     tab.addEventListener("click", function () {
  //       document.querySelector(".tab.active").classList.remove("active");
  //       this.classList.add("active");
  //       const category = this.getAttribute("data-category");
  //       fetchProducts(category);
  //     });
  //   });
  // }

  // function setupSearch() {
  //   const searchForm = document.querySelector(".search-container form");
  //   searchForm.addEventListener("submit", function (e) {
  //     e.preventDefault(); // Prevent the form from submitting the traditional way
  //     const searchInput = searchForm.querySelector(
  //       "input[name='search']"
  //     ).value;
  //     fetchProducts("", searchInput); // Fetch products with the search query
  //   });
  // }

  // // Initial fetch to load all products
  // fetchProducts();
  // setupTabs();
  // setupSearch();

  let allProducts = []; // Store all products here
  async function fetchProducts(category = "") {
    const spinner = document.getElementById("spinner");
    const productContainer = document.getElementById("product-container");
    // Show the spinner and clear product container
    spinner.style.display = "block";
    productContainer.innerHTML = "";
    try {
      let url = `https://shopfront-tagname.onrender.com/api/v1/products`;
      if (category) {
        url += `?category=${category}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      // Store all the products fetched
      allProducts = data;
      // Initially display all products
      displayProducts(allProducts);
      // Hide the spinner after products are loaded
      spinner.style.display = "none";
    } catch (error) {
      console.error("Error fetching products:", error);
      spinner.style.display = "none"; // Hide spinner on error
    }
  }
  function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear existing products
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "card";
      const productImage = document.createElement("img");
      productImage.src = product.imageUrl;
      productImage.alt = product.name;
      const productName = document.createElement("h4");
      productName.textContent = product.name;
      const productPrice = document.createElement("p");
      productPrice.className = "price";
      productPrice.textContent = `GHS ${product.price}`;
      const productDescription = document.createElement("p");
      productDescription.className = "description";
      productDescription.textContent = product.description;
      const productCategory = document.createElement("p");
      productCategory.className = "category";
      productCategory.textContent = `Category: ${product.category}`;
      const buyBtn = document.createElement("button");
      buyBtn.className = "buyBtn";
      buyBtn.textContent = "Buy Now";
      buyBtn.addEventListener("click", function () {
        const userConfirmed = confirm(
          "Are you sure you want to confirm your order?"
        );
        if (userConfirmed) {
          alert("Your order has been confirmed!"); // For demo purposes
        } else {
          alert("Your order has been canceled.");
        }
      });
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      // productCard.appendChild(productDescription);
      // productCard.appendChild(productCategory);
      productCard.appendChild(productPrice);
      productCard.appendChild(buyBtn);
      productContainer.appendChild(productCard);
    });
  }
  function setupSearch() {
    const searchForm = document.querySelector(".search-container form");
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission
      const searchInput = searchForm
        .querySelector("input[name='search']")
        .value.toLowerCase();
      // Filter products based on the search input (search in name, description, and category)
      const filteredProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchInput) ||
          product.description.toLowerCase().includes(searchInput) ||
          product.category.toLowerCase().includes(searchInput)
      );
      // Display filtered products
      displayProducts(filteredProducts);
    });
  }
  function setupTabs() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        document.querySelector(".tab.active").classList.remove("active");
        this.classList.add("active");
        const category = this.getAttribute("data-category");
        fetchProducts(category); // Fetch products based on category
      });
    });
  }
  // Initial fetch to load all products
  fetchProducts();
  setupTabs();
  setupSearch();
});
