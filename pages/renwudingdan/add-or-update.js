(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/renwudingdan/add-or-update"],{"02bd":function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=t(e("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,a,t,r,u){try{var o=n[r](u),s=o.value}catch(h){return void e(h)}o.done?i(s):Promise.resolve(s).then(a,t)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(a,t){var u=n.apply(i,e);function o(n){r(u,a,t,o,s,"next",n)}function s(n){r(u,a,t,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("b29f"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),renwubiaoti:"",renwuleixing:"",baojia:"",songjiandizhi:"",paidanmingzi:"",lianxidianhua:"",dingdanzhuangtai:"",wanchengshijian:"",fengmian:"",xiaoyouzhanghao:"",xiaoyouxingming:"",lianxifangshi:"",dizhi:"",zhanghao:"",xingming:"",shouji:"",sfsh:"",shhf:"",ispay:"",userid:""},dingdanzhuangtaiOptions:[],dingdanzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,renwubiaoti:!1,renwuleixing:!1,baojia:!1,songjiandizhi:!1,paidanmingzi:!1,lianxidianhua:!1,dingdanzhuangtai:!1,wanchengshijian:!1,fengmian:!1,xiaoyouzhanghao:!1,xiaoyouxingming:!1,lianxifangshi:!1,dizhi:!1,zhanghao:!1,xingming:!1,shouji:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var i=u(a.default.mark((function i(e){var t,r,u,o;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.wanchengshijian=this.$utils.getCurDateTime(),t=n.getStorageSync("nowTable"),i.next=4,this.$api.session(t);case 4:if(r=i.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.shouji=this.user.shouji,this.dingdanzhuangtaiOptions="未开始,进行中,已完成".split(","),this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=18;break}return this.ruleForm.id=e.id,i.next=16,this.$api.info("renwudingdan",this.ruleForm.id);case 16:r=i.sent,this.ruleForm=r.data;case 18:if(!e.cross){i.next=97;break}u=n.getStorageSync("crossObj"),i.t0=a.default.keys(u);case 21:if((i.t1=i.t0()).done){i.next=97;break}if(o=i.t1.value,"dingdanbianhao"!=o){i.next=27;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,i.abrupt("continue",21);case 27:if("renwubiaoti"!=o){i.next=31;break}return this.ruleForm.renwubiaoti=u[o],this.ro.renwubiaoti=!0,i.abrupt("continue",21);case 31:if("renwuleixing"!=o){i.next=35;break}return this.ruleForm.renwuleixing=u[o],this.ro.renwuleixing=!0,i.abrupt("continue",21);case 35:if("baojia"!=o){i.next=39;break}return this.ruleForm.baojia=u[o],this.ro.baojia=!0,i.abrupt("continue",21);case 39:if("songjiandizhi"!=o){i.next=43;break}return this.ruleForm.songjiandizhi=u[o],this.ro.songjiandizhi=!0,i.abrupt("continue",21);case 43:if("paidanmingzi"!=o){i.next=47;break}return this.ruleForm.paidanmingzi=u[o],this.ro.paidanmingzi=!0,i.abrupt("continue",21);case 47:if("lianxidianhua"!=o){i.next=51;break}return this.ruleForm.lianxidianhua=u[o],this.ro.lianxidianhua=!0,i.abrupt("continue",21);case 51:if("dingdanzhuangtai"!=o){i.next=55;break}return this.ruleForm.dingdanzhuangtai=u[o],this.ro.dingdanzhuangtai=!0,i.abrupt("continue",21);case 55:if("wanchengshijian"!=o){i.next=59;break}return this.ruleForm.wanchengshijian=u[o],this.ro.wanchengshijian=!0,i.abrupt("continue",21);case 59:if("fengmian"!=o){i.next=63;break}return this.ruleForm.fengmian=u[o],this.ro.fengmian=!0,i.abrupt("continue",21);case 63:if("xiaoyouzhanghao"!=o){i.next=67;break}return this.ruleForm.xiaoyouzhanghao=u[o],this.ro.xiaoyouzhanghao=!0,i.abrupt("continue",21);case 67:if("xiaoyouxingming"!=o){i.next=71;break}return this.ruleForm.xiaoyouxingming=u[o],this.ro.xiaoyouxingming=!0,i.abrupt("continue",21);case 71:if("lianxifangshi"!=o){i.next=75;break}return this.ruleForm.lianxifangshi=u[o],this.ro.lianxifangshi=!0,i.abrupt("continue",21);case 75:if("dizhi"!=o){i.next=79;break}return this.ruleForm.dizhi=u[o],this.ro.dizhi=!0,i.abrupt("continue",21);case 79:if("zhanghao"!=o){i.next=83;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,i.abrupt("continue",21);case 83:if("xingming"!=o){i.next=87;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,i.abrupt("continue",21);case 87:if("shouji"!=o){i.next=91;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,i.abrupt("continue",21);case 91:if("userid"!=o){i.next=95;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,i.abrupt("continue",21);case 95:i.next=21;break;case 97:this.styleChange();case 98:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},wanchengshijianConfirm:function(n){console.log(n),this.ruleForm.wanchengshijian=n.result,this.$forceUpdate()},dingdanzhuangtaiChange:function(n){this.dingdanzhuangtaiIndex=n.target.value,this.ruleForm.dingdanzhuangtai=this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]},fengmianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.fengmian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("renwudingdan",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("renwudingdan",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),a=i.getMonth()+1,t=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(e,"-").concat(a,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};i.default=s}).call(this,e("543d")["default"])},"096b":function(n,i,e){},"65ae":function(n,i,e){"use strict";var a={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"b29f"))}},t=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return t})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}))},"688a":function(n,i,e){"use strict";e.r(i);var a=e("65ae"),t=e("c3b2");for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);e("d449");var u,o=e("f0c5"),s=Object(o["a"])(t["default"],a["b"],a["c"],!1,null,"311a7c28",null,!1,a["a"],u);i["default"]=s.exports},aa9b:function(n,i,e){"use strict";(function(n){e("5f2d"),e("921b");a(e("66fd"));var i=a(e("688a"));function a(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},c3b2:function(n,i,e){"use strict";e.r(i);var a=e("02bd"),t=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);i["default"]=t.a},d449:function(n,i,e){"use strict";var a=e("096b"),t=e.n(a);t.a}},[["aa9b","common/runtime","common/vendor"]]]);