[![build status](https://secure.travis-ci.org/keverw/basictemplate.png)](http://travis-ci.org/keverw/basictemplate)
#Basic Template v0.1.8#

A basic template engine.

A main view and data. Optionally a subview. uses `{variable}` styles.

## Setup ##
To set up Basic Template on your Node.js server use npm.

    npm install basictemplate

## Basic Usage ##


```
var basictemplate = require('basictemplate');
basictemplate.render('./view.bt', {hello: 'World'}, function(err, html)
{
	console.log(err);
	console.log(html);
});
```

If you include a subview.

```
var basictemplate = require('basictemplate');
basictemplate.render_sub('./view.bt', './subview.bt', {hello: 'World'}, function(err, html)
{
	console.log(err);
	console.log(html);
});
```

To display a subview within the view, use `{{_SUBVIEW}}`

`{variable}` = escaped to HTML entities

`{{variable}}` = unescaped


##error:##

error is an object. 

`type`: the type of error. If it's a file system error, type will be `file`, and then another variable called `file` will contain the filesystem error object, if you want to analyze it. 

##Used by: ##

**MailKit** - [https://github.com/keverw/mailkit](https://github.com/keverw/mailkit)

If you're using Basic Template, let me know! [@keverw](https://twitter.com/keverw)