$(document).ready(function () {
  function Film(title, price, genre, image, releaseDate, author, dateAdded) {
    this.title = title;
    this.price = price;
    this.genre = genre;
    this.image = image;
    this.releaseDate = releaseDate;
    this.author = author;
    this.dateAdded = dateAdded;
  }

  Film.prototype.display = function (index, inFavorites) {
    var button;

    if (inFavorites) {
      button = `<button class="remove-from-favorite" data-index="${index}">Remove from Favorite</button>`;
    } else {
      button = `<button class="add-to-favorite" data-index="${index}">Add to Favorite</button>`;
    }
    return `
      <div class="film-card" data-index="${index}">
        <h2>${this.title}</h2>
        <p>Price: $${this.price}</p>
        <p>Genre: ${this.genre}</p>
        <img src="${this.image}" alt="${this.title}" />
        <p>Release Date: ${this.releaseDate}</p>
        <p>Author: ${this.author}</p>
        <p>Date Added: ${this.dateAdded}</p>
        ${button}
      </div>
    `;
  };

  var films = [
    new Film(
      "Inception",
      15,
      "Sci-Fi",
      "images/inception.jpg",
      "2010-07-16",
      "Christopher Nolan",
      "2024-08-20"
    ),
    new Film(
      "The Dark Knight",
      12,
      "Action",
      "images/The dark knight.jpg",
      "2008-07-18",
      "Christopher Nolan",
      "2024-08-20"
    ),
    new Film(
      "Interstellar",
      18,
      "Sci-Fi",
      "images/Interstellar.jpg",
      "2014-11-07",
      "Christopher Nolan",
      "2024-08-20"
    ),
    new Film(
      "Parasite",
      20,
      "Thriller",
      "images/Parasite.jpg",
      "2019-05-30",
      "Bong Joon-ho",
      "2024-08-20"
    ),
    new Film(
      "The Godfather",
      25,
      "Crime",
      "images/The Godfather.jpg",
      "1972-03-24",
      "Francis Ford Coppola",
      "2024-08-20"
    ),
    new Film(
      "Pulp Fiction",
      16,
      "Crime",
      "images/Pulp Fiction.jpg",
      "1994-10-14",
      "Quentin Tarantino",
      "2024-08-20"
    ),
    new Film(
      "The Matrix",
      14,
      "Sci-Fi",
      "images/The matrix.jpg",
      "1999-03-31",
      "The Wachowskis",
      "2024-08-20"
    ),
    new Film(
      "Fight Club",
      10,
      "Drama",
      "images/Fight Club.jpg",
      "1999-10-15",
      "David Fincher",
      "2024-08-20"
    ),
    new Film(
      "Forrest Gump",
      13,
      "Drama",
      "images/Forrest Gump.jpg",
      "1994-07-06",
      "Robert Zemeckis",
      "2024-08-20"
    ),
    new Film(
      "The Shawshank Redemption",
      19,
      "Drama",
      "images/The Shawshank Redemption.jpg",
      "1994-09-23",
      "Frank Darabont",
      "2024-08-20"
    ),
    new Film(
      "Training Day",
      17,
      "Crime",
      "images/Training Day.jpg",
      "2001-10-05",
      "Antoine Fuqua",
      "2024-08-20"
    ),
    new Film(
      "Furiosa",
      22,
      "Action",
      "images/Furiosa.jpg",
      "2024-05-24",
      "George Miller",
      "2024-08-20"
    ),
    new Film(
      "Lone Survivor",
      20,
      "Action",
      "images/Lone Survivor.jpg",
      "2013-01-10",
      "Peter Berg",
      "2024-08-20"
    ),
    new Film(
      "The Revenant",
      25,
      "Adventure",
      "images/The Revenant.jpg",
      "2015-12-25",
      "Alejandro G. Iñárritu",
      "2024-08-20"
    ),
    new Film(
      "Wrath of Man",
      18,
      "Action",
      "images/Wrath of Man.jpg",
      "2021-05-07",
      "Guy Ritchie",
      "2024-08-20"
    ),
  ];

  var favoriteFilms = [];

  function displayAllFilms() {
    var gallery = $("#film-gallery");
    for (var i = 0; i < films.length; i++) {
      gallery.append(films[i].display(i, false));
    }

    $(".add-to-favorite").click(function () {
      var filmIndex = $(this).data("index");
      addToFavorite(filmIndex);
    });
  }

  function displayFavoriteFilms() {
    var favoriteSection = $("#favorite-films");
    favoriteSection.empty();
    for (var i = 0; i < favoriteFilms.length; i++) {
      favoriteSection.append(favoriteFilms[i].display(i, true));
    }

    $(".remove-from-favorite").click(function () {
      var filmIndex = $(this).data("index");
      removeFromFavorite(filmIndex);
    });
  }

  function addToFavorite(index) {
    if (!favoriteFilms.includes(films[index])) {
      favoriteFilms.push(films[index]);
      displayFavoriteFilms();
    }
  }

  function removeFromFavorite(index) {
    favoriteFilms.splice(index, 1);
    displayFavoriteFilms();
  }

  displayAllFilms();
});
