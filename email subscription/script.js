const scriptURL =
  "https://script.google.com/macros/s/AKfycbyXCPA0NFhQbov5hdQmgAuT-_HRepC-9ESjvjevweywQKFM-pLOz4RS22fomHgUaz4d/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      setTimeout(() => {
        msg.innerHTML = "Message sent successfully";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
