(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(t,e,n){var content=n(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("cb4ee21a",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";n(199)},207:function(t,e,n){var o=n(29)(!1);o.push([t.i,".title[data-v-96d1f7da]{position:relative}.underber[data-v-96d1f7da]{width:100%;height:10px;position:absolute;bottom:0;background-color:#add8e6;z-index:-1}",""]),t.exports=o},216:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({data:function(){return{ens:[{ja:"りんご",en:"apple",result:""},{ja:"みかん",en:"orenge",result:""},{ja:"バナナ",en:"banana",result:""}],question:"",answer:"",form:"",len:0,num:0,fin:!1}},mounted:function(){this.question=this.ens[this.num].ja,this.answer=this.ens[this.num].en,this.len=this.ens.length},watch:{form:function(t){if(t==this.answer){if(this.ens[this.num].result="〇",this.$buefy.toast.open({duration:500,message:"正解",position:"is-top",type:"is-danger"}),this.form="",this.num==this.len-1)return this.num=this.len,this.question="クリア！",this.fin=!0,void this.$buefy.dialog.alert("クリア!");this.num=this.num+1,this.question=this.ens[this.num].ja,this.answer=this.ens[this.num].en}}}}),l=(n(206),n(28)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section columns"},[n("div",{staticClass:"column center"},[t._m(0),t._v("\n    "+t._s(t.num)+"/"+t._s(t.len)+"\n    "),n("div",{staticClass:"is-size-2"},[t._v(t._s(t.question))]),t._v(" "),t.fin?t._e():n("b-input",{staticClass:"center mt-2",attrs:{size:"is-large",autofocus:""},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),t._v(" "),n("div",{staticClass:"column is-4"},[n("b-table",{attrs:{data:t.ens}},[n("b-table-column",{attrs:{field:"ja",label:"日本語"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.ja)+"\n      ")]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"en",label:"英語"},scopedSlots:t._u([{key:"default",fn:function(e){return["〇"==e.row.result?n("div",[t._v(t._s(e.row.en))]):t._e()]}}])}),t._v(" "),n("b-table-column",{attrs:{field:"result",label:"クリア"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.result)+"\n      ")]}}])})],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{},[t._v("英単語タイピング")]),t._v(" "),n("div",{staticClass:"underber"})])}],!1,null,"96d1f7da",null);e.default=component.exports}}]);