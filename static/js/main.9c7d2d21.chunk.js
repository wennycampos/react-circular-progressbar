(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),l=(a(20),a(2)),s=a(3),i=a(5),u=a(4),m=a(6),p=a(13),d=a(1),h=a.n(d),v=function(e,t){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};var f=function(){return(f=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var g=50,b=50;function E(e){var t=e.className,a=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,o=e.strokeWidth,c=e.style;return h.a.createElement("path",{className:t,style:Object.assign({},c,y({pathRadius:n,dashRatio:r,counterClockwise:a})),d:k({pathRadius:n,counterClockwise:a}),strokeWidth:o,fillOpacity:0})}function k(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M "+g+","+b+"\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function y(e){var t=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,n=2*Math.PI*r,o=(1-a)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-o:o)+"px"}}var w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,a),r)-a)/(r-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,r=e.classes,n=e.counterClockwise,o=e.styles,c=e.strokeWidth,l=e.text,s=this.getPathRadius(),i=this.getPathRatio();return h.a.createElement("svg",{className:r.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?h.a.createElement("circle",{className:r.background,style:o.background,cx:g,cy:b,r:50}):null,h.a.createElement(E,{className:r.trail,counterClockwise:n,dashRatio:t,pathRadius:s,strokeWidth:c,style:o.trail}),h.a.createElement(E,{className:r.path,counterClockwise:n,dashRatio:i*t,pathRadius:s,strokeWidth:c,style:o.path}),l?h.a.createElement("text",{className:r.text,style:o.text,x:g,y:b},l):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(h.a.Component);function x(e){e.children;var t=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a}(e,["children"]);return h.a.createElement("div",{"data-test-id":"CircularProgressbarWithChildren"},h.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},h.a.createElement(w,f({},t)),e.children?h.a.createElement("div",{"data-test-id":"CircularProgressbarWithChildren__children",style:{position:"absolute",width:"100%",height:"100%",marginTop:"-100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.children):null))}function C(e){var t=e.rotation,a=e.strokeLinecap,r=e.textColor,n=e.textSize,o=e.pathColor,c=e.pathTransition,l=e.pathTransitionDuration,s=e.trailColor,i=e.backgroundColor,u=null==t?void 0:"rotate("+t+"turn)",m=null==t?void 0:"center center";return{root:{},path:O({stroke:o,strokeLinecap:a,transform:u,transformOrigin:m,transition:c,transitionDuration:null==l?void 0:l+"s"}),trail:O({stroke:s,strokeLinecap:a,transform:u,transformOrigin:m}),text:O({fill:r,fontSize:n}),background:O({fill:i})}}function O(e){return Object.keys(e).forEach(function(t){null==e[t]&&delete e[t]}),e}var N=a(10),P=a.n(N),j=a(12),R=a(11),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isAnimated:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({isAnimated:!0})}},{key:"render",value:function(){var e=this;return n.a.createElement(R.a,{start:function(){return{value:e.props.valueStart}},update:function(){return{value:[e.state.isAnimated?e.props.valueEnd:e.props.valueStart],timing:{duration:1e3*e.props.duration,ease:e.props.easingFunction}}}},function(t){var a=t.value;return e.props.children(a)})}}]),t}(n.a.Component);S.defaultProps={valueStart:0};var W=S,I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={percentagesIndex:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState({percentagesIndex:(e.state.percentagesIndex+1)%e.props.percentages.length})},this.props.interval)}},{key:"render",value:function(){return this.props.children(this.props.percentages[this.state.percentagesIndex])}}]),t}(n.a.Component);I.defaultProps={interval:1e3};var T=I,_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).timeout=void 0,a.state={value:a.props.valueStart},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=window.setTimeout(function(){e.setState({value:e.props.valueEnd})},0)}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"render",value:function(){return this.props.children(this.state.value)}}]),t}(n.a.Component);_.defaultProps={valueStart:0};var D=_,M="https://github.com/kevinsqi/react-circular-progressbar",A=function(e){return n.a.createElement("code",Object.assign({className:P()("p-1 bg-yellow text-dark",e.className)},e))},B=function(e){var t=e.description,a=e.children;return n.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6 col-md-4 offset-3 offset-md-4"},a)),n.a.createElement("p",{className:"text-center mt-3"},t))};var L=function(){var e=n.a.useState(!1),t=Object(p.a)(e,2),a=t[0],r=t[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"mb-3"},"react-circular-progressbar"),n.a.createElement("p",null,"A circular progress indicator component")))),n.a.createElement("div",{className:"row mt-5 mb-5"},n.a.createElement("div",{className:"col-6 offset-3 col-md-2 offset-md-5"},n.a.createElement(T,{percentages:[0,20,40,60,80,100]},function(e){return n.a.createElement(w,{value:e,text:"".concat(e,"%"),styles:C({strokeLinecap:"butt"})})}))),n.a.createElement("hr",null),n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",{className:"text-center"},"Built with SVG and styled with plain CSS.")),n.a.createElement(B,{description:n.a.createElement("span",null,"Customize ",n.a.createElement(A,null,"props.text"),", ",n.a.createElement(A,null,"props.styles"),", and"," ",n.a.createElement(A,null,"props.className")," based on percentage.")},n.a.createElement(T,{percentages:[75,100]},function(e){return n.a.createElement(w,{value:e,className:100===e?"complete":"incomplete",text:"".concat(e,100===e?"!!":"...")})})),n.a.createElement(B,{description:n.a.createElement("span",null,"Customize ",n.a.createElement(A,null,"props.strokeWidth")," and make it go counterclockwise with"," ",n.a.createElement(A,null,"props.counterClockwise"),".")},n.a.createElement(T,{percentages:[20,80]},function(e){return n.a.createElement(w,{value:e,text:"".concat(e,"%"),strokeWidth:5,counterClockwise:!0,styles:C({pathColor:"rgba(62, 152, 199, ".concat((100+e)/200,")"),pathTransitionDuration:.2})})})),n.a.createElement(B,{description:n.a.createElement("span",null,"Use ",n.a.createElement(A,null,"props.background")," to give it an inverted style.")},n.a.createElement(w,{className:"CircularProgressbar-inverted",background:!0,backgroundPadding:5,strokeWidth:6,value:66,text:"".concat(66,"%"),classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text some-additional-test-class",background:"CircularProgressbar-background"},styles:{background:{fill:"#3e98c7"}}})),n.a.createElement(B,{description:n.a.createElement("span",null,"Use a library like react-move to ease ",n.a.createElement(A,null,"props.percentage")," if you want to animate text.")},n.a.createElement(W,{valueStart:5,valueEnd:66,duration:1.4,easingFunction:j.a},function(e){var t=Math.round(e);return n.a.createElement(w,{value:e,text:"".concat(t,"%"),styles:C({pathTransition:"none"})})})),n.a.createElement(B,{description:n.a.createElement("span",null,"Want that car speedometer look? Use ",n.a.createElement(A,null,"props.circleRatio")," and CSS rotation.")},n.a.createElement(D,{valueStart:10,valueEnd:66},function(e){return n.a.createElement(w,{value:e,text:"".concat(e,"%"),circleRatio:.75,styles:C({rotation:.625,strokeLinecap:"butt",pathColor:"orange",trailColor:"#eee"})})})),n.a.createElement(B,{description:n.a.createElement("span",null,"Need custom content? Use ",n.a.createElement(A,null,"CircularProgressbarWithChildren")," to add arbitrary centered HTML.")},n.a.createElement(x,{value:66},n.a.createElement("img",{style:{width:40,marginTop:-5},src:"https://i.imgur.com/b9NyUGm.png",alt:"doge"}),n.a.createElement("div",{style:{fontSize:12,marginTop:-5}},n.a.createElement("strong",null,"66%")," mate"))),a?n.a.createElement(n.a.Fragment,null,n.a.createElement(B,{description:n.a.createElement("span",null,n.a.createElement(A,null,"circleRatio"),"\xa0",n.a.createElement(A,null,"counterClockwise"),"\xa0",n.a.createElement(A,null,"background"))},n.a.createElement(w,{value:50,circleRatio:.7,counterClockwise:!0,background:!0,backgroundPadding:4,styles:{trail:{stroke:"#fff"}}}))):n.a.createElement("div",{className:"col-12 text-center"},n.a.createElement("button",{className:"btn btn-link text-secondary",onClick:function(){return r(!0)}},n.a.createElement("small",null,"Show more examples")))),n.a.createElement("hr",null),n.a.createElement("div",{className:"mt-5 mb-5"},n.a.createElement("h2",{className:"text-center"},"Installation"),n.a.createElement("div",{className:"text-center mt-5"},n.a.createElement("p",null,"Install with yarn or npm:"),n.a.createElement("p",{className:"mb-5"},n.a.createElement(A,null,"yarn add react-circular-progressbar")),n.a.createElement("a",{className:"btn btn-info btn-lg",href:M},"View docs on Github")),n.a.createElement("div",{className:"text-center"},n.a.createElement("div",{className:"mt-5"},"Built by ",n.a.createElement("a",{href:"https://www.kevinqi.com/"},"@kevinsqi")))))},U=(a(25),a(26),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(L,null))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.9c7d2d21.chunk.js.map