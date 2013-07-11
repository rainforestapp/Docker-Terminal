$(document).ready ->

  # create string holder
  stringBuilder = []
  log = []
  logPointer = 0

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
      console.log stringBuilder.length, stringBuilder
      if stringBuilder.length is 0
        console.log log[logPointer]
        $('#string-list').append "<li>#{log[logPointer]}</li>"

      $('#string-list').append "<li>#{stringBuilder.join('')}</li>"
      log.push stringBuilder
      stringBuilder = []

    else if e.keyCode is 38 and logPointer > 0
      logPointer -= 1

    else if e.keyCode is 40 and logPointer < log.length
      logPointer += 1

  $(document).on 'keypress', (e) =>
    # if valid key
    if 65 <= e.keyCode <= 122 or e.keyCode is 32
      stringBuilder.push String.fromCharCode(e.keyCode)
      updateInput stringBuilder.join('')
