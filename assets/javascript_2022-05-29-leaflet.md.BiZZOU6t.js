import{_ as e,c as t,o as a,a3 as l}from"./chunks/framework.DDglavJf.js";const d=JSON.parse('{"title":"leaflet使用记录","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-05-29-leaflet.md","filePath":"javascript/2022-05-29-leaflet.md"}'),r={name:"javascript/2022-05-29-leaflet.md"},i=l('<h1 id="leaflet使用记录" tabindex="-1">leaflet使用记录 <a class="header-anchor" href="#leaflet使用记录" aria-label="Permalink to &quot;leaflet使用记录&quot;">​</a></h1><h3 id="_1、安装" tabindex="-1">1、安装 <a class="header-anchor" href="#_1、安装" aria-label="Permalink to &quot;1、安装&quot;">​</a></h3><h3 id="地图底图的加载地址" tabindex="-1">地图底图的加载地址 <a class="header-anchor" href="#地图底图的加载地址" aria-label="Permalink to &quot;地图底图的加载地址&quot;">​</a></h3><ul><li><p><a href="http://www.thingjs.com/guide/cn/tutorial_city_builder/Data_description/Geographical_map.html" target="_blank" rel="noreferrer">http://www.thingjs.com/guide/cn/tutorial_city_builder/Data_description/Geographical_map.html</a></p></li><li><p><a href="https://blog.csdn.net/weixin_39887531/article/details/113566719" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_39887531/article/details/113566719</a></p></li><li><p><a href="https://lantian.pub/article/modify-website/leaflet-combine-google-cn-satellite-autonavi-map.lantian/" target="_blank" rel="noreferrer">https://lantian.pub/article/modify-website/leaflet-combine-google-cn-satellite-autonavi-map.lantian/</a></p></li><li><p><a href="https://www.mapbox.cn/tutorials/gljs/#%E5%9B%BE%E5%B1%82%EF%BC%88layers%EF%BC%89" target="_blank" rel="noreferrer">https://www.mapbox.cn/tutorials/gljs/#图层（layers）</a></p></li><li><p><a href="https://www.giserdqy.com/secdev/leaflet/26297/" target="_blank" rel="noreferrer">https://www.giserdqy.com/secdev/leaflet/26297/</a> 围栏算法</p></li><li><p><a href="https://www.jianshu.com/p/cf81e2a014bf" target="_blank" rel="noreferrer">https://www.jianshu.com/p/cf81e2a014bf</a></p></li><li><p><a href="http://0x0803.top/2018/05/27/gis-leaflet-tutorials-map-layer/" target="_blank" rel="noreferrer">http://0x0803.top/2018/05/27/gis-leaflet-tutorials-map-layer/</a></p></li><li><p><a href="https://github.com/8600/leaflet-map" target="_blank" rel="noreferrer">https://github.com/8600/leaflet-map</a></p></li><li><p>1、leaflet pm create和edit</p></li><li><p><a href="https://stackoverflow.com/questions/53133543/leaflet-pm-edit-mode-get-new-coordinates-within-shape" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/53133543/leaflet-pm-edit-mode-get-new-coordinates-within-shape</a></p></li><li><p><a href="https://vue2-leaflet.netlify.app/components/LWMSTileLayer.html#demo" target="_blank" rel="noreferrer">https://vue2-leaflet.netlify.app/components/LWMSTileLayer.html#demo</a></p></li><li><p><a href="https://leafletjs.com/reference-1.7.1.html#tilelayer-option" target="_blank" rel="noreferrer">https://leafletjs.com/reference-1.7.1.html#tilelayer-option</a></p></li><li><p>2、leaflet maxZoom设置</p><ul><li>如果设置了map的maxZoom为20，那么其他图层设置的再大，比如到了22也不会有效果</li><li>如果将map的maxZoom值设置未最大，那么其他图层到达某个值之后可能会展示空白</li><li>到达了村，如果这个村已经有了无人机的正射图像，以及有了村委的打点坐标，那么可以单独只显示一个村的地图边界，同样的镇也是可以处理的</li><li><a href="https://blog.csdn.net/QiZi_Zpl/article/details/109843528" target="_blank" rel="noreferrer">https://blog.csdn.net/QiZi_Zpl/article/details/109843528</a></li></ul></li><li><p>3、 中国各行政区域JSON围栏数据</p><ul><li><a href="https://github.com/Vonng/adcode" target="_blank" rel="noreferrer">https://github.com/Vonng/adcode</a></li><li>高德围栏 <a href="https://lbs.amap.com/api/webservice/guide/api/geofence_service/" target="_blank" rel="noreferrer">https://lbs.amap.com/api/webservice/guide/api/geofence_service/</a></li></ul></li></ul>',4),o=[i];function n(p,s,c,h,f,m){return a(),t("div",null,o)}const g=e(r,[["render",n]]);export{d as __pageData,g as default};