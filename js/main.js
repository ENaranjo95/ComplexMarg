
var apiURL2 = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'

$('button').on ('click', function(){
  var apiURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  $('ul').empty('li')

  $.ajax({
    url :apiURL,
    //this is what will happen when an artist request is a success
    success:function(res){

      $('#img').attr('src', res.drinks[0].strDrinkThumb)
      $('h1').html(res.drinks[0].strDrink)
      $('#drinkType').html(res.drinks[0].strAlcoholic)
      $('#glass').html(res.drinks[0].strGlass)

      $('ul').append("<li>"+res.drinks[0].strIngredient1+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient2+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient3+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient4+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient5+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient6+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient7+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient8+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient9+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient10+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient11+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient12+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient13+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient14+"</li>")
      $('ul').append("<li>"+res.drinks[0].strIngredient15+"</li>")

      $('p').html(res.drinks[0].strInstructions)
      joke()

      console.log(res)
    },
    error:function(invalid){
      console.log(invalid)
    }
  });
});

function joke(){
$.ajax({
  url: apiURL2,
  success: function(r){
    console.log(r)
  },
  error: function(er){
    console.log(er)
  },
});
}
