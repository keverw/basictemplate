var basictemplate = require('./basictemplate.js');

basictemplate.render('./view.bt', {hello: 'World'}, function(err, html)
{
    console.log(err);
    console.log(html);
});

/*
basictemplate.render_sub('./view.bt', './subview.bt', {hello: 'World'}, function(err, html)
{
    console.log(err);
    console.log(html);
});
*/