(function(t){function s(s){for(var a,n,l=s[0],o=s[1],c=s[2],f=0,h=[];f<l.length;f++)n=l[f],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(s);while(h.length)h.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],a=!0,l=1;l<e.length;l++){var o=e[l];0!==i[o]&&(a=!1)}a&&(r.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},i={app:0},r=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=s,l=l.slice();for(var c=0;c<l.length;c++)s(l[c]);var u=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";e("85ec")},"20af":function(t,s,e){"use strict";e("6080")},"305d":function(t,s,e){"use strict";e("aa26")},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=function(){var t=this,s=this,e=s.$createElement,a=s._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{staticClass:"py-0 px-2",attrs:{type:"dark",variant:"dark"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{active:"ShowList"==this.ActiveTap},on:{click:function(){return t.ActiveTap="ShowList"}}},[a("b-icon",{attrs:{icon:"shop"}})],1),a("b-nav-item",{attrs:{active:"ShowSetting"==this.ActiveTap},on:{click:function(){return t.ActiveTap="ShowSetting"}}},[a("b-icon",{attrs:{icon:"gear"}})],1)],1)],1),"ShowList"==s.ActiveTap?a("List"):s._e(),"ShowSetting"==s.ActiveTap?a("Setting"):s._e(),a("p",{attrs:{id:"r_text"}},[s._v("Hani AlMashkawi | hani.mashkawi@gmail.com | +491627344810")])],1)},r=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"List"},[!t.List||t.List.length<=0?e("p",[t._v(" لا توجد اي بيانات محفوظة. انتقل إلى الاعدادات وأضف بطاقات ")]):t._e(),t.List&&t.List.length>0?e("div",[e("b-button",{staticClass:"m-2",attrs:{size:"sm",variant:"success"},on:{click:t.shuffle}},[t._v("خلط البطاقات")]),e("b-button",{staticClass:"m-2",attrs:{size:"sm",variant:"success"},on:{click:t.shuffle_color}},[t._v("تغيير الألوان")]),e("b-button",{staticClass:"m-2",attrs:{size:"sm",variant:"danger"},on:{click:t.reset_cards}},[t._v(" إخفاء الكل ")])],1):t._e(),e("h2",[t._v(t._s(t.activeClass))]),t.List&&t.List.length>0&&t.show?e("transition-group",{staticClass:"Items",attrs:{name:"flip-list",tag:"div"}},t._l(t.List,(function(s,a){return e("Item",{key:"Item_"+s,attrs:{name:s,color:t.colorArray[a],index:a+1,reset:t.reset}})})),1):t._e()],1)},l=[],o=(e("ac1f"),e("1276"),e("4de4"),e("2ef0")),c=e.n(o),u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:{Item:!0,show:t.show,"flip-card":!0},on:{click:function(s){t.show=!t.show}}},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front",style:{backgroundColor:t.color}},[t._v(" "+t._s(t.index)+" ")]),e("div",{staticClass:"flip-card-back",style:{backgroundColor:t.color}},[t._v(" "+t._s(t.name)+" ")])])])},f=[],h=(e("a9e3"),{name:"Item",props:{name:String,color:String,index:Number,reset:Boolean},data:function(){return{show:!1}},watch:{reset:function(t,s){t!=s&&(this.show=!1)}}}),d=h,p=(e("305d"),e("2877")),b=Object(p["a"])(d,u,f,!1,null,"a3ec7518",null),v=b.exports,m={name:"List",components:{Item:v},data:function(){return{activeClass:"",show:!0,List:[],reset:!1,colorArray:["#00B3E6","#E6331A","#B366CC","#E666B3","#CC9999","#B3B31A","#00E680","#809980","#996633","#FF3380","#E64D66","#336633","#993300","#b51010","#f56505","#e6cd2c","#65db2a","#2ac6db","#164ec7","#7d16c7","#27a2ba","#780000"]}},mounted:function(){this.start()},methods:{start:function(){var t,s;localStorage.getItem("ClassesList")&&localStorage.getItem("activeClass")&&(t=JSON.parse(localStorage.getItem("ClassesList")),s=JSON.parse(localStorage.getItem("activeClass")),this.List=t.filter((function(t){return t.className==s}))[0].list.split("\n"),this.activeClass=s)},shuffle_color:function(){this.colorArray=c.a.shuffle(this.colorArray)},shuffle:function(){this.List=c.a.shuffle(this.List)},reset_cards:function(){this.reset=!this.reset}}},g=m,C=(e("20af"),Object(p["a"])(g,n,l,!1,null,"3b083815",null)),_=C.exports,S=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-container",{staticClass:"Setting",attrs:{fluid:""}},[e("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[e("b-tab",{attrs:{title:"إضافة صف جديد"}},[e("b-container",[e("b-row",[e("b-form",[e("b-form-group",{staticClass:"my-3",attrs:{id:"input-group-1",label:"اسم الصف","label-for":"input-className",description:"يجب أن لا يتكرر اسم الصف"}},[e("b-form-input",{attrs:{id:"input-className",type:"text",placeholder:"اكتب اسم الصف",required:"",size:"sm"},model:{value:t.className,callback:function(s){t.className=s},expression:"className"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"اسماء البطاقات","label-for":"textarea-list",description:"أدخل كل اسم في سطر. لا تكرر الاسماء."}},[e("b-form-textarea",{attrs:{id:"textarea-list",placeholder:"أضف اسماء البطاقات",rows:"10",size:"sm",required:""},model:{value:t.list,callback:function(s){t.list=s},expression:"list"}})],1),e("b-button",{staticClass:"my-4",attrs:{variant:"primary"},on:{click:t.saveData}},[t._v("حفظ البيانات")])],1)],1)],1),e("b-modal",{ref:"error-modal",attrs:{"hide-footer":"",title:"خطأ"}},[e("div",{staticClass:"d-block text-center"},[e("p",[t._v(t._s(t.errorMsg))])]),e("b-button",{staticClass:"mt-3",attrs:{variant:"outline-danger",block:""},on:{click:t.hideModal}},[t._v("إغلاق")])],1)],1),t.ClassesList&&t.ClassesList.length>0?e("b-tab",{attrs:{title:"الصفوف المحفوظة"}},[e("b-container",{staticClass:"mb-4"},[e("b-row",{staticClass:"list-header"},[e("b-col",[e("h6",[t._v("الاسم")])]),e("b-col",{attrs:{cols:"6"}},[e("h6",[t._v("البطاقات")])]),e("b-col")],1),t._l(t.ClassesList,(function(s,a){return e("b-row",{key:a,class:{active:t.activeClass==s.className,"border-bottom":!0,"p-2":!0}},[e("b-col",[t._v(t._s(s.className))]),e("b-col",{attrs:{cols:"6"}},[e("p",[t._v(t._s(s.list.replaceAll("\n"," - ")))])]),e("b-col",[e("b-button",{attrs:{size:"sm",variant:"denger"},on:{click:function(e){return t.delClass(s.className)}}},[e("b-icon",{attrs:{icon:"trash"}})],1),e("b-button",{attrs:{size:"sm",variant:"denger"},on:{click:function(e){return t.setActiveClass(s.className)}}},[s.className!=t.activeClass?e("b-icon",{attrs:{icon:"circle"}}):t._e(),s.className==t.activeClass?e("b-icon",{attrs:{icon:"check-circle"}}):t._e()],1)],1)],1)}))],2)],1):t._e()],1)],1)},L=[],w=e("2909"),y=(e("d3b7"),e("6062"),e("3ca3"),e("ddb0"),e("99af"),{name:"Setting",data:function(){return{className:"",list:"",activeClass:"",ClassesList:[],errorMsg:""}},mounted:function(){this.getLocalStorage()},methods:{saveData:function(){if(new Set(this.list.split("\n")).size===this.list.split("\n").length)if(""!=this.className&&""!=this.list){this.getLocalStorage();var t=[].concat(Object(w["a"])(this.ClassesList),[{className:this.className,list:this.list}]);this.ClassesList=t,this.activeClass=this.className,this.className="",this.list="",this.setLocalStorage(),this.getLocalStorage()}else this.showModal("تأكد من كتابة البيانات بشكل صحيح");else this.showModal("توجد أسماء مكررة")},getLocalStorage:function(){localStorage.getItem("ClassesList")&&localStorage.getItem("activeClass")?(this.ClassesList=JSON.parse(localStorage.getItem("ClassesList")),this.activeClass=JSON.parse(localStorage.getItem("activeClass"))):(this.ClassesList=[],this.activeClass="")},setLocalStorage:function(){localStorage.setItem("ClassesList",JSON.stringify(this.ClassesList)),localStorage.setItem("activeClass",JSON.stringify(this.activeClass))},delClass:function(t){this.getLocalStorage(),this.ClassesList=this.ClassesList.filter((function(s){return s.className!=t})),this.activeClass==t&&(this.ClassesList.length>0?this.activeClass=this.ClassesList[0].className:this.activeClass=""),this.setLocalStorage()},setActiveClass:function(t){this.getLocalStorage(),this.activeClass=t,this.setLocalStorage()},showModal:function(t){this.errorMsg=t,this.$refs["error-modal"].show()},hideModal:function(){this.errorMsg="",this.$refs["error-modal"].hide()}}}),k=y,N=(e("da82"),Object(p["a"])(k,S,L,!1,null,"3d4fdf1a",null)),x=N.exports,O={name:"App",components:{List:_,Setting:x},data:function(){return{ActiveTap:"ShowList"}}},A=O,I=(e("034f"),Object(p["a"])(A,i,r,!1,null,null,null)),j=I.exports,M=e("5f5b"),T=e("b1e0");e("f9e3"),e("2dd8");a["default"].config.productionTip=!1,a["default"].use(M["a"]),a["default"].use(T["a"]),new a["default"]({render:function(t){return t(j)}}).$mount("#app")},6080:function(t,s,e){},"7a41":function(t,s,e){},"85ec":function(t,s,e){},aa26:function(t,s,e){},da82:function(t,s,e){"use strict";e("7a41")}});
//# sourceMappingURL=app.b6bdf0ff.js.map