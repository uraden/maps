(this.webpackJsonpmaps=this.webpackJsonpmaps||[]).push([[0],{172:function(t,e,a){},377:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(60),r=a.n(s),i=(a(172),a(147)),l=a(148),c=a(149),g=a(164),d=a(163),m=a(25),p=a(39),u=a.n(p),h=a(152),j=a.n(h),f=a(379),b=a(2);u.a.setApiKey("AIzaSyBPw4j4K0XHmpgaJDOqZutp2Umt3NffghQ"),u.a.enableDebug();var y=function(t){Object(g.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={address:"",city:"",area:"",state:"",zoom:15,height:400,mapPosition:{lat:0,lng:0},markerPosition:{lat:0,lng:0}},t.getCity=function(t){for(var e=0;e<t.length;e++)if(t[e].types[0]&&"administrative_area_level_2"===t[e].types[0])return t[e].long_name},t.getArea=function(t){for(var e=0;e<t.length;e++)if(t[e].types[0])for(var a=0;a<t[e].types.length;a++)if("sublocality_level_1"===t[e].types[a]||"locality"===t[e].types[a])return t[e].long_name},t.getState=function(t){for(var e=0;e<t.length;e++)for(var a=0;a<t.length;a++)if(t[a].types[0]&&"administrative_area_level_1"===t[a].types[0])return t[a].long_name},t.onChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.onInfoWindowClose=function(t){},t.onMarkerDragEnd=function(e){var a=e.latLng.lat(),n=e.latLng.lng();u.a.fromLatLng(a,n).then((function(e){var o=e.results[0].formatted_address,s=e.results[0].address_components,r=t.getCity(s),i=t.getArea(s),l=t.getState(s);t.setState({address:o||"",area:i||"",city:r||"",state:l||"",markerPosition:{lat:a,lng:n},mapPosition:{lat:a,lng:n}})}),(function(t){console.error(t)}))},t.onPlaceSelected=function(e){console.log("plc",e);var a=e.formatted_address,n=e.address_components,o=t.getCity(n),s=t.getArea(n),r=t.getState(n),i=e.geometry.location.lat(),l=e.geometry.location.lng();console.log("latvalue",i),console.log("lngValue",l),t.setState({address:a||"",area:s||"",city:o||"",state:r||"",markerPosition:{lat:i,lng:l},mapPosition:{lat:i,lng:l}})},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){t.setState({mapPosition:{lat:e.coords.latitude,lng:e.coords.longitude},markerPosition:{lat:e.coords.latitude,lng:e.coords.longitude}},(function(){u.a.fromLatLng(e.coords.latitude,e.coords.longitude).then((function(e){console.log(e);var a=e.results[0].formatted_address,n=e.results[0].address_components,o=t.getCity(n),s=t.getArea(n),r=t.getState(n);console.log("city",o,s,r),t.setState({address:a||"",area:s||"",city:o||"",state:r||""})}),(function(t){console.error(t)}))}))})):console.error("Geolocation is not supported by this browser!")}},{key:"render",value:function(){var t=this,e=Object(m.withScriptjs)(Object(m.withGoogleMap)((function(e){return Object(b.jsxs)(m.GoogleMap,{defaultZoom:t.state.zoom,defaultCenter:{lat:t.state.mapPosition.lat,lng:t.state.mapPosition.lng},children:[Object(b.jsx)(m.Marker,{google:t.props.google,name:"Dolores park",draggable:!0,onDragEnd:t.onMarkerDragEnd,position:{lat:t.state.markerPosition.lat,lng:t.state.markerPosition.lng}}),Object(b.jsx)(m.InfoWindow,{onClose:t.onInfoWindowClose,position:{lat:t.state.markerPosition.lat+.0018,lng:t.state.markerPosition.lng},children:Object(b.jsx)("div",{children:Object(b.jsx)("span",{style:{padding:0,margin:0},children:t.state.address})})}),Object(b.jsx)(m.Marker,{}),Object(b.jsx)(j.a,{style:{width:"100%",height:"40px",paddingLeft:"16px",marginTop:"2px",marginBottom:"2rem"},onPlaceSelected:t.onPlaceSelected,types:["(regions)"]})]})})));return Object(b.jsxs)("div",{style:{padding:"1rem",margin:"0 auto",maxWidth:1e3},children:[Object(b.jsx)("h1",{children:"Google Map Basic"}),Object(b.jsxs)(f.b,{bordered:!0,children:[Object(b.jsx)(f.b.Item,{label:"City",children:this.state.city}),Object(b.jsx)(f.b.Item,{label:"Area",children:this.state.area}),Object(b.jsx)(f.b.Item,{label:"State",children:this.state.state}),Object(b.jsx)(f.b.Item,{label:"Address",children:this.state.address})]}),Object(b.jsx)(e,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBPw4j4K0XHmpgaJDOqZutp2Umt3NffghQ&libraries=places",loadingElement:Object(b.jsx)("div",{style:{height:"100%"}}),containerElement:Object(b.jsx)("div",{style:{height:this.state.height}}),mapElement:Object(b.jsx)("div",{style:{height:"100%"}})})]})}}]),a}(o.a.Component),v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,380)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),o(t),s(t),r(t)}))};a(376);r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),v()}},[[377,1,2]]]);
//# sourceMappingURL=main.668c5b2d.chunk.js.map