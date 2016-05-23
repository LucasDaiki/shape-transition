(function () {
  let shape = document.querySelector('.shape');
  let properties = {
  };

  document.addEventListener('click', (event) => {
    randomizeProperties(properties);
    let shapeModificator = new Shape(shape);
    shapeModificator.addBehavior(properties, randomizeInteger()).animate();
  });

  function randomizeProperties(properties) {
    properties.top = event.clientY;
    properties.left = event.clientX;
    properties.width = randomizeInteger()  * 10;
    properties.height = randomizeInteger() * 10;
    properties.backgroundColor = '#'
        + randomizeInteger()
        + randomizeInteger()
        + randomizeInteger();
  }

  function randomizeInteger() {
    return Math.floor(Math.random() * (9 - 1)) + 1;
  }
})();
