import {POSTfunc} from './api';
export const addFormFunc = (token, commentreply, renderStudents) =>{
    console.log("NEWWWW");
    const formAdder = document.querySelector(".add-form");
    if (token=== null) {
      console.log("login");
    formAdder.innerHTML = 
    `
      <p>Логин:</p>
      <input
        type="text"
        class="add-form-name"
        placeholder="Введите ваш логин"
        id="name_for_comment"
      />
      <p>Пароль:</p>
      <textarea
        type="textarea"
        class="add-form-text"
        placeholder="Введите ваш пароль"
        rows="4"
        id="comment_area"
      ></textarea>
      <div class="add-form-row_1">
        <p>Нажмите чтобы зарегестрироваться.</p>
        <button class="add-form-button" id="button_login">Войти</button>
      </div>`
      document.getElementById("button_login")
      .addEventListener("click", () => {
        token = "Bearer bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck"
        addFormFunc(token, commentreply)
        console.log(token);
      })
     }
    else {
      console.log("comment");
      formAdder.innerHTML = `<p>Автор:</p>
      <input
        type="text"
        class="add-form-name"
        placeholder="Введите ваше имя"
        id="name_for_comment"
      />
      <p class="display_none quote_placeholder">Цитата:</p>
      <div class="display_none quote_placeholder">
        <textarea 
          class="quote_placeholder_textarea" 
          style="overflow: hidden;" 
          disabled="yes">
        </textarea>
        <button class="quote_placeholder_clear">Очистить</button>
      </div>
      <p>Комментарий:</p>
      <textarea
        type="textarea"
        class="add-form-text"
        placeholder="Введите ваш коментарий"
        rows="4"
        id="comment_area"
      ></textarea>
      <div class="add-form-row">
        <button class="add-form-button" id="button_submit">Написать</button>
      </div>`
      const clearButton = document.querySelector(".quote_placeholder_clear")
      clearButton.addEventListener("click", () => {
        quotePlaceholder.value = "";
        for (const element of quotePlaceholder_divs) {
          element.classList.add("display_none")
          }
        }
      )

      commentreply()
      
      const buttonWrite = document.getElementById("button_submit");
        
      buttonWrite.addEventListener("click", () => {
        let stringifyArr = ""
        let stringifyName
        const nameInput = document.getElementById("name_for_comment");
        const commentItself = document.getElementById("comment_area");
        const quotePlaceholder = document.querySelector(".quote_placeholder_textarea")
        const quotePlaceholder_divs = document.querySelectorAll(".quote_placeholder")
        quotePlaceholder.value = "";
        const textarea = document.querySelector(".quote_placeholder_textarea")
        nameInput.value = nameInput.value.replaceAll("<", "&lt")
        nameInput.value = nameInput.value.replaceAll(">", "&gt")
        commentItself.value = commentItself.value.replaceAll("<", "&lt")
        commentItself.value = commentItself.value.replaceAll(">", "&gt")
        nameInput.classList.remove("error")
        commentItself.classList.remove("error")
        if ((nameInput.value === '') && (commentItself.value === '')) {
          nameInput.classList.add("error")
          commentItself.classList.add("error")
          return;
        }
        if (nameInput.value === '') {
          nameInput.classList.add("error")
          return;
        }
        if (commentItself.value === '') {
          commentItself.classList.add("error")
          return;
        }
        const date = new Date();
        let formattedDate = date.toLocaleString("en-GB", {
          day: "numeric",
          month: "numeric",
          year: "2-digit",
          hour: "numeric",
          minute: "numeric"
        });
        formattedDate = formattedDate.replaceAll('/', '.');
        formattedDate = formattedDate.replaceAll(',', '');
        if (textarea.value === "") {
          stringifyName = `${nameInput.value}`
          stringifyArr = `${commentItself.value}` 
        } else { 
          stringifyName = `${nameInput.value}`
          stringifyArr = `${commentItself.value}` + `|||` + `${textarea.value} - ${userOfQuote}`
        }
        let quoteValid = "";
        if (textarea.value === "") {
          quoteValid = ""
        } else {
          quoteValid = textarea.value + `- ${userOfQuote}`
        }
        
  
        buttonWrite.disabled = true;
        buttonWrite.textContent = "Загрузка."
        const loader = document.querySelector(".loader")
        loader.textContent.replaceAll(" ", "")
        console.log(loader);
        console.log(formAdder);
          
        POSTfunc(stringifyName, stringifyArr, nameInput, commentItself, quotePlaceholder, quotePlaceholder_divs, buttonWrite)
        renderStudents();
      })
      }
    
  }