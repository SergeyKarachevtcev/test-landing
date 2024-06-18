window.addEventListener('scroll', function () {
  let scroll = window.scrollY;

  let paralaxElements = document.querySelectorAll('.paralax-img');
  paralaxElements.forEach(function (element) {
    let speed = parseFloat(element.getAttribute('data-speed'));
    element.style.transform = 'translateY(' + scroll * speed + 'px)';
  });
});
