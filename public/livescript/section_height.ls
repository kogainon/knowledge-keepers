# match height on each section to browser
set_height = ->
  section_height = $(window).height()
  video_height = $('.flowplayer').height()
  $('div.section').css 'height', "#{section_height}px"
  $('div.flowplayer').css 'padding-top', "#{(section_height - video_height) / 2}px"

module.exports = ->
  $ ->
    set_height()
    $(window).on 'resize', set_height
