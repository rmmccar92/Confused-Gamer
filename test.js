// BUTTON VARIABLES

var playBTN = $(".playBtn");
var boxBTN = $(".boxBtn");
var ninBTN = $(".ninBtn");
var pcBTN = $(".pcBtn");






playBTN.on('click' , function(){
    var platformID = 176
    var buttonSelection =  'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&platforms=' + platformID;

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: buttonSelection
      })
      
      .then(function(data){
        console.log(data);
      });
    location.assign("results.html")
})

pcBTN.on('click' , function(){
    var platformID = 94
    var buttonSelection =  'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&platforms=' + platformID;

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: buttonSelection
      })
      
      .then(function(data){
        console.log(data);
      });
    location.assign("results.html")
})

ninBTN.on('click' , function(){
    var platformID = 157
    var buttonSelection =  'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&platforms=' + platformID;

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: buttonSelection
      })
      
      .then(function(data){
        console.log(data);
      });
    location.assign("results.html")
})

boxBTN.on('click' , function(){
    var platformID = 145
    var buttonSelection =  'https://www.giantbomb.com/api/games/?api_key=073c2f94ba69540e99d2b7e8b4cd3aebb2d9befb&format=jsonp&platforms=' + platformID;

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: buttonSelection
      })
      
      .then(function(data){
        localStorage.setItem('data' , JSON.stringify(data));
      })
    .then(function(){
        location.assign("results.html")
    })
    .then(function(){
        console.log(JSON.parse(localStorage.getItem('data')))
    })
})