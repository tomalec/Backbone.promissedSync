Backbone.promissedSync
======================

**v0.0.1**

Maintained by Tomek Wytrebowicz [(tomalec)](https://github.com/tomalec).

Overrides `Backbone.Sync` to return a promise that will be resolved with model or collection instance instead of just `$.ajax` response.

Depends on Underscore, Backbone, and jQuery(>=1.6). AMD compatible.


## Usage

Include Backbone.promissedSync.

```html
<script type="text/javascript" src="backbone.js"></script>
<script type="text/javascript" src="backbone.promissedsync.js"></script>
```

And now have fun with your model available in your promise chain.

```javascript
Meal = Backbone.View.extend({
    //..
    buy: function buy(){
        //..
        return this.model.save(receipt.show);
    }
});
Receipt = Backbone.View.extend({
    //..
    show: function add( orderedMeal ){
        //..
    }
});
```


## License

Licensed under MIT license

Copyright (c) 2013 Tomek Wytrebowicz

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.