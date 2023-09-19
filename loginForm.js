import {POSTfunc} from './api.js';
import {renderStudents} from './render.js';
import {commentReply} from './render.js';
import {postButton} from "./render.js";
const quotePlaceholder = document.querySelector(".quote_placeholder_textarea")
const quotePlaceholder_divs = document.querySelectorAll(".quote_placeholder")
export const addFormFunc = (token) =>{
    
    const formAdder = document.querySelector(".add-form");
    if (token=== null) {
    
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
        addFormFunc(token)
        console.log(token);
      })
     }
    else {
      
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
      

      commentReply()
      postButton(formAdder)
      }
    
  }