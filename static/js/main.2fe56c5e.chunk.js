(this["webpackJsonpbinance-portfolio"]=this["webpackJsonpbinance-portfolio"]||[]).push([[0],{32:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(19),a=n.n(r),s=(n(32),n(22)),o=n(21),l=n(3),d=i.a.createContext();function u(t){var e=t.children,n=i.a.useState({}),c=Object(o.a)(n,2),r=c[0],a=c[1];return i.a.useEffect((function(){var t=new WebSocket("wss://stream.binance.com:9443/ws");return t.onopen=function(){t.send(JSON.stringify({method:"SUBSCRIBE",params:["solusdt@ticker","rsrusdt@ticker","oceanusdt@ticker","mirusdt@ticker","1inchusdt@ticker","bandusdt@ticker","bnbusdt@ticker","thetausdt@ticker","xtzusdt@ticker"],id:1}))},t.onmessage=function(t){if(t.data){var e=JSON.parse(t.data);e.s&&a((function(t){var n=Object(s.a)({},t);return n[e.s]=e,n}))}},function(){t.send(JSON.stringify({method:"UNSUBSCRIBE",params:["btcusdt@ticker"],id:1}))}}),[]),Object(l.jsx)(d.Provider,{value:r,children:e})}var j=n(59),b=n(65),h=n(69),m=n(68),x=n(64),O=n(66),f=n(67),g=n(39),p={BNBUSDT:3.51,BANDUSDT:680.01,RSRUSDT:54e4,MIRUSDT:1921.705,"1INCHUSDT":5753.45,SOLUSDT:483.19,THETAUSDT:988.55,OCEANUSDT:8663,XTZUSDT:756},S=n(61),k=n(62),v=n(63),T=Object(j.a)({root:{minWidth:275,position:"sticky",left:0},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function y(t){var e=T();return Object(l.jsx)(S.a,{className:e.root,children:Object(l.jsxs)(k.a,{children:[Object(l.jsx)(v.a,{variant:"h5",component:"h2",children:"Total"}),Object(l.jsx)(v.a,{className:e.pos,color:"textSecondary",children:t.total.toFixed(2)})]})})}var N=Object(j.a)({table:{minWidth:650},sticky:{position:"sticky",left:0,background:"white",boxShadow:"5px 2px 5px grey"}});function w(){var t=N(),e=function(){var t=i.a.useContext(d);if(void 0===t)throw new Error("useMarket must be used within a MarketProvider");return t}(),n=Object.keys(e).map((function(t){var n,c=parseFloat(e[t].c),i=c*p[t];return function(t,e,n,c){return{symbol:t,time:e,lastPrice:n,totalHolding:c}}(e[t].s,(n=new Date(e[t].E),"".concat(n.getHours(),":").concat(n.getMinutes(),":").concat(n.getSeconds())),c,i.toFixed(2))})),c=Object.keys(e).map((function(t){return parseFloat(e[t].c)*p[t]})),r=c.length&&c.reduce((function(t,e){return e+t}));return Object(l.jsxs)(x.a,{component:g.a,children:[Object(l.jsxs)(b.a,{className:t.table,"aria-label":"simple table",size:"small",children:[Object(l.jsx)(O.a,{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(m.a,{className:t.sticky,children:"Symbol"}),Object(l.jsx)(m.a,{align:"right",children:"Last Price"}),Object(l.jsx)(m.a,{align:"right",children:"Total Holding"}),Object(l.jsx)(m.a,{align:"right",children:"Time"})]})}),Object(l.jsx)(h.a,{children:n.map((function(e){return Object(l.jsxs)(f.a,{children:[Object(l.jsx)(m.a,{className:t.sticky,component:"th",scope:"row",children:e.symbol}),Object(l.jsx)(m.a,{align:"right",children:e.lastPrice}),Object(l.jsx)(m.a,{align:"right",children:e.totalHolding}),Object(l.jsx)(m.a,{align:"right",children:e.time})]},e.name)}))})]}),Object(l.jsx)(y,{total:r})]})}var D=function(){return Object(l.jsx)(u,{children:Object(l.jsx)(w,{})})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),U()}},[[38,1,2]]]);
//# sourceMappingURL=main.2fe56c5e.chunk.js.map