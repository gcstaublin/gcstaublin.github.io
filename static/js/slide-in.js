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




// Elements
// --------------------------
const elementsInView = document.querySelectorAll('.js--in-view');




// Functions
// --------------------------
function checkElement(e) {
  elementsInView.forEach(element => {

    // x way through the element
    let elementCoords = element.getBoundingClientRect();
    // let slideInAt = window.innerHeight - element.offsetHeight / 3;
    let slideInAt = window.innerHeight - 20;
    let isHalfShown = slideInAt > elementCoords.top;

    if(isHalfShown) {
      element.classList.add('element--is-in-view');
    }
  });
}




// Event Listners
// --------------------------
window.addEventListener('scroll', debounce(checkElement));


// Run on page load to get any elements in view appearing
checkElement();
