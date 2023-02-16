var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  //! if (typeof startEl === "undefined") {  
  //!   startEl = document.body;
  //! }
  //todo Las 3 lineas de arriba se pasan por default arriba --> startEl=document.body

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
if(matchFunc(startEl)) resultSet.push(startEl);
//* startEl.children = [div, div, h1, h2]
for (const child of startEl.children) {
  let newElements = traverseDomAndCollectElements(matchFunc, child);
  resultSet = [...resultSet, ...newElements]
}
return resultSet;
//! for (let i = 0; i < startEl.children.length; i++) {
//!     var result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
//!     resultSet = [...resultSet, ...result]
//! }
//! return resultSet;
};

//? 1  recorrer el arbol (DOM):traverseDomCollectElements
       //* Verificar si el nodo actual (elemento) es mi target
//? 2  Verifica: matchFunctionMaker
       //* ¿Que selector?
//? 3  Que busco: selectorTypeMatcher

//! 3 Primero selectorTypeMatcher
//! 2 Despues matchFunctionMaker
//! 1 Ultimo traverseDomCollectElements -ejecuta matchFunc... para recorrer el arbol-

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

//! #pagetittle   => id
//! .image        => class
//! img.thumbnail => tag.class
//! div           => tag
var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector.startsWith("#")) return "id";
    //! if (/^#[a-zA-Z][\w-]*$/.test(selector)) {
    //!   return "id";
    //! }
    //todo if(selector[0] === "#") return "id"
    //* if(selector.charAt(0) === "#") return "id"

  if (selector.startsWith(".")) return "class";
    //! else if (/^\.[a-zA-Z][\w-]*$/.test(selector)) {
    //!  return "class";
    //todo if(selector[0] === ".") return "class"
    //* if(selector.charAt(0) === ".") return "class"

  if (selector.includes(".")) return "tag.class";
    //! else if (/^[a-zA-Z][\w-]*\.[a-zA-Z][\w-]*$/.test(selector)) {
    //! return "tag.class"
    //todo for(let 1=0; i< selector.length; i++) return "tag.class"
  
   else return "tag";
    //! else if (/^[a-zA-Z][\w-]*$/.test(selector)) {
    //!   return "tag";

    //! else{
    //! return "unknown"
    //! }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); //* Retorna => "id", "class", "tag.class" o "tag"
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = element => `#${element.id}` === selector;
    //! matchFunction = function(elemento) {
    //!   return "#" + elemento.id === selector;
    //! };

  } else if (selectorType === "class") {
    matchFunction = element => {
      //element.classList => [nombre1, nombre2, nombre3]
      for (const currentClass of element.classList) {
        // nombre1          .nombre1
        if(`.${currentClass}` === selector) return true;
      }
      return false;
    }
    //! matchFunction = function(elemento) {
    //!   for (let i = 0; i < elemento.classList.length; i++) {
    //!     if("." + elemento.classList[i] === selector) return true;
    //!   }
    //!   return false;
    //! };

  } else if (selectorType === "tag.class") {
    matchFunction = element => {
      const[tagName, className] = selector.split("."); //* Divide [tag, class] -divide por el .-
    //!  return matchFunctionMaker(tagName)(element) && matchFunctionMaker("." + className)(element);
        return(
          //* Retorna una funcion   - Parametro
          //*                function(element)
          matchFunctionMaker(tagName)(element) &&
          matchFunctionMaker(`.${className}`)(element)
        )
    }
    //! matchFunction = function(elemento) {
    //!   var [t, c] = selector.split(".")
    //!   return matchFunctionMaker(t)(elemento) && matchFunctionMaker("." + c)(elemento);
    //! };

  } else if(selectorType === "tag"){
    matchFunction = element => element.tagName.toLowerCase() === selector.toLowerCase();
    //! matchFunction = function(elemento) {
    //!   return elemento.tagName.toLowerCase() === selector.toLowerCase();
    //! };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);  //* El resultado de una funcion.
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

//! $(`.myClass`) --> document.querySelectorAll(`.myclass`) div
//? ESTO      es igual a            ESTO

