!function(e){var t={};function o(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/srv/dist/repositories/webpack-bootstrap-ui-kit-quick-start/dist",o(o.s="./src/js/types/SilverShop.Page.CheckoutPageController.js")}({"./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_components/_ui.map.api.js":function(e,t,o){"use strict";var s=o("jquery"),i=o.n(s),a=o("./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_events.js"),n=o.n(a),r=(o("./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/scss/_components/_ui.map.scss"),{ENVS:["xs","sm","md","lg","xl","xxl","xxxl"],MAP_DRIVER:o("./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_components/drivers/_map.google.js").a});(e=>{const t="jsMapAPI",o=t,s=e("body"),i=r.MAP_DRIVER,a=window;class l{constructor(a){const r=new i;this.$el=e(a);const l=this.$el,p=l.data();p.center=[p.lng?p.lng:s.data("default-lng"),p.lat?p.lat:s.data("default-lat")],p["font-family"]=s.css("font-family"),console.log(`${t}: initializing ${r.getName()}...`),this.map=r.init(l,p),l.on(n.a.MAPLOADED,e=>{r.addGeoJson(p),console.log(`${t}: Map is loaded`)}),l.data(o,this),l.addClass(`${t}-active`)}getMap(){return ui.map}dispose(){this.$el=null,e.removeData(this.$el[0],o),this.$el.removeClass(`${t}-active`)}static _jQueryInterface(){if(void 0!==a.localStorage)return this.each((function(){const t=e(this);let s=t.data(o);s||(s=new l(this),t.data(o,s))}))}}e.fn[t]=l._jQueryInterface,e.fn[t].Constructor=l,e.fn[t].noConflict=function(){return e.fn[t]=JQUERY_NO_CONFLICT,l._jQueryInterface},e(a).on(`${n.a.AJAX} ${n.a.LOADED}`,()=>{e(".mapAPI-map-container").jsMapAPI()})})(i.a)},"./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_components/drivers/_map.google.js":function(e,t,o){"use strict";var s=o("jquery"),i=o.n(s),a=o("./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_events.js"),n=o.n(a);var r={init:()=>{class e extends google.maps.OverlayView{constructor(e){super();const t=this;t.setMap(e.map),t.position=e.position,t.html=e.html?e.html:'<div class="mapboxgl-marker"><i class="marker-icon fas fa-map-marker-alt"></i></div>',t.divClass=e.divClass,t.align=e.align,t.isDebugMode=e.debug,t.onClick=e.onClick,t.onMouseOver=e.onMouseOver,t.isBoolean=e=>"boolean"==typeof e,t.isNotUndefined=e=>void 0!==e,t.hasContent=e=>e.length>0,t.isString=e=>"string"==typeof e,t.isFunction=e=>"function"==typeof e}onAdd(){const e=this;e.div=document.createElement("div"),e.div.style.position="absolute",e.isNotUndefined(e.divClass)&&e.hasContent(e.divClass)&&(e.div.className=e.divClass),e.isNotUndefined(e.html)&&e.hasContent(e.html)&&e.isString(e.html)&&(e.div.innerHTML=e.html),e.isBoolean(e.isDebugMode)&&e.isDebugMode&&(e.div.className="debug-mode",e.div.innerHTML='<div style="height: 10px; width: 10px; background: red; border-radius: 100%;"></div><div style="position: absolute; top: 5px; padding: 5px; width: 130px; text-align: center; font-size: 18px; text-transform: uppercase; font-weight: bolder; background: red; color: white; font-family: Arial;">Debug mode</div>',e.div.setAttribute("style","position: absolute;border: 5px dashed red;height: 150px;width: 150px;display: flex;justify-content: center;align-items: center;")),e.getPanes().overlayMouseTarget.appendChild(e.div),google.maps.event.addDomListener(e.div,"click",t=>{google.maps.event.trigger(e,"click"),e.isFunction(e.onClick)&&e.onClick(),t.stopPropagation()}),google.maps.event.addDomListener(e.div,"mouseover",t=>{google.maps.event.trigger(e,"mouseover"),e.isFunction(e.onMouseOver)&&e.onMouseOver(),t.stopPropagation()})}draw(){const e=this;var t=e.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(e.position)),o={y:void 0,x:void 0};switch(Array.isArray(e.align)?e.align.join(" "):""){case"left top":o.y=e.div.offsetHeight,o.x=e.div.offsetWidth;break;case"left center":o.y=e.div.offsetHeight/2,o.x=e.div.offsetWidth;break;case"left bottom":o.y=0,o.x=e.div.offsetWidth;break;case"center top":o.y=e.div.offsetHeight,o.x=e.div.offsetWidth/2;break;case"center center":o.y=e.div.offsetHeight/2,o.x=e.div.offsetWidth/2;break;case"center bottom":o.y=0,o.x=e.div.offsetWidth/2;break;case"right top":o.y=e.div.offsetHeight,o.x=0;break;case"right center":o.y=e.div.offsetHeight/2,o.x=0;break;case"right bottom":o.y=0,o.x=0;break;default:o.y=e.div.offsetHeight/2,o.x=e.div.offsetWidth/2}e.div.style.top=`${t.y-o.y}px`,e.div.style.left=`${t.x-o.x}px`}getPosition(){return this.position}getDiv(){return this.div}setPosition(e,t){this.position=e,this.align=t,this.draw()}}return e}};const l=(p=i.a,class{getName(){return"GoogleMapsDriver"}init(e,t=[]){const o=this,s=window;o.$el=e,o.config=t,s[`init${o.getName()}`]=()=>{o.googleApiLoaded()},p("body").append(`<script async defer src="https://maps.googleapis.com/maps/api/js?key=${t.key}&callback=init${o.getName()}"><\/script>`)}googleApiLoaded(){const e=this,t=e.$el,o=e.config,s=t.find(".mapAPI-map"),i=o.mapZoom?o.mapZoom:10,a=o.center?{lat:o.center[1],lng:o.center[0]}:{lat:0,lng:0},l=o.style?o.style:null;console.log(`${e.getName()}: API is loaded`),e.MarkerUI=r.init(p),e.map=new google.maps.Map(s[0],{zoom:i,center:a,fullscreenControl:!0,styles:l}),e.default_zoom=i,s.addClass("mapboxgl-map"),e.popup=new e.MarkerUI({map:e.map,align:["center","top"],divClass:"mapboxgl-popup popup mapboxgl-popup-anchor-bottom d-none",html:'<div class="mapboxgl-popup-tip"></div><div class="mapboxgl-popup-content"><div class="mapboxgl-popup-close-button" type="button" aria-label="Close popup">×</div><div class="html"></div></div>'}),t.trigger(n.a.MAPLOADED)}addMarker(e,t){const o=this,s={lat:e[1],lng:e[0]};return new o.MarkerUI({position:s,map:o.map,html:`<div class="mapboxgl-marker"><div id="Marker${t.id}" data-id="${t.id}" class="marker">${t.icon}</div></div>`,onClick:()=>{const e=p(`#Marker${t.id}`);o.showPopup(s,t.content),e.trigger(n.a.MAPMARKERCLICK)}})}showPopup(e,t){const o=this,s=p(o.popup.getDiv());o.config.flyToMarker&&(o.map.setCenter(e),o.map.setZoom(18)),s.css({opacity:"0"}),s.removeClass("d-none"),o.popup.setPosition(e,["center","top"]),s.find(".mapboxgl-popup-content .html").html(t),s.find(".mapboxgl-popup-close-button").on("click",e=>{e.preventDefault(),o.hidePopup()}),s.css({"margin-left":"1rem",opacity:"1"})}hidePopup(){p(this.popup.getDiv()).addClass("d-none"),this.restoreBounds(),this.$el.trigger(n.a.MAPPOPUPCLOSE)}addGeoJson(e){const t=this,o=(e.geojson.features[0].geometry.coordinates,new google.maps.LatLngBounds);e.geojson.features.forEach(s=>{const i=s.id,a=s.geometry.coordinates,n=s.properties.content;t.addMarker(a,{id:i,content:n,icon:s.icon,flyToMarker:e.flyToMarker}),o.extend({lat:a[1],lng:a[0]})}),t.map.fitBounds(o,{padding:30}),t.default_bounds=o,t.default_zoom=t.map.getZoom()}getMap(){return this.map}getPopup(){return this.popup}restoreBounds(){this.map.fitBounds(this.default_bounds,{padding:30})}restoreZoom(){this.map.setZoom(this.default_zoom)}});var p;t.a=l},"./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_events.js":function(e,t){e.exports={AJAX:"ajax-load",LOADED:"load",MAPLOADED:"map-loaded",MAPMARKERCLICK:"map-marker-click",MAPPOPUPCLOSE:"map-popup-close",SET_TARGET_UPDATE:"set-target-update",RESTORE_FIELD:"restore-field",FORM_INIT_BASICS:"form-basics",FORM_INIT_STEPPED:"form-init-stepped",FORM_INIT_VALIDATE:"form-init-validate",FORM_INIT_VALIDATE_FIELD:"form-init-validate-field",FORM_INIT_STORAGE:"form-init-storage",FORM_VALIDATION_FAILED:"form-validation-failed",FORM_STEPPED_NEW_STEP:"form-new-step",FORM_STEPPED_FIRST_STEP:"form-first-step",FORM_STEPPED_LAST_STEP:"form-last-step",FORM_FIELDS:"input,textarea,select"}},"./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/scss/_components/_ui.map.scss":function(e,t){},"./src/js/types/SilverShop.Page.CheckoutPageController.js":function(e,t,o){"use strict";o.r(t);o("./node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_components/_ui.map.api.js")},jquery:function(e,t){e.exports=jQuery}});
//# sourceMappingURL=app_SilverShop.Page.CheckoutPageController.js.map