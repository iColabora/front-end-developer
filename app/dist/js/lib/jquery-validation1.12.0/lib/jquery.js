(function(){var e=document.location.search.slice(1).split("&"),t=e.length,n=document.getElementsByTagName("script"),r=n[n.length-1].src,i=0,s,o="1.9.1",u="http://code.jquery.com/jquery-git.js";for(;i<t;i++){s=e[i].split("=");if(s[0]==="jquery"){o=s[1];break}}o!="git"&&(u=r.replace(/jquery\.js$/,"jquery-"+o+".js")),document.write("<script src='"+u+"'></script>")})();