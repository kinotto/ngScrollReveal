

<p align="center"><img src="http://i.imgur.com/RgiL1zw.png" alt="no image" class="inline"/></p>

<!--<p align="center"> <img src="http://i.imgur.com/RwBUMv9.gif" alt="no image" class="inline"/></p>-->

<p align="center">Angular implementation of the famous animation library <a href="https://github.com/jlmakes/scrollreveal">scrollReveal.js</a></p>


### 1. Installation


> bower install --save ngScrollReveal

<br/>

Load scripts:

```html
<script type="text/javascript" src="bower_components/scrollreveal/dist/scrollreveal.js"></script>
<script type="text/javascript" src="bower_components/ngScrollReveal/ngScrollReveal.min.js"></script>
```
and remember to add the module as a dependency:
```javascript
angular.module('myModule', ['ngScrollReveal']);
```


### 2. Usage:

Two use cases are provided:

- **Service**: the client is provided of a wrapper of the original library. Inject it in your component and you're ready
to go. you can refer to the [original doc](https://github.com/jlmakes/scrollreveal) for the list of available api.

  ```javascript
  angular.module('myModule')
    .controller('myCtrl', function(ScrollReveal){
      ScrollReveal.reveal('.myClass', {duration: 300});

    )}
  })
  ```

- **Directive**: using it as a directive is much more powerful, you simple have to decorate your DOM element with the directive ```ng-scroll-reveal``` passing an object representing the [options](https://github.com/jlmakes/scrollreveal).
In addition the user have the chance to execute a sequence of animation (adding a field 'sequence' to the above object)

  #### A basic usage:
  ```javascript
  options= {
    origin: 'top',
    duration: 300 //ms
  }
  ```
  ```html
  <div id="idTest" ng-scroll-reveal="options">Hello</div>
  ```


  #### Advanced Usage with sequenced animations:

  ```javascript
  optionsSequence = {
    origin: 'top',
    duration: 300,
    sequence: {
      selector: 'myChildSelector', //optional field, if not specified all the DIRECT children will be animated
      interval: 300
    }
  }
  ```

  ```html
  <div ng-scroll-reveal="optionsSequence">
    <div class="myChildSelector">Hello</div>
    <div class="myChildSelector">Hello</div>
    <div class="myChildSelector">Hello</div>
    <div class="myChildSelector">Hello</div>
  </div>
  ```
<img src="http://i.imgur.com/Do3Ht57.gif" alt="no image" />

### 3. Examples:
* Github page made using the directive [**here**](https://kinotto.github.io/ngScrollReveal/github_page)
* here is a [**link**](https://plnkr.co/edit/uBwOZf8OrQOfY31EAslM?p=preview) to a plunkr with a list of working examples.


### 4. Contribution:
Feel free to contribute, any help is really appreciated :)


run with:

>gulp

>gulp dist (for the minification)



<br/><br/><br/>

Credit for scrollReveal.js to @jlmakes


<br/><br/><br/>



### 5. License:
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
