(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(214),o=a(618),c=a(11),s=function(e){var t=e.children;return r.a.createElement(i.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,t))},data:o})};s.propTypes={children:a.n(c).a.node.isRequired};var u=s,l=a(224);t.default=function(){return r.a.createElement(u,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},207:function(e,t,a){var n;e.exports=(n=a(227))&&n.default||n},214:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=a(58),s=a.n(c);a.d(t,"a",function(){return s.a});a(207);var u=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},224:function(e,t,a){"use strict";var n=a(225),r=a(0),i=a.n(r),o=a(11),c=a.n(o),s=a(266),u=a.n(s),l=a(214);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},225:function(e){e.exports={data:{site:{siteMetadata:{title:"A react next landing page",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},227:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=a(84),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},618:function(e){e.exports={data:{site:{siteMetadata:{title:"A react next landing page"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-556196afffa87c2a4ad4.js.map