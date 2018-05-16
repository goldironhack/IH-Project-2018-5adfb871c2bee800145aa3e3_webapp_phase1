## webapp_phase1

##  1. Application Name

NYC Housing.

## 2. Keywords
Google Maps API, New York Districts, distance, affordability, safety.

## 3. Description of the datasets and function design

[Neighborhood Names GIS][https://catalog.data.gov/dataset/neighborhood-names-gis][area][3][229]
[NY_districts_shapes][https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson][area][][]
[NY_crimes][https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i/data][safety][][]
[NY_housing][https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i/data][][]





[Y/N] [List] Are all these datasets from data.gov or data.indy.gov? If not, where are they coming from (links)?

Y-Neighborhood Names GIS
Y-NYC Housing
N-Crime in NYC - https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i/data
N-NY-District-Shapes-https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson

## 4. Description

This first phase of the proyect is a simple visualitzation of the final result, the idea of this phase is to visualize the map centered in the given location. Also capture the data given by the datasets but without any real manipulation.

The technical requirements were tackled by following the instrcutions given by the task, using Google Maps API, and the usable libraries.

Until now the mashup does not use the data, but  is captured and saved to be used  on a future phase, in order to  to develop a product capable of delivering the specified requirements. The data was captured through the given links and saved on different arrays that are planned to be used on future presentations.

Map Visualization: 

1. [Y/N] Basic Map with specific location (your map is located in a meaningful place, city of west lafayette for example) 
    (Y) 

2. [Y/N] [describe] Any cover on the map (for example, cloud cover to show the weather effect)
    
    (N)

Chart Visualization: 

1. [Y/N] [describe] Use Graph? What is the type? (bar chart, pie chart, radar chart ...) 

    (N)
    
2. [Y/N] [List] Any interaction available on the graph? List them (enable click on numbers, drag on lines, change time/variables

    (N)
    
Interaction Form:

1. [Y/N] [List] Any information output? list them. (text field, text area, label, plain HTML ...) 
    Y - table id = tableBody - It shows some of the data taken from the Neighbourhood names GIS
2. [Y/N] [List] Any operation option (filters)? List them. (search markets, search vegetables, filter based on price, sort based on convenience ...)

    (N)
    
3. [Y/N] [List] Any information input? List them. (comments, markers, user preference ...)

    (N)
    
4. [Y/N] [List] Interaction with Map? List them. (filter on price will affect map markers, sort on price will affect map markers, ...)

    (N)
    
5. [Y/N] [List] Interaction with data visualization? List them. (filter, sort, set variables ...)

    (N)


##  5. Build Case

Nothing to build just three simple files .html,.css and .js, a plain webpage.

## 6.Test Case Which browsers did you test your project on?

The web page was tested on Mozilla Firefox and Google Chrome.


