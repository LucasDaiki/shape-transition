class ShapeHelper{
  static parseProperties(animation){
    var properties = {};
    for(var property in animation.properties){
      properties[property] = this.formatProperty(property, animation.properties[property]);
    }

    properties.transition = this.formatDuration(animation.duration);
    return properties;
  }

  static formatDuration(duration){
    return (duration/1000).toFixed(2) + 's';
  }

  static formatProperty(attribute, value){
    var map = {
      width: function (v) { return v + 'px'; },
      height: function (v) { return v + 'px'; },
      top: function (v) { return v + 'px'; },
      left: function (v) { return v + 'px'; }
    };

    var formater = map[attribute];

    if(formater) return formater(value);
    else return value;
  }
}
