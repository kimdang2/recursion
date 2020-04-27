// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// returns a collection of all elements in doc with sepcific name
var getElementsByClassName = function(className) {
  let elements = [];

  // checks if element has a class list and if element has children
  function hasClassOrChild(element) {
    if(element.classList){
      // case: has multiple classes
      if (element.classList.contains(className)) {
        elements.push(element);
      }
    }

    if(element.hasChildNodes()) {
      let children = element.childNodes;
      for(const child of children) {
        hasClassOrChild(child);
      }
    }
  }

  let root = document.body;
  hasClassOrChild(root);

  return elements;
};
//can't use '===' because it checks if both arrays are stored at the same address
// so will always return false
