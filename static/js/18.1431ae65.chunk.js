(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{129:function(e,a,t){"use strict";var r=t(27),n=t(7),l=t(3),s=t.n(l),c=t(1),o=t.n(c),i=(t(17),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,l=e.className,c=e.type,u=Object(n.a)(e,["tag","className","type"]),d=s()(Object(r.a)({},c,!!c),l);return a=t||(!t&&i[c]?i[c]:"p"),o.a.createElement(a,Object.assign({},u,{className:d}))};u.defaultProps={type:"p"},a.a=u},130:function(e,a,t){"use strict";var r=t(7),n=t(1),l=t.n(n),s=(t(17),t(22)),c=t(134),o=t(135),i=t(129),u=s.a.create("page"),d=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,s=e.className,d=e.children,m=Object(r.a)(e,["title","breadcrumbs","tag","className","children"]),b=u.b("px-3",s);return l.a.createElement(n,Object.assign({className:b},m),l.a.createElement("div",{className:u.e("header")},a&&"string"===typeof a?l.a.createElement(i.a,{type:"h1",className:u.e("title")},a):a,t&&l.a.createElement(c.a,{className:u.e("breadcrumb")},l.a.createElement(o.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,r=e.active;return l.a.createElement(o.a,{key:a,active:r},t)}))),d)};d.defaultProps={tag:"div",title:""},a.a=d},134:function(e,a,t){"use strict";var r=t(4),n=t(5),l=t(1),s=t.n(l),c=t(0),o=t.n(c),i=t(3),u=t.n(i),d=t(2),m={tag:d.q,listTag:d.q,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},b=function(e){var a=e.className,t=e.listClassName,l=e.cssModule,c=e.children,o=e.tag,i=e.listTag,m=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.m)(u()(a),l),v=Object(d.m)(u()("breadcrumb",t),l);return s.a.createElement(o,Object(r.a)({},b,{className:p,"aria-label":m}),s.a.createElement(i,{className:v},c))};b.propTypes=m,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},135:function(e,a,t){"use strict";var r=t(4),n=t(5),l=t(1),s=t.n(l),c=t(0),o=t.n(c),i=t(3),u=t.n(i),d=t(2),m={tag:d.q,active:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.active,c=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(d.m)(u()(a,!!l&&"active","breadcrumb-item"),t);return s.a.createElement(c,Object(r.a)({},o,{className:i,"aria-current":l?"page":void 0}))};b.propTypes=m,b.defaultProps={tag:"li"},a.a=b},138:function(e,a,t){"use strict";function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],r=!0,n=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);r=!0);}catch(o){n=!0,l=o}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",function(){return r})},158:function(e,a,t){"use strict";var r=t(4),n=t(5),l=t(1),s=t.n(l),c=t(0),o=t.n(c),i=t(3),u=t.n(i),d=t(2),m={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,inverse:Object(d.h)(o.a.bool,'Please use the prop "dark"'),dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.q,responsiveTag:d.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},b=function(e){var a=e.className,t=e.cssModule,l=e.size,c=e.bordered,o=e.borderless,i=e.striped,m=e.inverse,b=e.dark,p=e.hover,v=e.responsive,h=e.tag,f=e.responsiveTag,g=e.innerRef,E=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),N=Object(d.m)(u()(a,"table",!!l&&"table-"+l,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!(!b&&!m)&&"table-dark",!!p&&"table-hover"),t),y=s.a.createElement(h,Object(r.a)({},E,{ref:g,className:N}));if(v){var j=!0===v?"table-responsive":"table-responsive-"+v;return s.a.createElement(f,{className:j},y)}return y};b.propTypes=m,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b},453:function(e,a,t){"use strict";t.r(a);var r=t(138),n=t(1),l=t.n(n),s=t(130),c=t(122),o=t(123),i=t(108),u=t(113),d=t(109),m=t(158);a.default=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],b=a[1];return Object(n.useEffect)(function(){fetch("http://localhost:3001/vendors",{method:"GET",redirect:"follow"}).then(function(e){return e.json()}).then(function(e){b(e),console.log(e)}).catch(function(e){return console.log("error",e)})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:"Items List",breadcrumbs:[{name:"vendors",active:!0}]},l.a.createElement(c.a,null,l.a.createElement(o.a,{lg:12,md:12},l.a.createElement(i.a,null,l.a.createElement(u.a,null,"Items List"),l.a.createElement(d.a,null,l.a.createElement(m.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Vendor Name"),l.a.createElement("th",null,"Vendor Mobile"),l.a.createElement("th",null,"Vendor Address"))),l.a.createElement("tbody",null,t&&t.map(function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("th",{scope:"row"},e.vendor_id),l.a.createElement("td",null,e.vendor_name),l.a.createElement("td",null,e.vendor_mobile),l.a.createElement("td",null,e.vendor_address))})))))))))}}}]);
//# sourceMappingURL=18.1431ae65.chunk.js.map