const generateBtnEl = document.getElementById("generate-btn");
const activityEl = document.getElementById("activity-el");
const titleEl = document.getElementById("title-el");

generateBtnEl.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      activityEl.textContent = data.activity;
      titleEl.textContent = "🦾 HappyBot🦿"
      generateBtnEl.classList.add("fun-btn");
      document.body.classList.add("fun");
    });
});
