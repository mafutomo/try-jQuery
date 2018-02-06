console.log("hello!");

$('document').ready(function(){

  console.log('jquery');

  $('#greet-button').click(function(){

      let firstName = $('#input-1').val();
      let lastName = $('#input-2').val();

      let greeting = "Hello, " + firstName + " " + lastName +". Thank you for visiting!"

      $( ".greeting-form-result" ).append( "<p>"+ greeting + "</p>" );
  })

  $('#add-button').click(function(){

      let firstNum = Number($('#num-1').val());
      let secondNum = Number($('#num-2').val());

      let sum = firstNum + secondNum

      $( ".math-form-result" ).append( "<p>"+ "The sum is: " + sum + "</p>" );

  })

})
