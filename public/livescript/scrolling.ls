module.exports = ->
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
    $('html, body').animate scrollTop: target, 400
    scrolling = false

# highjack pageup and down
  key 'pageup', ->
    scroll('up') unless scrolling
    false

  key 'pagedown', ->
    scroll() unless scrolling
    false
