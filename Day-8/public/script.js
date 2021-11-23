const form = document.getElementById("search-form");
const name = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  name("https://fakestoreapi.com/products/1");
});
