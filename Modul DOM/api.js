import { renderGET } from "./render.js";
const buttonWrite = document.getElementById("button_submit");
const nameInput = document.getElementById("name_for_comment");
const commentItself = document.getElementById("comment_area");
const newList = document.getElementById("list_wrapper");
const quotePlaceholder = document.querySelector(".quote_placeholder_textarea")
const quotePlaceholder_divs = document.querySelectorAll(".quote_placeholder")
const formAdder = document.querySelector(".add-form");
const loader = document.querySelector(".loader");
let stringifyArr = ""
let stringifyName
const randArr = [];
let userOfQuote = '';
quotePlaceholder.value = "";
let uneditedARR = [];
const clearButton = document.querySelector(".quote_placeholder_clear")
export const POSTfunc = (name, arr) => {
    let ErrorNumber = 0
    fetch("https://wedev-api.sky.pro/api/v1/:egor-epifancev/comments", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          text: arr
        })
      })
    .then((response) => {
        console.log("first");
        formAdder.classList.add("display_none")
        loader.classList.remove("display_none")
        console.log(response.status);
        if (response.status === 400) {
          console.log("1");
          ErrorNumber = 400
          throw new Error()
        } else if (response.status === 400) {
          console.log("2");
          ErrorNumber = 500
          throw new Error("500")
        }
        const fetchPromise = fetch("https://wedev-api.sky.pro/api/v1/:egor-epifancev/comments", {
          method: "GET"
        })

        .then((response) => {
          console.log(response);
          console.log("second");
          if ((response.status === 201) || (response.status === 200)){
            return response.json(); 
          } else {
            throw new Error("Ошибка сервера")
          }
        })
        .then((responseData) => {
          formAdder.classList.remove("display_none")
          loader.classList.add("display_none")
          renderGET(responseData)
          alert("Добавлен комментарий")
          buttonWrite.disabled = false;
          buttonWrite.textContent = "Написать"
          nameInput.value = "";
          quotePlaceholder.value = "";
          userOfQuote = "";
          for (const element of quotePlaceholder_divs) {
            element.classList.add("display_none")
          }
          commentItself.value = "";
        })
      })
    
    .catch ((error) =>{
        formAdder.classList.remove("display_none")
        loader.classList.add("display_none")
        console.log(error);
        if (ErrorNumber === 400) {
          alert("Имя и комментарий должны быть длиннее 3-ех символов")
        } else {
          alert("Что-то пошло не так")
        }
        buttonWrite.disabled = false;
        buttonWrite.textContent = "Написать"
      })
} 
export function GETfunc() {
  const formAdder = document.querySelector(".add-form");
  const loader = document.querySelector(".loader");
  fetch("https://wedev-api.sky.pro/api/v1/:egor-epifancev/comments", {
      method: "GET"
    })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      formAdder.classList.remove("display_none")  
      loader.classList.add("display_none")
      renderGET(responseData)
  });
}


export function DELETEfunc() {
  const deleteButtonsDivs = document.querySelectorAll(".delete")
  for (const deleteButton of deleteButtonsDivs) {
    deleteButton.addEventListener("click", () => {
      console.log("Element is in work!");
      event.stopPropagation()
      let id = Number(deleteButton.dataset.index)
      fetch ('https://wedev-api.sky.pro/api/v1/:egor-epifancev/comments/' + id, {
        method: 'DELETE' 
      })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        renderGET(responseData)
    });
      renderStudents();
    })
  }
}