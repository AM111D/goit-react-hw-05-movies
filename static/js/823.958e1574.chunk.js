"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[823],{823:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),i=n(791),s=n(87),a="Home_filmList__PwJxD",c="Home_filmListName__vt6Si",o="Home_filmListItemLink__0k9kW",u=n(184),l=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),n=t[0],l=t[1],m=(0,i.useState)(null),d=(0,r.Z)(m,2),h=d[0],f=d[1];return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?api_key=69130d0521ed03b58ebb84abea94c8b9").then((function(e){if(!e.ok)throw new Error("The resource you requested could not be found.");return e.json()})).then((function(e){return l(e.results)})).catch((function(e){return f(e.message)}))}),[]),h?(0,u.jsx)("div",{children:h}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{className:c,children:"Trending movies today "}),(0,u.jsx)("ul",{className:a,children:n.map((function(e){return(0,u.jsx)("li",{className:o,children:(0,u.jsx)(s.OL,{to:"/movies/".concat(e.id),className:o,children:e.title||e.name})},e.id)}))})]})}}}]);
//# sourceMappingURL=823.958e1574.chunk.js.map