class Shape {
  constructor(object){
    this.object = object;
    this.properties = {};
    this.queue = [];
  }

  transact(animation){
    var properties = ShapeHelper.parseProperties(animation);
    this._setProperties(properties);
  }

  _setProperties(properties){
    for(var property in properties){
      this.object.style[property] = properties[property];
    }
  }
}
