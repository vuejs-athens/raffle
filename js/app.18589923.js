(function(t){function e(e){for(var r,s,c=e[0],i=e[1],a=e[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&d.push(l[s][0]),l[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==l[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},l={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),l={key:0,id:"raffle-placeholder",class:"winner"},o=Object(r["g"])("p",null,"And the winner is...",-1),s=["textContent"];function c(t,e,n,c,i,a){var u=Object(r["l"])("raffle"),f=Object(r["l"])("Results"),d=Object(r["l"])("Layout");return Object(r["i"])(),Object(r["d"])(d,null,{left:Object(r["n"])((function(){return[Object(r["h"])(u,{"is-first-roll":i.isFirstRoll,disabled:a.disabledRaffle,onUpload:a.onUpload,onRoll:a.onRoll},{default:Object(r["n"])((function(){return[i.result?(Object(r["i"])(),Object(r["f"])("div",l,[o,Object(r["g"])("p",{textContent:Object(r["m"])(i.result)},null,8,s)])):Object(r["e"])("",!0)]})),_:1},8,["is-first-roll","disabled","onUpload","onRoll"])]})),right:Object(r["n"])((function(){return[Object(r["h"])(f,{results:i.results,prizes:i.prizes},null,8,["results","prizes"])]})),_:1})}var i=n("5530"),a=(n("ac1f"),n("5319"),n("498a"),n("4de4"),n("d3b7"),{class:"flex flex-column flex-center flex-middle container"}),u={class:"flex flex-column flex-center flex-middle"},f={class:"flex flex-row flex-center flex-middle"};function d(t,e,n,l,o,s){var c=Object(r["l"])("Header");return Object(r["i"])(),Object(r["f"])("div",a,[Object(r["g"])("div",u,[Object(r["h"])(c)]),Object(r["g"])("div",f,[Object(r["k"])(t.$slots,"left"),Object(r["k"])(t.$slots,"right")])])}var p=n("cf05"),b=n.n(p),O=Object(r["g"])("div",{class:"header"},[Object(r["g"])("img",{src:b.a,alt:"logo",class:"logo"})],-1),j=Object(r["g"])("div",{class:"pagetitle"},[Object(r["g"])("h1",null,"VueJS Athens Meetup")],-1);function h(t,e){return Object(r["i"])(),Object(r["f"])(r["a"],null,[O,j],64)}var v=n("6b0d"),g=n.n(v);const m={},x=g()(m,[["render",h]]);var y=x,R={name:"Layout",components:{Header:y}};const k=g()(R,[["render",d]]);var w=k,P={class:"flex flex-column flex-center flex-space-evenly card card--light"},S=["disabled"],z={key:0},_={key:1};function C(t,e,n,l,o,s){var c=Object(r["l"])("Upload");return Object(r["i"])(),Object(r["f"])("div",P,[Object(r["h"])(c,{onUpload:s.upload},null,8,["onUpload"]),Object(r["k"])(t.$slots,"default"),Object(r["g"])("button",{class:"button",disabled:n.disabled,onClick:e[0]||(e[0]=Object(r["o"])((function(){return s.roll&&s.roll.apply(s,arguments)}),["prevent"]))},[n.isFirstRoll?(Object(r["i"])(),Object(r["f"])("span",z,"Roll")):(Object(r["i"])(),Object(r["f"])("span",_,"Roll Again?"))],8,S)])}var U={key:0,class:"flex flex-column flex-space-evenly full-width"},M=["src"],T=["value"];function F(t,e,n,l,o,s){return Object(r["i"])(),Object(r["d"])(r["b"],{name:"fade"},{default:Object(r["n"])((function(){return[o.hasProgressBar?(Object(r["i"])(),Object(r["f"])("div",U,[Object(r["g"])("div",{class:"upload",onDragenter:e[0]||(e[0]=Object(r["o"])((function(){}),["prevent"])),onDragover:e[1]||(e[1]=Object(r["o"])((function(){}),["prevent"])),onDragend:e[2]||(e[2]=Object(r["o"])((function(){}),["prevent"])),onDrop:e[3]||(e[3]=Object(r["o"])((function(){return s.upload&&s.upload.apply(s,arguments)}),["prevent"]))},[Object(r["g"])("img",{src:o.uploadIcon,alt:"uploadSvgIcon"},null,8,M),Object(r["g"])("progress",{class:"progress full-width",max:"100",value:o.progress},null,8,T)],32)])):Object(r["e"])("",!0)]})),_:1})}var $=n("3835"),A={emits:["upload"],data:function(){return{hasProgressBar:!0,interval:void 0,progress:0,uploadIcon:n("c65f")}},methods:{showProgress:function(){var t=this;this.interval=setInterval((function(){t.progress+=10,100===t.progress&&(clearInterval(t.interval),setTimeout((function(){t.hasProgressBar=!1}),350))}),200)},upload:function(t){var e=Object($["a"])(t.dataTransfer.files,1),n=e[0];this.$emit("upload",n),this.showProgress()}}};const B=g()(A,[["render",F]]);var I=B,D={components:{Upload:I},props:{selected:String,disabled:Boolean,isFirstRoll:Boolean},emits:["upload","roll"],methods:{upload:function(t){this.$emit("upload",t)},roll:function(){this.$emit("roll")}}};const E=g()(D,[["render",C]]);var J=E,L=(n("b0c0"),{class:"card card--primary flex flex-column list"}),V=["textContent"],H=["textContent"],N=Object(r["g"])("br",null,null,-1),q=["textContent"];function G(t,e,n,l,o,s){return Object(r["i"])(),Object(r["f"])("div",L,[(Object(r["i"])(!0),Object(r["f"])(r["a"],null,Object(r["j"])(n.results,(function(t){return Object(r["i"])(),Object(r["f"])("div",{key:t.id,class:"list-item"},[Object(r["g"])("h3",{textContent:Object(r["m"])(t.name)},null,8,V),Object(r["g"])("small",{textContent:Object(r["m"])(t.content)},null,8,H),N,Object(r["g"])("small",{textContent:Object(r["m"])(t.fulltext)},null,8,q)])})),128))])}var K={props:{results:Array}};const Q=g()(K,[["render",G]]);var W=Q,X=n("4f96"),Y=(n("1276"),n("fb6a"),n("00b4"),n("caad"),n("07ac"),["fakiolasmarios@gmail.com","fadamakis@gmail.com","timosergiogr@gmail.com","sergio_kagiema@live.com","emazyka@gmail.com","emazika@outlook.com","emazika@gmail.com"]),Z=function(t){var e=t.split("\n"),n=Object(X["a"])(e),r=n.slice(1),l=r.reduce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e&&/"\d{4}\/\d{2}\/\d{2}/.test(e);if(!n)return t;var r=e.split(","),l=Object($["a"])(r,3),o=l[1],s=l[2],c=/['"]+/g,i=!!o&&o.trim().replace(c,"")||"",a=!!s&&s.trim().replace(c,"")||"";return t[i]||Y.includes(i)||(t[i]=a),t}),{});return Object.values(l)},tt=function(t){return new Promise((function(e){var n=new FileReader;n.readAsText(t),n.onloadend=function(t){var n=t.target.result;return e(Z(n))}}))},et=function(t){var e=Math.floor(Math.random()*t.length);return t[e]},nt=function(t,e,n,r){var l=function(n,o){return function(){--n>0?(setTimeout(l,++o*e),t()):r()}}(n,0);setTimeout(l,e)},rt=n("c819"),lt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt;return t.reduce((function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=0;n<e.count;n++)t.push({content:e.content,fulltext:e.fulltext});return t}),[])},ot={components:{Layout:w,Results:W,Raffle:J},data:function(){return{result:void 0,isFirstRoll:!0,entrants:[],results:[],prizes:lt()}},computed:{disabledRaffle:function(){return 0===this.prizes.length}},methods:{setEntrants:function(t){this.entrants=t},setResult:function(){this.result=et(this.entrants)},onUpload:function(t){tt(t).then(this.setEntrants)},onRoll:function(){0!==this.prizes.length&&(this.onRollStart(),nt(this.setResult,10,30,this.onRollEnd))},onRollStart:function(){this.result=void 0},onRollEnd:function(){var t=this,e=Object(i["a"])(Object(i["a"])({},this.prizes[0]),{},{name:this.result,id:this.result&&this.result.trim().replace(" ","_")});this.results.push(e),this.isFirstRoll=this.results.length<=0,this.entrants=this.entrants.filter((function(e){return e!==t.result})),this.prizes.shift()}}};n("bef3");const st=g()(ot,[["render",c]]);var ct=st;Object(r["c"])(ct).mount("#app")},bef3:function(t,e,n){"use strict";n("ee13")},c65f:function(t,e,n){t.exports=n.p+"img/upload.f883c58b.svg"},c819:function(t){t.exports=JSON.parse('[{"count":2,"content":"VueSchool","fulltext":"1 month subscription"},{"count":1,"content":"VueSchool","fulltext":"1 year subscription"}]')},cf05:function(t,e,n){t.exports=n.p+"img/logo.933f0d9b.png"},ee13:function(t,e,n){}});
//# sourceMappingURL=app.18589923.js.map