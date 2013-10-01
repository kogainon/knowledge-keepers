;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var navigation, scrolling, section_height, speak;

flowplayer.conf.adaptiveRatio = true;

navigation = require('./navigation.coffee');

navigation();

speak = require('./speak.coffee');

speak();

scrolling = require('./scrolling.coffee');

scrolling();

section_height = require('./section_height.coffee');

section_height();


},{"./navigation.coffee":2,"./scrolling.coffee":3,"./section_height.coffee":4,"./speak.coffee":5}],2:[function(require,module,exports){
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
var set_height;

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


},{}]},{},[1,4,3,2,5])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9jaHJpcy93b3Jrc3BhY2UvcG90dGVyeS9hcHAvcHVibGljL2NvZmZlZS9tYWluLmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL25hdmlnYXRpb24uY29mZmVlIiwiL2hvbWUvY2hyaXMvd29ya3NwYWNlL3BvdHRlcnkvYXBwL3B1YmxpYy9jb2ZmZWUvc2Nyb2xsaW5nLmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL3NlY3Rpb25faGVpZ2h0LmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL3NwZWFrLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQSx3Q0FBQTs7QUFBQSxDQUFBLEVBQWdDLENBQWpCLE1BQUwsR0FBVjs7QUFFQSxDQUZBLEVBRWEsSUFBQSxHQUFiLFdBQWE7O0FBQ2IsQ0FIQSxTQUdBOztBQUVBLENBTEEsRUFLUSxFQUFSLEVBQVEsU0FBQTs7QUFDUixDQU5BLElBTUE7O0FBRUEsQ0FSQSxFQVFZLElBQUEsRUFBWixXQUFZOztBQUNaLENBVEEsUUFTQTs7QUFFQSxDQVhBLEVBV2lCLElBQUEsT0FBakIsV0FBaUI7O0FBQ2pCLENBWkEsYUFZQTs7OztBQ1pBLENBQU8sRUFBVSxHQUFYLENBQU4sRUFBaUI7Q0FDZixLQUFBLFVBQUE7Q0FBQSxDQUFBLENBQWtDLEtBQWxDLENBQWtDLFlBQWxDO0NBQXFDLFFBQUEsRUFBQSxFQUFBO0NBQXJDLEVBQWtDO0NBQWxDLENBRUEsQ0FBQSxZQUFNO0NBRk4sQ0FHQSxDQUFjLElBQUEsRUFBQyxFQUFmO0NBQ00sRUFBRCxHQUFILENBQUEsQ0FBQSxHQUFBO0NBSkYsRUFHYztDQUhkLENBTUEsQ0FBa0MsS0FBbEMsQ0FBa0MsWUFBbEM7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUFrQztDQU5sQyxDQVFBLENBQXVELEtBQXZELENBQXVELGlDQUF2RDtDQUNjLENBQUssQ0FBakIsUUFBQTtDQURGLEVBQXVEO0NBUnZELENBVUEsQ0FBdUQsS0FBdkQsQ0FBdUQsaUNBQXZEO0NBQ2MsQ0FBSyxDQUFqQixRQUFBO0NBREYsRUFBdUQ7Q0FWdkQsQ0FZQSxDQUF1RCxLQUF2RCxDQUF1RCxpQ0FBdkQ7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUF1RDtDQVp2RCxDQWNBLENBQXVELEtBQXZELENBQXVELGlDQUF2RDtDQUNjLENBQUssQ0FBakIsUUFBQTtDQURGLEVBQXVEO0NBZHZELENBZ0JBLENBQXVELEtBQXZELENBQXVELGlDQUF2RDtDQUNjLENBQUssQ0FBakIsUUFBQTtDQURGLEVBQXVEO0NBaEJ2RCxDQWtCQSxDQUF1RCxLQUF2RCxDQUF1RCxpQ0FBdkQ7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUF1RDtDQUV2RCxFQUFrQyxLQUFsQyxDQUFBLFlBQUE7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUFrQztDQXJCbkI7Ozs7QUNBakIsQ0FBTyxFQUFVLEdBQVgsQ0FBTixFQUFpQjtDQUNmLEtBQUEsV0FBQTtDQUFBLENBQUEsQ0FBWSxFQUFaLElBQUE7Q0FBQSxDQUNBLENBQVMsR0FBVCxHQUFVO0NBQ1IsT0FBQSx1Q0FBQTs7R0FEb0IsR0FBWjtNQUNSO0NBQUEsRUFBWSxDQUFaLEtBQUE7Q0FBQSxFQUNnQixDQUFoQixFQUFnQixPQUFoQjtDQURBLEVBRW1CLENBQW5CLElBQW1CLENBQUEsT0FBbkI7Q0FGQSxFQUdTLENBQVQsRUFBQSxPQUhBLEdBR1M7Q0FIVCxFQUlZLENBQVosQ0FBeUIsQ0FBekIsR0FBWSxJQUNXLEdBQW5CO0NBTEosR0FRQSxHQUFBLEtBQUE7Q0FDRSxDQUFXLElBQVgsR0FBQTtDQVRGLENBVUUsQ0FGRixHQUFBO0NBVE8sRUFZSyxNQUFaLEVBQUE7Q0FiRixFQUNTO0NBRFQsQ0FnQkEsQ0FBQSxLQUFBLENBQWM7QUFDUSxDQUFwQixHQUFBLEtBQUE7Q0FBQSxHQUFBLEVBQUE7TUFBQTtDQURZLFVBRVo7Q0FGRixFQUFjO0NBSVYsQ0FBWSxDQUFoQixNQUFBLENBQUE7QUFDa0IsQ0FBaEIsR0FBQSxLQUFBO0NBQUEsS0FBQTtNQUFBO0NBRGMsVUFFZDtDQUZGLEVBQWdCO0NBckJEOzs7O0FDQ2pCLElBQUEsTUFBQTs7QUFBQSxDQUFBLEVBQWEsTUFBQSxDQUFiO0NBQ0UsS0FBQTtDQUFBLENBQUEsQ0FBUyxHQUFUO0NBQ0EsQ0FBK0IsQ0FBL0IsQ0FBQSxFQUErQixFQUEvQixDQUFBLElBQUE7Q0FGVzs7QUFJYixDQUpBLEVBSWlCLEdBQVgsQ0FBTixFQUFpQjtDQUNmLEVBQUUsTUFBRjtDQUNFLEdBQUEsTUFBQTtDQUNBLENBQUEsSUFBQSxFQUFBLEVBQUEsQ0FBQTtDQUZGLEVBQUU7Q0FEYTs7OztBQ0xqQixDQUFPLEVBQVUsR0FBWCxDQUFOLEVBQWlCO0NBQ2YsQ0FBQSxDQUF3QixJQUF4QixDQUFBLENBQUE7Q0FDRSxPQUFBO0NBQUEsR0FBQSxHQUFBO0NBQ0UsRUFDRSxHQURGLEVBQUE7Q0FDRSxDQUFtQixDQUFBLEtBQW5CLENBQW9CLFFBQXBCO0NBQW1DLENBQVksQ0FBWSxHQUF6QixFQUFOLEVBQXNCLE9BQXRCO0NBQTVCLFFBQW1CO0NBRHJCLE9BQUE7Q0FBQSxHQUVBLEVBQUEsQ0FBTyxDQUFQO0NBQ1EsSUFBUixFQUFPLE1BQVA7TUFMb0I7Q0FBeEIsRUFBd0I7Q0FEVCIsInNvdXJjZXNDb250ZW50IjpbImZsb3dwbGF5ZXIuY29uZi5hZGFwdGl2ZVJhdGlvID0gdHJ1ZVxuXG5uYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi9uYXZpZ2F0aW9uLmNvZmZlZScpXG5uYXZpZ2F0aW9uKClcblxuc3BlYWsgPSByZXF1aXJlKCcuL3NwZWFrLmNvZmZlZScpXG5zcGVhaygpXG5cbnNjcm9sbGluZyA9IHJlcXVpcmUoJy4vc2Nyb2xsaW5nLmNvZmZlZScpXG5zY3JvbGxpbmcoKVxuXG5zZWN0aW9uX2hlaWdodCA9IHJlcXVpcmUoJy4vc2VjdGlvbl9oZWlnaHQuY29mZmVlJylcbnNlY3Rpb25faGVpZ2h0KClcbiIsIm1vZHVsZS5leHBvcnRzID0gLT5cbiAgJCgnI2NoYXB0ZXIyIC5zZWN0aW9uMScpLndheXBvaW50IC0+ICQoJyNuYXZpZ2F0aW9uJykudG9nZ2xlQ2xhc3MoJ3Zpc2libGUnKVxuXG4gIG5hdiA9ICQoJyNuYXZpZ2F0aW9uIGEnKVxuICBzZXRfY2hhcHRlciA9IChuYXYsIGNoYXB0ZXIpIC0+XG4gICAgbmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5maWx0ZXIoY2hhcHRlcikuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgJCgnI2NoYXB0ZXIyIC5zZWN0aW9uMScpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXIyJylcbiAgJCgnI2NoYXB0ZXIzIC5zZWN0aW9uMSwgI2NoYXB0ZXIzIC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXIzJylcbiAgJCgnI2NoYXB0ZXI0IC5zZWN0aW9uMSwgI2NoYXB0ZXI0IC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI0JylcbiAgJCgnI2NoYXB0ZXI1IC5zZWN0aW9uMSwgI2NoYXB0ZXI1IC5zZWN0aW9uMycpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI1JylcbiAgJCgnI2NoYXB0ZXI2IC5zZWN0aW9uMSwgI2NoYXB0ZXI2IC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI2JylcbiAgJCgnI2NoYXB0ZXI3IC5zZWN0aW9uMSwgI2NoYXB0ZXI3IC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI3JylcbiAgJCgnI2NoYXB0ZXI4IC5zZWN0aW9uMSwgI2NoYXB0ZXI4IC5zZWN0aW9uNCcpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI4JylcbiAgJCgnI2NoYXB0ZXI5IC5zZWN0aW9uMScpLndheXBvaW50IC0+XG4gICAgc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI5JylcbiIsIm1vZHVsZS5leHBvcnRzID0gLT5cbiAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgc2Nyb2xsID0gKGRpcmVjdGlvbiA9ICdkb3duJykgLT5cbiAgICBzY3JvbGxpbmcgPSB0cnVlXG4gICAgd2luZG93X2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKVxuICAgIGN1cnJlbnRfcG9zaXRpb24gPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKVxuICAgIG9mZnNldCA9IGN1cnJlbnRfcG9zaXRpb24gJSB3aW5kb3dfaGVpZ2h0XG4gICAgdGFyZ2V0ID0gaWYgZGlyZWN0aW9uIGlzICd1cCdcbiAgICAgICAgY3VycmVudF9wb3NpdGlvbiAtIGlmIG9mZnNldCBpcyAwIHRoZW4gd2luZG93X2hlaWdodCBlbHNlIG9mZnNldFxuICAgICAgZWxzZVxuICAgICAgICBjdXJyZW50X3Bvc2l0aW9uICsgaWYgb2Zmc2V0IGlzIDAgdGhlbiB3aW5kb3dfaGVpZ2h0IGVsc2Ugd2luZG93X2hlaWdodCAtIG9mZnNldFxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlXG4gICAgICBzY3JvbGxUb3A6IHRhcmdldFxuICAgICwgNDAwXG4gICAgc2Nyb2xsaW5nID0gZmFsc2VcblxuIyBoaWdoamFjayBwYWdldXAgYW5kIGRvd25cbiAga2V5ICdwYWdldXAnLCAtPlxuICAgIHNjcm9sbCgndXAnKSB1bmxlc3Mgc2Nyb2xsaW5nXG4gICAgZmFsc2VcblxuICBrZXkgJ3BhZ2Vkb3duJywgLT5cbiAgICBzY3JvbGwoKSB1bmxlc3Mgc2Nyb2xsaW5nXG4gICAgZmFsc2VcbiIsIiMgbWF0Y2ggaGVpZ2h0IG9uIGVhY2ggc2VjdGlvbiB0byBicm93c2VyXG5zZXRfaGVpZ2h0ID0gLT5cbiAgaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICQoJ2Rpdi5zZWN0aW9uJykuY3NzICdoZWlnaHQnLCBcIiN7aGVpZ2h0fXB4XCJcblxubW9kdWxlLmV4cG9ydHMgPSAtPlxuICAkIC0+XG4gICAgc2V0X2hlaWdodCgpXG4gICAgJCh3aW5kb3cpLm9uICdyZXNpemUnLCBzZXRfaGVpZ2h0XG4iLCJtb2R1bGUuZXhwb3J0cyA9IC0+XG4gICQoJyNzcGVhaycpLm9uICdjbGljaycsIC0+XG4gICAgaWYgYW5ueWFuZ1xuICAgICAgY29tbWFuZHMgPVxuICAgICAgICAnY2hhcHRlciA6bnVtYmVyJzogKG51bSkgLT4gd2luZG93LnNjcm9sbFRvIDAsICQoXCIjY2hhcHRlciN7bnVtfVwiKS5vZmZzZXQoKS50b3BcbiAgICAgIGFubnlhbmcuaW5pdCBjb21tYW5kc1xuICAgICAgYW5ueWFuZy5zdGFydCgpXG4iXX0=
;