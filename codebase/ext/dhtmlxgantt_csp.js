/*
@license

dhtmlxGantt v.6.1.7 Standard
This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.

*/
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a=e();for(var n in a)("object"==typeof exports?exports:t)[n]=a[n]}}(window,function(){return function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/codebase/",a(a.s=218)}({218:function(t,e){gantt.date.date_to_str=function(t,e){return function(a){return t.replace(/%[a-zA-Z]/g,function(t){switch(t){case"%d":return e?gantt.date.to_fixed(a.getUTCDate()):gantt.date.to_fixed(a.getDate());case"%m":return e?gantt.date.to_fixed(a.getUTCMonth()+1):gantt.date.to_fixed(a.getMonth()+1);case"%j":return e?a.getUTCDate():a.getDate();case"%n":return e?a.getUTCMonth()+1:a.getMonth()+1;case"%y":return e?gantt.date.to_fixed(a.getUTCFullYear()%100):gantt.date.to_fixed(a.getFullYear()%100);case"%Y":return e?a.getUTCFullYear():a.getFullYear();case"%D":return e?gantt.locale.date.day_short[a.getUTCDay()]:gantt.locale.date.day_short[a.getDay()];case"%l":return e?gantt.locale.date.day_full[a.getUTCDay()]:gantt.locale.date.day_full[a.getDay()];case"%M":return e?gantt.locale.date.month_short[a.getUTCMonth()]:gantt.locale.date.month_short[a.getMonth()];case"%F":return e?gantt.locale.date.month_full[a.getUTCMonth()]:gantt.locale.date.month_full[a.getMonth()];case"%h":return e?gantt.date.to_fixed((a.getUTCHours()+11)%12+1):gantt.date.to_fixed((a.getHours()+11)%12+1);case"%g":return e?(a.getUTCHours()+11)%12+1:(a.getHours()+11)%12+1;case"%G":return e?a.getUTCHours():a.getHours();case"%H":return e?gantt.date.to_fixed(a.getUTCHours()):gantt.date.to_fixed(a.getHours());case"%i":return e?gantt.date.to_fixed(a.getUTCMinutes()):gantt.date.to_fixed(a.getMinutes());case"%a":return e?a.getUTCHours()>11?"pm":"am":a.getHours()>11?"pm":"am";case"%A":return e?a.getUTCHours()>11?"PM":"AM":a.getHours()>11?"PM":"AM";case"%s":return e?gantt.date.to_fixed(a.getUTCSeconds()):gantt.date.to_fixed(a.getSeconds());case"%W":return e?gantt.date.to_fixed(gantt.date.getUTCISOWeek(a)):gantt.date.to_fixed(gantt.date.getISOWeek(a));default:return t}})}},gantt.date.str_to_date=function(t,e){return function(a){for(var n=[0,0,1,0,0,0],r=a.match(/[a-zA-Z]+|[0-9]+/g),o=t.match(/%[a-zA-Z]/g),u=0;u<o.length;u++)switch(o[u]){case"%j":case"%d":n[2]=r[u]||1;break;case"%n":case"%m":n[1]=(r[u]||1)-1;break;case"%y":n[0]=1*r[u]+(r[u]>50?1900:2e3);break;case"%g":case"%G":case"%h":case"%H":n[3]=r[u]||0;break;case"%i":n[4]=r[u]||0;break;case"%Y":n[0]=r[u]||0;break;case"%a":case"%A":n[3]=n[3]%12+("am"==(r[u]||"").toLowerCase()?0:12);break;case"%s":n[5]=r[u]||0;break;case"%M":n[1]=gantt.locale.date.month_short_hash[r[u]]||0;break;case"%F":n[1]=gantt.locale.date.month_full_hash[r[u]]||0}return e?new Date(Date.UTC(n[0],n[1],n[2],n[3],n[4],n[5])):new Date(n[0],n[1],n[2],n[3],n[4],n[5])}},gantt.config.task_attribute="data-task-id",gantt.config.link_attribute="data-link-id",gantt.config.grid_resizer_column_attribute="data-column-index",gantt.config.grid_resizer_attribute="data-grid-resizer"}})});
//# sourceMappingURL=dhtmlxgantt_csp.js.map