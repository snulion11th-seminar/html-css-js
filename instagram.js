console.log("연결완료");
console.log("연결완료");

// // //스토리 사자 모달
const story = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

console.log(story.style);

storyElements.forEach((element) => {
  element.addEventListener("click", () => {
    story.style.display = "block";
  });
});

// //스토리 사자 모달 나가기
const story_image = document.getElementById("story-image");

story.addEventListener("click", (event) => {
  if (event.target === story_image) {
    return;
  }
  story.style.display = "none";
});
//스토리 사자 모달 테두리부분 누르면 나가게 하는 거 모르겠음.-해결!

//프로필 미리보기 모달
const profile_image = document.getElementById("profile-image");
const profile_modal = document.getElementById("profile-modal");
const profile_name = document.getElementById("profile-name");

profile_image.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_image.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
});

profile_name.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_name.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
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

//이모지 리스트 뜨게하기!-->html 만든 후 수정중
const smile = document.querySelector(".smile");
const emoji_list = document.querySelector(".emoji_list");

// smile.addEventListener("click", () => {
//   emoji_list.style.display = "block";
// });

smile.addEventListener("click", ()=>{
  if (emoji_list.style.display ==='none') {
    emoji_list.style.display ='block';
  } else {
    emoji_list.style.display ='none'
  }
})

//이모지 리스트 뜨게하기!!!!!!!!!!!!!!!!!--진행중
// const smile = document.getElementById("smile");
// const emoji_list = document.getElementById("emoji_list");

// smile.addEventListener("click",()=>{

// })

//댓글 추가//
const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".comments-container");
const commentInput = document.querySelector(".comment-input");

// 댓글을 만드는 로직
const commentsList = [];
let commentId = 0;

commentsCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;

  commentsList.push(commentText);



  // if (useLocalStorage){
  //   const locallyStoredComments = JSON.parse(window.localStorage.getItem('comments')) || [];
  //   window.localStorage.setItem('comments', JSON.stringify([...locallyStoredComments, commentText]));
  // }

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

//이모티콘 누르면 댓글창에 써지는 코드
function addEmoji(emoji){
  commentInput.value += emoji;
}

//댓글 삭제//
const deleteComment = (id) => {
  commentsList.splice(id, 1);
  // if (useLocalStorage){
  //   const locallyStoredComments = JSON.parse(window.localStorage.getItem('comments'));
  //   locallyStoredComments.splice(id, 1);
  //   window.localStorage.setItem('comments', JSON.stringify(locallyStoredComments));
  // }

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

//footer 날짜 바꾸기//
const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

//header 아이콘에 마우스 올라갔을 때 실행되는 함수
// const arrow_icon = document.getElementById("arrow_icon");
// const compass_icon = document.getElementById("compass_icon");
// const heart_icon = document.getElementById("heart_icon");
// const home_icon = document.getElementById("home_icon");

// arrow_icon.addEventListener("mouseover",()=>{
//   arrow_icon
// })

// profile_image.addEventListener("mouseover", () => {
//   profile_modal.style.display = "block";
//   profile_modal.style.position = "absolute";
// });

// HTML에서 사진에 마우스가 올라갔을 때 실행되는 함수
function addOpacityOnMouseOver(element) {
  element.style.opacity = "0.7";
}

// HTML에서 사진에서 마우스가 벗어났을 때 실행되는 함수
function removeOpacityOnMouseOut(element) {
  element.style.opacity = "1";
}

// HTML에서 사진을 클릭하면 실행되는 함수
function refreshPageOnImageClick() {
  location.reload();
}

//좋아요 누르면 알림창//
// 좋아요 버튼 클릭 시 실행되는 함수
function showImage() {
  // 이미지 요소 생성
  const image = document.createElement("img");
  image.src = "images/alert.png";

  // 이미지 스타일 적용
  image.style.position = "fixed";
  image.style.top = "50px";
  image.style.right = "-500px";
  image.style.width = "400px";
  image.style.border = "1px solid gray";
  image.style.opacity = "0";
  image.style.transition = "right 0.5s, opacity 0.5s";
  image.style.po;

  // 이미지를 body 요소에 추가
  document.body.appendChild(image);

  // 이미지 오른쪽에서 왼쪽으로 이동하며 불투명도 적용
  setTimeout(function () {
    image.style.right = "10px";
    image.style.opacity = "1";
  }, 10);

  // 5초 후 이미지 왼쪽으로 이동하며 불투명도 해제
  setTimeout(function () {
    image.style.right = "-500px";
    image.style.opacity = "0";
    setTimeout(function () {
      document.body.removeChild(image);
    }, 500);
  }, 5000);
}

//이모티콘 댓글창에 쓰게 하기
// function addEmoji(emoji) {
//   const comment = document.getElementById("comment");
//   comment.value += emoji;
// }

