

  // To pass the tests, don't forget to return your fetch!
  function fetchBooks() {
    return fetch("https://anapioficeandfire.com/api/books")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        renderBooks(response);
      });
  }



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

