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
        stringBuilder.splice(stringBuilder.length, -1);
      } else if (e.keyCode === 13) {
        if (stringBuilder.join('') === '') {
          console.log(log[logPointer]);
          $('#string-list').append("<li>" + log[logPointer] + "</li>");
        }
        $('#current-string').val('');
        $('#string-list').append("<li>" + (stringBuilder.join('')) + "</li>");
        log.push(stringBuilder);
        stringBuilder = [];
      } else if (e.keyCode >= 48 || e.keyCode <= 90) {
        stringBuilder.push(String.fromCharCode(e.keyCode));
      } else if (e.keyCode === 38 && logPointer > 0) {
        logPointer -= 1;
      } else if (e.keyCode === 40 && logPointer < log.length) {
        logPointer += 1;
      }
      return $('#current-string').val(stringBuilder.join(''));
    });
  });

}).call(this);
