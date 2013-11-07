
function drawchart(sortselecting,gametype,data, gametype3){

// SELECT OPTION FOR SORTING

// 1 is by Popularity
// 2 is by Win Ratio
// var data = [{"1a": "Lux", "1b": 482, "3cc": 0.25, "4dd": 0.202},
//  {"1a": "Jax", "1b": 2156, "3cc": 0.21, "4dd": 0.55},
//   {"1a": "Sona", "1b": 343, "3cc": 0.75, "4dd": 0.005}];


// Diemsnion
var dimensions =
 [{name: "Name"},
 {name: "Total"},
 {name: "Win Ratio"},
 {name: "Popularity"}];
 var jsonname = dimensions[0].name;
var jsontot = dimensions[1].name;
var jsonpop2 = dimensions[3].name;
var jsonwinr2 = dimensions[2].name;


// Alternate for changes in selection
function winrdimen(){
          if(sortselecting == 1){return 2;};
          if(sortselecting == 2){return 3;}; };
function popdimen(){
          if(sortselecting == 1){return 3;};
          if(sortselecting == 2){return 2;}; };  

var jsonwinr = dimensions[winrdimen()].name;
var jsonpop = dimensions[popdimen()].name;


// Various accessors that specify the four dimensions of data to visualize.
function x(d) { return d[jsonpop]; }
function y(d) { return d[jsonwinr]; }
function radius(d) { return d[jsonpop2]; }
function color(d) { return d[jsonwinr2]; }
function key(d) { return d[jsonname]; }




var intwidth = $('.span9').width();

// Chart dimensions.
var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 47.5},
    width = intwidth - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Various scales. These domains make assumptions of data, naturally.
var xScale = d3.scale.linear().domain([0, d3.max(data, function(d) { return .05+d[jsonpop]; })]).range([0, width]),
    yScale = d3.scale.linear().domain([(d3.min(data, function(d) { return -.05+d[jsonwinr]; })), (d3.max(data, function(d) { return .05+d[jsonwinr]; }))]).range([height, 0 ]),
    radiusScale = d3.scale.linear().domain([0, d3.max(data, function(d) { return .05+d[jsonpop2]; })]).range([5, 30]);
    // colorScale = d3.scale.category10()

// Format
var formatPercentWin = d3.format(".01%"),
    formatPopularity = d3.format(".07%"),
    formatTotal = d3.format("d");



// The x & y axes.
var xAxis = d3.svg.axis().orient("bottom").scale(xScale).ticks(12, formatPercentWin).tickFormat(formatPercentWin),
    yAxis = d3.svg.axis().scale(yScale).orient("left").tickFormat(formatPercentWin);




// Create the SVG container and set the origin.
var svg = d3.select("#chart").append("svg")
    .attr("id","bubblechart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Add the x-axis.
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

// Add a y-axis label.
svg.append("text")
    .attr("class", "y label")
    .attr("id", "ytextbubble")
    .attr("text-anchor", "end")
    .attr("y", 4)
    .attr("dy", "1.75em")
    .attr("transform", "rotate(-90)")
    .text(function(){
          if(sortselecting == 1){return "Win Ratio (%)";};
          if(sortselecting == 2){return "Popularity (% of Games)";};
      });

// Add the year label; the value is set on transition.
var label = svg.append("text")
    .attr("class", "year label")
    .attr("text-anchor", "end")
    .attr("y", height - 24)
    .attr("x", width)
    .text(gametype);
// Add Options for axis
var label = svg.append("text")
    .attr("class", "optionsforaxis")
    .attr("text-anchor", "end")
    .attr("y", height/15)
    .attr("x", width-5)
    .text(
      function(){
          if(sortselecting == 2){return "Sort: Popularity";};
          if(sortselecting == 1){return "Sort: Win Ratio";};
      }
      );

// Add the y-axis.
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

// Add an x-axis label.
var selectionlabel = svg.append("text")
    .attr("class", "x label")
    .attr("id", "xtextbubble")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text(
      function(){
          if(sortselecting == 1){return "Popularity (% of Games)";};
          if(sortselecting == 2){return "Win Ratio (%)";};
      }
      );
// Load the data.


  // A bisector since many nation's data is sparsely-defined.
  // var bisect = d3.bisector(function(d) { return d[0]; });

  // Add a dot per nation. Initialize the data at 1800, and set the colors.
  var dot = svg.append("g");
  var dot2 =   dot 
    .attr("class", "dots")
    .selectAll(".dot")
      .data((data))
    .enter();
 

    dot2.append("svg:circle")
    .attr("class", "dot")
      // .style("fill", function(d) { return colorScale(color(d)); })
      // .style("stroke", "black")
      // .style("stroke-width", 2)
      .call(position)
      .sort(order)
      .attr('id', function(d) {
        var stringd = '';
        if (color(d) >= .5){stringd = "green"+(100*roundNumber(color(d),2))};
        if (color(d) <= .5){stringd = "red"+100*roundNumber(color(d),2)} ;
        return stringd;
      });
    // .attr("fill", function(d){

    //   console.log(roundNumber(color(d)*255,0));
    //   return "rgb(252,"+(roundNumber(color(d)*255,0))+",161)";});

      

// Add dotted line to chart
// var lineGraph = d3.select("#chart").append("svg")
//       .attr("width", 500)   
//       .attr("height", 200);    
// You also need to specify the stroke color.
  dot.append("rect")
    .attr("x", function(){
      var x1;
      if (sortselecting == 1){x1 = 0;};
      if (sortselecting == 2){x1 = xScale(.5);};
      return x1;
    })
    .attr("y", function(){
      var y1;
      if (sortselecting == 1){y1 = yScale(.5);};
      if (sortselecting == 2){y1 = 0;};
      return y1;
    })
    .attr("width",function(){
      var w1;
      if (sortselecting == 1){w1 = width;};
      if (sortselecting == 2){w1 = '.01';};
      return w1;
    })
    .attr("height",function(){
      var h1;
      if (sortselecting == 1){h1 = '.01';};
      if (sortselecting == 2){h1 = height;};
      return h1;
    })
    // .attr("stroke", "black")
    .attr('border-top','1em dotted #fc0')
    .attr("stroke-width", "3")
    .attr("stroke-linecap", "miter")
     .attr("stroke-dasharray", "7, 7")
     // .attr("fill", "none")
    .style("stroke", "#33b5e5");


  // Add a title.
  // dot2.append('svg:title').text(
  //     function(d) { return d[jsonname]; });

  // Add an overlay for the year label.
  // var box = label.node().getBBox();

  // var overlay = svg.append("rect")
  //        .attr("class", "overlay")
  //       .attr("y", height/15)
  //       .attr("x", width-5)
  //       .attr("width", box.width)
  //       .attr("height", box.height)
  //       .on("mouseover", enableInteraction);

  // Start a transition that interpolates the data based on year.
  // svg.transition()
  //     .duration(30000)
  //     .ease("linear")
  //     .tween("year", tweenYear)
  //     .each("end", enableInteraction);

  // Positions the dots based on data.
  function position(dot2) {

    dot2 .attr("cx", function(d) { return 0; })
        .attr("cy", height)
        .attr("r", function(d) { return radiusScale(radius(d)); })
        .attr("class","hastip")
        .attr("rel", function(d){
          var titlestring = "/Champions/"+d[jsonname]+"/"+gametype3+"/tooltip/";
          // console.log(titlestring);
          return titlestring;
          // function(d) { return d[jsonname];
          // '<img src="https://si0.twimg.com/a/1339639284/images/three_circles/twitter-bird-white-on-blue.png" />'
              }
          )
        .transition().duration(1000)
                  .attr("cx", function(d) { return xScale(x(d)); })
                  .attr("cy", function(d) { return yScale(y(d)); })
                  .attr("r", function(d) { return radiusScale(radius(d)); });
                  
          
  }

  // Defines a sort order so that the smallest dots are drawn on top.
  function order(a, b) {
    return radius(b) - radius(a);
  }


  // After the transition finishes, you can mouseover to change the year.
  // function enableInteraction() {
  //   var yearScale = d3.scale.linear()
  //       .domain([1800, 2009])
  //       .range([box.x + 10, box.x + box.width - 10])
  //       .clamp(true);

  //   // Cancel the current transition, if any.
  //   svg.transition().duration(0);

        // $(document).ready($(".dot").on("mouseover", function(){
        //   // console.log(($(this).select('title'))[jsonname]);
        //   console.log('w00t');
        //   this.tipsy();
          
        // }));



$(document).ready(function()
{
   $('.hastip').each(function(){
      $(this).qtip({
          style:"qtip-dark",
          content: {
            text: '<div>"Loading..." </div>',
            ajax: {
          url: $(this).attr('rel') // Use the rel attribute of each element for the url to load
            },
          }
      });
   });
});
    //    $(document).ready(function () {
    //      var img = '<img src="https://si0.twimg.com/a/1339639284/images/three_circles/twitter-bird-white-on-blue.png" />';
    //     console.log('w00t');
    //     $("circle").tipsy(title="look...a wild tooltip");
    // });
       //

// $('circle.dot').each(function(){
//   $(this).popover({content: img, html:true, trigger: 'hover' });
// });


         $('text.optionsforaxis').click( function(){
          if(sortselecting == 2){
            $('p#chart').remove();
            $('div#appendcharthere').append("<p id='chart' class='bubblechart span9'></p>");
            drawchart(1,gametype,data,gametype3);};
          if(sortselecting == 1){
            $('p#chart').remove();
            $('div#appendcharthere').append("<p id='chart' class='bubblechart span9'></p>");
            drawchart(2,gametype,data,gametype3);};
         });

function jsonToArray(json) {
    var ret = new Array();
    var key;
    for (key in json) {
        if (json.hasOwnProperty(key)) {
            ret.push(jsonKeyValueToArray(key, json[key]));
            // Add the champs from colmn 2!

        }
    }
    return ret;
};

function roundNumber(number, decimals) { // Arguments: number to round, number of decimal places
  var newnumber = new Number(number+'').toFixed(parseInt(decimals));
  return newnumber; // Output the result to the form field (change for your purposes)
};
function jsonKeyValueToArray(k, v) {return [k, v];};

};

