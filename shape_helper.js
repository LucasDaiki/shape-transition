class ShapeHelper{
  static parseProperties(animation){
    var result = {};
    const { duration, ease, properties } = animation;

    for(var property in properties){
      result[property] = this.formatProperty(property, properties[property]);
    }

    result.transition = this.formatDuration(duration) || '0s';

    if(animation.ease){
      result.transition = [
        result.transition,
        ease.type + ' ' + this.formatDuration(ease.duration)
      ].join(', ');
    }

    return result;
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
