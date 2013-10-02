;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var navigation, speak, scrolling, section_height;
navigation = require('./navigation.ls');
speak = require('./speak.ls');
scrolling = require('./scrolling.ls');
section_height = require('./section_height.ls');
navigation();
speak();
scrolling();
section_height();
flowplayer.conf.adaptiveRatio = true;
},{"./navigation.ls":2,"./scrolling.ls":3,"./section_height.ls":4,"./speak.ls":5}],2:[function(require,module,exports){
module.exports = function(){
  var nav, set_chapter;
  $('#chapter2 .section1').waypoint(function(){
    return $('#navigation').toggleClass('visible');
  });
  nav = $('#navigation a');
  set_chapter = function(nav, chapter){
    return nav.removeClass('active').filter(chapter).addClass('active');
  };
  $('#chapter2 .section1').waypoint(function(){
    return set_chapter(nav, '.chapter2');
  });
  $('#chapter3 .section1, #chapter3 .section4').waypoint(function(){
    return set_chapter(nav, '.chapter3');
  });
  $('#chapter4 .section1, #chapter4 .section4').waypoint(function(){
    return set_chapter(nav, '.chapter4');
  });
  $('#chapter5 .section1, #chapter5 .section3').waypoint(function(){
    return set_chapter(nav, '.chapter5');
  });
  $('#chapter6 .section1, #chapter6 .section4').waypoint(function(){
    return set_chapter(nav, '.chapter6');
  });
  $('#chapter7 .section1, #chapter7 .section4').waypoint(function(){
    return set_chapter(nav, '.chapter7');
  });
  $('#chapter8 .section1, #chapter8 .section4').waypoint(function(){
    return set_chapter(nav, '.chapter8');
  });
  return $('#chapter9 .section1').waypoint(function(){
    return set_chapter(nav, '.chapter9');
  });
};
},{}],3:[function(require,module,exports){
module.exports = function(){
  var scrolling, scroll;
  scrolling = false;
  scroll = function(direction){
    var scrolling, window_height, current_position, offset, target;
    direction == null && (direction = 'down');
    scrolling = true;
    window_height = $(window).height();
    current_position = $(document).scrollTop();
    offset = current_position % window_height;
    target = direction === 'up'
      ? current_position - (offset === 0 ? window_height : offset)
      : current_position + (offset === 0
        ? window_height
        : window_height - offset);
    $('html, body').animate({
      scrollTop: target
    }, 400);
    return scrolling = false;
  };
  key('pageup', function(){
    if (!scrolling) {
      scroll('up');
    }
    return false;
  });
  return key('pagedown', function(){
    if (!scrolling) {
      scroll();
    }
    return false;
  });
};
},{}],4:[function(require,module,exports){
var set_height;
set_height = function(){
  var section_height, video_height;
  section_height = $(window).height();
  video_height = $('.flowplayer').height();
  $('div.section').css('height', section_height + "px");
  return $('div.flowplayer').css('padding-top', (section_height - video_height) / 2 + "px");
};
module.exports = function(){
  return $(function(){
    set_height();
    return $(window).on('resize', set_height);
  });
};
},{}],5:[function(require,module,exports){
module.exports = function(){
  return $('#speak').on('click', function(){
    var commands;
    if (annyang) {
      commands = {
        'chapter :number': function(num){
          return window.scrollTo(0, $(chapter + "" + num).offset().top);
        }
      };
      annyang.init(commands);
      return annyang.start();
    }
  });
};
},{}]},{},[1,2,3,4,5])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9jaHJpcy93b3Jrc3BhY2UvcG90dGVyeS9hcHAvcHVibGljL2xpdmVzY3JpcHQvbWFpbi5scyIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvbGl2ZXNjcmlwdC9uYXZpZ2F0aW9uLmxzIiwiL2hvbWUvY2hyaXMvd29ya3NwYWNlL3BvdHRlcnkvYXBwL3B1YmxpYy9saXZlc2NyaXB0L3Njcm9sbGluZy5scyIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvbGl2ZXNjcmlwdC9zZWN0aW9uX2hlaWdodC5scyIsIi9ob21lL2NocmlzL3dvcmtzcGFjZS9wb3R0ZXJ5L2FwcC9wdWJsaWMvbGl2ZXNjcmlwdC9zcGVhay5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG5hdmlnYXRpb24sIHNwZWFrLCBzY3JvbGxpbmcsIHNlY3Rpb25faGVpZ2h0O1xubmF2aWdhdGlvbiA9IHJlcXVpcmUoJy4vbmF2aWdhdGlvbi5scycpO1xuc3BlYWsgPSByZXF1aXJlKCcuL3NwZWFrLmxzJyk7XG5zY3JvbGxpbmcgPSByZXF1aXJlKCcuL3Njcm9sbGluZy5scycpO1xuc2VjdGlvbl9oZWlnaHQgPSByZXF1aXJlKCcuL3NlY3Rpb25faGVpZ2h0LmxzJyk7XG5uYXZpZ2F0aW9uKCk7XG5zcGVhaygpO1xuc2Nyb2xsaW5nKCk7XG5zZWN0aW9uX2hlaWdodCgpO1xuZmxvd3BsYXllci5jb25mLmFkYXB0aXZlUmF0aW8gPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIG5hdiwgc2V0X2NoYXB0ZXI7XG4gICQoJyNjaGFwdGVyMiAuc2VjdGlvbjEnKS53YXlwb2ludChmdW5jdGlvbigpe1xuICAgIHJldHVybiAkKCcjbmF2aWdhdGlvbicpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlJyk7XG4gIH0pO1xuICBuYXYgPSAkKCcjbmF2aWdhdGlvbiBhJyk7XG4gIHNldF9jaGFwdGVyID0gZnVuY3Rpb24obmF2LCBjaGFwdGVyKXtcbiAgICByZXR1cm4gbmF2LnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5maWx0ZXIoY2hhcHRlcikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9O1xuICAkKCcjY2hhcHRlcjIgLnNlY3Rpb24xJykud2F5cG9pbnQoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXIyJyk7XG4gIH0pO1xuICAkKCcjY2hhcHRlcjMgLnNlY3Rpb24xLCAjY2hhcHRlcjMgLnNlY3Rpb240Jykud2F5cG9pbnQoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXIzJyk7XG4gIH0pO1xuICAkKCcjY2hhcHRlcjQgLnNlY3Rpb24xLCAjY2hhcHRlcjQgLnNlY3Rpb240Jykud2F5cG9pbnQoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI0Jyk7XG4gIH0pO1xuICAkKCcjY2hhcHRlcjUgLnNlY3Rpb24xLCAjY2hhcHRlcjUgLnNlY3Rpb24zJykud2F5cG9pbnQoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI1Jyk7XG4gIH0pO1xuICAkKCcjY2hhcHRlcjYgLnNlY3Rpb24xLCAjY2hhcHRlcjYgLnNlY3Rpb240Jykud2F5cG9pbnQoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI2Jyk7XG4gIH0pO1xuICAkKCcjY2hhcHRlcjcgLnNlY3Rpb24xLCAjY2hhcHRlcjcgLnNlY3Rpb240Jykud2F5cG9pbnQoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI3Jyk7XG4gIH0pO1xuICAkKCcjY2hhcHRlcjggLnNlY3Rpb24xLCAjY2hhcHRlcjggLnNlY3Rpb240Jykud2F5cG9pbnQoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gc2V0X2NoYXB0ZXIobmF2LCAnLmNoYXB0ZXI4Jyk7XG4gIH0pO1xuICByZXR1cm4gJCgnI2NoYXB0ZXI5IC5zZWN0aW9uMScpLndheXBvaW50KGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHNldF9jaGFwdGVyKG5hdiwgJy5jaGFwdGVyOScpO1xuICB9KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgc2Nyb2xsaW5nLCBzY3JvbGw7XG4gIHNjcm9sbGluZyA9IGZhbHNlO1xuICBzY3JvbGwgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xuICAgIHZhciBzY3JvbGxpbmcsIHdpbmRvd19oZWlnaHQsIGN1cnJlbnRfcG9zaXRpb24sIG9mZnNldCwgdGFyZ2V0O1xuICAgIGRpcmVjdGlvbiA9PSBudWxsICYmIChkaXJlY3Rpb24gPSAnZG93bicpO1xuICAgIHNjcm9sbGluZyA9IHRydWU7XG4gICAgd2luZG93X2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICBjdXJyZW50X3Bvc2l0aW9uID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgb2Zmc2V0ID0gY3VycmVudF9wb3NpdGlvbiAlIHdpbmRvd19oZWlnaHQ7XG4gICAgdGFyZ2V0ID0gZGlyZWN0aW9uID09PSAndXAnXG4gICAgICA/IGN1cnJlbnRfcG9zaXRpb24gLSAob2Zmc2V0ID09PSAwID8gd2luZG93X2hlaWdodCA6IG9mZnNldClcbiAgICAgIDogY3VycmVudF9wb3NpdGlvbiArIChvZmZzZXQgPT09IDBcbiAgICAgICAgPyB3aW5kb3dfaGVpZ2h0XG4gICAgICAgIDogd2luZG93X2hlaWdodCAtIG9mZnNldCk7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiB0YXJnZXRcbiAgICB9LCA0MDApO1xuICAgIHJldHVybiBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgfTtcbiAga2V5KCdwYWdldXAnLCBmdW5jdGlvbigpe1xuICAgIGlmICghc2Nyb2xsaW5nKSB7XG4gICAgICBzY3JvbGwoJ3VwJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBrZXkoJ3BhZ2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBpZiAoIXNjcm9sbGluZykge1xuICAgICAgc2Nyb2xsKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59OyIsInZhciBzZXRfaGVpZ2h0O1xuc2V0X2hlaWdodCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBzZWN0aW9uX2hlaWdodCwgdmlkZW9faGVpZ2h0O1xuICBzZWN0aW9uX2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgdmlkZW9faGVpZ2h0ID0gJCgnLmZsb3dwbGF5ZXInKS5oZWlnaHQoKTtcbiAgJCgnZGl2LnNlY3Rpb24nKS5jc3MoJ2hlaWdodCcsIHNlY3Rpb25faGVpZ2h0ICsgXCJweFwiKTtcbiAgcmV0dXJuICQoJ2Rpdi5mbG93cGxheWVyJykuY3NzKCdwYWRkaW5nLXRvcCcsIChzZWN0aW9uX2hlaWdodCAtIHZpZGVvX2hlaWdodCkgLyAyICsgXCJweFwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiAkKGZ1bmN0aW9uKCl7XG4gICAgc2V0X2hlaWdodCgpO1xuICAgIHJldHVybiAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHNldF9oZWlnaHQpO1xuICB9KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gJCgnI3NwZWFrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgY29tbWFuZHM7XG4gICAgaWYgKGFubnlhbmcpIHtcbiAgICAgIGNvbW1hbmRzID0ge1xuICAgICAgICAnY2hhcHRlciA6bnVtYmVyJzogZnVuY3Rpb24obnVtKXtcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFRvKDAsICQoY2hhcHRlciArIFwiXCIgKyBudW0pLm9mZnNldCgpLnRvcCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhbm55YW5nLmluaXQoY29tbWFuZHMpO1xuICAgICAgcmV0dXJuIGFubnlhbmcuc3RhcnQoKTtcbiAgICB9XG4gIH0pO1xufTsiXX0=
;