const headerLogo = document.querySelector(".logo");

headerLogo.addEventListener("click", () => {
  window.location.reload();
});

const iconList = document.querySelectorAll(".icon-list-small");
const profileImage = document.querySelector(".profile-image");
const profileName = document.querySelector(".profile-name");
const feedButtons = document.querySelectorAll(".feed-buttons");
const smileButton = document.querySelector(".smile");

iconList.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.opacity = "0.4";
  });
});

iconList.forEach((e) => {
  e.addEventListener("mouseout", () => {
    e.style.opacity = "1.0";
  });
});

profileImage.addEventListener("mouseover", () => {
  profileImage.style.opacity = "0.4";
});

profileImage.addEventListener("mouseout", () => {
  profileImage.style.opacity = "1.0";
});

profileName.addEventListener("mouseover", () => {
  profileName.style.opacity = "0.4";
});

profileName.addEventListener("mouseout", () => {
  profileName.style.opacity = "1.0";
});

feedButtons.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.opacity = "0.4";
  });
});

feedButtons.forEach((e) => {
  e.addEventListener("mouseout", () => {
    e.style.opacity = "1.0";
  });
});

/* feedButtons.addEventListener("mouseover", () => {
  feedButtons.style.opacity = "0.4";
});

feedButtons.addEventListener("mouseout", () => {
  feedButtons.style.opacity = "1.0";
}); */

smileButton.addEventListener("mouseover", () => {
  smileButton.style.opacity = "0.4";
});

smileButton.addEventListener("mouseout", () => {
  smileButton.style.opacity = "1.0";
});

const EmojiContent = document.querySelector(".emoji-content");
const mainContainer = document.querySelector(".main-container");

smileButton.addEventListener("click", () => {
  EmojiContent.style.display = "block";
});

mainContainer.addEventListener("mouseover", () => {
  EmojiContent.style.display = "none";
});

EmojiContent.addEventListener("mouseover", (event) => {
  event.stopPropagation();
});

smileButton.addEventListener("click", (event) => {
  event.stopPropagation();
});
const bestEmojiContent = document.querySelectorAll(".best-emojicontent");

bestEmojiContent.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.opacity = "0.4";
  });
});

bestEmojiContent.forEach((e) => {
  e.addEventListener("mouseout", () => {
    e.style.opacity = "1.0";
  });
});

const noticeContainer = document.querySelector(".notice");

const headerHeart = document.getElementById("header-heart");

headerHeart.addEventListener("click", () => {
  noticeContainer.style.right = "0";
});

mainContainer.addEventListener("click", () => {
  noticeContainer.style.right = "-550px";
});

headerHeart.addEventListener("click", (event) => {
  event.stopPropagation();
});
