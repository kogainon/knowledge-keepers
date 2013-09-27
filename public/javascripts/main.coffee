$('#speak').on 'click', ->
  if annyang
    commands =
      'chapter :number': (num) -> window.scrollTo 0, $("#chapter#{num}").offset().top
    annyang.init commands
    annyang.start()

scrolling = false
scroll = (direction = 'down') ->
  scrolling = true
  window_height = $(window).height()
  current_position = $(document).scrollTop()
  offset = current_position % window_height
  target = if direction is 'up'
      current_position - if offset is 0 then window_height else offset
    else
      current_position + if offset is 0 then window_height else window_height - offset
  $('html, body').animate
    scrollTop: target
  , 400
  scrolling = false

# highjack pageup and down
key 'pageup', ->
  scroll('up') unless scrolling
  false

key 'pagedown', ->
  scroll() unless scrolling
  false

# match height on each section to browser
set_height = ->
  height = $(window).height()
  $('div.section').css 'height', "#{height}px"

$ ->
  set_height()
  $(window).on 'resize', set_height

$ ->
  $('#chapter2 .section1').waypoint -> $('#navigation').toggleClass('visible')

  nav = $('#navigation a')
  set_chapter = (nav, chapter) ->
    nav.removeClass('active').filter(chapter).addClass('active')

  $('#chapter2 .section1').waypoint ->
    set_chapter(nav, '.chapter2')
  $('#chapter3 .section1, #chapter3 .section4').waypoint ->
    set_chapter(nav, '.chapter3')
  $('#chapter4 .section1, #chapter4 .section4').waypoint ->
    set_chapter(nav, '.chapter4')
  $('#chapter5 .section1, #chapter5 .section3').waypoint ->
    set_chapter(nav, '.chapter5')
  $('#chapter6 .section1, #chapter6 .section4').waypoint ->
    set_chapter(nav, '.chapter6')
  $('#chapter7 .section1, #chapter7 .section4').waypoint ->
    set_chapter(nav, '.chapter7')
  $('#chapter8 .section1, #chapter8 .section4').waypoint ->
    set_chapter(nav, '.chapter8')
  $('#chapter9 .section1').waypoint ->
    set_chapter(nav, '.chapter9')
