$(document).ready ->

  # create string holder
  stringBuilder = []
  log = []

  # create DOM structure
  $('body').append '<ul id="string-list"></ul>'
  $('body').append '<input type="text" id="current-string">'

  $(document).on 'keypress', (e) =>
    # if backspace
    if e.keyCode is 8
      stringBuilder.splice(stringBuilder.length, -1)

    # if return
    else if e.keyCode is 13
      $('#string-list').append "<li>#{stringBuilder.join('')}</li>"
      log.push stringBuilder
      stringBuilder = []
      console.log log

    else if e.keyCode >= 48 or e.keyCode <= 90
      stringBuilder.push String.fromCharCode(e.keyCode)