(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{173:function(t,e,n){var o=n(11),r=n(174)(!0);o(o.S,"Object",{entries:function(t){return r(t)}})},174:function(t,e,n){var o=n(16),r=n(35),l=n(31),v=n(50).f;t.exports=function(t){return function(e){for(var n,c=l(e),_=r(c),f=_.length,i=0,d=[];f>i;)n=_[i++],o&&!v.call(c,n)||d.push(t?[n,c[n]]:c[n]);return d}}},176:function(t,e,n){"use strict";n.r(e);n(173),n(21);var o=n(48);n(86),n(4),n(1),n(3);function r(t,e,n){return{wound:t,from:e,to:n}}function l(t){return 0===t||1===t?1:t*l(t-1)}function v(p,t,e){return l(e)/(l(t)*l(e-t))*(Math.pow(p,t)*Math.pow(1-p,e-t))}function c(t){return parseInt(t,10)}var _={components:{},data:function(){return{input_atacs:"3",v_slct_hit:"4+",v_slct_wound:"4+",v_slct_arm:"No",v_slct_fnp:"No",new_data:"",items:[{wound:"",from:"",to:""}]}},methods:{roll:function(){var t=function(t){var e="",n=[],l=c(t[0]);if(l<=100){var _=t[1],f=t[2],d=t[3],m=t[4],h=l,w=function(t,e,n,o){var r="";r=null==n&null==o?t/6*e:null!=n&null==o?t/6*e/6*n:null==n&null!=o?t/6*e/6*o:null!=n&null!=o?t/6*e/6*n/6*o:"how do you get whis? post me a later";return r}({"1+":1,"2+":100/6*5/100,"3+":100/6*4/100,"4+":.5,"5+":100/6*2/100,"6+":100/6*1/100}[_],{"1+":6,"2+":5,"3+":4,"4+":3,"5+":2,"6+":1}[f],{No:null,"2+":1,"3+":2,"4+":3,"5+":4,"6+":5}[d],{No:null,"2+":1,"3+":2,"4+":3,"5+":4,"6+":5}[m]),y=[],x=[],N=h,k=function(t,e){return t+e},C=!0,A=!1,O=void 0;try{for(var j,L=Array(h+1).keys()[Symbol.iterator]();!(C=(j=L.next()).done);C=!0){var M=j.value,S=100*v(w,M,N);x.push(S);var J=c(Math.round(x.reduce(k))),R=x.reduce(k);y.push([J,R])}}catch(t){A=!0,O=t}finally{try{C||null==L.return||L.return()}finally{if(A)throw O}}var T=0,B=0,E=0,F=0,I=!0,W=!1,$=void 0;try{for(var z,D=y.entries()[Symbol.iterator]();!(I=(z=D.next()).done);I=!0){var G=Object(o.a)(z.value,2),i=G[0],H=G[1];0==H[0]?B=i:0!=i&&0==y[i-1][0]?T=H[0]:0!=i&&100!=y[i-1][0]&&100==H[0]?(E=y[i-1][0],F=i):0!=i&&100!=y[i-1][0]&&100!=H[0]&&n.push(r(i,y[i-1][0],H[0]))}}catch(t){W=!0,$=t}finally{try{I||null==D.return||D.return()}finally{if(W)throw $}}n.unshift(r("0 - "+B,0,T)),n.push(r(F+" - "+l,E,100))}else e+="\n Слишком большое значение атак,\n максимальное количество атак 100 \n";return[n,e]}([this.input_atacs,this.v_slct_hit,this.v_slct_wound,this.v_slct_arm,this.v_slct_fnp]);this.new_data=t[1],this.items=t[0],console.log(t)}}},f=n(37),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("b-container",[n("b-row",{},[n("h1",{staticClass:"text-center w-100 p-3 bg-secondary text-light"},[t._v("Warhammer Bernuly Calculator")])]),t._v(" "),n("form",{staticClass:" ",attrs:{id:"id_form"}},[t._v("Number of attacks:\r\n\t\t"),n("b-row",{staticClass:" "},[n("b-form-input",{staticClass:"input",attrs:{placeholder:"attack counter"},model:{value:t.input_atacs,callback:function(e){t.input_atacs=e},expression:"input_atacs"}})],1),t._v(" "),n("b-row",{staticClass:"text-center"},[n("b-col",{},[n("label",{},[t._v("To hit:")])]),t._v(" "),n("b-col",{},[n("label",{},[t._v("To wound:")])]),t._v(" "),n("b-col",{},[n("label",{},[t._v("Arm sv:")])]),t._v(" "),n("b-col",{},[n("label",{},[t._v("Fnp:")])])],1),t._v(" "),n("b-row",{staticClass:"text-center"},[n("b-col",{},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.v_slct_hit,expression:"v_slct_hit"}],attrs:{type:"text"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.v_slct_hit=e.target.multiple?n:n[0]}}},[n("option",[t._v("1+")]),t._v(" "),n("option",[t._v("2+")]),t._v(" "),n("option",[t._v("3+")]),t._v(" "),n("option",[t._v("4+")]),t._v(" "),n("option",[t._v("5+")]),t._v(" "),n("option",[t._v("6+")])])]),t._v(" "),n("b-col",{},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.v_slct_wound,expression:"v_slct_wound"}],staticClass:"is-hovered",attrs:{type:"text"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.v_slct_wound=e.target.multiple?n:n[0]}}},[n("option",[t._v("1+")]),t._v(" "),n("option",[t._v("2+")]),t._v(" "),n("option",[t._v("3+")]),t._v(" "),n("option",[t._v("4+")]),t._v(" "),n("option",[t._v("5+")]),t._v(" "),n("option",[t._v("6+")])])]),t._v(" "),n("b-col",{},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.v_slct_arm,expression:"v_slct_arm"}],staticClass:"is-hovered",attrs:{type:"text"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.v_slct_arm=e.target.multiple?n:n[0]}}},[n("option",[t._v("No")]),t._v(" "),n("option",[t._v("2+")]),t._v(" "),n("option",[t._v("3+")]),t._v(" "),n("option",[t._v("4+")]),t._v(" "),n("option",[t._v("5+")]),t._v(" "),n("option",[t._v("6+")])])]),t._v(" "),n("b-col",{},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.v_slct_fnp,expression:"v_slct_fnp"}],staticClass:"is-hovered",attrs:{type:"text"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.v_slct_fnp=e.target.multiple?n:n[0]}}},[n("option",[t._v("No")]),t._v(" "),n("option",[t._v("2+")]),t._v(" "),n("option",[t._v("3+")]),t._v(" "),n("option",[t._v("4+")]),t._v(" "),n("option",[t._v("5+")]),t._v(" "),n("option",[t._v("6+")])])])],1)],1),t._v(" "),n("br"),t._v(" "),n("b-row",{},[n("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(e){return t.roll()}}},[t._v("ROLL")])],1),t._v(" "),n("b-row",{},[t._v("\r\n\t\tResults:\r\n\t")]),t._v(" "),n("b-table",{attrs:{fixed:"","sticky-header":"","head-variant":"dark",striped:"",hover:"",items:t.items}}),t._v(" "),n("b-row",{staticClass:"text-center bg-secondary text-light"},[n("b-col",[t._v(t._s(t.new_data))])],1),t._v(" "),n("p",[n("NuxtLink",{attrs:{to:"/about"}},[t._v("\r\n\t\tAbout page\r\n\t")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);