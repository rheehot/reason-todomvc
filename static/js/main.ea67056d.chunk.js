(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){"use strict";var o=n(3),r=n(2),a=n(43),i=n(48);o.$$global("html, body",[o.margin(-789508312),0]),o.$$global("body",[o.fontFamily("'Helvetica Neue', Helvetica, Arial, sans-serif"),[o.fontSize([25096,14]),[o.lineHeight([22632,1.4]),[o.color([5194459,"4d4d4d"]),[o.background([5194459,"f5f5f5"]),[o.minWidth(o.px(230)),[o.maxWidth(o.px(550)),[o.margin2(-789508312,-1065951377),[o.fontWeight([5496390,300]),[o.unsafe("-webkit-font-smoothing","antialiased"),[o.media("(min-width: 899px)",[o.width(-1065951377),[o.paddingLeft([25096,300]),0]]),0]]]]]]]]]]]),a.renderToElementWithId(r.createElement(i.make,{}),"root")},48:function(e,t,n){"use strict";var o=n(3),r=n(5),a=n(0),i=n(2),c=n(49),l=n(50),m=n(51),s=n(52),d=n(54),u=n(9),p=n(57),f=o.style([o.position(903134412),[o.background([5194459,"fff"]),[o.marginTop([25096,130]),[o.marginBottom([25096,40]),[o.unsafe("box-shadow","0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)"),0]]]]]),h={container:f},v={contents:0};var g=function(e){var t=i.useReducer(u.reducer,{todos:[]}),n=t[1],o=t[0].todos,h=0!==o.length,g=i.useCallback((function(e){return""!==e?(a._1(n,r.__(0,[{id:v.contents,text:e,complete:!1}])),v.contents=v.contents+1|0,0):0}),[n]);return i.createElement(u.Dispatch.make,u.Dispatch.makeProps(n,null,0),i.createElement(s.make,{}),i.createElement("section",{className:f},i.createElement("header",void 0,i.createElement(l.make,{}),i.createElement(c.make,{onSubmit:g})),i.createElement("main",{hidden:!h},i.createElement(d.make,{todos:o})),i.createElement("footer",{hidden:!h},i.createElement(p.make,{todos:o}))),i.createElement(m.make,{}))};t.AppState=0,t.Styles=h,t.id_gen=v,t.make=g},49:function(e,t,n){"use strict";var o=n(3),r=n(0),a=n(2),i=n(21),c=n(4),l=o.style([o.width(o.pct(100)),0]),m=o.style([o.position(903134412),[o.margin(-789508312),[o.padding([25096,16]),[o.paddingLeft([25096,60]),[o.borderStyle(-922086728),[o.width(o.pct(100)),[o.fontSize([25096,24]),[o.lineHeight([22632,1.4]),[o.boxSizing(9307263),[o.height(o.rem(3)),[o.background([-878128972,[0,0,0,.003]]),[o.boxShadow(o.Shadow.box(void 0,[25096,-2],[25096,1],void 0,!0,[-878128972,[0,0,0,.03]])),[o.placeholder([o.color(o.hex("#bcbcbc")),[o.fontStyle(o.italic),0]]),0]]]]]]]]]]]]]),s={container:l,input:m},d=a.memo((function(e){var t=e.onSubmit,n=a.useRef(null),o=a.useCallback((function(e){return e.preventDefault(),i.map(c.nullable_to_opt(n.current),(function(e){return r._1(t,e.value),e.value=""})),0}),[t]);return a.createElement("form",{onSubmit:o},a.createElement("input",{ref:n,className:m,id:"todo-input",autoComplete:"off",name:"todo-input",placeholder:"What needs to be done?"}))}));t.Styles=s,t.make=d},50:function(e,t,n){"use strict";var o=n(3),r=n(2),a=o.style([o.position(-1013592457),[o.top([25096,-155]),[o.width(o.pct(100)),[o.fontSize([25096,100]),[o.fontWeight([5496390,100]),[o.textAlign(98248149),[o.color(o.rgba(175,47,47,.15)),[o.unsafe("text-rendering","optimizeLegibility"),0]]]]]]]]),i={title:a},c=r.memo((function(e){return r.createElement("h1",{className:a},"todos")}));t.Styles=i,t.make=c},51:function(e,t,n){"use strict";var o=n(3),r=n(2),a=o.style([o.textAlign(98248149),0]),i={container:a},c=r.memo((function(e){return r.createElement("footer",{className:a},r.createElement("p",void 0,"Double-click to edit a todo"),r.createElement("p",void 0,"Created by ",r.createElement("a",{href:"https://github.com/cometkim",rel:"noopener",target:"_blank"},"cometkim")),r.createElement("p",void 0,"Part of ",r.createElement("a",{href:"http://todomvc.com",rel:"noopener",target:"_blank"},"TodoMVC")))}));t.Styles=i,t.make=c},52:function(e,t,n){"use strict";var o=n(3),r=n(2),a=n(53),i=o.style([o.media("(min-width: 899px)",[o.left([25096,8]),0]),[o.position(-1013592457),[o.top([25096,8]),[o.left([25096,-300]),[o.width([25096,272]),[o.padding([25096,10]),[o.borderRadius([25096,5]),[o.backgroundColor([-878128972,[255,255,255,.6]]),[o.transitionProperty("left"),[o.transitionDuration(500),[o.selector("h3, h4, h5",[o.margin2([25096,10],-789508312),[o.fontWeight([5496390,500]),[o.lineHeight([22632,1.2]),[o.color(o.hex("000")),0]]]]),[o.selector("h3",[o.fontSize(o.px(24)),0]),[o.selector("h4",[o.fontSize(o.px(18)),0]),[o.selector("h5",[o.marginBottom(-789508312),[o.fontSize(o.px(14)),0]]),[o.selector("hr",[o.margin2([25096,20],-789508312),[o.borderStyle(-922086728),[o.borderTop([25096,1],568403505,[5194459,"c5c5c5"]),[o.borderBottom([25096,1],568403505,[5194459,"f7f7f7"]),0]]]]),[o.selector("a",[o.fontWeight(812216871),[o.textDecoration(-922086728),[o.color([5194459,"b83f45"]),0]]]),[o.selector("ul",[o.padding(-789508312),[o.marginBottom([25096,30]),[o.marginLeft([25096,25]),0]]]),0]]]]]]]]]]]]]]]]]),c={container:i};function l(e){return r.createElement("span",void 0,r.createElement("h5",void 0,"Example"),r.createElement("a",{href:a.home},"Source"))}var m={make:l};function s(e){return r.createElement("blockquote",{className:o.style([o.position(903134412),[o.padding([25096,10]),[o.backgroundColor([-878128972,[0,0,0,.04]]),[o.borderRadius([25096,5]),[o.borderStyle(-922086728),[o.margin4([25096,20],-789508312,[25096,60],-789508312),[o.after([o.contentRule(""),[o.position(-1013592457),[o.top(o.pct(100)),[o.right([25096,30]),[o.border([25096,13],12956715,582626130),[o.borderTopColor([-878128972,[0,0,0,.04]]),0]]]]]]),0]]]]]]])},r.createElement("p",{className:o.style([o.fontSize([25096,15]),[o.fontWeight([5496390,300]),[o.fontStyle(107228912),[o.marginTop(-789508312),[o.marginBottom(-789508312),[o.before([o.contentRule("\u201c"),[o.position(-1013592457),[o.top([25096,-20]),[o.left([25096,3]),[o.fontSize([25096,50]),[o.opacity(.15),0]]]]]]),[o.after([o.contentRule("\u201d"),[o.position(-1013592457),[o.bottom([25096,-42]),[o.right([25096,3]),[o.fontSize([25096,50]),[o.opacity(.15),0]]]]]]),0]]]]]]])},"\n          ReasonReact is a safer, simpler way to build React components, in Reason.\n        "),r.createElement("footer",{className:o.style([o.position(-1013592457),[o.bottom([25096,-40]),[o.right(-789508312),0]]])},r.createElement("a",void 0,"ReasonReact")))}var d={make:s};function u(e){return r.createElement("ul",void 0,r.createElement("li",void 0,r.createElement("a",{href:"https://reasonml.github.io/reason-react/docs/en/what-and-why"},"What & Why")),r.createElement("li",void 0,r.createElement("a",{href:"https://reasonml.github.io/reason-react/docs/en/simple"},"Examples")))}var p={make:u};function f(e){return r.createElement("ul",void 0,r.createElement("li",void 0,r.createElement("a",{href:"https://reasonml.chat"},"Forum")),r.createElement("li",void 0,r.createElement("a",{href:"https://discord.gg/reasonml"},"Discord")),r.createElement("li",void 0,r.createElement("a",{href:"https://twitter.com/reasonml"},"Twitter")),r.createElement("li",void 0,r.createElement("a",{href:"https://www.reddit.com/r/reasonml/"},"Reddit")),r.createElement("li",void 0,r.createElement("a",{href:"http://stackoverflow.com/questions/tagged/reason-react"},"Stack Overflow")))}var h={make:f},v=r.memo((function(e){return r.createElement("aside",{className:i},r.createElement("header",void 0,r.createElement("h3",void 0,"ReasonReact"),r.createElement(l,{})),r.createElement("hr",void 0),r.createElement(s,{}),r.createElement("hr",void 0),r.createElement("h4",void 0,"Official Resources"),r.createElement(u,{}),r.createElement("h4",void 0,"Community"),r.createElement(f,{}),r.createElement("footer",void 0,r.createElement("hr",void 0),r.createElement("em",void 0,"If you have other helpful links to share, or find any of the links above no longer work, please ",r.createElement("a",{href:a.home},"let us know"),".")))}));t.Styles=c,t.SourceLinks=m,t.SpeechBubble=d,t.OfficialResourceLinks=p,t.CommunityLinks=h,t.make=v},53:function(e,t,n){"use strict";t.home="https://github.com/cometkim/reason-todomvc",t.repo="https://github.com/cometkim/reason-todomvc.git"},54:function(e,t,n){"use strict";var o=n(3),r=n(2),a=n(7),i=n(55),c=n(9),l=o.style([o.listStyleType(o.none),[o.margin(o.zero),[o.paddingLeft(o.zero),0]]]),m=o.style([o.display(-1010954439),[o.alignItems(o.center),[o.border(o.px(1),12956715,o.hex("dddddd")),[o.borderTopStyle(o.none),0]]]]),s=o.style([o.display(-999565626),[o.gridTemplateColumns([o.fr(1),[o.fr(1),[o.fr(1),0]]]),0]]),d=o.style([o.textAlign(-379319332),0]),u={container:l,itemWrapper:m,toolsWrapper:s,textRight:d};var p=function(e){var t=e.todos;return c.Dispatch.use(0),a.keep(t,(function(e){return!e.complete})).length,a.keep(t,(function(e){return e.complete})).length,r.createElement("ul",{className:l},a.map(t,(function(e){return r.createElement("li",{className:m},r.createElement(i.make,{todo:e}))})))};t.AppState=0,t.Styles=u,t.make=p},55:function(e,t,n){"use strict";var o=n(3),r=n(5),a=n(0),i=n(2),c=n(56),l=n(9),m=o.style([o.position(o.relative),[o.display(-1010954439),[o.justifyContent(o.spaceBetween),[o.alignItems(o.center),[o.width(o.pct(100)),[o.fontSize(o.rem(1.5)),[o.height(o.rem(3)),[o.padding2(o.rem(0),o.rem(1)),[o.borderStyle(o.none),[o.hover([o.selector("> button",[o.after([o.display(o.block),0]),0]),0]),0]]]]]]]]]]),s=o.style([o.width(o.rem(2)),[o.height(o.rem(2)),[o.background(o.none),[o.borderStyle(o.none),[o.after([o.display(o.none),[o.contentRule("\xd7"),[o.fontSize(o.rem(1.5)),0]]]),0]]]]]),d=o.style([o.textDecoration(o.lineThrough),0]),u=o.style([o.display(o.none),0]),p={container:m,destroy:s,completed:d,disable:u},f=i.memo((function(e){var t=e.todo,n=l.Dispatch.use(0),p=c.useUrl(void 0,0),f=t.complete,h=p.hash,v=f?"active"===h?u:"":"completed"===h?u:"",g=i.useState((function(){return!1})),E=g[1];return g[0]?i.createElement("input",{className:m,id:"edit-todo-"+String(t.id),autoFocus:!0,onKeyDown:function(e){return"Enter"===e.key?(a._1(n,r.__(3,[t.id,e.target.value])),a._1(E,(function(e){return!1}))):0},onBlur:function(e){return a._1(E,(function(e){return!1}))}}):i.createElement("div",{className:o.merge([m,[v,0]]),onDoubleClick:function(e){return a._1(E,(function(e){return!0}))}},i.createElement("div",void 0,i.createElement("input",{checked:t.complete,type:"checkbox",onChange:function(e){return a._1(n,r.__(1,[t.id]))}}),i.createElement("span",{className:t.complete?d:""},t.text)),i.createElement("button",{className:s,onClick:function(e){return a._1(n,r.__(2,[t.id]))}}))}));t.AppState=0,t.Styles=p,t.make=f},57:function(e,t,n){"use strict";var o=n(3),r=n(0),a=n(2),i=n(7),c=n(9),l=o.style([o.display(-999565626),[o.gridTemplateColumns([o.fr(1),[o.fr(1),[o.fr(1),0]]]),0]]),m={container:l};var s=function(e){var t=e.todos,n=c.Dispatch.use(0),o=t.length,m=i.keep(t,(function(e){return!e.complete})).length,s=(o-m|0)>0;return a.createElement("div",{className:l},a.createElement("div",void 0,String(m)+" items left"),a.createElement("div",void 0,a.createElement("a",{href:"#"},"All"),a.createElement("a",{href:"#active"},"Active"),a.createElement("a",{href:"#completed"},"Completed")),a.createElement("div",void 0,s?a.createElement("button",{onClick:function(e){return r._1(n,0)}},"Clear complated"):null))};t.AppState=0,t.Styles=m,t.make=s},9:function(e,t,n){"use strict";var o=n(2),r=n(7);var a=o.createContext((function(e){return 0}));var i=a.Provider;var c={todoDispatchContext:a,makeProps:function(e,t,n){return{value:e,children:t}},make:i,use:function(e){return o.useContext(a)}};t.reducer=function(e,t){if("number"===typeof t)return{todos:r.keep(e.todos,(function(e){return!e.complete}))};switch(0|t.tag){case 0:return{todos:r.concat(e.todos,[t[0]])};case 1:var n=t[0];return{todos:r.map(e.todos,(function(e){return e.id===n?{id:e.id,text:e.text,complete:!e.complete}:e}))};case 2:var o=t[0];return{todos:r.keep(e.todos,(function(e){return e.id!==o}))};case 3:var a=t[1],i=t[0];return{todos:r.map(e.todos,(function(e){return e.id===i?{id:e.id,text:a,complete:e.complete}:e}))}}},t.Dispatch=c}},[[23,1,2]]]);
//# sourceMappingURL=main.ea67056d.chunk.js.map