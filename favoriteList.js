var Button1 = $(".game-1-button");
var Button2 = $(".game-2-button");
var Button3 = $(".game-3-button");
var Button4 = $(".game-4-button");
var Button5 = $(".game-5-button");
var Button6 = $(".game-6-button");
var Button7 = $(".game-7-button");
var Button8 = $(".game-8-button");
var Button9 = $(".game-9-button");
var Button10 = $(".game-10-button");

var game1El = $("#game1");
var game2El = $("#game2");
var game3El = $("#game3");
var game4El = $("#game4");
var game5El = $("#game5");
var game6El = $("#game6");
var game7El = $("#game7");
var game8El = $("#game8");
var game9El = $("#game9");
var game10El = $("#game10");

var topTen = $(".top-10-games");

var listCount = 0

localStorageCount = localStorage.getItem("count");

pageLoad();
function pageLoad() {
    if (localStorage.getItem("count") != null) {
        listCount = localStorage.getItem("count")
    }
};


var data = JSON.parse(localStorage.getItem('data'));
console.log("data: ", data);


topTenAppend()
function topTenAppend() {
    for (i = 0; i < data.results.length; i++) {
        var gameEl = "#game" + [i + 1]
        topTen.append("<a href='#!'class='collection-item black darken-1 white-text' data-index='" + [i] + "' id = 'game" + [i + 1] + "'>" + data.results[i].name + "</a>")
        var gameBtn = "<a class='btn-floating btn-small waves-effect waves-light deep-purple accent-3 game-" + [i + 1] + "-button'><i class='material-icons'>add</i></a>"
        $(gameEl).append(gameBtn)

    }
}

$(topTen).on('click' , '.btn-small' , function () {
    localStorage.setItem(listCount, $(this).parent().text());
        var listItem = $(".saved-list");
        listItem.append("<a href='#!'class='collection-item black darken-1 white-text focus'>" + $(this).parent().text() + "</a>");
        listCount++
        localStorage.setItem("count", listCount);
})

$(topTen).on('click' , 'a' , function() {
    console.log($(this).attr('data-index'))
    var index = $(this).attr('data-index')
    var guid = data.results[index].guid
    console.log(guid)



    // api call for title, genre, and description
    var singleGameAPI = 'https://www.giantbomb.com/api/game/'+ guid +'/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp';
    // var ratingAPI = 'https://www.giantbomb.com/api/game_ratings/'+ guid +'/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp';
   // var videoAPI = 'https://www.giantbomb.com/api/videos/'+ guid +'/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp';
    $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: singleGameAPI
    })
       
    .then((data) => {
        console.log(data);
        var titleValue = data.results.name;
        var descValue = data.results.deck;
        var genreValue = data.results.genres ? data.results.genres[0].name: "Game genre not available";
        var ratingValue = data.results.original_game_rating ? data.results.original_game_rating[0].name: "Game rating not available";
        var imageURL = data.results.image.medium_url;

        // console.log(data.results.name)
        // console.log(data.results.description)
        // console.log(data.results.original_game_rating[0].name)
    
        title.innerHTML = titleValue;
        gameDesc.innerHTML  = descValue;
        gameGenre.innerHTML = "Genre: " + genreValue;
        gameRating.innerHTML = "Rating: " + ratingValue;
        
        var image = new Image();
        image.src = imageURL;
        document.getElementById('photoBox').appendChild(image);
    });
  
})


var savedListEl = $(".saved-list")

// Appending to Wish List
for (i = 0; i < localStorageCount; i++) {
    var savedItem = localStorage.getItem(i);
    var listItem = $(".saved-list").addClass("saved-games");
    if (i % 2 === 0) {
        listItem.append("<a href='#!'class='collection-item black darken-1 white-text'>" + savedItem + "</a>");
    }
    else {
        listItem.append("<a href='#!'class='collection-item purple darken-3 white-text'>" + savedItem + "</a>")
    }
}


//Append Image and Videos to Game Details

// var imageURL = data.results[0].image.medium_url;
// console.log(imageURL);
// var image = new Image();
// image.src = imageURL;
// document.getElementById('photoBox').appendChild(image);

// function pullMusic(){
// var platform = 'pc';
// var playlistAPI = 'https://www.freetogame.com/api/games?platform=' + platform + '&category='+ gameGenre +'&sort-by=release-date'

// $.ajax({
//     type: 'GET',
//     dataType: 'json',
//     crossDomain: true,
//     jsonp: 'json_callback',
//     url: playlistAPI
//     })

//     .then((data) => {
//         console.log(data);
//     });
// }
// pullMusic();

fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=card&sort-by=release-date", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a0cca6994cmsh81f3b7fb76d08efp1175c4jsn19381bff6ee1",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  });
