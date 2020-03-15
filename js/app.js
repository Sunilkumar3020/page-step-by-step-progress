const btns = document.querySelectorAll(".button");
allBtn = Array.from(btns);
// const modalBody = document.querySelector(".modal-body");
const activeBtn = document.querySelector(".modal-header span");

allBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    console.log(allBtn);
    if (true) {
      modalBody = btn.parentNode.parentNode.parentNode;
      modalBody.classList.add("animate-out");
      modalBody.nextElementSibling.classList.add("animate-in");
      modalBody.classList.remove("animate-in");
      modalBody.classList.add("is-showing");
    }
  });
});

// btn.addEventListener("click", function() {
//   //   modalBody = this.parentNode.parentNode.parentNode;
//   this.modalBody.classList.add("animate-out");
//   this.modalBody.nextElementSibling.classList.add("animate-in");
// });
