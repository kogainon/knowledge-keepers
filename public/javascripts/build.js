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


},{}]},{},[1,2,3,5,4])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9jaHJpcy93b3Jrc3BhY2UvcG90dGVyeS9hcHAvcHVibGljL2NvZmZlZS9tYWluLmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL25hdmlnYXRpb24uY29mZmVlIiwiL2hvbWUvY2hyaXMvd29ya3NwYWNlL3BvdHRlcnkvYXBwL3B1YmxpYy9jb2ZmZWUvc2Nyb2xsaW5nLmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL3NlY3Rpb25faGVpZ2h0LmNvZmZlZSIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvY29mZmVlL3NwZWFrLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQSx3Q0FBQTs7QUFBQSxDQUFBLEVBQWEsSUFBQSxHQUFiLFdBQWE7O0FBQ2IsQ0FEQSxTQUNBOztBQUVBLENBSEEsRUFHUSxFQUFSLEVBQVEsU0FBQTs7QUFDUixDQUpBLElBSUE7O0FBRUEsQ0FOQSxFQU1ZLElBQUEsRUFBWixXQUFZOztBQUNaLENBUEEsUUFPQTs7QUFFQSxDQVRBLEVBU2lCLElBQUEsT0FBakIsV0FBaUI7O0FBQ2pCLENBVkEsYUFVQTs7OztBQ1ZBLENBQU8sRUFBVSxHQUFYLENBQU4sRUFBaUI7Q0FDZixLQUFBLFVBQUE7Q0FBQSxDQUFBLENBQWtDLEtBQWxDLENBQWtDLFlBQWxDO0NBQXFDLFFBQUEsRUFBQSxFQUFBO0NBQXJDLEVBQWtDO0NBQWxDLENBRUEsQ0FBQSxZQUFNO0NBRk4sQ0FHQSxDQUFjLElBQUEsRUFBQyxFQUFmO0NBQ00sRUFBRCxHQUFILENBQUEsQ0FBQSxHQUFBO0NBSkYsRUFHYztDQUhkLENBTUEsQ0FBa0MsS0FBbEMsQ0FBa0MsWUFBbEM7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUFrQztDQU5sQyxDQVFBLENBQXVELEtBQXZELENBQXVELGlDQUF2RDtDQUNjLENBQUssQ0FBakIsUUFBQTtDQURGLEVBQXVEO0NBUnZELENBVUEsQ0FBdUQsS0FBdkQsQ0FBdUQsaUNBQXZEO0NBQ2MsQ0FBSyxDQUFqQixRQUFBO0NBREYsRUFBdUQ7Q0FWdkQsQ0FZQSxDQUF1RCxLQUF2RCxDQUF1RCxpQ0FBdkQ7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUF1RDtDQVp2RCxDQWNBLENBQXVELEtBQXZELENBQXVELGlDQUF2RDtDQUNjLENBQUssQ0FBakIsUUFBQTtDQURGLEVBQXVEO0NBZHZELENBZ0JBLENBQXVELEtBQXZELENBQXVELGlDQUF2RDtDQUNjLENBQUssQ0FBakIsUUFBQTtDQURGLEVBQXVEO0NBaEJ2RCxDQWtCQSxDQUF1RCxLQUF2RCxDQUF1RCxpQ0FBdkQ7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUF1RDtDQUV2RCxFQUFrQyxLQUFsQyxDQUFBLFlBQUE7Q0FDYyxDQUFLLENBQWpCLFFBQUE7Q0FERixFQUFrQztDQXJCbkI7Ozs7QUNBakIsQ0FBTyxFQUFVLEdBQVgsQ0FBTixFQUFpQjtDQUNmLEtBQUEsV0FBQTtDQUFBLENBQUEsQ0FBWSxFQUFaLElBQUE7Q0FBQSxDQUNBLENBQVMsR0FBVCxHQUFVO0NBQ1IsT0FBQSx1Q0FBQTs7R0FEb0IsR0FBWjtNQUNSO0NBQUEsRUFBWSxDQUFaLEtBQUE7Q0FBQSxFQUNnQixDQUFoQixFQUFnQixPQUFoQjtDQURBLEVBRW1CLENBQW5CLElBQW1CLENBQUEsT0FBbkI7Q0FGQSxFQUdTLENBQVQsRUFBQSxPQUhBLEdBR1M7Q0FIVCxFQUlZLENBQVosQ0FBeUIsQ0FBekIsR0FBWSxJQUNXLEdBQW5CO0NBTEosR0FRQSxHQUFBLEtBQUE7Q0FDRSxDQUFXLElBQVgsR0FBQTtDQVRGLENBVUUsQ0FGRixHQUFBO0NBVE8sRUFZSyxNQUFaLEVBQUE7Q0FiRixFQUNTO0NBRFQsQ0FnQkEsQ0FBQSxLQUFBLENBQWM7QUFDUSxDQUFwQixHQUFBLEtBQUE7Q0FBQSxHQUFBLEVBQUE7TUFBQTtDQURZLFVBRVo7Q0FGRixFQUFjO0NBSVYsQ0FBWSxDQUFoQixNQUFBLENBQUE7QUFDa0IsQ0FBaEIsR0FBQSxLQUFBO0NBQUEsS0FBQTtNQUFBO0NBRGMsVUFFZDtDQUZGLEVBQWdCO0NBckJEOzs7O0FDQ2pCLElBQUEsTUFBQTs7QUFBQSxDQUFBLEVBQWEsTUFBQSxDQUFiO0NBQ0UsS0FBQTtDQUFBLENBQUEsQ0FBUyxHQUFUO0NBQ0EsQ0FBK0IsQ0FBL0IsQ0FBQSxFQUErQixFQUEvQixDQUFBLElBQUE7Q0FGVzs7QUFJYixDQUpBLEVBSWlCLEdBQVgsQ0FBTixFQUFpQjtDQUNmLEVBQUUsTUFBRjtDQUNFLEdBQUEsTUFBQTtDQUNBLENBQUEsSUFBQSxFQUFBLEVBQUEsQ0FBQTtDQUZGLEVBQUU7Q0FEYTs7OztBQ0xqQixDQUFPLEVBQVUsR0FBWCxDQUFOLEVBQWlCO0NBQ2YsQ0FBQSxDQUF3QixJQUF4QixDQUFBLENBQUE7Q0FDRSxPQUFBO0NBQUEsR0FBQSxHQUFBO0NBQ0UsRUFDRSxHQURGLEVBQUE7Q0FDRSxDQUFtQixDQUFBLEtBQW5CLENBQW9CLFFBQXBCO0NBQW1DLENBQVksQ0FBWSxHQUF6QixFQUFOLEVBQXNCLE9BQXRCO0NBQTVCLFFBQW1CO0NBRHJCLE9BQUE7Q0FBQSxHQUVBLEVBQUEsQ0FBTyxDQUFQO0NBQ1EsSUFBUixFQUFPLE1BQVA7TUFMb0I7Q0FBeEIsRUFBd0I7Q0FEVCIsInNvdXJjZXNDb250ZW50IjpbIm5hdmlnYXRpb24gPSByZXF1aXJlKCcuL25hdmlnYXRpb24uY29mZmVlJylcbm5hdmlnYXRpb24oKVxuXG5zcGVhayA9IHJlcXVpcmUoJy4vc3BlYWsuY29mZmVlJylcbnNwZWFrKClcblxuc2Nyb2xsaW5nID0gcmVxdWlyZSgnLi9zY3JvbGxpbmcuY29mZmVlJylcbnNjcm9sbGluZygpXG5cbnNlY3Rpb25faGVpZ2h0ID0gcmVxdWlyZSgnLi9zZWN0aW9uX2hlaWdodC5jb2ZmZWUnKVxuc2VjdGlvbl9oZWlnaHQoKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAtPlxuICAkKCcjY2hhcHRlcjIgLnNlY3Rpb24xJykud2F5cG9pbnQgLT4gJCgnI25hdmlnYXRpb24nKS50b2dnbGVDbGFzcygndmlzaWJsZScpXG5cbiAgbmF2ID0gJCgnI25hdmlnYXRpb24gYScpXG4gIHNldF9jaGFwdGVyID0gKG5hdiwgY2hhcHRlcikgLT5cbiAgICBuYXYucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmZpbHRlcihjaGFwdGVyKS5hZGRDbGFzcygnYWN0aXZlJylcblxuICAkKCcjY2hhcHRlcjIgLnNlY3Rpb24xJykud2F5cG9pbnQgLT5cbiAgICBzZXRfY2hhcHRlcihuYXYsICcuY2hhcHRlcjInKVxuICAkKCcjY2hhcHRlcjMgLnNlY3Rpb24xLCAjY2hhcHRlcjMgLnNlY3Rpb240Jykud2F5cG9pbnQgLT5cbiAgICBzZXRfY2hhcHRlcihuYXYsICcuY2hhcHRlcjMnKVxuICAkKCcjY2hhcHRlcjQgLnNlY3Rpb24xLCAjY2hhcHRlcjQgLnNlY3Rpb240Jykud2F5cG9pbnQgLT5cbiAgICBzZXRfY2hhcHRlcihuYXYsICcuY2hhcHRlcjQnKVxuICAkKCcjY2hhcHRlcjUgLnNlY3Rpb24xLCAjY2hhcHRlcjUgLnNlY3Rpb24zJykud2F5cG9pbnQgLT5cbiAgICBzZXRfY2hhcHRlcihuYXYsICcuY2hhcHRlcjUnKVxuICAkKCcjY2hhcHRlcjYgLnNlY3Rpb24xLCAjY2hhcHRlcjYgLnNlY3Rpb240Jykud2F5cG9pbnQgLT5cbiAgICBzZXRfY2hhcHRlcihuYXYsICcuY2hhcHRlcjYnKVxuICAkKCcjY2hhcHRlcjcgLnNlY3Rpb24xLCAjY2hhcHRlcjcgLnNlY3Rpb240Jykud2F5cG9pbnQgLT5cbiAgICBzZXRfY2hhcHRlcihuYXYsICcuY2hhcHRlcjcnKVxuICAkKCcjY2hhcHRlcjggLnNlY3Rpb24xLCAjY2hhcHRlcjggLnNlY3Rpb240Jykud2F5cG9pbnQgLT5cbiAgICBzZXRfY2hhcHRlcihuYXYsICcuY2hhcHRlcjgnKVxuICAkKCcjY2hhcHRlcjkgLnNlY3Rpb24xJykud2F5cG9pbnQgLT5cbiAgICBzZXRfY2hhcHRlcihuYXYsICcuY2hhcHRlcjknKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAtPlxuICBzY3JvbGxpbmcgPSBmYWxzZVxuICBzY3JvbGwgPSAoZGlyZWN0aW9uID0gJ2Rvd24nKSAtPlxuICAgIHNjcm9sbGluZyA9IHRydWVcbiAgICB3aW5kb3dfaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgY3VycmVudF9wb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpXG4gICAgb2Zmc2V0ID0gY3VycmVudF9wb3NpdGlvbiAlIHdpbmRvd19oZWlnaHRcbiAgICB0YXJnZXQgPSBpZiBkaXJlY3Rpb24gaXMgJ3VwJ1xuICAgICAgICBjdXJyZW50X3Bvc2l0aW9uIC0gaWYgb2Zmc2V0IGlzIDAgdGhlbiB3aW5kb3dfaGVpZ2h0IGVsc2Ugb2Zmc2V0XG4gICAgICBlbHNlXG4gICAgICAgIGN1cnJlbnRfcG9zaXRpb24gKyBpZiBvZmZzZXQgaXMgMCB0aGVuIHdpbmRvd19oZWlnaHQgZWxzZSB3aW5kb3dfaGVpZ2h0IC0gb2Zmc2V0XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGVcbiAgICAgIHNjcm9sbFRvcDogdGFyZ2V0XG4gICAgLCA0MDBcbiAgICBzY3JvbGxpbmcgPSBmYWxzZVxuXG4jIGhpZ2hqYWNrIHBhZ2V1cCBhbmQgZG93blxuICBrZXkgJ3BhZ2V1cCcsIC0+XG4gICAgc2Nyb2xsKCd1cCcpIHVubGVzcyBzY3JvbGxpbmdcbiAgICBmYWxzZVxuXG4gIGtleSAncGFnZWRvd24nLCAtPlxuICAgIHNjcm9sbCgpIHVubGVzcyBzY3JvbGxpbmdcbiAgICBmYWxzZVxuIiwiIyBtYXRjaCBoZWlnaHQgb24gZWFjaCBzZWN0aW9uIHRvIGJyb3dzZXJcbnNldF9oZWlnaHQgPSAtPlxuICBoZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KClcbiAgJCgnZGl2LnNlY3Rpb24nKS5jc3MgJ2hlaWdodCcsIFwiI3toZWlnaHR9cHhcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IC0+XG4gICQgLT5cbiAgICBzZXRfaGVpZ2h0KClcbiAgICAkKHdpbmRvdykub24gJ3Jlc2l6ZScsIHNldF9oZWlnaHRcbiIsIm1vZHVsZS5leHBvcnRzID0gLT5cbiAgJCgnI3NwZWFrJykub24gJ2NsaWNrJywgLT5cbiAgICBpZiBhbm55YW5nXG4gICAgICBjb21tYW5kcyA9XG4gICAgICAgICdjaGFwdGVyIDpudW1iZXInOiAobnVtKSAtPiB3aW5kb3cuc2Nyb2xsVG8gMCwgJChcIiNjaGFwdGVyI3tudW19XCIpLm9mZnNldCgpLnRvcFxuICAgICAgYW5ueWFuZy5pbml0IGNvbW1hbmRzXG4gICAgICBhbm55YW5nLnN0YXJ0KClcbiJdfQ==
;