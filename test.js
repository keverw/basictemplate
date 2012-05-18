var basictemplate = require('./basictemplate.js');

/*basictemplate.render('./view.bt', {hello: '<i>W</i>orld'}, function(err, html)
{
    console.log(err);
    console.log(html);
});
*/

basictemplate.render_sub('./view.bt', './subview.bt', {hello: 'World', what: 'subview'}, function(err, html)
{
   // console.log(err);
    console.log(html);
});