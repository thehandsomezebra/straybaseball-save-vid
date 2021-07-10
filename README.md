# Stray Baseball - Save Video Bookmarklet
For my godfather, to save a video from mlb



WORKS IN CHROME.
WORKS FOR MLB VIDEO WEBSITES ONLY


# Install

1.  Click the little clipboard icon to the far right of the code box.  ((If that icon is not available, highlight the code and CTRL + C [copy]))

```
javascript: (() => { url = window.location.href; urlParts = url.split('?'); parts = urlParts[0].split("/"); if (parts[parts.length-1].length == 0) { lastBit = parts[parts.length-2]; } else { lastBit = parts[parts.length-1]; } dataservice="https://www.mlb.com/data-service/en/videos/" + lastBit; function getJSON(url) { var resp ; var xmlHttp ; resp  = '' ; xmlHttp = new XMLHttpRequest(); if(xmlHttp != null) { xmlHttp.open( "GET", url, false ); xmlHttp.send( null ); resp = xmlHttp.responseText; } return resp ; } var gjson ; gjson = getJSON(dataservice) ; blurb=JSON.parse(gjson).blurb; fileurl=JSON.parse(gjson).feeds[0].playbacks[0].url; win = window.open("", "Right click and Save As", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=400,height=200,top="+(screen.height-0)+",left="+(screen.width-0)); win.document.body.innerHTML = "Right click this and choose Save As.<br/><a href=" + fileurl + "> " + blurb + "</a><br/><br/> Close this window when you are done.<br/> <input type='button' value='Close this window' onclick='self.close()'>"; })();
```

2. While still in your chrome browser, hit CTRL + D [save bookmark]
3. Click More
4. In "Name", type whatever you want to name this bookmarklet.  
5. In "URL", CTRL + V [paste] all that code we copied in step 1.
6. Click Save.
7. Done!


# How To Use
1. Navigate to any video on https://www.mlb.com/video
2. When you find a video you want to save, just click the button in your bookmark bar. 
3. A new little window will pop up. 
4. Right click the blue link and hit Save Link As.
5. Close out the little window.
6. Done!



# How To Update
1. Check the version. If it's newer than what you remember loading it up as, then you can just delete the original bookmark and follow the steps in Installation again.



# Version
Version 1. July 9, 2021
