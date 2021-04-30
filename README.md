# SimpleRoute
Simple route for single page websites

# Implementation

---- HTML file ----

'<button data-route-path="home">Page 1</button>'
<button data-route-path="new" class="wadasd">Page 2</button>
<p data-route-path="old" id="dasd">Page 3</p>
<a data-route-path="temp" href="">Page 4</a>


---- Javascript file -----

const app = new CustomJS();
app.route([
	{
		"path": {
			"name": "home",
			"url": "home.html"
		}
	},{
		"path": {
			"name": "new",
			"url": "new.html"
		}
	},{  
		"path": {
			"name": "old",
			"url": "old.html"
		}
	},{
		"path": {
			"name": "temp",
			"url": "templates/temp.html"
		}
	}
]);


