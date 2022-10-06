var spec2 = "js/choropleth_map.vl.json";
vegaEmbed('#choropleth_map', spec2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "js/line_chart.vl.json";
vegaEmbed('#line_chart', spec3).then(function(result) {1
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);