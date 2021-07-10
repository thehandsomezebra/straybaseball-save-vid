var blurb = JSON.parse(window.__VIDEO_INIT_STATE__)[Object.keys(JSON.parse(window.__VIDEO_INIT_STATE__))[18]].blurb; 
var fileurl = JSON.parse(window.__VIDEO_INIT_STATE__)[Object.keys(JSON.parse(window.__VIDEO_INIT_STATE__))[18]].feeds[0].playbacks[0].url; 
var win = window.open("", "Right click and Save As", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=400,height=200,top="+(screen.height-0)+",left="+(screen.width-0)); 
win.document.body.innerHTML = "Right click this and choose Save As.<br/><a href=" + fileurl + "> " + blurb + "</a><br/><br/> Close this window when you are done.";
