const scroll = document.querySelector(".scroll");

const scrollBlock = function scrollBlock() {
  setInterval(function () {
    if (window.pageYOffset > 800) {
      scroll.style.display = 'block';
    } else {
      scroll.style.display = 'none';
    }
  }, 1000);
};
window.addEventListener('wheel', scrollBlock);

const scrollTopUp = function scrollTopUp() {
  const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  window.scrollBy(0, -top);
};
scroll.addEventListener('click', scrollTopUp);
