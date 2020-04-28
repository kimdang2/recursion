// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// returns a collection of all elements in doc with sepcific name
var getElementsByClassName = function(className) {
  let elements = [];

  // checks if element has a class list and if element has children
  function getClass(node) {
    if(node.classList){
      // case: has multiple classes
      if (node.classList.contains(className)) {
        elements.push(node);
      }
    }

    if(node.hasChildNodes()) {
      let children = node.childNodes;
      for(const child of children) {
        getClass(child);
      }
    }
  }

  let root = document.body;
  getClass(root);

  return elements;
};
//can't use '===' because it checks if both arrays are stored at the same address
// so will always return false
