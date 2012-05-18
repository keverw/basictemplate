(function() {

function render_view(view, data, callback)
{

}

//Public
function render(view, data, callback) //View and data
{
	callback(null, 'later!')
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