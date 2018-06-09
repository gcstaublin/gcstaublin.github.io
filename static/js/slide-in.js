// Debounce
// --------------------------
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}




// Images
// --------------------------
const elements = document.querySelectorAll('.slide-up');




// Functions
// --------------------------
function checkElement(e) {
  elements.forEach(element => {
    // quarter way through the element
    const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 3;
    const isHalfShown = slideInAt > element.offsetTop;
    console.log(element.offsetHeight, window.scrollY, window.innerHeight, slideInAt, element.offsetTop);

    if(isHalfShown) {
      element.classList.add('active');
    }
  });
}




// Event Listners
// --------------------------
window.addEventListener('scroll', debounce(checkElement));
