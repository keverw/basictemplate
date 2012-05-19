(function() {
/*
* Recursively merge properties of two objects 
*/
function MergeRecursive(obj1, obj2) { //http://stackoverflow.com/a/383245

  for (var p in obj2) {
    try {
      // Property in destination object set; update its value.
      if ( obj2[p].constructor==Object ) {
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);

      } else {
        obj1[p] = obj2[p];

      }
      
    } catch(e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];

    }
  }

  return obj1;
}

//

var php = require('./php.js');

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
				}
			}
  			
  			callback(null, data);
  		}
});
	
}

//Public
function render(view, view_data, callback) //View and data
{
	render_view(view, view_data, function(err, html)
	{
		html = php.nl2br(html);
		callback(err, html);
	});
}

function render_sub(view, subview, view_data, callback) //render the subview also.
{
	render_view(subview, view_data, function(err, html)
	{
		if (err)
  		{
			callback(err, null);
		}
		else
		{
			view_data2 = MergeRecursive(view_data, {subview: html});
			
			render_view(view, view_data2, function(err, html)
			{
				html = php.str_replace('>\n', '>', html);
				html = php.nl2br(html);
				
				callback(err, html);
			});
		}
	});
}


// Export public API
	var basictemplate = {};
	basictemplate.render = render;
	basictemplate.render_sub = render_sub;
	module.exports = basictemplate;
}());