;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var scroll, scrolling, set_height;

$('#speak').on('click', function() {
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

key('pagedown', function() {
  if (!scrolling) {
    scroll();
  }
  return false;
});

set_height = function() {
  var height;
  height = $(window).height();
  return $('div.section').css('height', "" + height + "px");
};

$(function() {
  set_height();
  return $(window).on('resize', set_height);
});

$(function() {
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
});


},{}]},{},[1])
;