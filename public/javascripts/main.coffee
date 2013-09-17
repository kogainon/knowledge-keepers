$('#speak').on 'click', ->
  if annyang
    commands =
      'chapter :number': (num) -> window.scrollTo 0, $("#chapter#{num}").offset().top
    annyang.init commands
    annyang.start()

# highjack pageup and down
key 'pageup', ->
  window_height = $(window).height()
  current_position = $(document).scrollTop()
  offset = current_position % window_height
  $('html, body').animate
    scrollTop: current_position - if offset is 0 then window_height else offset
  , 400
  false

key 'pagedown', ->
  window_height = $(window).height()
  current_position = $(document).scrollTop()
  offset = current_position % window_height
  console.log "offset is #{offset}"
  $('html, body').animate
    scrollTop: current_position + if offset is 0 then window_height else window_height - offset
  , 400
  false

# match height on each section to browser
set_height = ->
  height = $(window).height()
  $('div.section').css 'height', "#{height}px"

$ ->
  set_height()
  $(window).on 'resize', set_height
  $('#chapter1 .section2').waypoint -> $('#home-link').toggleClass('visible')
