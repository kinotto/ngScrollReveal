/**
 * ngScrollReveal
 * ------------
 * Version : 1.0
 * Website : www.karimabdelcadir.com
 * Repo    : github.com/kinotto/ngScrollReveal
 * Author  : Karim
 */

(function(angular){
  'use strict';
  var moduleName = 'ngScrollReveal';
  var scrollReveal = window.sr = ScrollReveal();
  var sequenceNr = 0;
  var revealFn = scrollReveal.reveal;

  /**
   * Restore the inline style created in the element by the scrollReveal.js
   * library this logic allow a replay of the effect ondemand,
   * for example on click, see the examples.
   * @param {Object} [target]   Could be a DOM element or a selector.
   */
  var restoreInlineStyle = function(elem){
    var element = isDomElement(elem) ? elem : (document.querySelector(elem) || null);
    var elemId = element && element.getAttribute('data-sr-id');
    if(elemId){
      var styles = sr.store.elements[elemId].styles.inline;
      element.setAttribute('style', styles);
      element.removeAttribute('data-sr-id');
    }
  }

  /**
   * restoreInlineStyle is called prior the reveal function to clean the element
   * style that could have been added from previous reveal.
   * @param {Object} [target]   Could be a DOM element or a selector.
   * @param {Object} [options]  Reveal configuration.
   * @param {number} [interval]  the interval between sequence effects.
  */
  scrollReveal.reveal = function(element, options, interval){
    restoreInlineStyle(element);
    revealFn(element, options || {}, interval); //original function preserved
  }

  var isObject = function(val) {
    if (val === null) {
      return false;
    }
    return ( (typeof val === 'function') || (typeof val === 'object') );
  }
  function isDomElement(obj) {
    try {
      //Using W3 DOM2 (works for FF, Opera and Chrom)
      return obj instanceof HTMLElement;
    }
    catch(e){
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have. (works on IE7)
    return (typeof obj==="object") &&
    (obj.nodeType===1) && (typeof obj.style === "object") &&
    (typeof obj.ownerDocument ==="object");
    }
  }
  angular.module(moduleName, [])
  .directive('ngScrollReveal', ['$timeout', '$compile', function($timeout, $compile){

    return {
      restrict: 'A',
      scope: {
        options: '=ngScrollReveal'
      },
      link: function(scope, element, attrs){

        var opt = scope.options || {};
        var applySequence = function(childrenSelector){
          var children = childrenSelector ?
            (element[0].querySelectorAll(childrenSelector) || []) :
            (element[0].children || []);
          var sequenceClass = 'ngScrollRevealSequence'+sequenceNr;
          for(var i = 0; i < children.length;  i++){
            children[i].className += ' '+sequenceClass;
          }
          if(children.length > 0){
                scrollReveal.reveal('.' + sequenceClass, opt, opt.sequence.interval || 200);
              sequenceNr++;
          }
        }
        if(opt.sequence){
          element.css('visibility', 'hidden'); //avoid flashy effects on the element during the animation
          $timeout(function(){ //wait dom rendering
            applySequence(opt.sequence.selector);
          })
        } else{
           element.css('visibility', 'hidden');
           $timeout(function(){ //wait dom rendering
              scrollReveal.reveal(element[0], opt);
            })
        }
      }
    }
  }])


  .factory('ScrollReveal', [function(){
      return scrollReveal; //wrapper of the original library
  }])

})(window.angular);
