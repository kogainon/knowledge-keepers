$.fn.fullpage
  anchors: ['chapter0', 'chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'chapter7', 'chapter8', 'chapter9']
  loopHorizontal: false
  menu: '#menu'
  paddingTop: '60'
  resize: false
  scrollOverflow: true
  verticalCentered: false

resize_content = ->
  for div in $('div.content, div.content-centerer, div.flowplayer')
    $(div).css('height', "#{$(window).height()}px")

$ ->
  $('#intro-arrow').fadeIn(4000)
  resize_content()
  $(window).on 'resize', resize_content
