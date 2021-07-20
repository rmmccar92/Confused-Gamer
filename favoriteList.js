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

var listCount=0

localStorageCount = localStorage.getItem("count");


var savedListEl = $(".saved-list")

Button1.on("click" , function () {
    console.log(game1El.text());
    localStorage.setItem(listCount , game1El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game1El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button2.on("click" , function () {
    console.log(game2El.text());
    localStorage.setItem(listCount , game2El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game2El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button3.on("click" , function () {
    console.log(game3El.text());
    localStorage.setItem(listCount , game3El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game3El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button4.on("click" , function () {
    console.log(game4El.text());
    localStorage.setItem(listCount , game4El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game4El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button5.on("click" , function () {
    console.log(game5El.text());
    localStorage.setItem(listCount , game5El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game5El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button6.on("click" , function () {
    console.log(game6El.text());
    localStorage.setItem(listCount , game6El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game6El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button7.on("click" , function () {
    console.log(game7El.text());
    localStorage.setItem(listCount , game7El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game7El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button8.on("click" , function () {
    console.log(game8El.text());
    localStorage.setItem(listCount , game8El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game8El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button9.on("click" , function () {
    console.log(game9El.text());
    localStorage.setItem(listCount , game9El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game9El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})
Button10.on("click" , function () {
    console.log(game10El.text());
    localStorage.setItem(listCount , game10El.text());
    var listItem = $(".saved-list").addClass("saved-games");
    listCount++
    listItem.append("<li>" + game10El.text() + "</li>");
    localStorage.setItem("count" , listCount);
})

// Appending to Wish List
for (i = 0; i < localStorageCount; i++) {
    var savedItem = localStorage.getItem(i);
    var listItem = $(".saved-list").addClass("saved-games");
    listItem.append("<li>" + savedItem + "</li>");
}