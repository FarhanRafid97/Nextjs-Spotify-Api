(window.tawkJsonp=window.tawkJsonp||[]).push([["chunk-2c78ba82"],{"5a60":function(t,e,n){"use strict";var o=n("eb24").a,r=n("2877"),a=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.a=a.exports},eb24:function(t,e,n){"use strict";(function(t){var o=n("2b0e"),r=n("f0b0");function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,a,i,s=[],l=!0,c=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=a.call(n)).done)&&(s.push(o.value),s.length!==e);l=!0);}catch(t){c=!0,r=t}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw r}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}e.a=o.a.component("i-frame",{props:{width:{type:String,default:null},height:{type:String,default:null},cssLink:{type:String,default:null},styleObject:{type:[Object,Array]},classString:{type:String,default:""}},data:function(){return{id:r.Helper.generateUUID()}},render:function(t){return t("iframe",{on:{load:this.renderChildren},attrs:{src:"about:blank",frameborder:"0",scrolling:"no",width:this.width,height:this.height,style:Object.entries(this.styleObject).map((function(t){var e=a(t,2);return e[0]+e[1]})).join(" "),id:this.id,class:this.classString,title:"chat widget"}})},beforeUpdate:function(){this.iApp&&(this.iApp.children=Object.freeze(this.$slots.default))},methods:{renderChildren:function(){var e=this.$slots.default,n=this.$el.contentDocument.documentElement,r=this.$el.contentDocument.body,a=this.$el.contentDocument.head,i=document.createElement("div"),s=document.createElement("link"),l=document.createElement("link"),c=new o.a({name:"iApp",data:{children:Object.freeze(e)},render:function(t){return t("div",{attrs:{style:"width: 100%; height: 100%;"}},this.children)},store:this.$store,mounted:function(){this.children.length&&this.children[0]&&this.children[0].context&&"function"==typeof this.children[0].context.loaded&&this.children[0].context.loaded()}});s.href=this.cssLink,s.rel="stylesheet",l.href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext",r.appendChild(i),r.classList.add("font-lato");var d="1rem",h="0";if(this.$store.getters["widget/isRTL"]&&r.classList.add("tawk-rtl"),this.$store.getters["browserData/mobileBrowserName"]){var m,u,p;n.classList.add("tawk-mobile"),r.classList.add("tawk-mobile");var g=null===(m=t.Tawk_Window.jsApi)||void 0===m||null===(u=m.local_API)||void 0===u||null===(p=u.customStyle)||void 0===p?void 0:p.visibility;g&&g.mobile&&g.mobile.maximized&&(g.mobile.maximized.paddingTop&&(d="".concat(g.mobile.maximized.paddingTop,"px")),g.mobile.maximized.paddingBottom&&(h="".concat(g.mobile.maximized.paddingBottom,"px")))}this.$store.getters["widget/language"]&&n.setAttribute("lang",this.$store.getters["widget/language"]);var w=document.createElement("meta");w["http-equiv"]="Content-Type",w.content="text/html; charset=utf-8";var f=document.createElement("meta");f.name="viewport",f.content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",a.appendChild(w),a.appendChild(f);var b=document.createElement("style"),k=":root {\n\t\t\t\t\t--tawk-header-background-color: ".concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t\t--tawk-header-background-color-alpha: ").concat(this.$store.getters["widget/headerBgColor"],"50 !important;\n\t\t\t\t\t--tawk-header-text-color: ").concat(this.$store.getters["widget/headerTxtColor"]," !important;\n\t\t\t\t\t--tawk-header-override-padding-top: ").concat(d," !important;\n\t\t\t\t\t--tawk-footer-override-padding-bottom: ").concat(h," !important;\n\t\t\t\t}");k+=".tawk-visitor-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/visitorBgColor"]," !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/visitorTxtColor"]," !important;\n\t\t\t}"),k+=".tawk-agent-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"]," !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/agentTxtColor"]," !important;\n\t\t\t}"),this.$store.getters["browserData/isIE"]&&this.$store.getters["browserData/version"]<=11&&(k+=".tawk-custom-color-inverse {\n\t\t\t\t\tbackground-color: ".concat(this.$store.getters["widget/headerTxtColor"]," !important;\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-border-color {\n\t\t\t\t\tborder-color: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-border-left {\n\t\t\t\t\tborder-left: 5px solid ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-color {\n\t\t\t\t\tbackground-color: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerTxtColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-text-color {\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-text-color-inverse {\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerTxtColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-image .tawk-image {\n\t\t\t\t\tmax-height: 250px;\n\t\t\t\t}\n\t\t\t\t.tawk-timeago {\n\t\t\t\t\tfont-size: .75rem !important;\n\t\t\t\t\tfont-family: 'Lato', sans-serif !important;\n\t\t\t\t}\n\t\t\t\t.tawk-main-panel .tawk-chat-panel {\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\t\t\t\t.tawk-tooltip-hover  {\n\t\t\t\t\tmax-width: 120px;\n\t\t\t\t}\n\t\t\t\t.card-container:first-child::before {\n\t\t\t\t\tbackground-color: ").concat(this.$store.getters["widget/headerBgColor"]," !important;\n\t\t\t\t}\n\t\t\t\t.tawk-form-wrapper .tawk-input:-ms-input-placeholder,\n\t\t\t\t.tawk-form-wrapper .tawk-textarea:-ms-input-placeholder {\n\t\t\t\t\topacity: 1 !important;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content {\n\t\t\t\t\t-ms-flex-grow:1;\n\t\t\t\t\t-ms-flex: 1;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-left {\n\t\t\t\t\tflex: 0 0 50%;\n\t\t\t\t\tmax-width: 50%;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-right {\n\t\t\t\t\tflex: 0 0 40%;\n\t\t\t\t\tmax-width: 40%;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-right .tawk-timeago {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tword-wrap: break-word;\n\t\t\t\t\tword-break: all;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}")),this.$store.getters["browserData/isIE"]&&this.$store.getters["browserData/version"]<=10&&(k+="\n\t\t\t\t\t.tawk-custom-flex-1 {\n\t\t\t\t\t\tflex: 0 0 auto !important;\n\t\t\t\t\t}\n\t\t\t\t\t.tawk-input, .tawk-select, .tawk-textarea, .tawk-chatinput-editor, .tawk-form-label {\n\t\t\t\t\t\tfont-size: .812rem !important;\n\t\t\t\t\t\tfont-family: 'Lato', sans-serif !important;\n\t\t\t\t\t}\n\t\t\t\t"),b.appendChild(document.createTextNode(k)),t.Tawk_Window.jsApi.local_API.disableWidgetFont||a.appendChild(l),a.appendChild(s),s.onload=function(){c.$mount(i)},a.appendChild(b),this.iApp=c}}})}).call(this,n("c8ba"))}}]);