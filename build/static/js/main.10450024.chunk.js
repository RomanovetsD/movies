(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/img.aef89ac2.jpg"},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(29),a(8)),i=a(11),s=Object.freeze({HOME:"/",MOVIES:"/movie",MOVIE_DETAILS:"/movie/:movieId",MOVIE_CAST:"/credits",MOVIE_REVIEWS:"/reviews"}),u=function(){return r.a.createElement("ul",{className:"list"},r.a.createElement("li",{className:"navlist"},r.a.createElement(o.c,{exact:!0,to:s.HOME,className:"navlink",style:{color:"black"},activeStyle:{color:"red"}},"Home")),r.a.createElement("li",{className:"navlist"},r.a.createElement(o.c,{to:s.MOVIES,className:"navlink",style:{color:"black"},activeStyle:{color:"red"}},"Movies")))},m=a(3),h=a(4),f=a(6),p=a(5),E=a(7),v="5f7ac1b9f858cfa7079e5dbc9197589b",d="https://api.themoviedb.org/3",g={fetchMovieWithQuery:function(e){return fetch("".concat(d).concat("/search").concat(s.MOVIES,"?api_key=").concat(v,"&language=en-US").concat("&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){return e.results}))},fetchMovieDetails:function(e){return fetch("".concat(d).concat(s.MOVIES,"/").concat(e,"?api_key=").concat(v,"&language=en-US")).then((function(e){return e.json()}))},fetchCredits:function(e){return fetch("".concat(d).concat(s.MOVIES,"/").concat(e).concat(s.MOVIE_CAST,"?api_key=").concat(v)).then((function(e){return e.json()})).then((function(e){return e.cast}))},fetchReviews:function(e){return fetch("".concat(d).concat(s.MOVIES,"/").concat(e).concat(s.MOVIE_REVIEWS,"?api_key=").concat(v)).then((function(e){return e.json()})).then((function(e){return e.results}))},fetchTrending:function(){return fetch("".concat(d,"/").concat("trending/all/day","?api_key=").concat(v)).then((function(e){return e.json()}))}},b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.fetchTrending().then((function(t){e.setState({results:t.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.results;return r.a.createElement("div",null,r.a.createElement("hr",{className:"hrline"}),r.a.createElement("h1",null,"Trending today"),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:"".concat(s.MOVIES,"/").concat(e.id)},e.name,e.title))}))))}}]),t}(n.Component),y=a(22),O=a(23),j=a.n(O),S=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:j.a,className:"img",alt:"img_not_found"}))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){a.setState({value:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.value),a.setState({value:""})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",value:e,onChange:this.onChange,className:"input"}),r.a.createElement("button",{type:"submit"},"Search"))}}]),t}(n.Component);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},a.setSearchQuery=function(e){a.props.history.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.location,{search:"query=".concat(e)}))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location,a=new URLSearchParams(t.search).get("query");a&&g.fetchMovieWithQuery(a).then((function(t){e.setState({results:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props.location,n=new URLSearchParams(e.location.search).get("query"),r=new URLSearchParams(a.search).get("query");n!==r&&g.fetchMovieWithQuery(r).then((function(e){t.setState({results:e})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.results,t=this.props,a=t.match,n=t.location;return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie page"),r.a.createElement(w,{onSearch:this.setSearchQuery}),e.length<=0&&r.a.createElement(S,null),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:{state:{from:n},pathname:"".concat(a.url,"/").concat(e.id)}},e.name,e.title))}))))}}]),t}(n.Component),N=document.querySelector("#loader-root"),_=function(){return Object(c.createPortal)(r.a.createElement("div",{className:"loader"},"Waiting! Page is loading..."),N)},I=function(e){return r.a.createElement("div",null,"Error: ",e)},C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={cast:null,isLoading:!1,error:null},a.getCredits=function(e){a.setState({isLoading:!0}),g.fetchCredits(e).then((function(e){a.setState({cast:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;this.getCredits(e)}},{key:"render",value:function(){var e=this.state,t=e.cast,a=e.isLoading,n=e.error;return r.a.createElement("section",{className:"cast"},n&&r.a.createElement(I,{message:n.message}),a&&r.a.createElement(_,null),r.a.createElement("h2",null,"Cast"),t&&r.a.createElement("ul",{className:"castList"},t.map((function(e){return r.a.createElement("li",{key:e.cast_id,className:"castListItem"},r.a.createElement("object",{title:"This object has text",data:"".concat("https://image.tmdb.org/t/p/w500/").concat(e.profile_path),type:"image/png",width:"100"}),r.a.createElement("p",{className:"castListName"},e.name),r.a.createElement("p",null," Character:",e.character))}))))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[],isLoading:!1,error:null},a.getCredits=function(e){a.setState({isLoading:!0}),g.fetchReviews(e).then((function(e){a.setState({reviews:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;this.getCredits(e)}},{key:"render",value:function(){var e=this.state,t=e.reviews,a=e.isLoading,n=e.error;return r.a.createElement("section",{className:"reviews"},n&&r.a.createElement(I,{message:n.message}),a&&r.a.createElement(_,null),r.a.createElement("h2",null,"Reviews"),t&&r.a.createElement("ul",{className:"reviewsList"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h3",null,"Author: ",e.author),r.a.createElement("p",null,"`",e.content,"`"))}))),0===t.length&&r.a.createElement("p",null,"There are no reviews for this movie"))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={result:null,isLoading:!1,error:null},a.fetchDetails=function(){var e=a.props.match.params.movieId;a.setState({isLoading:!0}),g.fetchMovieDetails(e).then((function(e){a.setState({result:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a.moveToPreviousPage=function(){var e=a.props,t=e.location,n=e.history,r=t.state;if(!r)return n.push(s.HOME);n.push(r.from)},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this.state,t=e.result,a=e.isLoading,n=e.error,c=this.props.match;return r.a.createElement("section",null,n&&r.a.createElement(I,{message:n.message}),a&&r.a.createElement(_,null),r.a.createElement("hr",{className:"hrline"}),r.a.createElement("h2",{className:"film_title"},"Movie Details"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"back_button",onClick:this.moveToPreviousPage,type:"button"},"\u2190 GO BACK"),r.a.createElement("div",{className:"film_description"},r.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w300/").concat(t.poster_path),alt:t.title,className:"movie_img"}),r.a.createElement("div",{className:"film_details"},r.a.createElement("h1",null,t.original_title),r.a.createElement("p",null,r.a.createElement("b",null,"Overview"),r.a.createElement("br",null)," ",t.overview),r.a.createElement("p",null,r.a.createElement("b",null,"Vote average:")," ",10*t.vote_average," %"),r.a.createElement("p",null,r.a.createElement("b",null,"Genres:")," ",r.a.createElement("br",null),t.genres?t.genres.map((function(e){return e.name})).join(", "):"No information about film"))),r.a.createElement("hr",{className:"hrline"}),r.a.createElement("div",{className:"details_additional"},r.a.createElement("h2",null,"Additional information"),r.a.createElement("ul",{className:"details_list"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(c.url,"/cast")}," Cast ")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(c.url,"/reviews")}," Reviews "))),r.a.createElement("hr",{className:"hrline"}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"".concat(c.path,"/cast"),component:C}),r.a.createElement(i.b,{path:"".concat(c.path,"/reviews"),component:L})))))}}]),t}(n.Component),P=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:s.HOME,component:b}),r.a.createElement(i.b,{path:s.MOVIE_DETAILS,component:D}),r.a.createElement(i.b,{path:s.MOVIES,component:k}),r.a.createElement(i.a,{to:"/"}))))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.10450024.chunk.js.map