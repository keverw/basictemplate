/* 
 * More info at: http://phpjs.org
 * 
 * This is version: 3.26
 * php.js is copyright 2012 Kevin van Zonneveld.
 * 
 * Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
 * (http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
 * (http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
 * Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
 * Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
 * Rafał Kukawski (http://blog.kukawski.pl), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
 * Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
 * L. Rodrigues (http://www.jsfromhell.com), Ash Searle
 * (http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
 * Erkekjetter, Michael Grier, Rafał Kukawski (http://kukawski.pl), Johnny
 * Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
 * http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
 * Rafał Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
 * (http://webdevhobo.blogspot.com/), marrtins, GeekFG
 * (http://geekfg.blogspot.com), Andrea Giammarchi
 * (http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
 * gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
 * Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
 * (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
 * Marc Palau, Kevin van Zonneveld (http://kevin.vanzonneveld.net/), Martin
 * (http://www.erlenwiese.de/), Breaking Par Consulting Inc
 * (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
 * Chris, Mirek Slugen, saulius, Alfonso Jimenez
 * (http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
 * Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
 * Ariede (http://caioariede.com), Robin, Kankrelune
 * (http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
 * (http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
 * Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
 * David, Aman Gupta, Michael White, Public Domain
 * (http://www.json.org/json2.js), Steven Levithan
 * (http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
 * Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
 * Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
 * (http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
 * Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
 * Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
 * (http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
 * (http://javascript.crockford.com), madipta, Slawomir Kaniecki,
 * ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
 * (http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
 * Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
 * Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson Högfeldt
 * (http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
 * josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
 * Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
 * (http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
 * (http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
 * Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
 * (http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
 * (http://yass.meetcweb.com), Peter-Paul Koch
 * (http://www.quirksmode.org/js/beat.html), Olivier Louvignes
 * (http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
 * Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
 * vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
 * Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
 * (http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
 * B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
 * (http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
 * Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
 * Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
 * (http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
 * Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
 * Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
 * sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
 * Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
 * (http://www.premasolutions.com/), Philippe Jausions
 * (http://pear.php.net/user/jausions), Aidan Lister
 * (http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
 * strcmp, Taras Bogach, jpfle, Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
 * dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
 * (http://www.pedrotainha.com), James, Arnout Kazemier
 * (http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
 * FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
 * Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
 * daniel airton wermann (http://wermann.com.br), Atli Þór, Maximusya, Ryan
 * W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
 * (http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
 * Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
 * (http://www.frontierwebdev.com/), Rafał Kukawski, FremyCompany, Matt
 * Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
 * Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
 * (http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
 * Russell Walker (http://www.nbill.co.uk/), Jamie Beck
 * (http://www.terabit.ca/), setcookie, Michael, YUI Library:
 * http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
 * http://hacks.bluesmoon.info/strftime/strftime.js, Ben
 * (http://benblume.co.uk/), DtTvB
 * (http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
 * meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
 * (http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
 * Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
 * Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
 * Bryan
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ 


// jslint.com configuration options. See: http://wiki.github.com/kvz/phpjs/jslint-options
/* global window */
/* jslint adsafe: false, bitwise: false, browser: false, cap: false, css: false, debug: false, devel: false, eqeqeq: true, evil: false, forin: false, fragment: false, immed: true, indent: 4, laxbreak: false, maxerr: 100, maxlen: 80, newcap: true, nomen: false, on: true, onevar: false, passfail: false, plusplus: false, regexp: false, rhino: false, safe: false, sidebar: false, strict: false, sub: false, undef: true, white: false, widget: false */

// Our idea with CommonJS is that you can do the following:
// var php = require('php');
// php.md5('test');

exports.get_html_translation_table = function (table, quote_style) {
	// Returns the internal translation table used by htmlspecialchars and htmlentities  
	// 
	// version: 1109.2015
	// discuss at: http://phpjs.org/functions/get_html_translation_table
	// +   original by: Philip Peterson
	// +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   bugfixed by: noname
	// +   bugfixed by: Alex
	// +   bugfixed by: Marco
	// +   bugfixed by: madipta
	// +   improved by: KELAN
	// +   improved by: Brett Zamir (http://brett-zamir.me)
	// +   bugfixed by: Brett Zamir (http://brett-zamir.me)
	// +      input by: Frank Forte
	// +   bugfixed by: T.Wild
	// +      input by: Ratheous
	// %          note: It has been decided that we're not going to add global
	// %          note: dependencies to php.js, meaning the constants are not
	// %          note: real constants, but strings instead. Integers are also supported if someone
	// %          note: chooses to create the constants themselves.
	// *     example 1: \php.get_html_translation_table('HTML_SPECIALCHARS');
	// *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}
	var entities = {},
		hash_map = {},
		decimal;
	var constMappingTable = {},
		constMappingQuoteStyle = {};
	var useTable = {},
		useQuoteStyle = {};

	// Translate arguments
	constMappingTable[0] = 'HTML_SPECIALCHARS';
	constMappingTable[1] = 'HTML_ENTITIES';
	constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
	constMappingQuoteStyle[2] = 'ENT_COMPAT';
	constMappingQuoteStyle[3] = 'ENT_QUOTES';

	useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
	useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';

	if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
		throw new Error("Table: " + useTable + ' not supported');
		// return false;
	}

	entities['38'] = '&amp;';
	if (useTable === 'HTML_ENTITIES') {
		entities['160'] = '&nbsp;';
		entities['161'] = '&iexcl;';
		entities['162'] = '&cent;';
		entities['163'] = '&pound;';
		entities['164'] = '&curren;';
		entities['165'] = '&yen;';
		entities['166'] = '&brvbar;';
		entities['167'] = '&sect;';
		entities['168'] = '&uml;';
		entities['169'] = '&copy;';
		entities['170'] = '&ordf;';
		entities['171'] = '&laquo;';
		entities['172'] = '&not;';
		entities['173'] = '&shy;';
		entities['174'] = '&reg;';
		entities['175'] = '&macr;';
		entities['176'] = '&deg;';
		entities['177'] = '&plusmn;';
		entities['178'] = '&sup2;';
		entities['179'] = '&sup3;';
		entities['180'] = '&acute;';
		entities['181'] = '&micro;';
		entities['182'] = '&para;';
		entities['183'] = '&middot;';
		entities['184'] = '&cedil;';
		entities['185'] = '&sup1;';
		entities['186'] = '&ordm;';
		entities['187'] = '&raquo;';
		entities['188'] = '&frac14;';
		entities['189'] = '&frac12;';
		entities['190'] = '&frac34;';
		entities['191'] = '&iquest;';
		entities['192'] = '&Agrave;';
		entities['193'] = '&Aacute;';
		entities['194'] = '&Acirc;';
		entities['195'] = '&Atilde;';
		entities['196'] = '&Auml;';
		entities['197'] = '&Aring;';
		entities['198'] = '&AElig;';
		entities['199'] = '&Ccedil;';
		entities['200'] = '&Egrave;';
		entities['201'] = '&Eacute;';
		entities['202'] = '&Ecirc;';
		entities['203'] = '&Euml;';
		entities['204'] = '&Igrave;';
		entities['205'] = '&Iacute;';
		entities['206'] = '&Icirc;';
		entities['207'] = '&Iuml;';
		entities['208'] = '&ETH;';
		entities['209'] = '&Ntilde;';
		entities['210'] = '&Ograve;';
		entities['211'] = '&Oacute;';
		entities['212'] = '&Ocirc;';
		entities['213'] = '&Otilde;';
		entities['214'] = '&Ouml;';
		entities['215'] = '&times;';
		entities['216'] = '&Oslash;';
		entities['217'] = '&Ugrave;';
		entities['218'] = '&Uacute;';
		entities['219'] = '&Ucirc;';
		entities['220'] = '&Uuml;';
		entities['221'] = '&Yacute;';
		entities['222'] = '&THORN;';
		entities['223'] = '&szlig;';
		entities['224'] = '&agrave;';
		entities['225'] = '&aacute;';
		entities['226'] = '&acirc;';
		entities['227'] = '&atilde;';
		entities['228'] = '&auml;';
		entities['229'] = '&aring;';
		entities['230'] = '&aelig;';
		entities['231'] = '&ccedil;';
		entities['232'] = '&egrave;';
		entities['233'] = '&eacute;';
		entities['234'] = '&ecirc;';
		entities['235'] = '&euml;';
		entities['236'] = '&igrave;';
		entities['237'] = '&iacute;';
		entities['238'] = '&icirc;';
		entities['239'] = '&iuml;';
		entities['240'] = '&eth;';
		entities['241'] = '&ntilde;';
		entities['242'] = '&ograve;';
		entities['243'] = '&oacute;';
		entities['244'] = '&ocirc;';
		entities['245'] = '&otilde;';
		entities['246'] = '&ouml;';
		entities['247'] = '&divide;';
		entities['248'] = '&oslash;';
		entities['249'] = '&ugrave;';
		entities['250'] = '&uacute;';
		entities['251'] = '&ucirc;';
		entities['252'] = '&uuml;';
		entities['253'] = '&yacute;';
		entities['254'] = '&thorn;';
		entities['255'] = '&yuml;';
	}

	if (useQuoteStyle !== 'ENT_NOQUOTES') {
		entities['34'] = '&quot;';
	}
	if (useQuoteStyle === 'ENT_QUOTES') {
		entities['39'] = '&#39;';
	}
	entities['60'] = '&lt;';
	entities['62'] = '&gt;';


	// ascii decimals to real symbols
	for (decimal in entities) {
		if (entities.hasOwnProperty(decimal)) {
			hash_map[String.fromCharCode(decimal)] = entities[decimal];
		}
	}

	return hash_map;
};

exports.htmlentities = function (string, quote_style, charset, double_encode) {
	// Convert all applicable characters to HTML entities  
	// 
	// version: 1109.2015
	// discuss at: http://phpjs.org/functions/htmlentities
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: nobbler
	// +    tweaked by: Jack
	// +   bugfixed by: Onno Marsman
	// +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +    bugfixed by: Brett Zamir (http://brett-zamir.me)
	// +      input by: Ratheous
	// +   improved by: Rafał Kukawski (http://blog.kukawski.pl)
	// +   improved by: Dj (http://phpjs.org/functions/htmlentities:425#comment_134018)
	// -    depends on: get_html_translation_table
	// *     example 1: \php.htmlentities('Kevin & van Zonneveld');
	// *     returns 1: 'Kevin &amp; van Zonneveld'
	// *     example 2: \php.htmlentities("foo'bar","ENT_QUOTES");
	// *     returns 2: 'foo&#039;bar'
	var hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style),
		symbol = '';
	string = string == null ? '' : string + '';

	if (!hash_map) {
		return false;
	}
	
	if (quote_style && quote_style === 'ENT_QUOTES') {
		hash_map["'"] = '&#039;';
	}
	
	if (!!double_encode || double_encode == null) {
		for (symbol in hash_map) {
			if (hash_map.hasOwnProperty(symbol)) {
				string = string.split(symbol).join(hash_map[symbol]);
			}
		}
	} else {
		string = string.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g, function (ignore, text, entity) {
			for (symbol in hash_map) {
				if (hash_map.hasOwnProperty(symbol)) {
					text = text.split(symbol).join(hash_map[symbol]);
				}
			}
			
			return text + entity;
		});
	}

	return string;
};

exports.nl2br = function (str, is_xhtml) {
	// Converts newlines to HTML line breaks  
	// 
	// version: 1109.2015
	// discuss at: http://phpjs.org/functions/nl2br
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: Philip Peterson
	// +   improved by: Onno Marsman
	// +   improved by: Atli Þór
	// +   bugfixed by: Onno Marsman
	// +      input by: Brett Zamir (http://brett-zamir.me)
	// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: Brett Zamir (http://brett-zamir.me)
	// +   improved by: Maximusya
	// *     example 1: \php.nl2br('Kevin\nvan\nZonneveld');
	// *     returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
	// *     example 2: \php.nl2br("\nOne\nTwo\n\nThree\n", false);
	// *     returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
	// *     example 3: \php.nl2br("\nOne\nTwo\n\nThree\n", true);
	// *     returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
	var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';

	return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
};


exports.str_replace = function (search, replace, subject, count) {
	// Replaces all occurrences of search in haystack with replace  
	// 
	// version: 1109.2015
	// discuss at: http://phpjs.org/functions/str_replace
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: Gabriel Paderni
	// +   improved by: Philip Peterson
	// +   improved by: Simon Willison (http://simonwillison.net)
	// +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	// +   bugfixed by: Anton Ongson
	// +      input by: Onno Marsman
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +    tweaked by: Onno Marsman
	// +      input by: Brett Zamir (http://brett-zamir.me)
	// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   input by: Oleg Eremeev
	// +   improved by: Brett Zamir (http://brett-zamir.me)
	// +   bugfixed by: Oleg Eremeev
	// %          note 1: The count parameter must be passed as a string in order
	// %          note 1:  to find a global variable in which the result will be given
	// *     example 1: \php.str_replace(' ', '.', 'Kevin van Zonneveld');
	// *     returns 1: 'Kevin.van.Zonneveld'
	// *     example 2: \php.str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
	// *     returns 2: 'hemmo, mars'
	var i = 0,
		j = 0,
		temp = '',
		repl = '',
		sl = 0,
		fl = 0,
		f = [].concat(search),
		r = [].concat(replace),
		s = subject,
		ra = Object.prototype.toString.call(r) === '[object Array]',
		sa = Object.prototype.toString.call(s) === '[object Array]';
	s = [].concat(s);
	if (count) {
		this.window[count] = 0;
	}

	for (i = 0, sl = s.length; i < sl; i++) {
		if (s[i] === '') {
			continue;
		}
		for (j = 0, fl = f.length; j < fl; j++) {
			temp = s[i] + '';
			repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
			s[i] = (temp).split(f[j]).join(repl);
			if (count && s[i] !== temp) {
				this.window[count] += (temp.length - s[i].length) / f[j].length;
			}
		}
	}
	return sa ? s : s[0];
};