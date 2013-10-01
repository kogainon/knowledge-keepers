# match height on each section to browser
set_height = ->
  height = $(window).height()
  $('div.section').css 'height', "#{height}px"

module.exports = ->
  $ ->
    set_height()
    $(window).on 'resize', set_height
