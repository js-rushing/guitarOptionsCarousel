"use strict";

// Make light color from txt_color
var lightColor = function lightColor(txt_color) {
  var txt_color_arr = txt_color.split('').splice(1, txt_color.length - 1);
  var new_arr = [];
  txt_color_arr.forEach(function (_char) {
    _char = _char.toUpperCase();

    switch (_char) {
      case '0':
        _char = '3';
        break;

      case '1':
        _char = '4';
        break;

      case '2':
        _char = '5';
        break;

      case '3':
        _char = '6';
        break;

      case '4':
        _char = '7';
        break;

      case '5':
        _char = '8';
        break;

      case '6':
        _char = '9';
        break;

      case '7':
        _char = 'A';
        break;

      case '8':
        _char = 'B';
        break;

      case '9':
        _char = 'C';
        break;

      case 'A':
        _char = 'D';
        break;

      case 'B':
        _char = 'E';
        break;

      case 'C':
        _char = 'F';
        break;

      case 'D':
        _char = 'F';
        break;

      case 'E':
        _char = 'F';
        break;

      case 'F':
        break;

      default:
    }

    new_arr.push(_char);
  });
  new_str = '#' + new_arr.join('');
  return new_str;
};