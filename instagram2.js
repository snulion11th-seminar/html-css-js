console.log("instagramr2.js 연결완료");

const logo = document.querySelector(".logo");
const icon = document.querySelectorAll(".icon");
const article = document.querySelector(".article");
const heart = document.querySelector("#heart-icon");
const chat = document.querySelector("#chat-icon");
const news = document.querySelector("#news");
const rightSection = document.querySelector(".right-section");
const directMessage = document.querySelector(".direct-message");
const dm = document.querySelector("#dm");
let hNumclick = 0;
let cNumclick = 0;

logo.addEventListener("click", () => {
  location.href = "./instagram.html";
});

logo.addEventListener("mouseover", () => {
  logo.style.curor = "pointer";
  logo.style.opacity = "0.5";
});

logo.addEventListener("mouseout", () => {
  logo.style.opacity = "1";
});

heart.addEventListener("click", () => {
  if (hNumclick == 0) {
    if (cNumclick != 0) {
      cNumclick--;
      directMessage.style.display = "none";
      directMessage.style.border = "none";
      chat.style.border = "none";
    }
    hNumclick++;
    rightSection.style.display = "block";
    rightSection.style.position = "absolute";
    rightSection.style.right = "300px";
    rightSection.style.top = "45px";
    rightSection.style.border = "thin solid #d3d3d3";
    heart.style.border = "thin solid #d3d3d3";
    heart.style.borderRadius = "50%";
  } else if (hNumclick != 0) {
    hNumclick--;
    rightSection.style.display = "none";
    rightSection.style.border = "none";
    heart.style.border = "none";
  }
});

chat.addEventListener("click", () => {
  if (cNumclick == 0) {
    if (hNumclick != 0) {
      hNumclick--;
      rightSection.style.display = "none";
      rightSection.style.border = "none";
      heart.style.border = "none";
    }
    cNumclick++;
    directMessage.style.display = "block";
    directMessage.style.position = "absolute";
    directMessage.style.right = "300px";
    directMessage.style.top = "45px";
    directMessage.style.border = "thin solid #d3d3d3";
    chat.style.border = "thin solid #d3d3d3";
    chat.style.borderRadius = "50%";
  } else if (cNumclick != 0) {
    cNumclick--;
    directMessage.style.display = "none";
    directMessage.style.border = "none";
    chat.style.border = "none";
  }
});

icon.forEach((e) => {
  e.addEventListener("mouseout", () => {
    e.style.opacity = "1";
  });
});

article.addEventListener("mouseout", () => {
  article.style.opacity = "1";
});

article.addEventListener("mouseover", () => {
  article.style.cursor = "pointer";
  article.style.opacity = "0.5";
});
