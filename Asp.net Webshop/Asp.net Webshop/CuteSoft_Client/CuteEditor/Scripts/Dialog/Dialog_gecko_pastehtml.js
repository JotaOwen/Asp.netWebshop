var OxO8bf9=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x3C$1$3","\x26nbsp;","\x22","\x27","$1","\x26amp;","\x26lt;","\x26gt;","\x26#39;","\x26quot;"];var editor=Window_GetDialogArguments(window); function cancel(){ Window_CloseDialog(window) ;}  ; window[OxO8bf9[0x0]]=function (){var iframe=document.getElementById(OxO8bf9[0x2])[OxO8bf9[0x1]]; iframe[OxO8bf9[0x5]][OxO8bf9[0x4]][OxO8bf9[0x3]]=OxO8bf9[0x6] ; iframe[OxO8bf9[0x5]][OxO8bf9[0x7]]=OxO8bf9[0x8] ; iframe[OxO8bf9[0x5]][OxO8bf9[0x4]][OxO8bf9[0x9]]=true ; iframe[OxO8bf9[0x5]][OxO8bf9[0x4]][OxO8bf9[0xb]][OxO8bf9[0xa]]=OxO8bf9[0xc] ; iframe[OxO8bf9[0x5]][OxO8bf9[0x4]][OxO8bf9[0xb]][OxO8bf9[0xd]]=OxO8bf9[0xe] ; iframe[OxO8bf9[0x5]][OxO8bf9[0x4]][OxO8bf9[0xb]][OxO8bf9[0xf]]=OxO8bf9[0x10] ; iframe[OxO8bf9[0x5]][OxO8bf9[0x4]][OxO8bf9[0xb]][OxO8bf9[0x11]]=OxO8bf9[0x12] ; iframe.focus() ;}  ; function insertContent(){var iframe=document.getElementById(OxO8bf9[0x2])[OxO8bf9[0x1]];var Oxc7=iframe[OxO8bf9[0x5]][OxO8bf9[0x4]][OxO8bf9[0x3]];if(Oxc7&&Oxc7[OxO8bf9[0x13]]>0x0){ Oxc7=_CleanCode(Oxc7) ;if(Oxc7.match(/<*>/g)){ Oxc7=String_HtmlEncode(Oxc7) ;} ; editor.PasteHTML(Oxc7) ; Window_CloseDialog(window) ;} ;}  ; function _CleanCode(Ox2b){ Ox2b=Ox2b.replace(/<\\?\??xml[^>]>/gi,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<([\w]+) class=([^ |>]*)([^>]*)/gi,OxO8bf9[0x14]) ; Ox2b=Ox2b.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxO8bf9[0x14]) ; Ox2b=Ox2b.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<o:p>\s*<\/o:p>/g,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<o:p>.*?<\/o:p>/g,OxO8bf9[0x15]) ; Ox2b=Ox2b.replace(/<\/?\w+:[^>]*>/gi,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<\!--.*-->/g,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/[\\]/gi,OxO8bf9[0x16]) ; Ox2b=Ox2b.replace(/[\\]/gi,OxO8bf9[0x17]) ; Ox2b=Ox2b.replace(/<\\?\?xml[^>]*>/gi,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxO8bf9[0x15]) ; Ox2b=Ox2b.replace(/<span\s*[^>]*><\/span>/gi,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/\s*style="\s*"/gi,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g,OxO8bf9[0x6]) ;while(Ox2b.match(/<span\s*>(.*?)<\/span>/gi)){ Ox2b=Ox2b.replace(/<span\s*>(.*?)<\/span>/gi,OxO8bf9[0x18]) ;} ;while(Ox2b.match(/<font\s*>(.*?)<\/font>/gi)){ Ox2b=Ox2b.replace(/<font\s*>(.*?)<\/font>/gi,OxO8bf9[0x18]) ;} ; Ox2b=Ox2b.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO8bf9[0x18]) ; Ox2b=Ox2b.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO8bf9[0x18]) ; Ox2b=Ox2b.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxO8bf9[0x18]) ; Ox2b=Ox2b.replace(/<p([^>])*>(&nbsp;)*\s*<\/p>/gi,OxO8bf9[0x6]) ; Ox2b=Ox2b.replace(/<p([^>])*>(&nbsp;)<\/p>/gi,OxO8bf9[0x6]) ;return Ox2b;}  ; function String_HtmlEncode(Ox1ff){if(Ox1ff==null){return OxO8bf9[0x6];} ; Ox1ff=Ox1ff.replace(/&/g,OxO8bf9[0x19]) ; Ox1ff=Ox1ff.replace(/</g,OxO8bf9[0x1a]) ; Ox1ff=Ox1ff.replace(/>/g,OxO8bf9[0x1b]) ; Ox1ff=Ox1ff.replace(/'/g,OxO8bf9[0x1c]) ; Ox1ff=Ox1ff.replace(/\x22/g,OxO8bf9[0x1d]) ;return Ox1ff;}  ;