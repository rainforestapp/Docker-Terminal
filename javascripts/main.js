(function() {

  $(document).ready(function() {
    var log, logPointer, stringBuilder,
      _this = this;
    stringBuilder = [];
    log = [];
    logPointer = 0;
    $('body').append('<ul id="string-list"></ul>');
    $('body').append('<input type="text" id="current-string">');
    return $(document).on('keypress', function(e) {
      if (e.keyCode === 8) {
        return stringBuilder.splice(stringBuilder.length, -1);
      } else if (e.keyCode === 13) {
        if (stringBuilder.join('') === '') {
          console.log(log[logPointer]);
          $('#string-list').append("<li>" + log[logPointer] + "</li>");
        }
        $('#string-list').append("<li>" + (stringBuilder.join('')) + "</li>");
        log.push(stringBuilder);
        stringBuilder = [];
        return console.log(log);
      } else if (e.keyCode >= 48 || e.keyCode <= 90) {
        return stringBuilder.push(String.fromCharCode(e.keyCode));
      } else if (e.keyCode === 38 && logPointer > 0) {
        return logPointer -= 1;
      } else if (e.keyCode === 40 && logPointer < log.length) {
        return logPointer += 1;
      }
    });
  });

}).call(this);
