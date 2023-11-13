# Plain JavaScript Effects

Vanilla JavaScript version of some JQuery effects.   
`show()`, `hide()`, `toggle()`, `slideToggle()`, `slideUp()`, and `slideDown()`   
No dependencies are required.    
Just query the element by vanilla JS and apply the above functions for the element.
```
element.slideToggle()
document.querySelector('.myDiv').hide();
```

Check out [the demo page](https://hungle00.github.io/plain-js-effect/).

## Example Usage
```
<button class="myBtn">Click me</button>
<div class="myDiv">blah blah blah</div>

<script src="index.js"></script>
<script>
  // when you click the button, open and close the div:
  document.querySelector('.myBtn').addEventListener('click', () => {
    document.querySelector('.myDiv').slideToggle();
  });
</script>
```

