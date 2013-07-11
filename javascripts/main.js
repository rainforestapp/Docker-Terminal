(function() {

  $(document).ready(function() {
    var log, logPointer, stringBuilder, updateInput,
      _this = this;
    stringBuilder = [];
    log = [];
    logPointer = 0;
    updateInput = function(val) {
      return $('#current-string').val(val);
    };
    $('body').append('<ul id="string-list"></ul>');
    $('body').append('<input type="text" id="current-string">');
    $(document).on('keydown', function(e) {
      if (e.keyCode === 8) {
        stringBuilder.pop();
        return updateInput(stringBuilder.join(''));
      } else if (e.keyCode === 13) {
        updateInput('');
        console.log(stringBuilder.length, stringBuilder);
        console.log('Logpointer is', logPointer);
        if (stringBuilder.join('') === '') {
          console.log("Log value");
          console.log(logPointer);
          console.log(log[logPointer]);
          return $('#string-list').append("<li>" + log[logPointer] + "</li>");
        } else {
          $('#string-list').append("<li>" + (stringBuilder.join('')) + "</li>");
          log.push(stringBuilder.join(''));
          logPointer = log.length - 1;
          return stringBuilder = [];
        }
      } else if (e.keyCode === 38 && logPointer > 0) {
        logPointer -= 1;
        return console.log(log[logPointer]);
      } else if (e.keyCode === 40 && logPointer < log.length) {
        logPointer += 1;
        return console.log(log[logPointer]);
      }
    });
    return $(document).on('keypress', function(e) {
      if (e.keyCode >= 48 || e.keyCode <= 90) {
        console.log('valid!');
        stringBuilder.push(String.fromCharCode(e.keyCode));
        return updateInput(stringBuilder.join(''));
      }
    });
  });

}).call(this);
