(this["webpackJsonpjs-react_helloworld"]=this["webpackJsonpjs-react_helloworld"]||[]).push([[0],{21:function(e,t,a){e.exports=a(51)},26:function(e,t,a){},28:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),i=a.n(r),s=(a(26),a(2)),c=a.n(s),l=a(13),u=a(14),m=a(15),d=a(20),v=a(19),h=(a(28),a(16)),g=a.n(h),p=a(18),f=a.n(p);var y=function(e){e.id;var t=e.title,a=e.year,n=e.summary,r=e.poster;return o.a.createElement("div",null,o.a.createElement("h1",null,t),o.a.createElement("h2",null,a),o.a.createElement("p",null,n),o.a.createElement("img",{src:r,alt:"poster"}))},w=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).getMovies=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,n.setState({movies:a}),n.setState({isLoading:!1}),console.log("Loading Successful");case 7:case"end":return e.stop()}}),e)}))),n.state={isLoading:!0,movies:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return o.a.createElement("div",null,t?o.a.createElement("div",{className:"loader"},o.a.createElement(g.a,{className:"loader",size:150,color:"#123abc",loading:this.state.isLoading})):a.map((function(e){return console.log(e),o.a.createElement(y,{key:e.id,poster:e.medium_cover_image,summary:e.summary,year:e.year,id:e.id,title:e.title})})))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.e18e98b0.chunk.js.map