const generateBtnEl = document.getElementById("generate-btn");
const activityEl = document.getElementById("activity-el");

generateBtnEl.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      activityEl.textContent = data.activity;
    });
});
