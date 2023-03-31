console.log("연결완료");

const useLocalStorage = true;

const story = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");
const storyImage = document.getElementById("story-image");

storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    story.style.display = "block";
  });
});

story.addEventListener("click", () => {
  story.style.display = "none";
});

storyImage.addEventListener("click", (event) => {
  event.stopPropagation();
});

const profileImage = document.getElementById("profile-image");
const profileModal = document.getElementById("profile-modal");
const profileName = document.getElementById("profile-name");

/*
profileImage.addEventListener("mouseover", () => {
  profileModal.style.display = "block";
  profileModal.style.position = "absolute";
});

profileImage.addEventListener("mouseout", () => {
  profileModal.style.display = "none";
});

profileName.addEventListener("mouseover", () => {
  profileModal.style.display = "block";
  profileModal.style.position = "absolute";
});

profileName.addEventListener("mouseout", () => {
  profileModal.style.display = "none";
});
*/

const profile = document.querySelector(".profile");

profile.addEventListener("mouseover", () => {
  profileModal.style.display = "block";
  profileModal.style.position = "absolute";
  profileModal.style.top = "5px";
  profileModal.style.left = "5px";
});

profile.addEventListener("mouseout", () => {
  profileModal.style.display = "none";
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

// 댓글을 만드는 로직
//
const commentsList = JSON.parse(window.localStorage.getItem("comments")) || [];

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
  //삭제된 데이터를 반영하기 위해서 코멘트를 다시 쌓아주는 코드
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

const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

const bestEmojiContent = document.querySelectorAll(".best-emojicontent");

bestEmojiContent.forEach((e) => {
  e.addEventListener("click", () => {
    commentInput.value = commentInput.value + e.innerHTML;
    commentContainer.innerHTML = commentNode + commentContainer.innerHTML;
  });
});
