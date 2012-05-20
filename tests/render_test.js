var basictemplate = require('../basictemplate.js');
var dir = 'basic';
/*basictemplate.render('./templates/' + dir + '/layout.bt', {hello: '<i>W</i>orld'}, function(err, html)
{
    console.log(err);
    console.log(html);
});
*/

basictemplate.render_sub('./templates/' + dir + '/layout.bt', './templates/' + dir + '/subview.bt', {
    hello: 'World',
    what: 'subview'
}, function (err, html)
{
    // console.log(err);
    // console.log(html);
    save2file(html);
});

function save2file(html)
{
    var fs = require('fs');
    fs.writeFile('./demo.html', html, 'utf8', function (err)
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log("The file was saved!");
        }
    });
}