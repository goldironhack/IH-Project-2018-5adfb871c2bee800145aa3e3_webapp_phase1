const DATASET_QUERY_NH = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
const DATASET_QUERY_GEO = "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";
const DATASET_QUERY_CRIME = "https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i/data";
const DATASET_QUERY_HS = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD";

var nhObject =[]; //Array that will store the data from NEIGHBOURHOOD GIS
var geoObject = []; // Array that will Store the data from NY Districts geoshapes 
var crimeObject = []; // Array that will store data from Crimes in NY
var houseObject = []; // Arrray that will store data from Housing

$(document).ready( function(){
	$("#buttonA").on("click",updateData)
})


function getData(URL){
	var data = $.get(URL,function(){
		console.log(URL)
	})

	.done(function(){
		console.log("Succes!")
		getNeighbourhoodData(data);

	})
	.fail(function(error){
		console.error(error);
	})
}

function updateData(){
    getData(DATASET_QUERY_NH);
}

function getNeighbourhoodData(data){

	for(var i=0;i<data.responseJSON.data.length;i++){
						 nhObject.push([data.responseJSON.data[i][10],data.responseJSON.data[i][16],data.responseJSON.data[i][9]])
		 }
		 var tableReference=$("#tableBody")[0]
		 var newRow,borough,neighbourhood,point;
		 for(var j=0;j<nhObject.length;j++){
				 newRow=tableReference.insertRow(tableReference.rows.length);
				 borough=newRow.insertCell();
				 neighbourhood=newRow.insertCell();
				 point = newRow.insertCell();
				 borough.innerHTML=nhObject[j][0];
				 neighbourhood.innerHTML=nhObject[j][1];
				 //point.innerHTML=tableRows[j][2];
		 }
}


//------------------------------------------ Google Maps---------------------------------------------
var map;

function initMap(){

  var pos = {lat: 40.729100, lng: -73.996500}

	map = new google.maps.Map(document.getElementById('mapContainer'), {
    center : pos,
    zoom: 12
	});

  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });

}
