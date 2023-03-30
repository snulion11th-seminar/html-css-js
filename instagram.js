// 이 코드는 제일 첫 줄에 넣어줍시다 !!

const useLocalStorage = true;
let smileClick = 0;
let storyIndex = 0;

console.log("연결완료");

const story = document.querySelector(".story-modal");
const storyImage = document.querySelectorAll(".story-image");
const storyElements = document.querySelectorAll(".story-element");
const emoticonElements = document.querySelectorAll(".emo");
const emoticons = document.querySelector(".emoticons");
const body = document.querySelector(".body");

storyElements.forEach((e, index) => {
  e.addEventListener("click", () => {
    story.style.display = "block";
    storyImage[index].style.display = "block";
    storyIndex = index;
  });
});

story.addEventListener("click", (event) => {
  event.stopPropagation;
  if (event.target === storyImage[storyIndex]) {
    return;
  }
  story.style.display = "none";
  storyImage.forEach((e) => {
    e.style.display = "none";
  });
});

emoticonElements.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.cursor = "pointer";
  });
  e.addEventListener("click", () => {
    const emoticon = e.innerText;
    commentInput.value = commentInput.value + emoticon;
    emoticons.style.display = "none";
    smileClick--;
  });
});

const smile = document.querySelector(".smile");
const profile = document.querySelector(".profile");
const profilemodal = document.querySelector(".profile-modal");

profile.addEventListener("mouseover", () => {
  profilemodal.style.display = "block";
  profilemodal.style.position = "absolute";
});

profile.addEventListener("mouseout", () => {
  profilemodal.style.display = "none";
});

smile.addEventListener("click", () => {
  if (smileClick == 0) {
    emoticons.style.display = "block";
    emoticons.style.position = "absolute";
    emoticons.style.bottom = "320px";
    emoticons.style.left = "340px";
    smileClick++;
  } else if (smileClick != 0) {
    emoticons.style.display = "none";
    smileClick--;
  }
});

const likeCount = document.getElementById("like-count");
const likeBtn = document.getElementById("like-btn");
const likedBtn = document.getElementById("liked-btn");

// 좋아요를 누르지 않은 상태의 버튼
likeBtn.addEventListener("click", () => {
  likedBtn.style.display = "block";
  likeBtn.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = `${parseInt(count) + 1}`;
});

// 좋아요를 누른 상태의 버튼
likedBtn.addEventListener("click", () => {
  likeBtn.style.display = "block";
  likedBtn.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = `${parseInt(count) - 1}`;
});

const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".comments-container");
const commentInput = document.querySelector(".comment-input");
const searchInput = document.querySelector(".search");
const searchContainer = document.querySelector(".search-container");

// 댓글을 만드는 로직
const commentsList = JSON.parse(window.localStorage.getItem("comments")) || [];

const inputTextList = [];

let inputId = 0;
let commentId = 0;

commentsCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;

  commentsList.push(commentText);

  if (useLocalStorage) {
    const locallyStoredComments =
      JSON.parse(window.localStorage.getItem("comments")) || [];
    window.localStorage.setItem(
      "comments",
      JSON.stringify([...locallyStoredComments, commentText])
    );
  }

  const commentNode = `
    <div class="comment-wrapper">
      <span class="comment">${commentText}</span>
      <img
        id="${commentId}" 
        class="comment-delete-icon" 
        onclick="deleteComment(${commentId})" 
        src="./images/close.png" 
        alt="comment" 
      />
    </div>
  `;
  commentId = commentsList.length;

  commentContainer.innerHTML = commentNode + commentContainer.innerHTML;
  commentInput.value = "";
});

const deleteComment = (id) => {
  commentsList.splice(id, 1);
  if (useLocalStorage) {
    const locallyStoredComments = JSON.parse(
      window.localStorage.getItem("comments")
    );
    locallyStoredComments.splice(id, 1);
    window.localStorage.setItem(
      "comments",
      JSON.stringify(locallyStoredComments)
    );
  }

  commentContainer.innerHTML = commentsList
    .map(
      (comment, index) => `
  <div class="comment-wrapper">
    <span class="comment">${comment}</span>
    <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
  </div>`
    )
    .reverse()
    .join("");
};

window.onload = () => {
  if (commentsList.length > 0) {
    commentContainer.innerHTML = commentsList
      .map(
        (comment, index) => `
      <div class="comment-wrapper">
        <span class="comment">${comment}</span>
        <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
      </div>`
      )
      .reverse()
      .join("");
  }
};

const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    enterkey();
  }
});

searchInput.addEventListener("click", (e) => {
  e.stopPropagation();
  searchContainer.style.display = "block";
  searchContainer.style.display = "block";
  searchContainer.style.position = "absolute";
  searchContainer.style.left = "550px";
  searchContainer.style.top = "50px";
});

searchContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

body.addEventListener("click", () => {
  searchContainer.style.display = "none";
});

function enterkey() {
  const inputText = document.getElementById("searchId").value;
  console.log(inputText);
  inputTextList.push(inputText);
  const InputNode = `
    <div class="input-wrapper">
      <img class="search-profile" src="./images/marcus.png" alt="search" />
      <span class="input">${inputText}</span>
      <span class="history">검색기록 삭제</span>
      <img
        id="${inputId}" 
        class="search-delete-icon" 
        onclick="deleteSearch(${inputId})" 
        src="./images/close.png" 
        alt="search" 
      />
    </div>
  `;
  inputId = inputTextList.length;
  searchContainer.innerHTML = InputNode + searchContainer.innerHTML;
}

const deleteSearch = (id) => {
  inputTextList.splice(id, 1);

  searchContainer.innerHTML = inputTextList
    .map(
      (input, index) => `
  <div class="input-wrapper">
    <img class="search-profile" src="./images/marcus.png" alt="search" />
    <span class="input">${input}</span>
    <span class="history">검색기록 삭제</span>
    <img id="${index}" class="search-delete-icon" onclick="deleteSearch(${index})" src="./images/close.png" alt="search" />
  </div>`
    )
    .reverse()
    .join("");
};
