var basictemplate = require('../basictemplate.js');

/*basictemplate.render('./templates/basic/view.bt', {hello: '<i>W</i>orld'}, function(err, html)
{
    console.log(err);
    console.log(html);
});
*/

basictemplate.render_sub('./templates/basic/view.bt', './templates/basic/subview.bt', {
    hello: 'World',
    what: 'subview'
}, function (err, html)
{
    // console.log(err);
    console.log(html);
});