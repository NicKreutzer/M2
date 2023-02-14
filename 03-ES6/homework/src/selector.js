var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
// if(matchFunc(startEl)===true)resultSet.push(startEl);
// for (let i = 0; i < startEl.children.length; i++) {
//   let result = traverseDomAndCollectElements(matchFunc.startEl.children[i])
//   resultSet = [...resultSet, ...result]; 
// }
// return resultSet;
  let traverse = function (currentEl) {       
    if (matchFunc(currentEl)) {  //! verifica si el elemento actual coincide con el criterio de búsqueda.
      resultSet.push(currentEl);
    }
   //for (var i = 0; i < currentEl.children.length; i++) {   //! llama recursivamente a traverse para cada elemento hijo.
   //  traverse(currentEl.children[i]);
   //}
    currentEl.children.forEach(function(childEl) {
      traverse(childEl);
    });
  };
  traverse(startEl);   //! comienza a recorrer el DOM desde el elemento inicial.
  return resultSet;  //! devuelve el conjunto de resultados.
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector.startsWith("#")) {
    return "id";
    //! if (/^#[a-zA-Z][\w-]*$/.test(selector)) {
    //!   return "id";
    //! }
  } else if (selector.startsWith(".")) {
    return "class";
    //! else if (/^\.[a-zA-Z][\w-]*$/.test(selector)) {
    //!  return "class";
  } else if (selector.includes(".")) {
    return "tag.class";
    //! else if (/^[a-zA-Z][\w-]*\.[a-zA-Z][\w-]*$/.test(selector)) {
    //! return "tag.class"
  } else {
    return "tag";
    //! else if (/^[a-zA-Z][\w-]*$/.test(selector)) {
    //!   return "tag";
    //! else{
    //! return "unknown"
    //! }
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    var idName = selector.slice(1);
    matchFunction = function(el) {
      return el.id === idName;
    };
  } else if (selectorType === "class") {
    var className = selector.slice(1);
    matchFunction = function(el) {
      return el.classList.contains(className);
    };
  } else if (selectorType === "tag.class") {
    var tagAndClassName = selector.split(".");
    var tagName = tagAndClassName[0];
    var className = tagAndClassName[1];
    matchFunction = function(el) {
      return el.tagName === tagName.toUpperCase() && el.classList.contains(className);
    };
  } else {
    matchFunction = function(el) {
      return el.tagName === selector.toUpperCase();
    };
  }

  return matchFunction;
  // var matchFunction = function (el) {
  //   return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
  // };
  //! selectorType === "id" ? true : false;
  //! selectorType === "class" ? true : false;
  //! selectorType === "tag.class" ? true : false;
  //! selectorType === "tag" ? true : false;
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
// var $ = function(selector) {
//   var elements;
//   var selectorMatchFunc = matchFunctionMaker(selector);
//   elements = traverseDomAndCollectElements(selectorMatchFunc, document.documentElement);
//   return elements;
// };