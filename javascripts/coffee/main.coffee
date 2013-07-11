$(document).ready ->

  # create string holder
  stringBuilder = []
  log = []
  logPointer = 0

  # create DOM structure
  $('body').append '<ul id="string-list"></ul>'
  $('body').append '<input type="text" id="current-string">'

  $(document).on 'keypress', (e) =>
    # if backspace
    if e.keyCode is 8
      stringBuilder.splice(stringBuilder.length, -1)

    # if return
    else if e.keyCode is 13
      if stringBuilder.join('') is ''
        console.log log[logPointer]
      $('#string-list').append "<li>#{stringBuilder.join('')}</li>"
      log.push stringBuilder
      stringBuilder = []
      console.log log

    else if e.keyCode >= 48 or e.keyCode <= 90
      stringBuilder.push String.fromCharCode(e.keyCode)

    else if e.keyCode is 38 and logPointer > 0
      logPointer -= 1

    else if e.keyCode is 40 and logPointer < log.length
      logPointer += 1


