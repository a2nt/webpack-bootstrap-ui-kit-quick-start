!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/mnt/data/srv/dist/repositories/webpack-bootstrap-ui-kit-quick-start/dist",o(o.s="./src/js/types/SilverShop.Page.CheckoutPageController.js")}({"./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_components/_ui.map.api.js":function(e,t,o){"use strict";var n=o("jquery"),a=o.n(n),r=o("./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_events.js"),i=o.n(r),s=(o("./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/scss/_components/_ui.map.scss"),{ENVS:["xs","sm","md","lg","xl","xxl","xxxl"],MAP_DRIVER:o("./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_components/drivers/_map.google.js").a});function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}!function(e){var t="jsMapAPI",o=e("body"),n=s.MAP_DRIVER,a=window,r=function(){function r(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var s=this,l=new n;s.$el=e(a);var c=s.$el,p=c.data();p.center=[p.lng?p.lng:o.data("default-lng"),p.lat?p.lat:o.data("default-lat")],p.style=p.style?jQuery.parseJSON(p.style):null,p["font-family"]=o.css("font-family"),console.log("".concat(t,": initializing ").concat(l.getName(),"...")),l.init(c,p),s.drv=l,c.on(i.a.MAPAPILOADED,(function(e){s.map=l.getMap(),p.geojson?(console.log("".concat(t,": setting up geocode data")),l.addGeoJson(p)):p.address?(console.log(p.address),console.log("".concat(t,": setting up address marker")),l.geocode(p.address,(function(e){console.log(e)}))):p.lat&&p.lng&&(console.log("".concat(t,": setting up single lat/lng marker")),p.icon||(p.icon='<i class="fas fa-map-marker-alt"></i>'),l.addMarker([p.lng,p.lat],p)),c.data("jsMapAPI",s),c.addClass("".concat(t,"-active")),c.trigger(i.a.MAPLOADED),console.log("".concat(t,": Map is loaded"))}))}var s,c,p;return s=r,p=[{key:"_jQueryInterface",value:function(){if("undefined"!==typeof a.localStorage)return this.each((function(){var t=e(this),o=t.data("jsMapAPI");o||(o=new r(this),t.data("jsMapAPI",o))}))}}],(c=[{key:"getMap",value:function(){return ui.map}},{key:"dispose",value:function(){this.$el=null,e.removeData(this.$el[0],"jsMapAPI"),this.$el.removeClass("".concat(t,"-active"))}}])&&l(s.prototype,c),p&&l(s,p),r}();e.fn[t]=r._jQueryInterface,e.fn[t].Constructor=r,e.fn[t].noConflict=function(){return e.fn[t]=JQUERY_NO_CONFLICT,r._jQueryInterface},e(a).on("".concat(i.a.AJAX," ").concat(i.a.LOADED),(function(){e(".mapAPI-map-container").jsMapAPI()}))}(a.a)},"./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_components/drivers/_map.google.js":function(e,t,o){"use strict";var n=o("jquery"),a=o.n(n),r=o("./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_events.js"),i=o.n(r);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=f(e);if(t){var a=f(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return u(this,o)}}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m={init:function(){return function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(r,google.maps.OverlayView);var t,o,n,a=p(r);function r(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var o=d(t=a.call(this));return o.setMap(e.map),o.position=e.position,o.html=e.html?e.html:'<div class="mapboxgl-marker"><i class="marker-icon fas fa-map-marker-alt"></i></div>',o.divClass=e.divClass,o.align=e.align,o.isDebugMode=e.debug,o.onClick=e.onClick,o.onMouseOver=e.onMouseOver,o.isBoolean=function(e){return"boolean"===typeof e},o.isNotUndefined=function(e){return"undefined"!==typeof e},o.hasContent=function(e){return e.length>0},o.isString=function(e){return"string"===typeof e},o.isFunction=function(e){return"function"===typeof e},t}return t=r,(o=[{key:"onAdd",value:function(){var e=this;e.div=document.createElement("div"),e.div.style.position="absolute",e.isNotUndefined(e.divClass)&&e.hasContent(e.divClass)&&(e.div.className=e.divClass),e.isNotUndefined(e.html)&&e.hasContent(e.html)&&e.isString(e.html)&&(e.div.innerHTML=e.html),e.isBoolean(e.isDebugMode)&&e.isDebugMode&&(e.div.className="debug-mode",e.div.innerHTML='<div style="height: 10px; width: 10px; background: red; border-radius: 100%;"></div><div style="position: absolute; top: 5px; padding: 5px; width: 130px; text-align: center; font-size: 18px; text-transform: uppercase; font-weight: bolder; background: red; color: white; font-family: Arial;">Debug mode</div>',e.div.setAttribute("style","position: absolute;border: 5px dashed red;height: 150px;width: 150px;display: flex;justify-content: center;align-items: center;")),e.getPanes().overlayMouseTarget.appendChild(e.div),google.maps.event.addDomListener(e.div,"click",(function(t){google.maps.event.trigger(e,"click"),e.isFunction(e.onClick)&&e.onClick(),t.stopPropagation()})),google.maps.event.addDomListener(e.div,"mouseover",(function(t){google.maps.event.trigger(e,"mouseover"),e.isFunction(e.onMouseOver)&&e.onMouseOver(),t.stopPropagation()}))}},{key:"draw",value:function(){var e=this,t=$(e.div).find(".mapboxgl-marker,.marker-pin,.mapboxgl-popup,.popup");t.length||(t=$(e.div));var o=e.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(e.position)),n={y:void 0,x:void 0},a=t.outerWidth(),r=t.outerHeight();switch(Array.isArray(e.align)?e.align.join(" "):""){case"left top":n.y=r,n.x=a;break;case"left center":n.y=r/2,n.x=a;break;case"left bottom":n.y=0,n.x=a;break;case"center top":n.y=r,n.x=a/2;break;case"center center":n.y=r/2,n.x=a/2;break;case"center bottom":n.y=0,n.x=a/2;break;case"right top":n.y=r,n.x=0;break;case"right center":n.y=r/2,n.x=0;break;case"right bottom":n.y=0,n.x=0;break;default:n.y=r/2,n.x=a/2}e.div.style.top="".concat(o.y-n.y,"px"),e.div.style.left="".concat(o.x-n.x,"px")}},{key:"getPosition",value:function(){return this.position}},{key:"getDiv",value:function(){return this.div}},{key:"setPosition",value:function(e,t){this.position=e,this.align=t,this.draw()}}])&&l(t.prototype,o),n&&l(t,n),r}()}};function g(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var b=function(e){return function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var o,n,a;return o=t,(n=[{key:"getName",value:function(){return"GoogleMapsDriver"}},{key:"init",value:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this,a=window;n.$el=t,n.config=o,n.markers=[],a["init".concat(n.getName())]=function(){n.googleApiLoaded()},e("body").append('<script async defer src="https://maps.googleapis.com/maps/api/js?key='.concat(o.key,"&callback=init").concat(n.getName(),'"><\/script>'))}},{key:"googleApiLoaded",value:function(){var t=this,o=t.$el,n=t.config,a=o.find(".mapAPI-map"),r=n.mapZoom?n.mapZoom:10,s=n.center?{lat:n.center[1],lng:n.center[0]}:{lat:0,lng:0},l=n.style?n.style:null;console.log("".concat(t.getName(),": API is loaded")),t.MarkerUI=m.init(e),t.map=new google.maps.Map(a[0],{zoom:r,center:s,fullscreenControl:!0,styles:l}),t.default_zoom=r,a.addClass("mapboxgl-map"),t.popup=new t.MarkerUI({map:t.map,align:["center","top"],divClass:"mapboxgl-popup popup mapboxgl-popup-anchor-bottom d-none",html:'<div class="mapboxgl-popup-tip"></div><div class="mapboxgl-popup-content"><div class="mapboxgl-popup-close-button" type="button" aria-label="Close popup">\xd7</div><div class="html"></div></div>'}),t.geocoder=new google.maps.Geocoder,o.trigger(i.a.MAPAPILOADED)}},{key:"addMarker",value:function(t,o){var n=this,a={lat:t[1],lng:t[0]},r=new n.MarkerUI({position:a,map:n.map,align:["center","top"],html:'<div class="mapboxgl-marker"><div id="Marker'.concat(o.id,'" data-id="').concat(o.id,'" class="marker">').concat(o.icon,"</div></div>"),onClick:function(){var t=e("#Marker".concat(o.id));n.showPopup(a,o.content),t.trigger(i.a.MAPMARKERCLICK)}});return n.markers.push(r),r}},{key:"showPopup",value:function(t,o){var n=this,a=e(n.popup.getDiv());n.config.flyToMarker&&(n.map.setCenter(t),n.config.noZoom||n.map.setZoom(18)),a.css({opacity:"0"}),a.removeClass("d-none"),a.find(".mapboxgl-popup-content .html").html(o),a.find(".mapboxgl-popup-close-button").on("click",(function(e){e.preventDefault(),n.hidePopup()})),n.popup.setPosition(t,["center","top"]),a.css({"margin-top":"-1rem",opacity:"1"})}},{key:"hidePopup",value:function(){var t=this;e(t.popup.getDiv()).addClass("d-none"),t.config.noRestoreBounds&&!t.config.flyToBounds||t.restoreBounds(),t.$el.trigger(i.a.MAPPOPUPCLOSE)}},{key:"geocode",value:function(e,t){var o=this;o.geocoder.geocode({address:e},(function(e,n){if("OK"===n)return"function"===typeof t&&t(e),e;console.error("".concat(o.getName(),": Geocode was not successful for the following reason: ").concat(n))}))}},{key:"reverseGeocode",value:function(e,t){var o=this;o.geocoder.geocode({location:latlng},(function(e,n){if("OK"===n)return"function"===typeof t&&t(e),e;console.error("".concat(o.getName(),": Reverse Geocoding was not successful for the following reason: ").concat(n))}))}},{key:"addGeoJson",value:function(e){var t=this,o=(e.geojson.features[0].geometry.coordinates,new google.maps.LatLngBounds);e.geojson.features.forEach((function(n){var a=n.id,r=n.geometry.coordinates,i=n.properties.content;t.addMarker(r,{id:a,content:i,icon:n.icon,flyToMarker:e.flyToMarker}),o.extend({lat:r[1],lng:r[0]})})),t.markers.length>1?t.map.fitBounds(o,{padding:30}):t.markers[0]&&t.map.setCenter(t.markers[0].getPosition()),t.default_bounds=o,t.default_zoom=t.map.getZoom()}},{key:"getMap",value:function(){return this.map}},{key:"getPopup",value:function(){return this.popup}},{key:"restoreBounds",value:function(){var e=this;e.default_bounds&&e.markers.length>1?e.map.fitBounds(e.default_bounds,{padding:30}):(e.markers[0]&&e.map.setCenter(e.markers[0].getPosition()),e.restoreZoom())}},{key:"restoreZoom",value:function(){this.map.setZoom(this.default_zoom)}}])&&g(o.prototype,n),a&&g(o,a),t}()}(a.a);t.a=b},"./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_events.js":function(e,t){e.exports={AJAX:"ajax-load",TABHIDDEN:"tab-hidden",TABFOCUSED:"tab-focused",OFFLINE:"offline",ONLINE:"online",LOADED:"load",SWIPELEFT:"swipeleft panleft",SWIPERIGHT:"swiperight panright",ALLERTAPPEARED:"alert-appeared",ALERTREMOVED:"alert-removed",LODEDANDREADY:"load-ready",LAZYIMAGEREADY:"image-lazy-bg-loaded",LAZYIMAGESREADY:"images-lazy-loaded",MAPLOADED:"map-loaded",MAPAPILOADED:"map-api-loaded",MAPMARKERCLICK:"map-marker-click",MAPPOPUPCLOSE:"map-popup-close",SCROLL:"scroll",RESIZE:"resize",CAROUSEL_READY:"bs.carousel.ready",SET_TARGET_UPDATE:"set-target-update",RESTORE_FIELD:"restore-field",FORM_INIT_BASICS:"form-basics",FORM_INIT_STEPPED:"form-init-stepped",FORM_INIT_VALIDATE:"form-init-validate",FORM_INIT_VALIDATE_FIELD:"form-init-validate-field",FORM_INIT_STORAGE:"form-init-storage",FORM_VALIDATION_FAILED:"form-validation-failed",FORM_STEPPED_NEW_STEP:"form-new-step",FORM_STEPPED_FIRST_STEP:"form-first-step",FORM_STEPPED_LAST_STEP:"form-last-step",FORM_FIELDS:"input,textarea,select"}},"./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/scss/_components/_ui.map.scss":function(e,t,o){},"./src/js/types/SilverShop.Page.CheckoutPageController.js":function(e,t,o){"use strict";o.r(t);o("./node_modules/.pnpm/npm.pkg.github.com/@a2nt/ss-bootstrap-ui-webpack-boilerplate/2.0.8/node_modules/@a2nt/ss-bootstrap-ui-webpack-boilerplate/src/js/_components/_ui.map.api.js")},jquery:function(e,t){e.exports=jQuery}});
//# sourceMappingURL=app_SilverShop.Page.CheckoutPageController.js.map