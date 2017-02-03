(function(angular, scrollReveal){
	'use strict';
	var moduleName = 'ngScrollReveal';
	var scrollReveal = window.sr = ScrollReveal();
	var revealFn = scrollReveal.reveal;
	var restoreInlineStyle = function(selector){
		var element = document.querySelector(selector);
		var elemId = element.getAttribute('data-sr-id');
		if(elemId){
			var styles = sr.store.elements[elemId].styles.inline;
			element.setAttribute('style', styles);
			element.removeAttribute('data-sr-id');
		}	
    }
	scrollReveal.reveal = function(element, options){
		restoreInlineStyle(element);
		revealFn(element, options);
	}
	var isObject = function(val) {
	    if (val === null) { 
	    	return false;
	    }
	    return ( (typeof val === 'function') || (typeof val === 'object') );
	}
	angular.module(moduleName, [])
	.directive('ngScrollReveal', [function(){

		return {
			restrict: 'A',
			scope: {
				options: '=ngScrollReveal',
			},
			link: function(scope, element, attrs){
				var opt = scope.options || {};
				scrollReveal.reveal(element[0], opt);
			}
		}
	}])
	.factory('ScrollReveal', [function(){
		return scrollReveal;
	}])
	
})(window.angular);