(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{129:function(e,a,t){"use strict";var r=t(27),n=t(7),l=t(3),s=t.n(l),c=t(1),i=t.n(c),o=(t(17),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,l=e.className,c=e.type,u=Object(n.a)(e,["tag","className","type"]),m=s()(Object(r.a)({},c,!!c),l);return a=t||(!t&&o[c]?o[c]:"p"),i.a.createElement(a,Object.assign({},u,{className:m}))};u.defaultProps={type:"p"},a.a=u},130:function(e,a,t){"use strict";var r=t(7),n=t(1),l=t.n(n),s=(t(17),t(22)),c=t(134),i=t(135),o=t(129),u=s.a.create("page"),m=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,s=e.className,m=e.children,b=Object(r.a)(e,["title","breadcrumbs","tag","className","children"]),d=u.b("px-3",s);return l.a.createElement(n,Object.assign({className:d},b),l.a.createElement("div",{className:u.e("header")},a&&"string"===typeof a?l.a.createElement(o.a,{type:"h1",className:u.e("title")},a):a,t&&l.a.createElement(c.a,{className:u.e("breadcrumb")},l.a.createElement(i.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,r=e.active;return l.a.createElement(i.a,{key:a,active:r},t)}))),m)};m.defaultProps={tag:"div",title:""},a.a=m},134:function(e,a,t){"use strict";var r=t(4),n=t(5),l=t(1),s=t.n(l),c=t(0),i=t.n(c),o=t(3),u=t.n(o),m=t(2),b={tag:m.q,listTag:m.q,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},d=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,c=e.children,i=e.tag,o=e.listTag,b=e["aria-label"],d=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(m.m)(u()(a),l),h=Object(m.m)(u()("breadcrumb",t),l);return s.a.createElement(i,Object(r.a)({},d,{className:p,"aria-label":b}),s.a.createElement(o,{className:h},c))};d.propTypes=b,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=d},135:function(e,a,t){"use strict";var r=t(4),n=t(5),l=t(1),s=t.n(l),c=t(0),i=t.n(c),o=t(3),u=t.n(o),m=t(2),b={tag:m.q,active:i.a.bool,className:i.a.string,cssModule:i.a.object},d=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,i=Object(n.a)(e,["className","cssModule","active","tag"]),o=Object(m.m)(u()(a,!!l&&"active","breadcrumb-item"),t);return s.a.createElement(c,Object(r.a)({},i,{className:o,"aria-current":l?"page":void 0}))};d.propTypes=b,d.defaultProps={tag:"li"},a.a=d},138:function(e,a,t){"use strict";function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],r=!0,n=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);r=!0);}catch(i){n=!0,l=i}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",function(){return r})},158:function(e,a,t){"use strict";var r=t(4),n=t(5),l=t(1),s=t.n(l),c=t(0),i=t.n(c),o=t(3),u=t.n(o),m=t(2),b={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,inverse:Object(m.h)(i.a.bool,'Please use the prop "dark"'),dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:m.q,responsiveTag:m.q,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},d=function(e){var a=e.className,t=e.cssModule,l=e.size,c=e.bordered,i=e.borderless,o=e.striped,b=e.inverse,d=e.dark,p=e.hover,h=e.responsive,f=e.tag,v=e.responsiveTag,g=e.innerRef,E=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),N=Object(m.m)(u()(a,"table",!!l&&"table-"+l,!!c&&"table-bordered",!!i&&"table-borderless",!!o&&"table-striped",!(!d&&!b)&&"table-dark",!!p&&"table-hover"),t),y=s.a.createElement(f,Object(r.a)({},E,{ref:g,className:N}));if(h){var j=!0===h?"table-responsive":"table-responsive-"+h;return s.a.createElement(v,{className:j},y)}return y};d.propTypes=b,d.defaultProps={tag:"table",responsiveTag:"div"},a.a=d},452:function(e,a,t){"use strict";t.r(a);var r=t(138),n=t(1),l=t.n(n),s=t(130),c=t(122),i=t(123),o=t(108),u=t(113),m=t(109),b=t(158);a.default=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],d=a[1];return Object(n.useEffect)(function(){fetch("http://localhost:3001/items",{method:"GET",redirect:"follow"}).then(function(e){return e.json()}).then(function(e){d(e),console.log(e)}).catch(function(e){return console.log("error",e)})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:"Items List",breadcrumbs:[{name:"items",active:!0}]},l.a.createElement(c.a,null,l.a.createElement(i.a,{lg:12,md:12},l.a.createElement(o.a,null,l.a.createElement(u.a,null,"Items List"),l.a.createElement(m.a,null,l.a.createElement(b.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Item Name"),l.a.createElement("th",null,"Item Make"),l.a.createElement("th",null,"Item Value"))),l.a.createElement("tbody",null,t&&t.map(function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("th",{scope:"row"},e.item_id),l.a.createElement("td",null,e.item_name),l.a.createElement("td",null,e.item_make),l.a.createElement("td",null,e.item_price))})))))))))}}}]);
//# sourceMappingURL=16.3297e497.chunk.js.map