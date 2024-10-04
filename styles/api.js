document.addEventListener("DOMContentLoaded", (e) => {
  async function fetchProducts() {
    try {
      const response = await fetch(
        "https://shopfront-tagname.onrender.com/api/v1/products"
      );
      const data = await response.json();
      const productList = document.getElementById("product");
      data.forEach((product) => {
        // Create a card for each product
        // const card = document.createElement("div");
        // card.className = "card";

        // Add product image
        const img = document.getElementById("productImg");
        img.src = product.imageUrl;
        // card.appendChild(img);

        // Add product name
        const name = document.getElementById("productName");
        name.textContent = product.name;
        // card.appendChild(name);

        // Add product description
        // const description = document.createElement("p");
        // description.textContent = product.description;
        // card.appendChild(description);

        // Add product price
        const price = document.getElementById("productPrice");
        price.textContent = `Price: $${product.price}`;
        // card.appendChild(price);

        // Append the card to the product list
        // productList.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchProducts();
  console.log("Hello");
});
