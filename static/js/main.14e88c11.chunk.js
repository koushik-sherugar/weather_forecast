(this.webpackJsonpweather_forecast=this.webpackJsonpweather_forecast||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(5),s=a.n(n),i=(a(11),a(12),a(3)),r=a.n(i),j=a(6),l=a(4),u=(a(14),a(0)),o=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("udupi"),i=Object(l.a)(s,2),o=i[0],d=i[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(o,"&units=metric&appid=295a5d14a692673327ace43d74df2a43"),e.next=3,fetch(t);case 3:e.sent,fetch(t).then((function(e){return e.json()})).then((function(e){return n(e.main)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),console.log(a);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{className:"inputfield",children:Object(u.jsx)("input",{className:"inputdata",type:"search",defaultValue:"",placeholder:"enter place name",onChange:function(e){!function(e){d(e)}(e.target.value)}})}),a?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("h2",{className:"location",children:[Object(u.jsx)("i",{className:"fas fa-street-view",children:" \xa0"}),o]}),Object(u.jsxs)("h1",{className:"temp",children:[" ",a.temp,"\xb0cel"]}),Object(u.jsxs)("h3",{className:"temp-min-max",children:["min: ",a.temp_min,"\xb0cel| max:",a.temp_max,"\xb0cel"]})]}),Object(u.jsx)("div",{className:"wave wave-1"}),Object(u.jsx)("div",{className:"wave wave-2"}),Object(u.jsx)("div",{className:" wave wave-3"})]}):Object(u.jsx)("div",{className:"no-data",children:Object(u.jsx)("h6",{children:"no data found"})})]})})};var d=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(o,{})})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14e88c11.chunk.js.map