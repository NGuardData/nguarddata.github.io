(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),o=a(147);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},147:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(157),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(32),l=a.n(c),u=(a(146),i.a.createContext({})),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};var p=function(e){var t=e.siteTitle,a=e.back;return i.a.createElement("header",{style:{background:"#0f30ab",marginBottom:"3px"}},i.a.createElement("div",{style:{margin:"0 auto",padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},i.a.createElement("span",{className:"rotate180"},"☖"),t)),a&&i.a.createElement("div",{style:{textAlign:"right"}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Back to data"))))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""};var m=p,y=(a(161),function(e){var t=e.children,a=e.back;return i.a.createElement(d,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title,back:a}),i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("div",{className:"footer"},"Open source investigation -- please share anywhere you like")))},data:n})});y.propTypes={children:s.a.node.isRequired};t.a=y},149:function(e){e.exports={data:{site:{siteMetadata:{title:"NewsGuard - Data Analysis Of"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e){e.exports={data:{site:{siteMetadata:{title:"NewsGuard - Data Analysis Of",description:"Tool to analyze the NewsGuard fact-checking data.  No relation to NewsGuard Technologies, Inc.",author:"anonymous"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d2eac6b8dc7a6bbf136d.js.map