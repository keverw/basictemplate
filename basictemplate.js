(function() {

function render_view(view, data, callback)
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