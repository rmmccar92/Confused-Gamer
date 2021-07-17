// Homepage will feature a search bar with a submit button - search will be based on titles and/or keywords
// & homepage will feature a search by topic based on platform (PC, XBOX, PlayStation, Switch) located below search bar and button
// Then the user will be directed to a video game info page upon click of either button
// responses will be made from *https://www.giantbomb.com/api/* 
// Info page will feature game title, release date, genre, description, platform, 

// We can use the price API as a back up option. 
// other options could be a seperate game database


$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp',
  
  
  })
  
  .then(function(data) {
      console.log(data);
      })