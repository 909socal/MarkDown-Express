'use strict'
$(document).ready(init);



function init() {
  $('.add').on('click', myMark);
}

function myMark(event) {
event.preventDefault();

var markMe = $('#comment').val();
  $.post('/markdown', {markBody: markMe})
  .success(function(data) {
    
    $('#display').append($.parseHTML(data));
  })
  .fail(function(err) {
    alert('Something went wrong!!');
  });
}