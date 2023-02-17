
//      document
//     /        \
//   head      body ---> Start Element
//            /    \
//         div      div
//                   \
//              <p id="nombreId" class="nombreClase">
//              element.id => nombreId

// "#nombreId"

// 1- Recorrer DOM (árbol): traverseDomAndCollectElements
//    Verificar si el nodo actual (elemento) es mi target
// 2- Verifica: matchFunctionMaker
//    ¿Qué selector?
// 3- Qué busco: selectorTypeMatcher


var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  // startEl.children = [ div, div, h1, h2]
  for (const child of startEl.children) {
    let newElements = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...newElements];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

// 3
// #pagetitle     => id
// .image         => class
// img.thumbnail  => tag.class
// div            => tag
var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#") return "id";
  if(selector.charAt(0) === ".") return "class";
  if(selector.includes(".")) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); // Retorna => id, class, tag.class ó tag
  var matchFunction;
  if (selectorType === "id") { 
    //                              nombreId       #nombreId
    matchFunction = element => `#${element.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = element => {
      // element.classList = [nombre1, nombre2]
      for (const currentClass of element.classList) {
        //   nombre1        .nombre1
        if(`.${currentClass}` === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = element => {
      const [tagName, className] = selector.split("."); // [p, nombreClase]
      // <p id="nombreId" class="nombreClase"></p>
      //  ^                 ^
      return (
        matchFunctionMaker(tagName)(element) &&
        //^----función------------^
        //                 function(element)
        matchFunctionMaker(`.${className}`)(element)
      )
    }
  } else if (selectorType === "tag") {
    //                             DIV               div
    matchFunction = element => element.tagName === selector.toUpperCase();
  }
  return matchFunction; // RETORNA UNA FUNCIÓN => retorna true o false
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
