set_height = ->
  height = $(window).height()
  $('div.section').css 'height', "#{height}px"

$('#speak').on 'click', ->
  if annyang
    commands =
      'chapter :number': (num) -> window.scrollTo 0, $("#chapter#{num}").offset().top
    annyang.init commands
    annyang.start()

$ ->
  set_height()
  $(window).on 'resize', set_height
  $('#chapter1 .section2').waypoint -> $('#home-link').toggleClass('visible')
