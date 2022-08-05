const addForm = document.querySelector(".add");
const ul = document.querySelector("ul.todos");
const search = document.querySelector(".search input");

// function that generates a new li tag nd inyects it to the DOM
// The function recives the "todo" input value
const generateTemplate = (todo) => {
  // We create the HTML to be injected with template string and pass the input value.
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  // We inject the HTML in the <ul>
  ul.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    // we only add the item to the list if they have typed something
    generateTemplate(todo); //invoke the function that generates the li tag and we pass the input value
  }

  addForm.reset(); // Cleans the form
});

// Delete item with event delegation
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    //contians delete class
    e.target.parentElement.remove();
  }
});

// Serch items

const filterFunction = (searchInput) => {
  const li = ul.children; // select all the ul children and we get a HTML Collection
  const liArray = Array.from(li); // convert the HTML Colletion into an aray.
  liArray
    .filter((item) => {
      return !item.textContent.toLowerCase().includes(searchInput); // we filter and get the items that don't include the searched Item.
    })
    .forEach((item) => {
      item.classList.add("hide");
    });

  liArray
    .filter((item) => {
      return item.textContent.toLowerCase().includes(searchInput); // we filter and get the items that do include the searched Item.
    })
    .forEach((item) => {
      item.classList.remove("hide");
    });
};

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  const searchInput = search.value.trim().toLowerCase();
  filterFunction(searchInput);
});
