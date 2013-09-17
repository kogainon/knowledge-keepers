locations =
  kittens: ['#chapter2 .section3', '#chapter2 .section4', '#chapter3 .section1', '#chapter3 .section4']
  mister:  ['#chapter2 .section2', '#chapter3 .section3']
  zeus:    ['#chapter2', '#chapter3 .section2', '#chapter4 .section3', '#chapter5 .section4', '#chapter6 .section1', '#chapter7 .section2']

show_pictures = (pic_type) ->
  target = locations[pic_type].shift()
  locations[pic_type].push(target)
  $('html, body').animate
    scrollTop: $(target).offset().top
  , 400

$('#speak').on 'click', ->
  if annyang
    commands =
      'chapter :number': (num) -> window.scrollTo 0, $("#chapter#{num}").offset().top
      'kittens': -> show_pictures('kittens')
      'mister': -> show_pictures('mister')
      'zeus': -> show_pictures('zeus')
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
  $('#chapter1 .section2').waypoint -> $('#navigation').toggleClass('visible')
