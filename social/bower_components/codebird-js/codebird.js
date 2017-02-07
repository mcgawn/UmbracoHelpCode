!function(undefined){"use strict";Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){for(var n=t||0;n<this.length;n++)if(this[n]===e)return n;return-1});var Codebird=function(){var _oauth_consumer_key=null,_oauth_consumer_secret=null,_oauth_bearer_token=null,_endpoint_base="https://api.twitter.com/",_endpoint_base_media="https://upload.twitter.com/",_endpoint=_endpoint_base+"1.1/",_endpoint_media=_endpoint_base_media+"1.1/",_endpoint_oauth=_endpoint_base,_endpoint_proxy="https://api.jublo.net/codebird/",_endpoint_old=_endpoint_base+"1/",_use_jsonp="undefined"!=typeof navigator&&"undefined"!=typeof navigator.userAgent&&(navigator.userAgent.indexOf("Trident/4")>-1||navigator.userAgent.indexOf("Trident/5")>-1||navigator.userAgent.indexOf("MSIE 7.0")>-1),_use_proxy="undefined"!=typeof navigator&&"undefined"!=typeof navigator.userAgent,_oauth_token=null,_oauth_token_secret=null,_version="2.5.0",setConsumerKey=function(e,t){_oauth_consumer_key=e,_oauth_consumer_secret=t},setBearerToken=function(e){_oauth_bearer_token=e},getVersion=function(){return _version},setToken=function(e,t){_oauth_token=e,_oauth_token_secret=t},setUseProxy=function(e){_use_proxy=!!e},setProxy=function(e){e.match(/\/$/)||(e+="/"),_endpoint_proxy=e},_parse_str=function(str,array){var glue1="=",glue2="&",array2=String(str).replace(/^&?([\s\S]*?)&?$/,"$1").split(glue2),i,j,chr,tmp,key,value,bracket,keys,evalStr,fixStr=function(e){return decodeURIComponent(e).replace(/([\\"'])/g,"\\$1").replace(/\n/g,"\\n").replace(/\r/g,"\\r")};for(array||(array=this.window),i=0;i<array2.length;i++){for(tmp=array2[i].split(glue1),tmp.length<2&&(tmp=[tmp,""]),key=fixStr(tmp[0]),value=fixStr(tmp[1]);" "===key.charAt(0);)key=key.substr(1);if(-1!==key.indexOf("\x00")&&(key=key.substr(0,key.indexOf("\x00"))),key&&"["!==key.charAt(0)){for(keys=[],bracket=0,j=0;j<key.length;j++)if("["!==key.charAt(j)||bracket){if("]"===key.charAt(j)&&bracket&&(keys.length||keys.push(key.substr(0,bracket-1)),keys.push(key.substr(bracket,j-bracket)),bracket=0,"["!==key.charAt(j+1)))break}else bracket=j+1;for(keys.length||(keys=[key]),j=0;j<keys[0].length&&(chr=keys[0].charAt(j),(" "===chr||"."===chr||"["===chr)&&(keys[0]=keys[0].substr(0,j)+"_"+keys[0].substr(j+1)),"["!==chr);j++);for(evalStr="array",j=0;j<keys.length;j++)key=keys[j],key=""!==key&&" "!==key||0===j?"'"+key+"'":eval(evalStr+".push([]);")-1,evalStr+="["+key+"]",j!==keys.length-1&&"undefined"===eval("typeof "+evalStr)&&eval(evalStr+" = [];");evalStr+=" = '"+value+"';\n",eval(evalStr)}}},__call=function(e,t,n,r){switch("undefined"==typeof t&&(t={}),"undefined"==typeof r&&(r=!1),"function"!=typeof n&&"function"==typeof t?(n=t,t={},"boolean"==typeof n&&(r=n)):"undefined"==typeof n&&(n=function(){}),e){case"oauth_authenticate":case"oauth_authorize":return this[e](t,n);case"oauth2_token":return this[e](n)}"oauth_requestToken"===e&&setToken(null,null);var o={};"object"==typeof t?o=t:_parse_str(t,o);var s,a,i,u="",c=e.split("_");for(a=0;a<c.length;a++)a>0&&(u+="/"),u+=c[a];var l=["screen_name","place_id"];for(a=0;a<l.length;a++){s=l[a].toUpperCase();var _=s.split("_").join("/");u=u.split(_).join(s)}var d=u,p=u.match(/[A-Z_]{2,}/);if(p)for(a=0;a<p.length;a++){s=p[a];var f=s.toLowerCase();if(d=d.split(s).join(":"+f),"undefined"==typeof o[f]){for(i=0;26>i;i++)d=d.split(String.fromCharCode(65+i)).join("_"+String.fromCharCode(97+i));console.warn('To call the templated method "'+d+'", specify the parameter value for "'+f+'".')}u=u.split(s).join(o[f]),delete o[f]}for(a=0;26>a;a++)u=u.split(String.fromCharCode(65+a)).join("_"+String.fromCharCode(97+a)),d=d.split(String.fromCharCode(65+a)).join("_"+String.fromCharCode(97+a));var h=_detectMethod(d,o),m=_detectMultipart(d),y=_detectInternal(d);return _callApi(h,u,o,m,r,y,n)},oauth_authenticate=function(e,t){"undefined"==typeof e.force_login&&(e.force_login=null),"undefined"==typeof e.screen_name&&(e.screen_name=null),null===_oauth_token&&console.warn("To get the authenticate URL, the OAuth token must be set.");var n=_endpoint_oauth+"oauth/authenticate?oauth_token="+_url(_oauth_token);return e.force_login===!0&&(n+="?force_login=1",null!==e.screen_name&&(n+="&screen_name="+e.screen_name)),t(n),!0},oauth_authorize=function(e,t){"undefined"==typeof e.force_login&&(e.force_login=null),"undefined"==typeof e.screen_name&&(e.screen_name=null),null===_oauth_token&&console.warn("To get the authorize URL, the OAuth token must be set.");var n=_endpoint_oauth+"oauth/authorize?oauth_token="+_url(_oauth_token);return e.force_login===!0&&(n+="?force_login=1",null!==e.screen_name&&(n+="&screen_name="+e.screen_name)),t(n),!0},oauth2_token=function(e){null===_oauth_consumer_key&&console.warn("To obtain a bearer token, the consumer key must be set."),"undefined"==typeof e&&(e=function(){});var t="grant_type=client_credentials",n=_endpoint_oauth+"oauth2/token";_use_proxy&&(n=n.replace(_endpoint_base,_endpoint_proxy));var r=_getXmlRequestObject();null!==r&&(r.open("POST",n,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.setRequestHeader((_use_proxy?"X-":"")+"Authorization","Basic "+_base64_encode(_oauth_consumer_key+":"+_oauth_consumer_secret)),r.onreadystatechange=function(){if(r.readyState>=4){var t=12027;try{t=r.status}catch(n){}var o="";try{o=r.responseText}catch(n){}var s=_parseApiReply(o);s.httpstatus=t,200===t&&setBearerToken(s.access_token),e(s)}},r.send(t))},_url=function(e){return/boolean|number|string/.test(typeof e)?encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A"):""},_sha1=function(){function e(e,n){e[n>>5]|=128<<24-n%32,e[(n+64>>9<<4)+15]=n;for(var r=new Array(80),o=1732584193,s=-271733879,a=-1732584194,i=271733878,u=-1009589776,c=0;c<e.length;c+=16){for(var l=o,_=s,d=a,p=i,f=u,h=0;80>h;h++){var m;16>h?m=e[c+h]:(m=r[h-3]^r[h-8]^r[h-14]^r[h-16],m=m<<1|m>>>31),r[h]=m,m=t(t(o<<5|o>>>27,20>h?s&a|~s&i:40>h?s^a^i:60>h?s&a|s&i|a&i:s^a^i),t(t(u,r[h]),20>h?1518500249:40>h?1859775393:60>h?-1894007588:-899497514)),u=i,i=a,a=s<<30|s>>>2,s=o,o=m}o=t(o,l),s=t(s,_),a=t(a,d),i=t(i,p),u=t(u,f)}return[o,s,a,i,u]}function t(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function n(e){for(var t=[],n=(1<<r)-1,o=0;o<e.length*r;o+=r)t[o>>5]|=(e.charCodeAt(o/r)&n)<<24-o%32;return t}var r=8;return function(t){var o=_oauth_consumer_secret+"&"+(null!==_oauth_token_secret?_oauth_token_secret:"");null===_oauth_consumer_secret&&console.warn("To generate a hash, the consumer secret must be set.");var s=n(o);s.length>16&&(s=e(s,o.length*r)),o=new Array(16);for(var a=new Array(16),i=0;16>i;i++)a[i]=909522486^s[i],o[i]=1549556828^s[i];for(s=e(a.concat(n(t)),512+t.length*r),o=e(o.concat(s),672),s="",a=0;a<4*o.length;a+=3)for(i=(o[a>>2]>>8*(3-a%4)&255)<<16|(o[a+1>>2]>>8*(3-(a+1)%4)&255)<<8|o[a+2>>2]>>8*(3-(a+2)%4)&255,t=0;4>t;t++)s=8*a+6*t>32*o.length?s+"=":s+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-t)&63);return s}}(),_base64_encode=function(e){var t,n,r,o,s=0,a=0,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=[];if(!e)return e;do t=e.charCodeAt(s++),n=e.charCodeAt(s++),r=e.charCodeAt(s++),o=t<<16|n<<8|r,t=o>>18&63,n=o>>12&63,r=o>>6&63,o&=63,u[a++]=i.charAt(t)+i.charAt(n)+i.charAt(r)+i.charAt(o);while(s<e.length);return u=u.join(""),e=e.length%3,(e?u.slice(0,e-3):u)+"===".slice(e||3)},_http_build_query=function(e,t,n){function r(e,t,n){var o,s=[];if(t===!0?t="1":t===!1&&(t="0"),null===t)return"";if("object"==typeof t){for(o in t)null!==t[o]&&s.push(r(e+"["+o+"]",t[o],n));return s.join(n)}return"function"!=typeof t?_url(e)+"="+_url(t):void console.warn("There was an error processing for http_build_query().")}var o,s,a=[];n||(n="&");for(s in e)o=e[s],t&&!isNaN(s)&&(s=String(t)+s),o=r(s,o,n),""!==o&&a.push(o);return a.join(n)},_nonce=function(e){"undefined"==typeof e&&(e=8),1>e&&console.warn("Invalid nonce length.");for(var t="",n=0;e>n;n++){var r=Math.floor(61*Math.random());t+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".substring(r,r+1)}return t},_ksort=function(e){var t,n,r=[];t=function(e,t){var n=parseFloat(e),r=parseFloat(t),o=n+""===e,s=r+""===t;return o&&s?n>r?1:r>n?-1:0:o&&!s?1:!o&&s?-1:e>t?1:t>e?-1:0};for(n in e)e.hasOwnProperty(n)&&r.push(n);return r.sort(t),r},_clone=function(e){var t={};for(var n in e)"object"==typeof e[n]?t[n]=_clone(e[n]):t[n]=e[n];return t},_sign=function(e,t,n,r){"undefined"==typeof n&&(n={}),"undefined"==typeof r&&(r=!1),null===_oauth_consumer_key&&console.warn("To generate a signature, the consumer key must be set.");var o,s={consumer_key:_oauth_consumer_key,version:"1.0",timestamp:Math.round((new Date).getTime()/1e3),nonce:_nonce(),signature_method:"HMAC-SHA1"},a={};for(var i in s)o=s[i],a["oauth_"+i]=_url(o);null!==_oauth_token&&(a.oauth_token=_url(_oauth_token));var u=_clone(a);for(i in n)o=n[i],a[i]=o;for(var c=_ksort(a),l="",_=0;_<c.length;_++)i=c[_],o=a[i],l+=i+"="+_url(o)+"&";l=l.substring(0,l.length-1);var d=_sha1(e+"&"+_url(t)+"&"+_url(l));n=r?a:u,n.oauth_signature=d,c=_ksort(n);var p="";if(r){for(_=0;_<c.length;_++)i=c[_],o=n[i],p+=i+"="+_url(o)+"&";return p.substring(0,p.length-1)}for(p="OAuth ",_=0;_<c.length;_++)i=c[_],o=n[i],p+=i+'="'+_url(o)+'", ';return p.substring(0,p.length-2)},_detectMethod=function(e,t){switch(e){case"account/settings":case"account/login_verification_enrollment":case"account/login_verification_request":e=t.length?e+"__post":e}var n={};n.GET=["statuses/mentions_timeline","statuses/user_timeline","statuses/home_timeline","statuses/retweets_of_me","statuses/retweets/:id","statuses/show/:id","statuses/oembed","statuses/retweeters/ids","search/tweets","direct_messages","direct_messages/sent","direct_messages/show","friendships/no_retweets/ids","friends/ids","followers/ids","friendships/lookup","friendships/incoming","friendships/outgoing","friendships/show","friends/list","followers/list","friendships/lookup","account/settings","account/verify_credentials","blocks/list","blocks/ids","users/lookup","users/show","users/search","users/contributees","users/contributors","users/profile_banner","mutes/users/ids","mutes/users/list","users/suggestions/:slug","users/suggestions","users/suggestions/:slug/members","favorites/list","lists/list","lists/statuses","lists/memberships","lists/subscribers","lists/subscribers/show","lists/members/show","lists/members","lists/show","lists/subscriptions","lists/ownerships","saved_searches/list","saved_searches/show/:id","geo/id/:place_id","geo/reverse_geocode","geo/search","geo/similar_places","trends/place","trends/available","trends/closest","oauth/authenticate","oauth/authorize","help/configuration","help/languages","help/privacy","help/tos","application/rate_limit_status","statuses/lookup","users/recommendations","account/push_destinations/device","activity/about_me","activity/by_friends","statuses/media_timeline","timeline/home","help/experiments","search/typeahead","search/universal","discover/universal","conversation/show","statuses/:id/activity/summary","account/login_verification_enrollment","account/login_verification_request","prompts/suggest","beta/timelines/custom/list","beta/timelines/timeline","beta/timelines/custom/show"],n.POST=["statuses/destroy/:id","statuses/update","statuses/retweet/:id","statuses/update_with_media","media/upload","direct_messages/destroy","direct_messages/new","friendships/create","friendships/destroy","friendships/update","account/settings__post","account/update_delivery_device","account/update_profile","account/update_profile_background_image","account/update_profile_colors","account/update_profile_image","blocks/create","blocks/destroy","account/update_profile_banner","account/remove_profile_banner","mutes/users/create","mutes/users/destroy","favorites/destroy","favorites/create","lists/members/destroy","lists/subscribers/create","lists/subscribers/destroy","lists/members/create_all","lists/members/create","lists/destroy","lists/update","lists/create","lists/members/destroy_all","saved_searches/create","saved_searches/destroy/:id","users/report_spam","oauth/access_token","oauth/request_token","oauth2/token","oauth2/invalidate_token","direct_messages/read","account/login_verification_enrollment__post","push_destinations/enable_login_verification","account/login_verification_request__post","beta/timelines/custom/create","beta/timelines/custom/update","beta/timelines/custom/destroy","beta/timelines/custom/add","beta/timelines/custom/remove"];for(var r in n)if(n[r].indexOf(e)>-1)return r;console.warn("Can't find HTTP method to use for \""+e+'".')},_detectMultipart=function(e){var t=["statuses/update_with_media","account/update_profile_background_image","account/update_profile_image","account/update_profile_banner"];return t.indexOf(e)>-1},_buildMultipart=function(e,t){if(_detectMultipart(e)){var n=["statuses/update_with_media","account/update_profile_background_image","account/update_profile_image","account/update_profile_banner"],r={"statuses/update_with_media":"media[]","account/update_profile_background_image":"image","account/update_profile_image":"image","account/update_profile_banner":"banner"};if(-1!==n.indexOf(e)){r=r[e].split(" ");var o="--------------------"+_nonce(),s="";for(var a in t)s+="--"+o+'\r\nContent-Disposition: form-data; name="'+a+'"',r.indexOf(a)>-1&&(s+="\r\nContent-Transfer-Encoding: base64"),s+="\r\n\r\n"+t[a]+"\r\n";return s+="--"+o+"--"}}},_detectInternal=function(e){var t=["users/recommendations"];return t.join(" ").indexOf(e)>-1},_detectMedia=function(e){var t=["media/upload"];return t.join(" ").indexOf(e)>-1},_detectOld=function(e){var t=["account/push_destinations/device"];return t.join(" ").indexOf(e)>-1},_getEndpoint=function(e){var t;return t="oauth"===e.substring(0,5)?_endpoint_oauth+e:_detectMedia(e)?_endpoint_media+e+".json":_detectOld(e)?_endpoint_old+e+".json":_endpoint+e+".json"},_getXmlRequestObject=function(){var e=null;if("object"==typeof window&&window&&"undefined"!=typeof window.XMLHttpRequest)e=new window.XMLHttpRequest;else if("object"==typeof Ti&&Ti&&"undefined"!=typeof Ti.Network.createHTTPClient)e=Ti.Network.createHTTPClient();else if("undefined"!=typeof ActiveXObject)try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){console.error("ActiveXObject object not defined.")}else if("function"==typeof require&&require)try{var n=require("xmlhttprequest").XMLHttpRequest;e=new n}catch(r){try{var n=require("xhr2");e=new n}catch(o){console.error("xhr2 object not defined, cancelling.")}}return e},_callApi=function(e,t,n,r,o,s,a){"undefined"==typeof n&&(n={}),"undefined"==typeof r&&(r=!1),"undefined"==typeof o&&(o=!1),"function"!=typeof a&&(a=function(){}),s&&(n.adc="phone",n.application_id=333903271);var i=_getEndpoint(t),u=null,c=_getXmlRequestObject();if(null!==c){var l;if("GET"===e){var _=i;if("{}"!==JSON.stringify(n)&&(_+="?"+_http_build_query(n)),o||(u=_sign(e,i,n)),_use_jsonp){_+="{}"!==JSON.stringify(n)?"&":"?";var d=_nonce();window[d]=function(e){e.httpstatus=200;var t=null;"undefined"!=typeof c.getResponseHeader&&""!==c.getResponseHeader("x-rate-limit-limit")&&(t={limit:c.getResponseHeader("x-rate-limit-limit"),remaining:c.getResponseHeader("x-rate-limit-remaining"),reset:c.getResponseHeader("x-rate-limit-reset")}),a(e,t)},n.callback=d,_=i+"?"+_sign(e,i,n,!0);var p=document.createElement("script");p.type="text/javascript",p.src=_;var f=document.getElementsByTagName("body")[0];return void f.appendChild(p)}_use_proxy&&(_=_.replace(_endpoint_base,_endpoint_proxy).replace(_endpoint_base_media,_endpoint_proxy)),c.open(e,_,!0)}else{if(_use_jsonp)return void console.warn("Sending POST requests is not supported for IE7-9.");r?(o||(u=_sign(e,i,{})),n=_buildMultipart(t,n)):(o||(u=_sign(e,i,n)),n=_http_build_query(n)),l=n,(_use_proxy||r)&&(i=i.replace(_endpoint_base,_endpoint_proxy).replace(_endpoint_base_media,_endpoint_proxy)),c.open(e,i,!0),r?c.setRequestHeader("Content-Type","multipart/form-data; boundary="+l.split("\r\n")[0].substring(2)):c.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}if(o){if(null===_oauth_consumer_key&&null===_oauth_bearer_token&&console.warn("To make an app-only auth API request, consumer key or bearer token must be set."),null===_oauth_bearer_token)return oauth2_token(function(){_callApi(e,t,n,r,o,!1,a)});u="Bearer "+_oauth_bearer_token}return null!==u&&c.setRequestHeader((_use_proxy?"X-":"")+"Authorization",u),c.onreadystatechange=function(){if(c.readyState>=4){var e=12027;try{e=c.status}catch(t){}var n="";try{n=c.responseText}catch(t){}var r=_parseApiReply(n);r.httpstatus=e;var o=null;"undefined"!=typeof c.getResponseHeader&&""!==c.getResponseHeader("x-rate-limit-limit")&&(o={limit:c.getResponseHeader("x-rate-limit-limit"),remaining:c.getResponseHeader("x-rate-limit-remaining"),reset:c.getResponseHeader("x-rate-limit-reset")}),a(r,o)}},c.send("GET"===e?null:l),!0}},_parseApiReply=function(e){if("string"!=typeof e||""===e)return{};if("[]"===e)return[];var t;try{t=JSON.parse(e)}catch(n){if(t={},0===e.indexOf('<?xml version="1.0" encoding="UTF-8"?>'))t.request=e.match(/<request>(.*)<\/request>/)[1],t.error=e.match(/<error>(.*)<\/error>/)[1];else for(var r=e.split("&"),o=0;o<r.length;o++){var s=r[o].split("=",2);s.length>1?t[s[0]]=decodeURIComponent(s[1]):t[s[0]]=null}}return t};return{setConsumerKey:setConsumerKey,getVersion:getVersion,setToken:setToken,setBearerToken:setBearerToken,setUseProxy:setUseProxy,setProxy:setProxy,__call:__call,oauth_authenticate:oauth_authenticate,oauth_authorize:oauth_authorize,oauth2_token:oauth2_token}};"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=Codebird:("object"==typeof window&&window&&(window.Codebird=Codebird),"function"==typeof define&&define.amd&&define("codebird",[],function(){return Codebird}))}();