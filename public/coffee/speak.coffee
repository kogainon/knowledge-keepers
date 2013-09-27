module.exports = ->
  $('#speak').on 'click', ->
    if annyang
      commands =
        'chapter :number': (num) -> window.scrollTo 0, $("#chapter#{num}").offset().top
      annyang.init commands
      annyang.start()
