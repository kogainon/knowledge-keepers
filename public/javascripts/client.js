(function() {
  $.fn.fullpage({
    anchors: ['chapter0', 'chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'chapter7', 'chapter8', 'chapter9'],
    menu: '#menu',
    paddingTop: '60',
    resize: false,
    scrollOverflow: true,
    verticalCentered: false
  });

  $(function() {
    var div, window_height, _i, _len, _ref, _results;
    $('#intro-arrow').fadeIn(4000);
    window_height = $(window).height();
    _ref = $('div.content, div.content-centerer');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      div = _ref[_i];
      _results.push($(div).css('height', "" + window_height + "px"));
    }
    return _results;
  });

}).call(this);
