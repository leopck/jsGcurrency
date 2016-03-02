var g_data = "";
$(document).ready(function() {

   // intercepts the submit event
    $.ajax({ // make an AJAX request
      type: "GET",
      url: "https://www.google.com/finance/converter", // it's the URL of your component
      data: { a:"1", from:"MYR" , to:"CNY" }, // serializes the form's elements
      headers: {
         ":authority": "www.google.com",
         ":method": "GET",
         ":path": "/finance/converter?a=1&from=MYR&to=CNY",
         ":scheme": "https",
         "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
         "accept-encoding": "gzip, deflate, sdch",
         "accept-language": "en-GB,en-US;q=0.8,en;q=0.6",
         "origin": "https://leopck.github.io/",
         "upgrade-insecure-requests": "1",
         "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36",
      },
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
