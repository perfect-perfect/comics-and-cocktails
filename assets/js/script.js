var cocktailBtn = document.querySelector("#comics-and-cocktails");
var drinkImg = document.querySelector("#drink-image");


    function cocktailCall(){
        var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        fetch(apiUrl)
        .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error("Response Error");
    }
    })
        .then(data => {
        console.log(data);
        setImage(data);
    })
        .catch((error) => console.error("Error code:", error));
    };

    function setImage(drinkUrl){
        const drink = drinkUrl.drinks[0];
        drinkImg.src = drink.strDrinkThumb;

    }

  cocktailBtn.addEventListener("click", function(){
    
    cocktailCall();

  })

  
  
