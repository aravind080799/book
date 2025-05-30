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
        {
            "author": "Jorge Luis Borges",
            "country": "Argentina",
            "imageLink": "images/ficciones.jpg",
            "language": "Spanish",
            "link": "https://en.wikipedia.org/wiki/Ficciones\n",
            "pages": 224,
            "title": "Ficciones",
            "year": 1965,
            "price": 32.74
        },
        {
            "author": "Emily Bront\u00eb",
            "country": "United Kingdom",
            "imageLink": "images/wuthering-heights.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
            "pages": 342,
            "title": "Wuthering Heights",
            "year": 1847,
            "price": 25.55
        },
        {
            "author": "Albert Camus",
            "country": "Algeria, French Empire",
            "imageLink": "images/l-etranger.jpg",
            "language": "French",
            "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
            "pages": 185,
            "title": "The Stranger",
            "year": 1942,
            "price": 88.21
        },
        {
            "author": "Paul Celan",
            "country": "Romania, France",
            "imageLink": "images/poems-paul-celan.jpg",
            "language": "German",
            "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
            "pages": 320,
            "title": "Poems",
            "year": 1952,
            "price": 54.68
        },
        {
            "author": "Louis-Ferdinand C\u00e9line",
            "country": "France",
            "imageLink": "images/voyage-au-bout-de-la-nuit.jpg",
            "language": "French",
            "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
            "pages": 505,
            "title": "Journey to the End of the Night",
            "year": 1932,
            "price": 62.66
        },
        {
            "author": "Miguel de Cervantes",
            "country": "Spain",
            "imageLink": "images/don-quijote-de-la-mancha.jpg",
            "language": "Spanish",
            "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
            "pages": 1056,
            "title": "Don Quijote De La Mancha",
            "year": 1610,
            "price": 77.77
        },
        {
            "author": "Geoffrey Chaucer",
            "country": "England",
            "imageLink": "images/the-canterbury-tales.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
            "pages": 544,
            "title": "The Canterbury Tales",
            "year": 1450,
            "price": 50.23
        },
        {
            "author": "Anton Chekhov",
            "country": "Russia",
            "imageLink": "images/stories-of-anton-chekhov.jpg",
            "language": "Russian",
            "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
            "pages": 194,
            "title": "Stories",
            "year": 1886,
            "price": 44.44
        },
        {
            "author": "Joseph Conrad",
            "country": "United Kingdom",
            "imageLink": "images/nostromo.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Nostromo\n",
            "pages": 320,
            "title": "Nostromo",
            "year": 1904,
            "price": 55.55
        },

        {
            "author": "Denis Diderot",
            "country": "France",
            "imageLink": "images/jacques-the-fatalist.jpg",
            "language": "French",
            "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
            "pages": 596,
            "title": "Jacques the Fatalist",
            "year": 1796,
            "price": 66.66
        },
        {
            "author": "Alfred D\u00f6blin",
            "country": "Germany",
            "imageLink": "images/berlin-alexanderplatz.jpg",
            "language": "German",
            "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
            "pages": 600,
            "title": "Berlin Alexanderplatz",
            "year": 1929,
            "price": 22.22
        },
        {
            "author": "Fyodor Dostoevsky",
            "country": "Russia",
            "imageLink": "images/the-idiot.jpg",
            "language": "Russian",
            "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
            "pages": 656,
            "title": "The Idiot",
            "year": 1869,
            "price": 33.33
        },
        {
            "author": "Fyodor Dostoevsky",
            "country": "Russia",
            "imageLink": "images/the-possessed.jpg",
            "language": "Russian",
            "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
            "pages": 768,
            "title": "The Possessed",
            "year": 1872,
            "price": 87.87
        },
        {
            "author": "Fyodor Dostoevsky",
            "country": "Russia",
            "imageLink": "images/the-brothers-karamazov.jpg",
            "language": "Russian",
            "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
            "pages": 824,
            "title": "The Brothers Karamazov",
            "year": 1880,
            "price": 10.99
        },
        {
            "author": "George Eliot",
            "country": "United Kingdom",
            "imageLink": "images/middlemarch.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
            "pages": 800,
            "title": "Middlemarch",
            "year": 1871,
            "price": 90.34
        },
        {
            "author": "Ralph Ellison",
            "country": "United States",
            "imageLink": "images/invisible-man.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
            "pages": 581,
            "title": "Invisible Man",
            "year": 1952,
            "price": 15.45
        },
        {
            "author": "Euripides",
            "country": "Greece",
            "imageLink": "images/medea.jpg",
            "language": "Greek",
            "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
            "pages": 104,
            "title": "Medea",
            "year": -431,
            "price": 12.32
        },
        {
            "author": "William Faulkner",
            "country": "United States",
            "imageLink": "images/absalom-absalom.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
            "pages": 313,
            "title": "Absalom, Absalom!",
            "year": 1936,
            "price": 47.56
        },
        {
            "author": "William Faulkner",
            "country": "United States",
            "imageLink": "images/the-sound-and-the-fury.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
            "pages": 326,
            "title": "The Sound and the Fury",
            "year": 1929,
            "price": 57.67
        },
        {
            "author": "Gustave Flaubert",
            "country": "France",
            "imageLink": "images/madame-bovary.jpg",
            "language": "French",
            "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
            "pages": 528,
            "title": "Madame Bovary",
            "year": 1857,
            "price": 37.37
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