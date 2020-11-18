//  Creates an XMLHttpRequest object,
//  adds the function to be executed
//  when the server response is ready,
//  and sends the request off to the server.
function loadDoc() {

    // Create XMLHttpRequest Object
    var xhttp = new XMLHttpRequest();

    // To do while "readystate" is changing
    xhttp.onreadystatechange = function() {
        // Verify our response state
        if (this.readyState == 4 && this.status == 200) {

            // To execute when the server is ready
            myFunction(this);
        }
    };

    // Connection
    xhttp.open("GET", "assets/files/cd_catalog.xml", true);

    // Sending the request
    xhttp.send();
}
function myFunction(xml) {

    // Ordinary element for our for loop
    var i;

    // Get data from XML file
    var xmlDoc = xml.responseXML;

    // Create table to display XML file returned data correctly
    var table="<tr><th>Artist</th><th>Title</th></tr>";

    // return an array of "CD" elements from XML file content we extracted earlier
    var x = xmlDoc.getElementsByTagName("CD");

    // Skim the "CD"s array and display its content in table line by line
    for (i = 0; i <x.length; i++) {

        // Create a line for the current "CD" content
        table += "<tr><td>" +
                    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
                 "</td><td>" +
                    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                 "</td></tr>";
    }

    // Display the table we created and filled earlier
    document.getElementById("demo").innerHTML = table;
}