export const GETfunc = (responseData) => {
    randArr.length = 0
    let newwArr = responseData.comments
    for (let index = 0; index < newwArr.length; index++) {
        const randArr1 = [
        {
          name: "",
          comment: "",
          date: "",
          likes: 0,
          active: "",
          index: 0,
          quote: ""
        }
        ]
        let DATE = new Date(Date.parse(responseData.comments[index].date))
        let formattedDate = DATE.toLocaleString("en-GB", {
          week: "numeric",
          day: "numeric",
          month: "numeric",
          year: "2-digit",
          hour: "numeric",
          minute: "numeric"
        });
        
        let comment = responseData.comments[index].text;
        comment = comment.split('|||')
        formattedDate = formattedDate.replaceAll('/', '.');
        formattedDate = formattedDate.replaceAll(',', '');
        randArr1[0].name = responseData.comments[index].author.name
        randArr1[0].comment = comment[0]
        randArr1[0].date = formattedDate
        randArr1[0].likes = responseData.comments[index].likes
        randArr1[0].index = randArr.length
        randArr1[0].quote = comment[1]
        if (Number(responseData.comments[index].isLiked) === 1) {
          randArr1[0].active = "-active-like";
        } else {
          randArr1[0].active = "";
        }
        if (String(comment[1]) === String(undefined)) {
          randArr1[0].quote = ""
        }
        randArr.push(randArr1[0])
      }
      uneditedARR = newwArr
      everyUser = randArr
      renderStudents();
  }

  export const renderStudents = () => {
    const everyComment = everyUser
      .map((user, index) => {
        if ((user.quote !== "") && (index >= 1)) {
          return `
          <li class="comment" data-index="${index}">
            <div class="comment-header">
              <div>${user.name}</div>
              <div>${user.date}</div>
            </div>
            <div class="comment-body">
              <div class="comment-quote quote_background">
                ${user.quote}
              </div>
              <div class="comment-text">
                ${user.comment}
              </div>
            </div>
            <div class="comment-footer">
              <div class="delete" data-index="${uneditedARR[index].id}">
                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill="white"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" fill="white"></path> </svg>
              </div>
              <div class="likes">
                <span class="likes-counter">${user.likes}</span>
                <button data-index="${index}" class="like-button ${user.active}"></button>
              </div>
            </div>
          </li>`;
        } else if (index < 1) {
          return `
          <li class="comment" data-index="${index}">
            <div class="comment-header">
              <div>${user.name}</div>
              <div>${user.date}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
                ${user.comment}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes_noDelete">
                <span class="likes-counter">${user.likes}</span>
                <button data-index="${index}" class="like-button ${user.active}"></button>
              </div>
            </div>
          </li>`;
        } else if (user.quote === "") {
          return `
          <li class="comment" data-index="${index}">
            <div class="comment-header">
              <div>${user.name}</div>
              <div>${user.date}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
                ${user.comment}
              </div>
            </div>
            <div class="comment-footer">
              <div class="delete" data-index="${uneditedARR[index].id}">
                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill="white"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" fill="white"></path> </svg>
              </div>
              <div class="likes">
                <span class="likes-counter">${user.likes}</span>
                <button data-index="${index}" class="like-button ${user.active}"></button>
              </div>
            </div>
          </li>`;
        } 
        
      })
      .join("");
    newList.innerHTML = everyComment;

    inLikeButtonListeners()
    commentReply()
    deleteButtons()
  };