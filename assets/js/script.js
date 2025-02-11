// level 1
// document.querySelectorAll('.friend-card__cf').forEach(button => {
//     button.addEventListener('click', function() {
//         this.innerText = 'Accepted';
//     });
// });

// level 2
document.querySelectorAll(".friend-card__cf").forEach((button) => {
    button.addEventListener("click", function () {
        this.innerText = "Accepted";
        this.classList.add("clicked");
    });
});
document.querySelectorAll(".friend-card__er").forEach((button) => {
    button.addEventListener("click", function () {
        let box = this.closest(".friend-card__item");
        if (box) {
            box.remove();
        }
    });
});

// level 3
// document.querySelectorAll('.friend-card__cf, .friend-card__er').forEach(button => {
//     button.addEventListener('click', function() {
//         let box = this.closest('.friend-card__item');
//         if (box) {
//             box.remove();
//         }
//     });
// });

// work with see all
document.querySelector(".home__btn").addEventListener("click", function () {
    document.querySelector(".friend-card__list").classList.toggle("expanded");
    this.innerText = this.innerText === "See all" ? "Collapse" : "See all"; // Đổi text nút
});
