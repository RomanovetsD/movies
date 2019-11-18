(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=(a(28),a(8)),o=a(11),s="/",u="/movie",m="/movie/:movieId",h=function(){return r.a.createElement("ul",{className:"list"},r.a.createElement("li",{className:"navlist"},r.a.createElement(i.c,{exact:!0,to:s,className:"navlink",style:{color:"black"},activeStyle:{color:"red"}},"Home")),r.a.createElement("li",{className:"navlist"},r.a.createElement(i.c,{to:u,className:"navlink",style:{color:"black"},activeStyle:{color:"red"}},"Movies")))},p=a(3),f=a(4),v=a(6),b=a(5),d=a(7),E=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/trending/all/day?api_key=5f7ac1b9f858cfa7079e5dbc9197589b").then((function(e){return e.json()})).then((function(t){e.setState({results:t.results})}))}},{key:"render",value:function(){var e=this.state.results;return r.a.createElement("div",null,r.a.createElement("hr",{className:"hrline"}),r.a.createElement("h1",null,"Trending today"),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(i.b,{to:"/movie/".concat(e.id)},e.name,e.title))}))))}}]),t}(n.Component),g=a(22),y={fetchMovieWithQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=5f7ac1b9f858cfa7079e5dbc9197589b&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){return e.results}))},fetchMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=5f7ac1b9f858cfa7079e5dbc9197589b&language=en-US")).then((function(e){return e.json()}))},fetchCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=5f7ac1b9f858cfa7079e5dbc9197589b")).then((function(e){return e.json()})).then((function(e){return e.cast}))},fetchReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=5f7ac1b9f858cfa7079e5dbc9197589b")).then((function(e){return e.json()})).then((function(e){return e.results}))}},j=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){a.setState({value:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.value),a.setState({value:""})},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",value:e,onChange:this.onChange,className:"input"}),r.a.createElement("button",{type:"submit"},"Search"))}}]),t}(n.Component);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var w=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={results:[]},a.setSearchQuery=function(e){a.props.history.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.location,{search:"query=".concat(e)}))},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location,a=new URLSearchParams(t.search).get("query");a&&y.fetchMovieWithQuery(a).then((function(t){e.setState({results:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props.location,n=new URLSearchParams(e.location.search).get("query"),r=new URLSearchParams(a.search).get("query");n!==r&&y.fetchMovieWithQuery(r).then((function(e){t.setState({results:e})}))}},{key:"render",value:function(){var e=this.state.results,t=this.props.match;return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie page"),r.a.createElement(j,{onSearch:this.setSearchQuery}),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(i.b,{to:"".concat(t.url,"/").concat(e.id)},e.name,e.title))}))))}}]),t}(n.Component),S=document.querySelector("#loader-root"),k=function(){return Object(c.createPortal)(r.a.createElement("div",{className:"loader"},"Waiting! Page is loading..."),S)},N=function(e){return r.a.createElement("div",null,"Error: ",e)},C=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={cast:null,isLoading:!1,error:null},a.getCredits=function(e){a.setState({isLoading:!0}),y.fetchCredits(e).then((function(e){a.setState({cast:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;this.getCredits(e)}},{key:"render",value:function(){var e=this.state,t=e.cast,a=e.isLoading,n=e.error;return r.a.createElement("section",{className:"cast"},n&&r.a.createElement(N,{message:n.message}),a&&r.a.createElement(k,null),r.a.createElement("h2",null,"Cast"),t&&r.a.createElement("ul",{className:"castList"},t.map((function(e){return r.a.createElement("li",{key:e.cast_id,className:"castListItem"},r.a.createElement("object",{title:"This object has text",data:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),type:"image/png",width:"100"}),r.a.createElement("p",{className:"castListName"},e.name),r.a.createElement("p",null," Character:",e.character))}))))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[],isLoading:!1,error:null},a.getCredits=function(e){a.setState({isLoading:!0}),y.fetchReviews(e).then((function(e){a.setState({reviews:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;this.getCredits(e)}},{key:"render",value:function(){var e=this.state,t=e.reviews,a=e.isLoading,n=e.error;return r.a.createElement("section",{className:"reviews"},n&&r.a.createElement(N,{message:n.message}),a&&r.a.createElement(k,null),r.a.createElement("h2",null,"Reviews"),t&&r.a.createElement("ul",{className:"reviewsList"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h3",null,"Author: ",e.author),r.a.createElement("p",null,"`",e.content,"`"))}))),0===t.length&&r.a.createElement("p",null,"There are no reviews for this movie"))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={result:null,isLoading:!1,error:null},a.fetchDetails=function(){var e=a.props.match.params.movieId;a.setState({isLoading:!0}),y.fetchMovieDetails(e).then((function(e){a.setState({result:e})})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a.moveToPreviousPage=function(){a.props.history.goBack()},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this.state,t=e.result,a=e.isLoading,n=e.error,c=this.props.match;return r.a.createElement("section",null,n&&r.a.createElement(N,{message:n.message}),a&&r.a.createElement(k,null),r.a.createElement("hr",{className:"hrline"}),r.a.createElement("h2",{className:"film_title"},"Movie Details"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"back_button",onClick:this.moveToPreviousPage,type:"button"},"\u2190 GO BACK"),r.a.createElement("div",{className:"film_description"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:t.title,className:"movie_img"}),r.a.createElement("div",{className:"film_details"},r.a.createElement("h1",null,t.original_title),r.a.createElement("p",null,r.a.createElement("b",null,"Overview"),r.a.createElement("br",null)," ",t.overview),r.a.createElement("p",null,r.a.createElement("b",null,"Vote average:")," ",10*t.vote_average," %"),r.a.createElement("p",null,r.a.createElement("b",null,"Genres:")," ",r.a.createElement("br",null),t.genres?t.genres.map((function(e){return e.name})).join(", "):"No information about film"))),r.a.createElement("hr",{className:"hrline"}),r.a.createElement("div",{className:"details_additional"},r.a.createElement("h2",null,"Additional information"),r.a.createElement("ul",{className:"details_list"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"".concat(c.url,"/cast")}," Cast ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"".concat(c.url,"/reviews")}," Reviews "))),r.a.createElement("hr",{className:"hrline"}),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"".concat(c.path,"/cast"),component:C}),r.a.createElement(o.b,{path:"".concat(c.path,"/reviews"),component:L})))))}}]),t}(n.Component),P=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:s,component:E}),r.a.createElement(o.b,{path:m,component:_}),r.a.createElement(o.b,{path:u,component:w}),r.a.createElement(o.a,{to:"/"}))))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9cd307a2.chunk.js.map