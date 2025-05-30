alert("Welcome To Readers");

document.addEventListener("DOMContentLoaded", function () {
    const bookshelf = document.getElementById("bookshelf");
    const main = document.querySelector("main");
    const header = document.querySelector("header");

    const booksData = [
       
        {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "https://i.postimg.cc/pTjdn4J9/51-V-Bc7-FTa-L.jpg",
            "language": "Danish",
            "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            "pages": 784,
            "title": "Fairy tales",
            "year": 1836,
            "price": 50.66
        },
		 {
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "https://i.postimg.cc/zDgdd83F/81-UZKm-Zu-Hn-L-AC-UF1000-1000-QL80.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Master Pieces",
            "year": 1958,
            "price": 20.99
        },
        {
            "author": "Dante Alighieri",
            "country": "Italy",
            "imageLink": "https://i.postimg.cc/GhRjqDWb/1559296429023.jpg",
            "language": "Italian",
            "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
            "pages": 928,
            "title": "Harry Potter",
            "year": 1315,
            "price": 38.21
        },
        {
            "author": "Unknown",
            "country": "Sumer and Akkadian Empire",
            "imageLink": "https://i.postimg.cc/mDMQSZVc/main-qimg-196508f7dda8c53c07e4a08c423d8be8.webp",
            "language": "Akkadian",
            "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
            "pages": 160,
            "title": "The Knite Runner",
            "year": -1700,
            "price": 45.23
        },

        {
            "author": "Unknown",
            "country": "India Iran Iraq Egypt Tajikistan",
            "imageLink": "https://i.postimg.cc/ncdQBQZR/main-qimg-c505cc303474f7d1688e958b50618638-pjlq.jpg",
            "language": "Arabic",
            "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
            "pages": 288,
            "title": "It Ends With Us",
            "year": 1200,
            "price": 23.55
        },
        {
            "author": "Unknown",
            "country": "Iceland",
            "imageLink": "https://i.postimg.cc/TYPKdYmr/download.jpg",
            "language": "Old Norse",
            "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
            "pages": 384,
            "title": "Nj\u00e1l's Saga",
            "year": 1350,
            "price": 72.26
        },
        {
            "author": "Jane Austen",
            "country": "United Kingdom",
            "imageLink": "https://i.postimg.cc/6p2TZjMq/download-1.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
            "pages": 226,
            "title": "Pride and Prejudice",
            "year": 1813,
            "price": 60.12
        },
        {
            "author": "Honor\u00e9 de Balzac",
            "country": "France",
            "imageLink": "https://i.postimg.cc/43dPZbb2/images-1.jpg",
            "language": "French",
            "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
            "pages": 443,
            "title": "Le P\u00e8re Goriot",
            "year": 1835,
            "price": 99.99
        },
        {
            "author": "Samuel Beckett",
            "country": "Republic of Ireland",
            "imageLink": "https://i.postimg.cc/85vhPyF4/images-3.jpg",
            "language": "French, English",
            "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
            "pages": 256,
            "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
            "year": 1952,
            "price": 76.35
        },
        {
            "author": "Giovanni Boccaccio",
            "country": "Italy",
            "imageLink": "https://i.postimg.cc/PfcB7Nhk/download-2.jpg",
            "language": "Italian",
            "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
            "pages": 1024,
            "title": "The Decameron",
            "year": 1351,
            "price": 35.74
        },
      
    ];
    const colors = ["#701C1C", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6",
        "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D",
        "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A",
        "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
        "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC",
        "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399"];

    let cart = [];
    let totalCost = 0;

    function showBooks() {
        bookshelf.innerHTML = "";
        booksData.forEach((book, index) => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");
            bookElement.innerHTML = `
        <img src="${book.imageLink}" alt="${book.title}">
        <h4>${book.title}</h4>
        <p class="price">Price: $${book.price}</p>
        <div class="details">
          <p>By ${book.author}</p>
          <p>Year:${book.year}</p>
          <p>Language:${book.language}</p>
          <p>Country:${book.country}</p>
          <p>Pages:${book.pages}</p>
          <a href=${book.link}>Link</a>
          <br>
          <br>
          <button class="add-to-cart">Add to Cart</button>
        </div>
        `;
            const style = document.createElement("style");
            style.textContent = `.book:nth-child(${index + 1}):hover .details { background-color: ${colors[index % colors.length]}; }`;
            document.head.appendChild(style);

            const addToCartButton = bookElement.querySelector(".add-to-cart");
            addToCartButton.addEventListener("click", () => {
                cart.push(book);
                totalCost += parseFloat(book.price);
                updateCartDisplay();
            });
            bookshelf.appendChild(bookElement);
        });
    }
    showBooks();

    function updateCartDisplay() {
        const cartItemsElement = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
        cartItemsElement.innerHTML = "";
        cart.forEach((book) => {
            const cartItemElement = document.createElement("li");
            cartItemElement.innerHTML = `
                <div>
                    <img src="${book.imageLink}" alt="${book.title}" width="150px">
                    <h6>${book.title}</h6>
                    <p>Price: $${book.price}</p>
                </div>
            `;
            cartItemsElement.appendChild(cartItemElement);
        });
    
        totalPriceElement.textContent = `$${totalCost.toFixed(2)}`;
        saveCartToStorage();
    }

    const cartLink = document.getElementById("cartLink");
    cartLink.addEventListener("click", (event) => {
        event.preventDefault();
        main.innerHTML = "";
        const cartContainer = document.createElement("div");
        cartContainer.id = "cart";
        cartContainer.innerHTML = `
    <h2>Cart</h2>
    <ul id="cart-items"></ul>
    <p>Total: <span id="total-price">$0</span></p>
  `;
        main.appendChild(cartContainer);
        updateCartDisplay();
    });

    booksLink.addEventListener("click", function (event) {
        event.preventDefault();
        main.innerHTML = `
        <div id="bookshelf">
            <a href="ebook.html">Go to Home Page</a>
        </div>
    `;
        main.appendChild(bookshelf);
        header.style.display = "none";
    });
});
