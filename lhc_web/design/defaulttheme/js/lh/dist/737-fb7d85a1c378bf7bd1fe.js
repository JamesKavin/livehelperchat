(self.webpackChunk=self.webpackChunk||[]).push([[737],{737:o=>{var a={cancelcolorbox:function(){$("#myModal").foundation("reveal","close")},initializeModal:function(o){var a=null!=o?o:"myModal";0==$("#"+a).length&&(0==$("#widget-layout").length?$("body"):$("#widget-layout")).prepend('<div id="'+a+'" class="modal bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"></div>')},hideCallback:!1,revealModal:function(o){$("body").hasClass("modal-open")?!1===a.hideCallback?$("#myModal").modal("dispose"):$("#myModal").modal("hide"):$("#myModal").modal("dispose"),void 0!==o.hidecallback?a.hideCallback=!0:a.hideCallback=!1,a.initializeModal("myModal");var e={show:!0,focus:!($("#admin-body").length>0),backdrop:!($("#admin-body").length>0)||void 0!==o.backdrop&&1==o.backdrop};if(void 0===o.iframe)void 0!==o.loadmethod&&"post"==o.loadmethod?jQuery.post(o.url,o.datapost,(function(l){void 0!==o.showcallback&&$("#myModal").on("shown.bs.modal",o.showcallback),void 0!==o.hidecallback&&$("#myModal").on("hide.bs.modal",o.hidecallback),""!=l?($("#myModal").html(l),new bootstrap.Modal("#myModal",e).show(),a.setCenteredDraggable()):void 0!==o.on_empty?o.on_empty():alert("Empty content was returned!")})):jQuery.get(o.url,(function(l){void 0!==o.showcallback&&$("#myModal").on("shown.bs.modal",o.showcallback),void 0!==o.hidecallback&&$("#myModal").on("hide.bs.modal",o.hidecallback),""!=l?($("#myModal").html(l),new bootstrap.Modal("#myModal",e).show(),a.setCenteredDraggable()):void 0!==o.on_mepty?o.on_mepty():alert("Empty content was returned!")}));else{var l="",d="";void 0===o.hideheader?l='<div class="modal-header"><h4 class="modal-title" id="myModalLabel"><span class="material-icons">info</span>'+(void 0===o.title?"":o.title)+'</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>':d=(void 0===o.title?"":"<b>"+o.title+"</b>")+'<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';var t=void 0===o.modalbodyclass?"":" "+o.modalbodyclass;void 0!==o.showcallback&&$("#myModal").on("shown.bs.modal",o.showcallback),void 0!==o.hidecallback&&$("#myModal").on("hide.bs.modal",o.hidecallback),$("#myModal").html('<div class="modal-dialog modal-dialog-scrollable modal-xl"><div class="modal-content">'+l+'<div class="modal-body'+t+'">'+d+'<iframe src="'+o.url+'" frameborder="0" style="width:100%" height="'+o.height+'" /></div></div></div>'),new bootstrap.Modal("#myModal",e).show(),a.setCenteredDraggable()}},setCenteredDraggable:function(){if($("#admin-body").length>0){var o=$("#myModal .modal-dialog"),e=a.rememberPositions(),l=a.getPositions();(null===e||parseInt(e[1])>l.width||parseInt(e[0])>l.height||parseInt(e[0])<0||o.width()+parseInt(e[1])<0)&&(e=[(l.height-o.height())/2,(l.width-o.width())/2]),o.draggabilly({handle:".modal-header",containment:"#admin-body"}).css({top:parseInt(e[0]),left:parseInt(e[1])}).on("dragEnd",(function(e,l){a.rememberPositions(o.position().top,o.position().left)}))}},rememberPositions:function(o,a){if(sessionStorage)if(o&&a)try{var e=sessionStorage.setItem("mpos",o+","+a)}catch(o){}else try{if(null!==(e=sessionStorage.getItem("mpos")))return e.split(",")}catch(o){}return null},getPositions:function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0}}};o.exports=a}}]);