// Homepage will feature a search bar with a submit button - search will be based on titles and/or keywords
// & homepage will feature a search by topic based on platform (PC, XBOX, PlayStation, Switch) located below search bar and button
// Then the user will be directed to a video game info page upon click of either button
// responses will be made from *https://www.giantbomb.com/api/* 
// Info page will feature game title, release date, genre, description, platform, 

// We can use the price API as a back up option. 
// other options could be a separate game database
var submitButton = $("#submitBtn");
var inputEl = $('.input');
var userInput;

var top10listEl =$('#top-10-list');
var platformButtonsEl= $('#platform-buttons');

// $.ajax({
//   type: 'GET',
//   dataType: 'jsonp',
//   crossDomain: true,
//   jsonp: 'json_callback',
//   url: 'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp',


// })

//   .then(function (data) {
//     console.log(data);
//   })



$(".btn").on("click", checkPlatformID);

function checkPlatformID(event){
   event.preventDefault();
   
   var platformID = $(this).parent().data("platformID");
   console.log(this);
   var platformApiUrl =  'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&platforms=' + platformID + '&limit=10';

   console.log(platformID);

   $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: platformApiUrl
  });
}






var buttonClickHandler = function (event) {
  var platformID = event.target.getattribute('data-platformID');
console.log(platformID);
  if(platformID) {
    getFeaturedPlatforms(platform);

    top10listEl.textContent = '';
  }
};


// var getFeaturedPlatforms = function (platform){
//   var platformApiUrl =  'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&platforms=' + platformID + '&limit=10';
// console.log(platformApiUrl)
//   $.ajax({
//     type: 'GET',
//     dataType: 'jsonp',
//     crossDomain: true,
//     jsonp: 'json_callback',
//     url: platformApiUrl
//   })
  
//   .then(function(data){
//     console.log(data);
//   });    
// }
// var getFeaturedRepos = function (language) {
//   var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayRepos(data.items, language);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   });
// };
