(function () {
  let shape = document.querySelector('.shape');

  let step = {
    duration: 1000,
    properties:{
      height: 100,
      width: 100,
      top: 100,
      left: 100,
      backgroundColor: '#FF0000'
    },
    ease: {
      type: 'ease-in',
      duration: 1
    }
  };

  document.addEventListener('click', (event) => {
    let shapeModificator = new Shape(shape);
    shapeModificator
      .transact(step);
  });
})();
