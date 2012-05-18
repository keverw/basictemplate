(function() {

var php = require('./htmlentities.commonjs.js');

function render_view(view, view_data, callback)
{
	var fs = require('fs');
	
	fs.readFile(view, 'utf8', function (err,data)
	{
  		if (err)
  		{
    		callback({type: 'file', file: err}, '')
  		}
  		else
  		{
  			for (var key in view_data)
  			{
				if (view_data.hasOwnProperty(key))
				{
					data = data.replace('{{' + key + '}}', view_data[key]);
					data = data.replace('{' + key + '}', php.htmlentities(view_data[key]));
					
					console.log(key); //Key
					console.log(view_data[key]); //Value
				}
			}
  			
  			console.log(php.htmlentities(data));
  			console.log(data);
  		}
});
	
}

//Public
function render(view, data, callback) //View and data
{
	render_view(view, data, function(err, html)
	{
    	console.log(err);
    	console.log(html);
	});
	//callback(null, 'later!')
}

function render_sub(view, subview, data, callback) //render the subview also.
{
	callback(null, 'later!')
}


// Export public API
	var basictemplate = {};
	basictemplate.render = render;
	basictemplate.render_sub = render_sub;
	module.exports = basictemplate;
}());