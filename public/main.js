'use strict'
$(document).ready(init);



function init() {
  $('#comment').on('keyup', myMark);
}

function myMark(event) {
event.preventDefault();

var markMe = $('#comment').val();
  $.post('/markdown', {markBody: markMe})
  .success(function(data) {
    
    $('#display').empty().append($.parseHTML(data));

  })
  .fail(function(err) {
    alert('Something went wrong!!');
  });
}