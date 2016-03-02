var g_data = "";
$(document).ready(function() {

   // intercepts the submit event
    $.ajax({ // make an AJAX request
      type: "GET",
      url: "http://www.google.com/finance/converter", // it's the URL of your component
      data: { a:"1", from:"MYR" , to:"CNY" }, // serializes the form's elements
      success: function(data)
      {
        // show the data you got from B in result div
        console.log("success");
        console.log(data);
        g_data = data;
      //  console.log(data.getElementById('currency_converter_result').getElementsByTagName('span')[0].innerHTML.replace(/[^\d.-]/g, ''))
      }
    });
    
});
