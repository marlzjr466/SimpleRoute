class CustomJS {
	constructor() {
		var page;
		this.allTag = document.getElementsByTagName("BODY")[0].children;

		document.getElementsByTagName("BODY")[0].addEventListener("click", function(e) {
			if (e.target.attributes.length > 0) {
				for (let i = 0; i < e.target.attributes.length; i++) {
					if (e.target.attributes[i].name == "data-route-path") {
						new Route(page, e.target.attributes[i].value);
						break;
					}
				}
			}
		});

		this.initialize = function(pages) {
			page = pages;
		}
	}

	route(view) {
		this.initialize(view);    
		if (sessionStorage.getItem('pagename') == null) {
			new Route(view, view[0].path.name);
		} else {
			new Route(view, sessionStorage.getItem('pagename'));
		}
	}
}

class Route {
	constructor(page, pageName) {
		var div = document.getElementsByTagName("DIV");
		sessionStorage.setItem('pagename', pageName);
		window.history.pushState({}, `Custom JS - ${pageName}`, `?${pageName}`);

		for (let i = 0; i < page.length; i++) {
			if (page[i].path.name == pageName) {
				var xmlhttp;
				if (window.XMLHttpRequest) {
					xmlhttp = new XMLHttpRequest();
				} else {
					xmlhttp = new AtiveXObject("Microsoft.XMLHTTP");
				}
				
				xmlhttp.onreadystatechange = function () {
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						for (let i = 0; i < div.length; i++) {
							if (div[i].attributes[0].name == "data-route-view") {
								div[i].innerHTML = xmlhttp.responseText;

								break;
							}
						}
					}
				}
				xmlhttp.open("GET",page[i].path.url,true);
				xmlhttp.send();

				break;
			} 
		}
	}
}