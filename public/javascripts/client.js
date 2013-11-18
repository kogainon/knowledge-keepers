(function() {
  var resize_content;

  $.fn.fullpage({
    anchors: ['chapter0', 'chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'chapter7', 'chapter8', 'chapter9'],
    loopHorizontal: false,
    menu: '#menu',
    paddingTop: '60',
    resize: false,
    scrollOverflow: true,
    verticalCentered: false
  });

  resize_content = function() {
    var div, _i, _j, _len, _len1, _ref, _ref1, _results;
    _ref = $('div.content');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      div = _ref[_i];
      $(div).css('min-height', "" + ($(window).height()) + "px");
    }
    _ref1 = $('div.content-centerer, div.flowplayer');
    _results = [];
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      div = _ref1[_j];
      _results.push($(div).css('height', "" + ($(window).height()) + "px"));
    }
    return _results;
  };

  $(function() {
    $('#intro-arrow').fadeIn(4000);
    resize_content();
    return $(window).on('resize', resize_content);
  });

  $(function() {
    return $('.slide-down').on('click', $.fn.fullpage.moveSlideDown);
  });

}).call(this);
