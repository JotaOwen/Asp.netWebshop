var OxOdf95=["onload","contentWindow","idSource","innerHTML","body","document","","designMode","on","contentEditable","fontFamily","style","Tahoma","fontSize","11px","color","black","background","white","length","\x22","\x3C$1$3"," ","\x26nbsp;","$1","\x3Ch$1\x3E","\x3C$1\x3E$2\x3C/$1\x3E","\x27"];var editor=Window_GetDialogArguments(window); function cancel(){ Window_CloseDialog(window) ;}  ; window[OxOdf95[0x0]]=function (){var iframe=document.getElementById(OxOdf95[0x2])[OxOdf95[0x1]]; iframe[OxOdf95[0x5]][OxOdf95[0x4]][OxOdf95[0x3]]=OxOdf95[0x6] ; iframe[OxOdf95[0x5]][OxOdf95[0x7]]=OxOdf95[0x8] ; iframe[OxOdf95[0x5]][OxOdf95[0x4]][OxOdf95[0x9]]=true ; iframe[OxOdf95[0x5]][OxOdf95[0x4]][OxOdf95[0xb]][OxOdf95[0xa]]=OxOdf95[0xc] ; iframe[OxOdf95[0x5]][OxOdf95[0x4]][OxOdf95[0xb]][OxOdf95[0xd]]=OxOdf95[0xe] ; iframe[OxOdf95[0x5]][OxOdf95[0x4]][OxOdf95[0xb]][OxOdf95[0xf]]=OxOdf95[0x10] ; iframe[OxOdf95[0x5]][OxOdf95[0x4]][OxOdf95[0xb]][OxOdf95[0x11]]=OxOdf95[0x12] ; iframe.focus() ;}  ; function insertContent(){var iframe=document.getElementById(OxOdf95[0x2])[OxOdf95[0x1]];var Oxc7=iframe[OxOdf95[0x5]][OxOdf95[0x4]][OxOdf95[0x3]];if(Oxc7&&Oxc7[OxOdf95[0x13]]>0x0){ editor.PasteHTML(_RemoveWord(Oxc7)) ; Window_CloseDialog(window) ;} ;}  ; function _RemoveWord(Ox2b){ Ox2b=Ox2b.replace(/<[\/]?(base|meta|link|style|font|st1|shape|path|lock|imagedata|stroke|formulas|xml|del|ins|[ovwxp]:\w+)[^>]*?>/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/\s*mso-[^:]+:[^;"]+;?/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/<!--[\s\S]*?-->/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/\s*MARGIN: 0cm 0cm 0pt\s*;/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/\s*MARGIN: 0cm 0cm 0pt\s*"/gi,OxOdf95[0x14]) ; Ox2b=Ox2b.replace(/\s*TEXT-INDENT: 0cm\s*;/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/\s*TEXT-INDENT: 0cm\s*"/gi,OxOdf95[0x14]) ; Ox2b=Ox2b.replace(/\s*TEXT-ALIGN: [^\s;]+;?"/gi,OxOdf95[0x14]) ; Ox2b=Ox2b.replace(/\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi,OxOdf95[0x14]) ; Ox2b=Ox2b.replace(/\s*FONT-VARIANT: [^\s;]+;?"/gi,OxOdf95[0x14]) ; Ox2b=Ox2b.replace(/\s*tab-stops:[^;"]*;?/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/\s*tab-stops:[^"]*/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi,OxOdf95[0x15]) ; Ox2b=Ox2b.replace(/\s*style="\s*"/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/<SPAN\s*[^>]*>\s* \s*<\/SPAN>/gi,OxOdf95[0x16]) ; Ox2b=Ox2b.replace(/<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none(.*?)<\/\1>/ig,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi,OxOdf95[0x17]) ; Ox2b=Ox2b.replace(/<SPAN\s*[^>]*><\/SPAN>/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,OxOdf95[0x15]) ; Ox2b=Ox2b.replace(/<SPAN\s*>(.*?)<\/SPAN>/gi,OxOdf95[0x18]) ; Ox2b=Ox2b.replace(/<\/?\w+:[^>]*>/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/<\!--.*?-->/g,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/<H\d>\s*<\/H\d>/gi,OxOdf95[0x6]) ; Ox2b=Ox2b.replace(/<(\w[^>]*) language=([^ |>]*)([^>]*)/gi,OxOdf95[0x15]) ; Ox2b=Ox2b.replace(/<(\w[^>]*) onmouseover="([^\"]*)"([^>]*)/gi,OxOdf95[0x15]) ; Ox2b=Ox2b.replace(/<(\w[^>]*) onmouseout="([^\"]*)"([^>]*)/gi,OxOdf95[0x15]) ; Ox2b=Ox2b.replace(/<H(\d)([^>]*)>/gi,OxOdf95[0x19]) ; Ox2b=Ox2b.replace(/<(H\d)><FONT[^>]*>(.*?)<\/FONT><\/\1>/gi,OxOdf95[0x1a]) ; Ox2b=Ox2b.replace(/<(H\d)><EM>(.*?)<\/EM><\/\1>/gi,OxOdf95[0x1a]) ; Ox2b=Ox2b.replace(/<a name="?OLE_LINK\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOdf95[0x18]) ; Ox2b=Ox2b.replace(/<a name="?_Hlt\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOdf95[0x18]) ; Ox2b=Ox2b.replace(/<a name="?_Toc\d+"?>((.|[\r\n])*?)<\/a>/gi,OxOdf95[0x18]) ; Ox2b=Ox2b.replace(/[\\]/gi,OxOdf95[0x14]) ; Ox2b=Ox2b.replace(/[\\]/gi,OxOdf95[0x1b]) ;return Ox2b;}  ;