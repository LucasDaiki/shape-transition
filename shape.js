class Shape{
  constructor(object){
    this.object = object;
    this.properties = {};
  }

  addBehavior(properties, duration){
    this.properties.transition = '';
    for(var property in properties){
      if(['width', 'height', 'top', 'left'].indexOf(property) >= 0) {
        if(this.properties.transition) this.properties.transition += ',';

        this.properties.transition += property + ' ' +  duration + 's';
        this.properties[property] = properties[property] + 'px';
      } else {
        this.properties.transition += ', ' + duration + 's';
        this.properties[property] = properties[property];
      }
    }

    return this;
  }

  animate() {
    for(var property in this.properties){
      this.object.style[property] = this.properties[property];
    }
  }
}
