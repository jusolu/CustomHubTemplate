function setNewFrame(title,description,urls,breadcrumbPath) {
    try {
        event.stopPropagation();
    }
    catch(err) {
        // console.log(err);
    }

    var firstFrame = '<iframe id="iframe" src='+urls[0]+' style="overflow: hidden; display: block; height: 950px; width: 100%; border: medium none;" width="100%"></iframe>';

    if(urls.length>=2){

        var extraFramesHTML = '';
        for (var i = 1; i < urls.length; i++) {
            extraFramesHTML += '<iframe id="iframe'+(i+1)+'" src='+urls[i]+' style="overflow: hidden; display: block; height: 950px; width: 100%; border: medium none;" width="100%"></iframe>'
        }

        document.getElementById('content_wrapper').innerHTML = '<section class="content">' + firstFrame + extraFramesHTML+'</section>';
    }
    else{
        document.getElementById('content_wrapper').innerHTML = firstFrame;
    }

    document.getElementById('pageHeader').innerHTML = title + '<small>' + description + '</small>';

    var breadcrumbs = breadcrumbPath.split(",");
    var breadcrumbsHTML = '';
    for (var i = 0; i < breadcrumbs.length; i++) {
        breadcrumbsHTML += '<li>'+breadcrumbs[i]+'</li>'
    }
    document.getElementById('pageBreadcrumbs').innerHTML = breadcrumbsHTML;
};