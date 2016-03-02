$(document).ready(function() {

  $("#myform").submit(function() { // intercepts the submit event
    $.ajax({ // make an AJAX request
      type: "GET",
      url: "https://www.google.com/finance/converter?a=1&from=MYR&to=CNY", // it's the URL of your component B
      //data: $("#myform").serialize(), // serializes the form's elements
      success: function(data)
      {
        // show the data you got from B in result div
        $("#result").html(data);
      }
    });
    e.preventDefault(); // avoid to execute the actual submit of the form
  });

});
