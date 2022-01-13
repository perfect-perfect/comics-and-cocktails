var cocktailBtn = document.querySelector("#comics-and-cocktails");
var drinkImg = document.querySelector("#drink-img");
var comicImg = document.querySelector("#comic-img");
var comicAmount;

// uses JavaScript Classes to build clock
class DigitalClock {
    constructor(element) {
        this.element = element;
    } 

    // starts the clock on load and updates the time every half second.
    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 500);
    }

    // formats the information and places it on the page
    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }
    // uses JavaScript date to get the current time
    getTimeParts() {
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();


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
        setDrinkImage(data);
    })
        .catch((error) => console.error("Error code:", error));
    };

    function setDrinkImage(drinkUrl){
        const drink = drinkUrl.drinks[0];
        drinkImg.src = drink.strDrinkThumb;

    }

    function maxComicNum(){
        var apiUrl = "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json";

        fetch(apiUrl)

        .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error("Response Error");
    }
    })
        .then(data => {

        comicAmount = data.num;

        comicCall();

    })
        .catch((error) => console.error("Error code:", error));
    };


    function comicCall(){

        var randNumGen = Math.floor((Math.random() * comicAmount) + 1);

        console.log(randNumGen);

        var apiUrl = "https://cors-anywhere.herokuapp.com/https://xkcd.com/" + randNumGen + "/info.0.json";

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
        setComicImage(data);
    })
        .catch((error) => console.error("Error code:", error));
    };

    function setComicImage(comicUrl){
        comicImg.src = comicUrl.img;
    }



  cocktailBtn.addEventListener("click", function(){
    
    cocktailCall();
    maxComicNum();
  })
  

  cocktailBtn.addEventListener("click", function(){
    
    cocktailCall();

    maxComicNum();
    

  })
