(function(){var e;e=function(){},e.prototype.init=function(){var e,o,i;void 0!==navigator.cookieEnabled&&(o=document.cookie.indexOf("ackCookies"),e=document.cookie.indexOf("ackCookieFadeout"),-1===o&&-1===e&&this.isDomainIncluded()&&(i=euCookie_data.asset_path+"/cookie_alert_dialog.js",jQuery.getScript(i,function(){var e;e=new CookieAlertDialog,e.init()})))},e.prototype.isDomainIncluded=function(){var e,o,i,t,n,a,r,c;if(e=euCookie_data.stylesheet_path+"/cookie_alert.css",jQuery("head").append(jQuery("<link rel='stylesheet' type='text/css' href='"+e+"' />")),t="at,fr,ie,it,nl,es,se,com.au,uk,de,pt,be,dk,ch,no,fi",a=!1,i=document.location.hostname,"undefined"!=typeof euCookieDomainOverwrite&&(i="."+euCookieDomainOverwrite),o=document.location.pathname.toLowerCase(),r=-1===o.indexOf("/mediabinfooter.aspx"),null!==(c=t.split(","))&&r)for(n=0;n<c.length;){if(i.indexOf("."+c[n].toString().trim())>=0||0===i.indexOf(c[n].toString().trim()+".")){a=!0;break}n++}return a},$(function(){var o;o=new e,o.init()})}).call(this);