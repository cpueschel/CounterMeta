// Note this is not workign right.
//Want it to look like http://bl.ocks.org/gniemetz/4618602
//Have these bubbles http://bl.ocks.org/mccannf/1629644, i can add tooltips later
//Documentation: https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate


function drawchart(data){
// Sample Data from postgre database
var data = [{"position": "Overall", "gamesplayed": [15, 15, 15, 160, 158, 120, 1160, 1560, 1525, 1538, 5550, 4500, 4800, 5000, 5500, 4500, 3450, 3500, 3500, 2500, 2750, 3750, 3750, 3800, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750], "name": "Nami", "gametype": "NORMAL", "winRatio": [0.12, 0.15, 0.13, 0.16, 0.16, 0.16, 0.25, 0.3, 0.65, 0.7, 0.89, 0.75, 0.82, 0.76, 0.65, 0.54, 0.53, 0.52, 0.53, 0.51, 0.49, 0.51, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49, 0.49]}];
// Diemsnion
jsonx = null;
jsony = null;

// for( var i = 0; i < this.headerArray.length; i++ )
//     {
//         if(headerArray[i].contains(_x)){var jsonx = headerArray[i]}
//         if(headerArray[i].contains(_y)){var jsony = headerArray[i]}
//     }
var dimensions =
 [{name: "name"},
 {name: "position"},
 {name: "gamesplayed"},
 {name: "gametype"},
 {name: "winRatio"}];
var jsonname = dimensions[0].name,
    jsonposition = dimensions[1].name,
    jsongamesplayed = dimensions[2].name,
    jsongametype = dimensions[3].name,
    jsonwinRatio = dimensions[4].name;
    gametime = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55];


var svg = null,
    yAxisGroup = null,
    xAxisGroup = null,
    dataCirclesGroup = null,
    dataLinesGroup = null,
    margin = 20,
    w = 400,
    h = 200,
    y = d3.scale.linear().domain([0, 1]).range([0 + margin, h - margin]),
    x = d3.scale.linear().domain([15, gametime.length+15]).range([0 + margin, w - margin]);


    var vis  = d3.select('.linechart').append("svg:svg")
            .attr("width", w)
            .attr("height", h);

    var g = vis.append("svg:g")
            .attr("transform", "translate(0, 200)");

    var line = d3.svg.line()
        .x(function(d,i) { return x(i); })
        .y(function(d) { return -1 * y(d); });

        g.append("svg:path").attr("d", line(function (d){return d[jsonwinRatio];}));


        g.append("svg:line")
            .attr("x1", x(0))
            .attr("y1", -1 * y(0))
            .attr("x2", x(w))
            .attr("y2", -1 * y(0));

        g.append("svg:line")
            .attr("x1", x(0))
            .attr("y1", -1 * y(0))
            .attr("x2", x(0))
            .attr("y2", -1 * y(d3.max(function (d){return d[jsonwinRatio];})));

        g.selectAll(".xLabel")
            .data(x.ticks(5))
            .enter().append("svg:text")
            .attr("class", "xLabel")
            .text(String)
            .attr("x", function(d) { return x(d) })
            .attr("y", 0)
            .attr("text-anchor", "middle");
 
        g.selectAll(".yLabel")
            .data(y.ticks(4))
            .enter().append("svg:text")
            .attr("class", "yLabel")
            .text(String)
            .attr("x", 0)
            .attr("y", function(d) { return -1 * y(d) })
            .attr("text-anchor", "right")
            .attr("dy", 4);

        g.selectAll(".xTicks")
            .data(x.ticks(5))
            .enter().append("svg:line")
            .attr("class", "xTicks")
            .attr("x1", function(d) { return x(d); })
            .attr("y1", -1 * y(0))
            .attr("x2", function(d) { return x(d); })
            .attr("y2", -1 * y(-0.3))
         
        g.selectAll(".yTicks")
            .data(y.ticks(4))
            .enter().append("svg:line")
            .attr("class", "yTicks")
            .attr("y1", function(d) { return -1 * y(d); })
            .attr("x1", x(-0.3))
            .attr("y2", function(d) { return -1 * y(d); })
            .attr("x2", x(0))


}