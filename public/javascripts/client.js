;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var navigation, scrolling, section_height, speak;

navigation = require('./navigation.coffee');

navigation();

speak = require('./speak.coffee');

speak();

scrolling = require('./scrolling.coffee');

scrolling();

section_height = require('./section_height.coffee');

section_height();


},{"./navigation.coffee":2,"./scrolling.coffee":3,"./section_height.coffee":4,"./speak.coffee":5}],2:[function(require,module,exports){
var $;

$ = require('jQuery');

module.exports = function() {
  var nav, set_chapter;
  $('#chapter2 .section1').waypoint(function() {
    return $('#navigation').toggleClass('visible');
  });
  nav = $('#navigation a');
  set_chapter = function(nav, chapter) {
    return nav.removeClass('active').filter(chapter).addClass('active');
  };
  $('#chapter2 .section1').waypoint(function() {
    return set_chapter(nav, '.chapter2');
  });
  $('#chapter3 .section1, #chapter3 .section4').waypoint(function() {
    return set_chapter(nav, '.chapter3');
  });
  $('#chapter4 .section1, #chapter4 .section4').waypoint(function() {
    return set_chapter(nav, '.chapter4');
  });
  $('#chapter5 .section1, #chapter5 .section3').waypoint(function() {
    return set_chapter(nav, '.chapter5');
  });
  $('#chapter6 .section1, #chapter6 .section4').waypoint(function() {
    return set_chapter(nav, '.chapter6');
  });
  $('#chapter7 .section1, #chapter7 .section4').waypoint(function() {
    return set_chapter(nav, '.chapter7');
  });
  $('#chapter8 .section1, #chapter8 .section4').waypoint(function() {
    return set_chapter(nav, '.chapter8');
  });
  return $('#chapter9 .section1').waypoint(function() {
    return set_chapter(nav, '.chapter9');
  });
};


},{}],3:[function(require,module,exports){
module.exports = function() {
  var scroll, scrolling;
  scrolling = false;
  scroll = function(direction) {
    var current_position, offset, target, window_height;
    if (direction == null) {
      direction = 'down';
    }
    scrolling = true;
    window_height = $(window).height();
    current_position = $(document).scrollTop();
    offset = current_position % window_height;
    target = direction === 'up' ? current_position - (offset === 0 ? window_height : offset) : current_position + (offset === 0 ? window_height : window_height - offset);
    $('html, body').animate({
      scrollTop: target
    }, 400);
    return scrolling = false;
  };
  key('pageup', function() {
    if (!scrolling) {
      scroll('up');
    }
    return false;
  });
  return key('pagedown', function() {
    if (!scrolling) {
      scroll();
    }
    return false;
  });
};


},{}],4:[function(require,module,exports){
var $, set_height;

$ = require('jQuery');

set_height = function() {
  var height;
  height = $(window).height();
  return $('div.section').css('height', "" + height + "px");
};

module.exports = function() {
  return $(function() {
    set_height();
    return $(window).on('resize', set_height);
  });
};


},{}],5:[function(require,module,exports){
module.exports = function() {
  return $('#speak').on('click', function() {
    var commands;
    if (annyang) {
      commands = {
        'chapter :number': function(num) {
          return window.scrollTo(0, $("#chapter" + num).offset().top);
        }
      };
      annyang.init(commands);
      return annyang.start();
    }
  });
};


},{}]},{},[1,2,3,4,5])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9jaHJpcy93b3Jrc3BhY2UvcG90dGVyeS9hcHAvcHVibGljL2NvZmZlZS9tYWluLmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL25hdmlnYXRpb24uY29mZmVlIiwiL2hvbWUvY2hyaXMvd29ya3NwYWNlL3BvdHRlcnkvYXBwL3B1YmxpYy9jb2ZmZWUvc2Nyb2xsaW5nLmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL3NlY3Rpb25faGVpZ2h0LmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL3NwZWFrLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQSx3Q0FBQTs7QUFBQSxDQUFBLEVBQWEsSUFBQSxHQUFiLFdBQWE7O0FBQ2IsQ0FEQSxTQUNBOztBQUVBLENBSEEsRUFHUSxFQUFSLEVBQVEsU0FBQTs7QUFDUixDQUpBLElBSUE7O0FBRUEsQ0FOQSxFQU1ZLElBQUEsRUFBWixXQUFZOztBQUNaLENBUEEsUUFPQTs7QUFFQSxDQVRBLEVBU2lCLElBQUEsT0FBakIsV0FBaUI7O0FBQ2pCLENBVkEsYUFVQTs7OztBQ1ZBLENBQUEsR0FBQTs7QUFBQSxDQUFBLEVBQUksSUFBQSxDQUFBOztBQUVKLENBRkEsRUFFaUIsR0FBWCxDQUFOLEVBQWlCO0NBQ2YsS0FBQSxVQUFBO0NBQUEsQ0FBQSxDQUFrQyxLQUFsQyxDQUFrQyxZQUFsQztDQUFxQyxRQUFBLEVBQUEsRUFBQTtDQUFyQyxFQUFrQztDQUFsQyxDQUVBLENBQUEsWUFBTTtDQUZOLENBR0EsQ0FBYyxJQUFBLEVBQUMsRUFBZjtDQUNNLEVBQUQsR0FBSCxDQUFBLENBQUEsR0FBQTtDQUpGLEVBR2M7Q0FIZCxDQU1BLENBQWtDLEtBQWxDLENBQWtDLFlBQWxDO0NBQ2MsQ0FBSyxDQUFqQixRQUFBO0NBREYsRUFBa0M7Q0FObEMsQ0FRQSxDQUF1RCxLQUF2RCxDQUF1RCxpQ0FBdkQ7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUF1RDtDQVJ2RCxDQVVBLENBQXVELEtBQXZELENBQXVELGlDQUF2RDtDQUNjLENBQUssQ0FBakIsUUFBQTtDQURGLEVBQXVEO0NBVnZELENBWUEsQ0FBdUQsS0FBdkQsQ0FBdUQsaUNBQXZEO0NBQ2MsQ0FBSyxDQUFqQixRQUFBO0NBREYsRUFBdUQ7Q0FadkQsQ0FjQSxDQUF1RCxLQUF2RCxDQUF1RCxpQ0FBdkQ7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUF1RDtDQWR2RCxDQWdCQSxDQUF1RCxLQUF2RCxDQUF1RCxpQ0FBdkQ7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUF1RDtDQWhCdkQsQ0FrQkEsQ0FBdUQsS0FBdkQsQ0FBdUQsaUNBQXZEO0NBQ2MsQ0FBSyxDQUFqQixRQUFBO0NBREYsRUFBdUQ7Q0FFdkQsRUFBa0MsS0FBbEMsQ0FBQSxZQUFBO0NBQ2MsQ0FBSyxDQUFqQixRQUFBO0NBREYsRUFBa0M7Q0FyQm5COzs7O0FDRmpCLENBQU8sRUFBVSxHQUFYLENBQU4sRUFBaUI7Q0FDZixLQUFBLFdBQUE7Q0FBQSxDQUFBLENBQVksRUFBWixJQUFBO0NBQUEsQ0FDQSxDQUFTLEdBQVQsR0FBVTtDQUNSLE9BQUEsdUNBQUE7O0dBRG9CLEdBQVo7TUFDUjtDQUFBLEVBQVksQ0FBWixLQUFBO0NBQUEsRUFDZ0IsQ0FBaEIsRUFBZ0IsT0FBaEI7Q0FEQSxFQUVtQixDQUFuQixJQUFtQixDQUFBLE9BQW5CO0NBRkEsRUFHUyxDQUFULEVBQUEsT0FIQSxHQUdTO0NBSFQsRUFJWSxDQUFaLENBQXlCLENBQXpCLEdBQVksSUFDVyxHQUFuQjtDQUxKLEdBUUEsR0FBQSxLQUFBO0NBQ0UsQ0FBVyxJQUFYLEdBQUE7Q0FURixDQVVFLENBRkYsR0FBQTtDQVRPLEVBWUssTUFBWixFQUFBO0NBYkYsRUFDUztDQURULENBZ0JBLENBQUEsS0FBQSxDQUFjO0FBQ1EsQ0FBcEIsR0FBQSxLQUFBO0NBQUEsR0FBQSxFQUFBO01BQUE7Q0FEWSxVQUVaO0NBRkYsRUFBYztDQUlWLENBQVksQ0FBaEIsTUFBQSxDQUFBO0FBQ2tCLENBQWhCLEdBQUEsS0FBQTtDQUFBLEtBQUE7TUFBQTtDQURjLFVBRWQ7Q0FGRixFQUFnQjtDQXJCRDs7OztBQ0FqQixJQUFBLFNBQUE7O0FBQUEsQ0FBQSxFQUFJLElBQUEsQ0FBQTs7QUFHSixDQUhBLEVBR2EsTUFBQSxDQUFiO0NBQ0UsS0FBQTtDQUFBLENBQUEsQ0FBUyxHQUFUO0NBQ0EsQ0FBK0IsQ0FBL0IsQ0FBQSxFQUErQixFQUEvQixDQUFBLElBQUE7Q0FGVzs7QUFJYixDQVBBLEVBT2lCLEdBQVgsQ0FBTixFQUFpQjtDQUNmLEVBQUUsTUFBRjtDQUNFLEdBQUEsTUFBQTtDQUNBLENBQUEsSUFBQSxFQUFBLEVBQUEsQ0FBQTtDQUZGLEVBQUU7Q0FEYTs7OztBQ1BqQixDQUFPLEVBQVUsR0FBWCxDQUFOLEVBQWlCO0NBQ2YsQ0FBQSxDQUF3QixJQUF4QixDQUFBLENBQUE7Q0FDRSxPQUFBO0NBQUEsR0FBQSxHQUFBO0NBQ0UsRUFDRSxHQURGLEVBQUE7Q0FDRSxDQUFtQixDQUFBLEtBQW5CLENBQW9CLFFBQXBCO0NBQW1DLENBQVksQ0FBWSxHQUF6QixFQUFOLEVBQXNCLE9BQXRCO0NBQTVCLFFBQW1CO0NBRHJCLE9BQUE7Q0FBQSxHQUVBLEVBQUEsQ0FBTyxDQUFQO0NBQ1EsSUFBUixFQUFPLE1BQVA7TUFMb0I7Q0FBeEIsRUFBd0I7Q0FEVCIsInNvdXJjZXNDb250ZW50IjpbIm5hdmlnYXRpb24gPSByZXF1aXJlKCcuL25hdmlnYXRpb24uY29mZmVlJylcbm5hdmlnYXRpb24oKVxuXG5zcGVhayA9IHJlcXVpcmUoJy4vc3BlYWsuY29mZmVlJylcbnNwZWFrKClcblxuc2Nyb2xsaW5nID0gcmVxdWlyZSgnLi9zY3JvbGxpbmcuY29mZmVlJylcbnNjcm9sbGluZygpXG5cbnNlY3Rpb25faGVpZ2h0ID0gcmVxdWlyZSgnLi9zZWN0aW9uX2hlaWdodC5jb2ZmZWUnKVxuc2VjdGlvbl9oZWlnaHQoKVxuIiwiJCA9IHJlcXVpcmUoJ2pRdWVyeScpXG5cbm1vZHVsZS5leHBvcnRzID0gLT5cbiAgJCgnI2NoYXB0ZXIyIC5zZWN0aW9uMScpLndheXBvaW50IC0+ICQoJyNuYXZpZ2F0aW9uJykudG9nZ2xlQ2xhc3MoJ3Zpc2libGUnKVxuXG4gIG5hdiA9ICQoJyNuYXZpZ2F0aW9uIGEnKVxuICBzZXRfY2hhcHRlciA9IChuYXYsIGNoYXB0ZXIpIC0+XG4gICAgbmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5maWx0ZXIoY2hhcHRlcikuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgJCgnI2NoYXB0ZXIyIC5zZWN0aW9uMScpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXIyJylcbiAgJCgnI2NoYXB0ZXIzIC5zZWN0aW9uMSwgI2NoYXB0ZXIzIC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXIzJylcbiAgJCgnI2NoYXB0ZXI0IC5zZWN0aW9uMSwgI2NoYXB0ZXI0IC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI0JylcbiAgJCgnI2NoYXB0ZXI1IC5zZWN0aW9uMSwgI2NoYXB0ZXI1IC5zZWN0aW9uMycpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI1JylcbiAgJCgnI2NoYXB0ZXI2IC5zZWN0aW9uMSwgI2NoYXB0ZXI2IC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI2JylcbiAgJCgnI2NoYXB0ZXI3IC5zZWN0aW9uMSwgI2NoYXB0ZXI3IC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI3JylcbiAgJCgnI2NoYXB0ZXI4IC5zZWN0aW9uMSwgI2NoYXB0ZXI4IC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI4JylcbiAgJCgnI2NoYXB0ZXI5IC5zZWN0aW9uMScpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI5JylcbiIsIm1vZHVsZS5leHBvcnRzID0gLT5cbiAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgc2Nyb2xsID0gKGRpcmVjdGlvbiA9ICdkb3duJykgLT5cbiAgICBzY3JvbGxpbmcgPSB0cnVlXG4gICAgd2luZG93X2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuICAgIGN1cnJlbnRfcG9zaXRpb24gPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKVxuICAgIG9mZnNldCA9IGN1cnJlbnRfcG9zaXRpb24gJSB3aW5kb3dfaGVpZ2h0XG4gICAgdGFyZ2V0ID0gaWYgZGlyZWN0aW9uIGlzICd1cCdcbiAgICAgICAgY3VycmVudF9wb3NpdGlvbiAtIGlmIG9mZnNldCBpcyAwIHRoZW4gd2luZG93X2hlaWdodCBlbHNlIG9mZnNldFxuICAgICAgZWxzZVxuICAgICAgICBjdXJyZW50X3Bvc2l0aW9uICsgaWYgb2Zmc2V0IGlzIDAgdGhlbiB3aW5kb3dfaGVpZ2h0IGVsc2Ugd2luZG93X2hlaWdodCAtIG9mZnNldFxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlXG4gICAgICBzY3JvbGxUb3A6IHRhcmdldFxuICAgICwgNDAwXG4gICAgc2Nyb2xsaW5nID0gZmFsc2VcblxuIyBoaWdoamFjayBwYWdldXAgYW5kIGRvd25cbiAga2V5ICdwYWdldXAnLCAtPlxuICAgIHNjcm9sbCgndXAnKSB1bmxlc3Mgc2Nyb2xsaW5nXG4gICAgZmFsc2VcblxuICBrZXkgJ3BhZ2Vkb3duJywgLT5cbiAgICBzY3JvbGwoKSB1bmxlc3Mgc2Nyb2xsaW5nXG4gICAgZmFsc2VcbiIsIiQgPSByZXF1aXJlKCdqUXVlcnknKVxuXG4jIG1hdGNoIGhlaWdodCBvbiBlYWNoIHNlY3Rpb24gdG8gYnJvd3Nlclxuc2V0X2hlaWdodCA9IC0+XG4gIGhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuICAkKCdkaXYuc2VjdGlvbicpLmNzcyAnaGVpZ2h0JywgXCIje2hlaWdodH1weFwiXG5cbm1vZHVsZS5leHBvcnRzID0gLT5cbiAgJCAtPlxuICAgIHNldF9oZWlnaHQoKVxuICAgICQod2luZG93KS5vbiAncmVzaXplJywgc2V0X2hlaWdodFxuIiwibW9kdWxlLmV4cG9ydHMgPSAtPlxuICAkKCcjc3BlYWsnKS5vbiAnY2xpY2snLCAtPlxuICAgIGlmIGFubnlhbmdcbiAgICAgIGNvbW1hbmRzID1cbiAgICAgICAgJ2NoYXB0ZXIgOm51bWJlcic6IChudW0pIC0+IHdpbmRvdy5zY3JvbGxUbyAwLCAkKFwiI2NoYXB0ZXIje251bX1cIikub2Zmc2V0KCkudG9wXG4gICAgICBhbm55YW5nLmluaXQgY29tbWFuZHNcbiAgICAgIGFubnlhbmcuc3RhcnQoKVxuIl19
;