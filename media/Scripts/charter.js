/*************
    This is the Charter created for the purpose of making tables easier
*************/
function Charter( dataArray )
{
    this.headerArray = dataArray;
    
    this.data = new Array();
    this.globalData = null;
    this.elementId = null;
    this.columnDisplayFunctions = new Array();
    this.uniqueId = null;
    
    this.table = null;
    this.rows = new Array();
    
    this.tHead = null;
    this.tBody = null;
    this.tHeadr = null;
    
    this.sortableHeaders = null;
    
    this.tableHeaders = new Array();
    this.rowIdBase = null;
    this.headerIdBase = null;
    this.cellIdBase = null;
    for( var i = 0; i < dataArray.length; i++ )
    {
        this.columnDisplayFunctions[this.headerArray[i]] = function( data, element, globalData ){ element.innerHTML = "NULL"; };
    }
    
}


Charter.prototype.setSortableColumns = function( arr )
{
    this.sortableHeaders = arr;
}

Charter.prototype.attachColumnFunction = function( columnFunc, column )
{
    this.columnDisplayFunctions[this.headerArray[column]] = columnFunc;
}

Charter.prototype.attachToElementById = function( id )
{
    this.elementId = id;
}

Charter.prototype.setUniqueId = function( id )
{
    this.uniqueId = id;
    this.rowIdBase = "row" + this.uniqueId;
    this.headerIdBase = "header" + this.uniqueId;
    this.cellIdBase = "cell" + this.uniqueId;
}

Charter.prototype.addData = function( data )
{
    this.data.push( data );
}

Charter.prototype.addDataArray = function( data )
{   

    for( var i = 0; i < data.length; i++ )
    {
        this.data.push( data[i] );
        
    }

}

// can't remove data right now
Charter.prototype.removeData = function( value )
{
    var index = -1;
    for( var i = 0; i < this.data.length; i++ )
    {
        if( this.data[this.key] === value )
        {
            index = i;
            break;
        }
    }
    
    if( index != -1 )
    {
        this.data.splice( index, 1 );
    }
    
}

Charter.prototype.displayBaseTable = function()
{
    this.table = document.createElement("table");
    this.table.setAttribute("id", "myTable");
    this.tHead = document.createElement("thead");
    this.tHeadr = document.createElement("tr");
    this.tBody = document.createElement("tbody");
    
    this.tHead.appendChild(this.tHeadr);
    this.table.appendChild(this.tHead);
    this.table.appendChild(this.tBody);
    
    this.table.setAttribute("class", "table table-striped table-hover table-condensed");
    document.getElementById( this.elementId ).appendChild(this.table);
                    
}
Charter.prototype.displayHeader = function()
{
    var _this = this;
    
    for( var i = 0; i < this.headerArray.length; i++ )
    {
        var th = document.createElement("th");
        th.setAttribute("id", this.headerIdBase + i);
        th.setAttribute("name", this.headerArray[i]);
        
        if( this.sortableHeaders == null || this.sortableHeaders[i] != 1 )
        {
            th.setAttribute("class", "sorttable_nosort");
        }
        th.innerHTML = this.headerArray[i];
        this.tHeadr.appendChild(th);
        this.tableHeaders.push( th );
        
    }
}


Charter.prototype.displayRows = function()
{ 
    for( var i = 0; i < this.data.length; i++ )
    {
        var row = document.createElement("tr");
        row.setAttribute("id", this.rowIdBase + i);
        this.tBody.appendChild(row);
        this.rows.push(row);
    }
}

Charter.prototype.displayCells = function()
{
    for( var i = 0; i < this.rows.length; i++ )
    {
        for( var j = 0; j < this.headerArray.length; j++ )
        {
            var td = document.createElement("td");
            td.setAttribute("id", this.cellIdBase + i + j);
            this.columnDisplayFunctions[this.headerArray[j]]( this.data[i], td, this.globalData );
            this.rows[i].appendChild(td);
        }
    }        
}

Charter.prototype.display = function()
{
    this.displayBaseTable();
    this.displayHeader();
    this.displayRows();
    this.displayCells();
    sorttable.makeSortable( this.table );
}


Charter.prototype.clear = function()
{
    var element = document.getElementById( this.elementId );
    while( element.hasChildNodes())
    {
        element.removeChild( element.lastChild );
    }
    this.rows.length = 0;
    this.tableHeaders.length = 0;
}

Charter.prototype.refresh = function()
{
    this.clear();
    this.display();
}


/************************************************
*
*
*       Re-usable column functions here
*
*   These functions are meant to sort the data for a specific column
*   The parameters are 
*              data: The json object of data
*              element: The cell that you are working with
*              globaldata: json object that contains data that may need to be used with the data.  This can be null if you don't need it.
*
*   So, you can make a chart by making your own functions for the columns,
*   or by using functions that you have already made.  EZ charts of anything.
*
*   The only requirement is that the data object needs to contain the correct indexes.
*
************************************************/


/*
    Requires that there is a "Name" in the json
    Retreives the image from the image folder and puts it in
*/
function maxNumberGames(){

    var mostgames = 0;
    for( var i = 0; i < data.length; i++ )
    {
        if (data[i].Total > mostgames){mostgames = data[i].Total}
    }

    return mostgames;
}

function imageIconFromName( data, element, globalData)
{
    var srcURL = "http://127.0.0.1:8000/media/images/" + data["Name"].replace(/\s+/g, '').replace("'",'').replace(".",'') + "_Square_0.png";
    var hrefURL = "http://127.0.0.1:8000/Champions/" + data["Name"];

    var titlestring = "/Champions/"+data["Name"]+"/"+gametype+"/tooltip/";
    var a_link = document.createElement("a");
    a_link.setAttribute("href", hrefURL);
    a_link.setAttribute("class","blob hastip");
    a_link.setAttribute("rel", titlestring);
    var image = document.createElement("img");
    image.setAttribute("src", srcURL);
    image.setAttribute("class","table-images");
    image.setAttribute("width", 40);
    image.setAttribute("height", 40);

    var div2 = document.createElement("div");
    element.appendChild(a_link);
    a_link.appendChild(image);
    // set custom sorting element for this column
    element.setAttribute("sorttable_customkey", data["Name"]);
}

/*
    Requires that there is a "WinRatio" and "TotalGames" in the json
*/

function graphFromTotal( data, element, globalData )
{   
    var mostgames = maxNumberGames();

    var div = document.createElement("div");
    var div2 = document.createElement("div");

    var totalWidth = 125;
    var totalgames = totalWidth*data["Total"]/mostgames;
    var totalWinWidth = totalgames * data["Win Ratio"]; 
    var totalLossWidth = totalgames * ( 1 - data["Win Ratio"] );
    
    // Set up Scales for Total
    
    console.log(d3.max(data, function(d) { return d["Total"]; }));
    var barheights = 9;
    
    var svgTotalBar = d3.select(div).append("svg")
                        .attr("width", 125 )
                        .attr("height", barheights*3+4);
        //Total            
        svgTotalBar.append("rect") 
                .attr("width", totalgames)
                .attr("height", barheights/2)
                .attr("fill", "#FDD017") 
                .style("stroke", "black")
                .style("stroke-width", .5)
                .attr("y", 0);

        //Loss        
        svgTotalBar.append("rect")                 
                .attr("width",  totalLossWidth)
                .attr("height",barheights)
                .attr("fill", "#ff3333")
                .attr("y", barheights/2+1.75)
                .style("stroke", "black")
                .style("stroke-width", .5)                                
                ;
            //Loss Highlights    
            svgTotalBar.append("rect") 
                   .attr("width",  totalLossWidth-1)
                    .attr("height",barheights/1.75+1)
                    .attr("fill", "#ff0000")
                    .attr("y", barheights/2+4)
                    .attr("x", .5);        

        //Win
        svgTotalBar.append("rect")                
                .attr("width", totalWinWidth)
                .attr("height", barheights)
                .attr("fill", "#00d900")
                .attr("y",1.5*barheights+3.5)
                .style("stroke", "black")
                .style("stroke-width", .5)         
                ;
                //Win Highlights    
                svgTotalBar.append("rect") 

                .attr("width",  totalWinWidth-1)
                .attr("height",barheights/1.75+1)
                .attr("fill", "#00A600")
                .attr("y", 1.5*barheights+5.75)
                .attr("x", .25);

    
    element.innerHTML = data["Total"];
    element.appendChild( div );
}

/* 
    Requires that there is a "WinRatio" in the json
*/
function graphFromWinRatio( data, element, globalData )
{
    var div = document.createElement("div");
    var totalWidth = 125;
    var barheights = 9;
    var totalWinWidth = totalWidth * data["Win Ratio"];
    
    var svgRatioBar = d3.select(div).append("svg")
                        .attr("width", totalWidth )
                        .attr("height", barheights+6);
                        
    svgRatioBar.append("rect") 
            .attr("width", totalWinWidth)
            .attr("height", barheights)
            .attr("fill", "#57c2ea") 
            .style("stroke", "black")
            .style("stroke-width", 1); 
              svgRatioBar.append("rect") 
                        .attr("width", totalWinWidth-2)
                        .attr("height", barheights/1.75)
                        .attr("fill", "#2ab2e4") 
                        .attr("y",3)
                        .attr("x",1); 
    
    var s = "" + data["Win Ratio"] * 100;
    if( s.length > 7 )
    {
        s = s.substring( 0, 6 );
    }
    element.innerHTML = s + "%";
    element.appendChild( div );
}

/*
    Requires that there is a "Popularity" in the json
*/
function graphFromPopularity( data, element, globalData )
{
    var div = document.createElement("div");
    var totalWidth = 125;
    var barheights = 9;
    var totalPopularityWidth = totalWidth * data["Popularity"];
    
    var svgPopularityBar = d3.select(div).append("svg")
                  .attr("width", totalWidth )
                  .attr("height", barheights+6);
                  
           svgPopularityBar.append("rect") 
                  .attr("width", totalPopularityWidth)	
                  .attr("height", barheights)
                  .attr("fill", "#df684c") 
                  .style("stroke", "black")
                  .style("stroke-width", 1)   
                  ; 

          svgPopularityBar
                  .append("rect") 
                  .attr("width", totalPopularityWidth-2)  
                  .attr("height", barheights/1.75)
                  .attr("fill", "#D24726")
                  .attr("y",3)
                  .attr("x",1); 
                  
    var s = "" + data["Popularity"] * 100;
    if( s.length > 7 )
    {
        s = s.substring( 0, 6 );
    }                  
    element.innerHTML = s + "%";
    element.appendChild( div );
}



/*******************************************
*
*
* Custom made funcs that use the re-usable funcs
*
*
*
*   This is where we can create charts from the functions above
*
********************************************/

/*
*
*   This is a replica of the chart you made before.
*   Just have to set the four column functions
*   and make sure that the data passed in is correctly formmated
*
*/
function setChartToTypeOne( chart )
{
    //type one has 4 columns
    chart.attachColumnFunction( imageIconFromName, 0 );
    chart.attachColumnFunction( graphFromTotal, 1 );
    chart.attachColumnFunction( graphFromWinRatio, 2 );
    chart.attachColumnFunction( graphFromPopularity, 3 );
    
    //this is also where you would change which headers are sortable or not.
    //chart.tableHeaders[0].setAttribute("class", "sorrtable_sorted");
    
}



