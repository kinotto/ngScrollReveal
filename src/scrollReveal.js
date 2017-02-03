(function(angular){
	'use strict';
	var moduleName = 'ngScrollReveal';
	var scrollReveal = window.sr = ScrollReveal();
	var revealFn = scrollReveal.reveal;
	var restoreInlineStyle = function(elem){
		var element = isDomElement(elem) ? elem : document.querySelector(elem);
		var elemId = element.getAttribute('data-sr-id');
		if(elemId){
			var styles = sr.store.elements[elemId].styles.inline;
			element.setAttribute('style', styles);
			element.removeAttribute('data-sr-id');
		}	
    }
	scrollReveal.reveal = function(element, options){
		restoreInlineStyle(element); //allow replay of the effect on demand , eg. onclick
		revealFn(element, options || {}); //original function preserved
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
	.directive('ngScrollReveal', [function(){

		return {
			restrict: 'A',
			scope: {
				options: '=ngScrollReveal',
				isSequential: '@ngScrollRevealSequence' 
			},
			link: function(scope, element, attrs){
				var opt = scope.options || {};

				scrollReveal.reveal(element[0], opt);
			}
		}
	}])
	.directive('ngChild', [function(){

		return {
			restrict: 'A',
			require: '^ngScrollReveal',
			scope: {
				child: '=ngChild'
			},
			link: function(scope, element, attrs){
				//TODO TOGLIERE QUESTA DIRETTIVA
			}
		}
	}])

	.factory('ScrollReveal', [function(){
		return scrollReveal;
	}])
	
})(window.angular);