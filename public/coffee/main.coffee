flowplayer.conf.adaptiveRatio = true

navigation = require('./navigation.coffee')
navigation()

speak = require('./speak.coffee')
speak()

scrolling = require('./scrolling.coffee')
scrolling()

section_height = require('./section_height.coffee')
section_height()
