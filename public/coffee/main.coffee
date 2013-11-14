$.fn.fullpage
  anchors: [
    'chapter0'
    'chapter1'
    'chapter2'
    'chapter3'
    'chapter4'
    'chapter5'
    'chapter6'
    'chapter7'
    'chapter8'
    'chapter9'
  ]
  menu: '#menu'
  scrollOverflow: true

$ ->
  $('#intro-arrow').fadeIn(4000)
  window_height = $(window).height()
  for div in $('div.content')
    $(div).css('height', "#{window_height}px")
