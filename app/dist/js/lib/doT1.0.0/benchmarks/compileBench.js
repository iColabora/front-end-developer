(function(){function o(t){e.test("doU.js",function(){n.template(t)}),e.test("doU.js - looping",function(e){while(e--)n.template(t)}),e.test("doT.js - using this",function(){r.template(t)}),e.test("doT.js - using this - looping",function(e){while(e--)r.template(t)})}function u(){e=require("./jslitmus.js"),n=require("./templating/doU.js"),r=require("./templating/doT.js");var t=0;console.log("*** Compilation speed test"),console.log("*** Small template length: "+s.length),o(s),e.on("complete",function(e){console.log(e.toString())}),e.on("all_complete",function(){switch(t){case 0:t++;for(var n=0;n<5;n++)s+=s;console.log("*** Medium template length: "+s.length);break;case 1:t++;for(var n=0;n<3;n++)s+=s;console.log("*** Large template length: "+s.length);break;default:return}e.clearAll(),o(s),e.runAll()}),e.runAll()}function a(){e=window.jslitmus,n=window.doU,r=window.doT;var t=r.template("<h3>Template length : {{=it.size}} </h3>	<img src='{{=it.url}}'/>"),i=document.getElementById("small");o(s),e.on("complete",function(e){i.innerHTML+=e+"<br/>"}),e.on("all_complete",function(){var n=e.getGoogleChart();i.id==="small"?(i.innerHTML+=t({size:s.length,url:n}),setTimeout(function(){e.clearAll(),i=document.getElementById("large");for(var t=0;t<8;t++)s+=s;o(s),e.runAll()},10)):i.innerHTML+=t({size:s.length,url:n})}),e.runAll()}var e,t,n,r,i={f1:1,f2:2,f3:3,f4:"http://bebedo.com/laura"},s="<h1>Just static text</h1>		<p>Here is a simple {{=it.f1}} </p>		<div>test {{=it.f2}}		<div>{{=it.f3}}</div>		<div>{{!it.f4}}</div>		</div>";typeof module!="undefined"&&module.exports?u():window.onload=a})();