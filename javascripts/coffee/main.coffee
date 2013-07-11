$(document).ready ->

  # create string holder
  stringBuilder = []
  log = []

  # update input
  updateInput = (val) =>
    $('#current-string').val val

  # create DOM structure
  $('body').append '<ul id="string-list"></ul>'
  $('body').append '<input type="text" id="current-string">'

  $(document).on 'keydown', (e) =>
    # if backspace
    if e.keyCode is 8
      stringBuilder.pop()
      updateInput stringBuilder.join('')

    # if return
    else if e.keyCode is 13
      updateInput ''
      $('#string-list').append "<li>#{stringBuilder.join('')}</li>"
      log.push stringBuilder
      stringBuilder = []

  $(document).on 'keypress', (e) =>
    # if valid key
    if e.keyCode >= 48 or e.keyCode <= 90
      stringBuilder.push String.fromCharCode(e.keyCode)
      updateInput stringBuilder.join('')