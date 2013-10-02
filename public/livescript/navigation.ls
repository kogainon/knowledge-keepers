module.exports = ->
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
