// (c) 2011, Laura Doktorova

// Licensed under the MIT license.

(function(){var e={version:"0.1.2"};typeof module!="undefined"&&module.exports?module.exports=e:this.doU=e,e.templateSettings={begin:"{{",end:"}}",varname:"it"},e.template=function(t,n){n=n||e.templateSettings;var r="",i=n.begin,s=n.end,o,u,a=t.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]|(\/\*[\s\S]*?\*\/)/g,"").split(i).join(s+"").split(s);for(o=0,u=a.length;o<u;o++)r+=a[o].charAt(0)!==""?"out+='"+a[o].replace(/(\\|["'])/g,"\\$1")+"'":a[o].charAt(1)==="="?";out+=("+a[o].substr(2)+");":a[o].charAt(1)==="!"?";out+=("+a[o].substr(2)+").toString().replace(/&(?!\\w+;)/g, '&#38;').split('<').join('&#60;').split('>').join('&#62;').split('"+'"'+"').join('&#34;').split("+'"'+"'"+'"'+").join('&#39;').split('/').join('&#x2F;');":";"+a[o].substr(1);r=('var out="";'+r+";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=");try{return new Function(n.varname,r)}catch(f){throw typeof console!="undefined"&&console.log("Could not create a template function: "+r),f}}})();