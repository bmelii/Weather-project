const scrollToTopBtn = document.querySelector(".scroll-to-top")


scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top:`0`,
    behaviour:`smooth`,
  });
});

document.addEventListener("scroll", function () {
  const viewportHeight = window.innerHeight;
  if (window.scrollY > viewportHeight / 2){
    scrollToTopBtn.style.visibility = "visible";
} else {
  scrollToTopBtn.style.visibility = "hidden"
}
});
