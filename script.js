// Homepage will feature a search bar with a submit button - search will be based on titles and/or keywords
// & homepage will feature a search by topic based on platform (PC, XBOX, PlayStation, Switch) located below search bar and button
// Then the user will be directed to a video game info page upon click of either button
// responses will be made from *https://www.giantbomb.com/api/* 
// Info page will feature game title, release date, genre, description, platform, 

// We can use the price API as a back up option. 

// API key: 073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb

var submitButton = $("#submitBtn");
var inputEl = $('.input');
var userInput;

var top10listEl = $('#top-10-list');
var platformButtonsEl = $('#platform-buttons');
var searchButton = $('.search-button')
var searchInput = $('#search')



$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.slider').slider();
});


$(".btn").on("click", checkPlatformID);

function checkPlatformID(event) {
  event.preventDefault();

  var platformID = $(this).attr("data-platformID");
  console.log(this);
  var platformApiUrl = 'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&sort=number_of_user_reviews:desc&platforms=' + platformID + '&limit=10';

  console.log(platformID);

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: platformApiUrl
  })
    .then(function (data) {
      localStorage.setItem('data', JSON.stringify(data));
    })
    .then(function () {
      location.assign("results.html")
    });
}


// Searchbar
searchButton.on('click', function () {
  var searchItem = searchInput.val();
  var APISearchUrl = 'https://www.giantbomb.com/api/search/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&query=' + searchItem + '&limit=10&resources=game'

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: APISearchUrl
  })
    .then(function (data2) {
      localStorage.setItem('data', JSON.stringify(data2));
    })
    .then(function () {
      location.assign("results.html")
    });
})

$("#form1").on('submit', function(){
    event.preventDefault();
    var searchItem = searchInput.val();
  var APISearchUrl = 'https://www.giantbomb.com/api/search/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&query=' + searchItem + '&limit=10&resources=game'

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: APISearchUrl
  })
    .then(function (data2) {
      localStorage.setItem('data', JSON.stringify(data2));
    })
    .then(function () {
      location.assign("results.html")
    });
})