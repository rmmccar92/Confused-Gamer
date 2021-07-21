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

var game1El = $(".game-1");
var game2El = $(".game-2");
var game3El = $(".game-3");
var game4El = $(".game-4");
var game5El = $(".game-5");
var game6El = $(".game-6");
var game7El = $(".game-7");
var game8El = $(".game-8");
var game9El = $(".game-9");
var game10El = $(".game-10");

var listCount = 0

localStorageCount = localStorage.getItem("count");

pageLoad();
function pageLoad() {
    if (localStorage.getItem("count") != null) {
        listCount = localStorage.getItem("count")
    }
    console.log(JSON.parse(localStorage.getItem('data')))
}



var savedListEl = $(".saved-list")



Button1.on("click", function () {
    console.log(game1El.text());
    localStorage.setItem(listCount, game1El.text());
    var listItem = $(".saved-list");
    listItem.append("<a href='#!'class='collection-item black darken-1 white-text'>" + game1El.text() + "</a>");
    listCount++
    localStorage.setItem("count", listCount);
})
Button2.on("click", function () {
    console.log(game2El.text());
    localStorage.setItem(listCount, game2El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item purple darken-3 white-text'>" + game2El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
Button3.on("click", function () {
    console.log(game3El.text());
    localStorage.setItem(listCount, game3El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item black darken-1 white-text'>" + game3El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
Button4.on("click", function () {
    console.log(game4El.text());
    localStorage.setItem(listCount, game4El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item purple darken-3 white-text'>" + game4El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
Button5.on("click", function () {
    console.log(game5El.text());
    localStorage.setItem(listCount, game5El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item black darken-1 white-text'>" + game5El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
Button6.on("click", function () {
    console.log(game6El.text());
    localStorage.setItem(listCount, game6El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item purple darken-3 white-text'>" + game6El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
Button7.on("click", function () {
    console.log(game7El.text());
    localStorage.setItem(listCount, game7El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item black darken-1 white-text'>" + game7El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
Button8.on("click", function () {
    console.log(game8El.text());
    localStorage.setItem(listCount, game8El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item purple darken-3 white-text'>" + game8El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
Button9.on("click", function () {
    console.log(game9El.text());
    localStorage.setItem(listCount, game9El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item black darken-1 white-text'>" + game9El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
Button10.on("click", function () {
    console.log(game10El.text());
    localStorage.setItem(listCount, game10El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<a href='#!'class='collection-item purple darken-3 white-text'>" + game10El.text() + "</a>");
    localStorage.setItem("count", listCount);
})
countStyling();
function countStyling() {
    for (i = 0; i < localStorageCount; i++){
        if (i % 2 === 0) {
            console.log("the count is even");
        }
        else {
            console.log("the count is odd");
        }
}
}

// Appending to Wish List
for (i = 0; i < localStorageCount; i++) {
    var savedItem = localStorage.getItem(i);
    var listItem = $(".saved-list").addClass("saved-games");
    if (i % 2 === 0){
        listItem.append("<a href='#!'class='collection-item black darken-1 white-text'>" + savedItem + "</a>");
    }
    else {
        listItem.append("<a href='#!'class='collection-item purple darken-3 white-text'>" + savedItem + "</a>")
    }
}