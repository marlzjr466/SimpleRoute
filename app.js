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