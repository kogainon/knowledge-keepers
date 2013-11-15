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
    var div, _i, _len, _ref, _results;
    _ref = $('div.content, div.content-centerer, div.flowplayer');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      div = _ref[_i];
      _results.push($(div).css('height', "" + ($(window).height()) + "px"));
    }
    return _results;
  };

  $(function() {
    $('#intro-arrow').fadeIn(4000);
    resize_content();
    return $(window).on('resize', resize_content);
  });

}).call(this);
