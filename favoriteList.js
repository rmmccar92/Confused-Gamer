

var topTen = $(".top-10-games");
var savedListEl = $(".saved-list");

var listCount = 0

localStorageCount = localStorage.getItem("count");

pageLoad();
function pageLoad() {
    if (localStorage.getItem("count") != null) {
        listCount = localStorage.getItem("count")
        
    }
     else if (localStorage.getItem("count") !=0){
         (!$(this).addClass("active"));
         console.log("it worked ya dingus");
     }

};

firstListItem()
function firstListItem() {
    data = JSON.parse(localStorage.getItem('data'));
    var guid3 = data.results[0].guid
    
     
    // api call for title, genre, and description
    var singleGameAPI = 'https://www.giantbomb.com/api/game/' + guid3 + '/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp';
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: singleGameAPI
    })

        .then((data) => {
            var titleValue = data.results.name;
            var descValue = data.results.deck ? data.results.deck : "Sorry, no Giant Bomb users have written a description for " + titleValue + " yet!";
            var genreValue = data.results.genres ? data.results.genres[0].name : "Sorry, a genre for " + titleValue + ", is not listed.";
            var ratingValue = data.results.original_game_rating ? data.results.original_game_rating[0].name : "Sorry, no Giant Bomb users have rated " + titleValue + " yet!";
            var bombValue = data.results.site_detail_url;
            var imageURL = data.results.image.medium_url;
            $('#photoBox').empty()
            console.log(imageURL);
            var image = new Image();
            image.src = imageURL;
            document.getElementById('photoBox').appendChild(image);


            title.innerHTML = titleValue;
            gameDesc.innerHTML = descValue;
            gameGenre.innerHTML = "Genre: " + genreValue;
            gameRating.innerHTML = "Rating: " + ratingValue;
            bombSite.innerHTML = `<a style="color: #4ddb4f" href=${bombValue} target="_blank">click here!</a>`;
        })

       
            
               
        
}


var data = JSON.parse(localStorage.getItem('data'));
console.log("data: ", data);


topTenAppend()
function topTenAppend() {
    for (i = 0; i < data.results.length; i++) {
        var gameEl = "#game" + [i + 1]
        topTen.append("<a href='#!'class='collection-item black darken-1 right-list' data-index='" + [i] + "' id = 'game" + [i + 1] + "'data-guid='" + data.results[i].guid + "'>" + data.results[i].name + "</a>")
        var gameBtn = "<a class='btn-floating btn-small waves-effect waves-light deep-purple accent-3 game-" + [i + 1] + "-button list-button'><i class='material-icons'>add</i></a>"
        $(gameEl).append(gameBtn);
        $("#game1").addClass("active")


    }

}

$(topTen).on('click', '.btn-small', function () {
    var selection = $(this).parent().text().replace("add", "")
    var guid = $(this).parent().attr("data-guid")
    localStorage.setItem(selection, guid)
    localStorage.setItem(listCount, selection);
    var listItem = $(".saved-list");
    listItem.append("<a href='#!'class='collection-item black darken-1 white-text'>" + selection + "</a>");
    listCount++
    localStorage.setItem("count", listCount);
})


// Clicking the text in the top ten list
$(topTen).on('click', 'a', function () {
    var index = $(this).attr('data-index')
    var guid = data.results[index].guid
    console.log(guid)
 
    
    
    // api call for title, genre, and description
    var singleGameAPI = 'https://www.giantbomb.com/api/game/' + guid + '/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp';
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: singleGameAPI
    })
        .then((data) => {
            var titleValue = data.results.name;
            var descValue = data.results.deck ? data.results.deck : "Sorry, no Giant Bomb users have written a description for " + titleValue + " yet!";
            var genreValue = data.results.genres ? data.results.genres[0].name : "Sorry, a genre for " + titleValue + ", is not listed.";
            var ratingValue = data.results.original_game_rating ? data.results.original_game_rating[0].name : "Sorry, no Giant Bomb users have rated " + titleValue + " yet!";
            var bombValue = data.results.site_detail_url;
            var imageURL = data.results.image.medium_url;
            $('#photoBox').empty()
            console.log(imageURL);
            var image = new Image();
            image.src = imageURL;
            document.getElementById('photoBox').appendChild(image);


            title.innerHTML = titleValue;
            gameDesc.innerHTML = descValue;
            gameGenre.innerHTML = "Genre: " + genreValue;
            gameRating.innerHTML = "Rating: " + ratingValue;
            bombSite.innerHTML = `<a href=${bombValue} target="_blank">click here!</a>`;
        })

})

$(savedListEl).on('click', 'a', function () {
    console.log($(this).attr('data-index'));
    var index = $(this).attr('data-index');
    var guid2 = localStorage.getItem($(this).text())

    
    // api call for title, genre, and description
    var singleGameAPI = 'https://www.giantbomb.com/api/game/' + guid2 + '/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: singleGameAPI
    })

        .then((data) => {
            var titleValue = data.results.name;
            var descValue = data.results.deck ? data.results.deck : "Sorry, no Giant Bomb users have written a description for " + titleValue + " yet!";
            var genreValue = data.results.genres ? data.results.genres[0].name : "Sorry, a genre for " + titleValue + ", is not listed.";
            var ratingValue = data.results.original_game_rating ? data.results.original_game_rating[0].name : "Sorry, no Giant Bomb users have reviewed " + titleValue + " yet!";
            var bombValue = data.results.site_detail_url;
            var imageURL = data.results.image.medium_url;
            $('#photoBox').empty()
            console.log(imageURL);
            var image = new Image();
            image.src = imageURL;
            document.getElementById('photoBox').appendChild(image);

            title.innerHTML = titleValue;
            gameDesc.innerHTML = descValue;
            gameGenre.innerHTML = "Genre: " + genreValue;
            gameRating.innerHTML = "Rating: " + ratingValue;
            bombSite.innerHTML = `<a style="color: #4ddb4f" href=${bombValue} target="_blank">click here!</a> `;
            console.log(bombValue);
        })
})
for (i = 0; i < localStorageCount; i++) {
    var savedItem = localStorage.getItem(i);
    var listItem = $(".saved-list").addClass("saved-games");
    listItem.append("<a href='#!'class='collection-item black darken-1 white-text' data-guid='" + data.results[i].guid + "'>" + savedItem + "</a>");
}

// color change of active tab 
$(topTen).on('click', 'a', function () {


    if (!$(this).hasClass("active")) {
        $("a.active").removeClass("active");
        $(this).addClass("active");
    }
        

})

var genreGame = 'strategy';
var f2playAPI = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=' + genreGame + '&sort-by=release-date'

fetch(f2playAPI, {
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
    //Loop over the data to generate a table, each table row will have a link to the repo url
    for (var i = 0; i < 5; i++) {
      // Creating elements, tablerow, tabledata, and anchor
      var createTableRow = document.createElement('tr');
      var tableData = document.createElement('td');
      var link = document.createElement('a');

      // Setting the text of link and the href of the link
      link.textContent = data[i].freetogame_profile_url;
      link.href = data[i].freetogame_profile_url;

      // Appending the link to the tabledata and then appending the tabledata to the tablerow
      // The tablerow then gets appended to the tablebody
      tableData.appendChild(link);
      createTableRow.appendChild(tableData);
      repoTable.appendChild(createTableRow);
    }   
});
