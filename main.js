let word_array = [];
let word = document.getElementById("userContentInput");
let allcontent = document.getElementById("home");
let searchInput = document.getElementById("searchInput");
if (localStorage.getItem("words") != null) {
  word_array = JSON.parse(localStorage.getItem("words"));
}
display_items();
function submit_word() {
    if (userContentInput.value == "" || userContentInput.value < 3) {
      
  } else {
    word_array.push(word.value);
    localStorage.setItem("words", JSON.stringify(word_array));
    display_items();
    document.getElementById("userContentInput").value = "";
  }
}

function display_items() {
  let cartona = ``;
  for (let i = 0; i < word_array.length; i++) {
    cartona += `<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content: ${word_array[i]}</p>
      <i class="fa-sharp fa-solid fa-trash" onclick="delete_item(${i})"></i>
    </div>`;
  }
  allcontent.innerHTML = cartona;
}
function delete_item(index) {
  word_array.splice(index, 1);
  localStorage.setItem("words", JSON.stringify(word_array));
  display_items();
}
searchInput.addEventListener("input", function (e) {
  search_items(e.target.value.toLowerCase());
});
function search_items(searchValue) {
  let cartona = ``;
  for (let i = 0; i < word_array.length; i++) {
    if (word_array[i].toLowerCase().includes(searchValue)) {
      cartona += `<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0 " style="color:black;">Content: ${word_array[
        i
      ].replaceAll(
        searchValue,
        `<span class="bg-warning">${searchValue}</span>`,
      )}</p>
      <i class="fa-sharp fa-solid fa-trash" onclick="delete_item(${i})"></i>
    </div>`;
    }
  }

  allcontent.innerHTML = cartona;
}
