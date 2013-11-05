




/******************************

    I made this function to show how to use the charter.js file
    
    All you have to do is make the following:
    attachElementById() - Make a div with an id like this: <div id="mytable"></div>   Then attachElementById("mytable").  
                            The table is going to be created in that div.
                            
    A header - Each column
    Chart    - Create a chart
    data     - You can add data dynamically to the chart and refresh it =)
    
    
    You have to set:
        
        The Unique id:  This isn't really used right now, but it is used to set the id's
        Add the data:  Can add data with the following functions:
                                addData() - adds one block of data in json format
                                addDataArray() - adds an array of blocks of data in json format
        
        Set the Chart Column Functions:  This is a really important one - This is where we set how each column should look
        
    Then just call display(), and bam! done.
    
    Check out this example.  It's the same one that you gave me.  I fixed the total bars like you wanted too.
********************************/
function test(data)
{
    var header = ["Name", "Total Games", "Win Ratio", "Popularity"];
    
    
    // 1 if column can be sorted, 0 if not
    var sortable = [1, 1, 1, 1];
    
    var chart = new Charter( header );
    // var data = [{"Name": "Lux", "Total": 482, "Win Ratio": 0.25, "Popularity": 0.202}, {"Name": "Jax", "Total": 2156, "Win Ratio": 0.21, "Popularity": 0.55}, {"Name": "Sona", "Total": 343, "Win Ratio": 0.75, "Popularity": 0.005}]
    // var data2 = [{"Name": "Lux", "Total": 482, "Win Ratio": 0.25, "Popularity": 0.202}, {"Name": "Jax", "Total": 2156, "Win Ratio": 0.21, "Popularity": 0.55}, {"Name": "Sona", "Total": 343, "Win Ratio": 0.75, "Popularity": 0.005}, {"Name": "Lux", "Total": 482, "Win Ratio": 0.25, "Popularity": 0.202}, {"Name": "Jax", "Total": 2156, "Win Ratio": 0.21, "Popularity": 0.55}, {"Name": "Sona", "Total": 343, "Win Ratio": 0.75, "Popularity": 0.005}, {"Name": "Lux", "Total": 482, "Win Ratio": 0.25, "Popularity": 0.202}, {"Name": "Jax", "Total": 2156, "Win Ratio": 0.21, "Popularity": 0.55}, {"Name": "Sona", "Total": 343, "Win Ratio": 0.75, "Popularity": 0.005}, {"Name": "Lux", "Total": 482, "Win Ratio": 0.25, "Popularity": 0.202}, {"Name": "Jax", "Total": 2156, "Win Ratio": 0.21, "Popularity": 0.55}, {"Name": "Sona", "Total": 343, "Win Ratio": 0.75, "Popularity": 0.005}, {"Name": "Lux", "Total": 482, "Win Ratio": 0.25, "Popularity": 0.202}, {"Name": "Jax", "Total": 2156, "Win Ratio": 0.21, "Popularity": 0.55}, {"Name": "Sona", "Total": 343, "Win Ratio": 0.75, "Popularity": 0.005}, {"Name": "Lux", "Total": 482, "Win Ratio": 0.25, "Popularity": 0.202}, {"Name": "Jax", "Total": 2156, "Win Ratio": 0.21, "Popularity": 0.55}, {"Name": "Sona", "Total": 343, "Win Ratio": 0.75, "Popularity": 0.005}]
    
    // 3 sets to make
    chart.attachToElementById("ele"); // MUST BE SET
    chart.setUniqueId("test"); // currently this just adds a string to the id, which I am not using right now...
    chart.setSortableColumns( sortable ); // no columns will be sortable if this is not set.
    
    // Set a chart type
    setChartToTypeOne( chart); // sets how each column should be displayed

    //try with data and data 2
    chart.addDataArray(data); // add data to display
    
    // display
    chart.display();
    
    
}



