// ==UserScript==
// @name         Comment-Favorites
// @namespace    pr0gramm.com
// @version      0.1
// @description  Lets you set and un-set each comment as a favorite (using Mopsalarm's Service)
// @author       77
// @match        http://pr0gramm.com/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(function() {

var klick = "spoiler(this); function spoiler(element) {   var spoiler = element.parentNode.parentNode.nextElementSibling;   if (spoiler.style.display === 'none') {     spoiler.style.display = 'block';     element.innerHTML = '<span class=pict vote-fav style=font-size:14px; position:static;>*</span>';   }else{     spoiler.style.display = 'none';     element.innerHTML = '<span class=pict vote-fav faved style=font-size:14px; position:static;>*</span>';   } }";
var code = '<span class="pict">r</span> antworten</a>  <a class="action" onclick="' + klick + '"><span class="pict vote-fav" style="font-size:14px; position:static;">*</span></a>';


p.View.Stream.Comments.prototype.template =
p.View.Stream.Comments.prototype.template
.replace('<span class="pict">r</span> antworten</a> <?js } ?>', code + '<?js } ?>');

});