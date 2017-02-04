# ngScrollReveal
angular implementation of the famous javascript library scrollReveal.js

STILL IN DEVELOPMENT


Usage:

Two use cases are provided:

1)Service:
the client is provided of a wrapper of the original library. Inject it in your component and you're ready
to go.

```javascript
angular.module('myModule')
  .controller('myCtrl', function(ScrollReveal){
    ScrollReveal.reveal('.myClass', {duration: 300});

  )}
})
```

2)Directive

```html
<div id="idTest" ng-scroll-reveal="options" class="firstTest">Hello</div>
```

Using it as a directive is much more powerful, you simple have to decorate your DOM element with
the directive ng-scroll-reveal passing an object representing the configuration (see the original library for the list of available options: https://github.com/jlmakes/scrollreveal)
In addition the user have the chance to  execute a sequence of animation (adding a field 'sequence' to the above object)

```javascript
optionsSequence = {
  origin: 'top',
  duration: 300,
  sequence: { //this is ignored from the original library
    selector: 'myChildSelector',
    interval: 300
  }
}
```

```html
<div ng-scroll-reveal="optionsSequence">
  <div class="myChildSelector" >Hello</div>
  <div class="myChildSelector">Hello</div>
  <div class="myChildSelector">Hello</div>
  <div class="myChildSelector">Hello</div>
</div>
```


Examples:
here is a jsfiddle with a list of working examples.


Contribution:
-clone the repository
-create a feature branch

run with:

> gulp

> gulp dist (for the minification)



<br/><br/><br/>

Credit for ScrollReveal.js https://github.com/jlmakes/scrollreveal


<br/><br/><br/>



MIT License

Copyright (c) 2017 kinotto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
