var frm = $('#formm');
    
frm.submit(function (e) {
  
  e.preventDefault();
  var userInput = $("#textInput").val()
  // since the model processing takes some time, its a good idea to print the 
  // user's input before sending it to the model
  
  print_user_input(userInput)
  // check if the global variable out is defined or not
  // out is the output of the model which is in the following format

  // {'generated_text': ' Hi, how are you? I just got back from walking my dog. 
  //                      Do you have any pets?', 
  // 'conversation': {
  //  'generated_responses': [' Hi, how are you? I just got back from walking my dog. 
  //                            Do you have any pets?'], 
  // 'past_user_inputs': ['Hello']}}
    if (typeof out !== 'undefined') {
      send_this = {
        "text":userInput,
        "previous_conversaion":out['conversation']
      }}
  // if the global variable is not defined then its the first time that the model is
  // about to be invoked
      else{
        send_this = {
          "text":userInput,
          "previous_conversaion":false
        }
      }
      // basic ajax again. then made it readonly for spam proffing
      $("#textInput").val("The model is loading... Please Wait a sec!");
      console.log(send_this)
      document.getElementById('textInput').readOnly = true
      $.ajax({
        type: 'post',
        // url: frm.attr('action'),
        url:"https://api.thetwl.org/jelly",
        contentType: 'application/json',
        dataType : 'json',
        data: JSON.stringify(send_this),
        
        success: function (output) {
          // declaring the global variable inside a function
          window.out = output
          print_bot_response(output['generated_text'])
          console.log(output)
          // allow use to write message again
          $("#textInput").val("");
          document.getElementById('textInput').readOnly = false

        },
        error: function (data) {
          console.log('An error occurred.');
          console.log(data);
        },
      });
    });