var basictemplate = require('../basictemplate.js');

var dir = 'basic';

/*basictemplate.render('../templates/' + dir + '/layout.bt', {hello: '<i>W</i>orld'}, function(err, html)
{
    console.log(err);
    console.log(html);
});
*/

basictemplate.render_sub('../templates/' + dir + '/layout.bt', '../templates/' + dir + '/subview.bt', {
    hello: 'World',
    what: 'subview'
}, function (err, html)
{
    //console.log(err);
    console.log(html);
});