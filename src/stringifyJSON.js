// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let objStringify = [];
  let arrStringify = [];

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null || obj instanceof Date) {
    return `${obj}`
  } else if (typeof obj === 'string'){
      return `"${obj}"`;
  }

  else if (Array.isArray(obj)){
    for(var ele of obj){
      if (typeof ele === 'undefined' || typeof ele === 'function'){
        arrStringify.push(null);
      } else {
        arrStringify.push(stringifyJSON(ele));
      }
    }
    return `[${arrStringify}]`;

  } else if (typeof obj === 'object'){
    Object.keys(obj).forEach(function(key) { // ['name','age','color']
      var value = obj[key];
      if (typeof value === "function" || value === undefined){
        delete obj[key];
      } else if (typeof value === 'boolean' || typeof value === 'number' || value === null){
        objStringify.push(`"${key}":${value}`);
      } else if (typeof value === 'string'){
        objStringify.push(`"${key}":"${value}"`); // "{"name":"value"}"
      } else if (typeof value === "object") {
        objStringify.push(`"${key}":${stringifyJSON(value)}`);
      }
    });
    return `{${objStringify}}`;
  }
}
