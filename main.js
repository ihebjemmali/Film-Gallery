(function ($) {
  "use strict";

  // Film factory function
  function createFilm(
    title,
    price,
    genre,
    image,
    releaseDate,
    author,
    dateAdded
  ) {
    return {
      title: title,
      price: price,
      genre: genre,
      image: image,
      releaseDate: releaseDate,
      author: author,
      dateAdded: dateAdded,
    };
  }

  // FilmGallery factory function
  function createFilmGallery() {
    var films = [];
    var favoriteFilms = [];

    function addFilm(film) {
      films.push(film);
    }

    function displayFilm(film, index, inFavorites) {
      var button;
      if (inFavorites) {
        button =
          '<button class="remove-from-favorite" data-index="' +
          index +
          '">Remove from Favorite</button>';
      } else {
        button =
          '<button class="add-to-favorite" data-index="' +
          index +
          '">Add to Favorite</button>';
      }
      return (
        '<div class="film-card" data-index="' +
        index +
        '">' +
        "<h2>" +
        film.title +
        "</h2>" +
        "<p>Price: $" +
        film.price +
        "</p>" +
        "<p>Genre: " +
        film.genre +
        "</p>" +
        '<img src="' +
        film.image +
        '" alt="' +
        film.title +
        '" />' +
        "<p>Release Date: " +
        film.releaseDate +
        "</p>" +
        "<p>Author: " +
        film.author +
        "</p>" +
        "<p>Date Added: " +
        film.dateAdded +
        "</p>" +
        button +
        "</div>"
      );
    }

    function displayAllFilms() {
      var gallery = $("#film-gallery");
      gallery.empty();
      films.forEach(function (film, index) {
        gallery.append(displayFilm(film, index, false));
      });

      $(".add-to-favorite").click(function () {
        var filmIndex = $(this).data("index");
        addToFavorite(filmIndex);
      });
    }

    function displayFavoriteFilms() {
      var favoriteSection = $("#favorite-films");
      favoriteSection.empty();
      favoriteFilms.forEach(function (film, index) {
        favoriteSection.append(displayFilm(film, index, true));
      });

      $(".remove-from-favorite").click(function () {
        var filmIndex = $(this).data("index");
        removeFromFavorite(filmIndex);
      });
    }

    function addToFavorite(index) {
      if (favoriteFilms.indexOf(films[index]) === -1) {
        favoriteFilms.push(films[index]);
        displayFavoriteFilms();
      }
    }

    function removeFromFavorite(index) {
      favoriteFilms.splice(index, 1);
      displayFavoriteFilms();
    }

    return {
      addFilm: addFilm,
      displayAllFilms: displayAllFilms,
      displayFavoriteFilms: displayFavoriteFilms,
    };
  }

  // Initialize the application
  $(document).ready(function () {
    var filmGallery = createFilmGallery();

    // Add films to the gallery
    var filmsData = [
      createFilm(
        "Inception",
        15,
        "Sci-Fi",
        "images/inception.jpg",
        "2010-07-16",
        "Christopher Nolan",
        "2024-08-20"
      ),
      createFilm(
        "The Dark Knight",
        12,
        "Action",
        "images/The dark knight.jpg",
        "2008-07-18",
        "Christopher Nolan",
        "2024-08-20"
      ),
      createFilm(
        "Interstellar",
        18,
        "Sci-Fi",
        "images/Interstellar.jpg",
        "2014-11-07",
        "Christopher Nolan",
        "2024-08-20"
      ),
      createFilm(
        "Parasite",
        20,
        "Thriller",
        "images/Parasite.jpg",
        "2019-05-30",
        "Bong Joon-ho",
        "2024-08-20"
      ),
      createFilm(
        "The Godfather",
        25,
        "Crime",
        "images/The Godfather.jpg",
        "1972-03-24",
        "Francis Ford Coppola",
        "2024-08-20"
      ),
      createFilm(
        "Pulp Fiction",
        16,
        "Crime",
        "images/Pulp Fiction.jpg",
        "1994-10-14",
        "Quentin Tarantino",
        "2024-08-20"
      ),
      createFilm(
        "The Matrix",
        14,
        "Sci-Fi",
        "images/The matrix.jpg",
        "1999-03-31",
        "The Wachowskis",
        "2024-08-20"
      ),
      createFilm(
        "Fight Club",
        10,
        "Drama",
        "images/Fight Club.jpg",
        "1999-10-15",
        "David Fincher",
        "2024-08-20"
      ),
      createFilm(
        "Forrest Gump",
        13,
        "Drama",
        "images/Forrest Gump.jpg",
        "1994-07-06",
        "Robert Zemeckis",
        "2024-08-20"
      ),
      createFilm(
        "The Shawshank Redemption",
        19,
        "Drama",
        "images/The Shawshank Redemption.jpg",
        "1994-09-23",
        "Frank Darabont",
        "2024-08-20"
      ),
      createFilm(
        "Training Day",
        17,
        "Crime",
        "images/Training Day.jpg",
        "2001-10-05",
        "Antoine Fuqua",
        "2024-08-20"
      ),
      createFilm(
        "Furiosa",
        22,
        "Action",
        "images/Furiosa.jpg",
        "2024-05-24",
        "George Miller",
        "2024-08-20"
      ),
      createFilm(
        "Lone Survivor",
        20,
        "Action",
        "images/Lone Survivor.jpg",
        "2013-01-10",
        "Peter Berg",
        "2024-08-20"
      ),
      createFilm(
        "The Revenant",
        25,
        "Adventure",
        "images/The Revenant.jpg",
        "2015-12-25",
        "Alejandro G. Iñárritu",
        "2024-08-20"
      ),
      createFilm(
        "Wrath of Man",
        18,
        "Action",
        "images/Wrath of Man.jpg",
        "2021-05-07",
        "Guy Ritchie",
        "2024-08-20"
      ),
    ];

    filmsData.forEach(function (film) {
      filmGallery.addFilm(film);
    });

    filmGallery.displayAllFilms();
  });
})(jQuery);
