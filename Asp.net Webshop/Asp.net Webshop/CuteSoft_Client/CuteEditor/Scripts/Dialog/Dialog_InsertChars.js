var OxOb9b6=["Verdana","innerHTML","Unicode","innerText","\x3Cspan style=\x27font-family:","\x27\x3E","\x3C/span\x3E","selfont","length","checked","value","charstable1","charstable2","fontFamily","style","display","block","none"];var editor=Window_GetDialogArguments(window); function getchar(obj){var Ox2b;var Ox2c=getFontValue()||OxOb9b6[0x0];if(!obj[OxOb9b6[0x1]]){return ;} ; Ox2b=obj[OxOb9b6[0x1]] ;if(Ox2c==OxOb9b6[0x2]){ Ox2b=obj[OxOb9b6[0x3]] ;} else {if(Ox2c!=OxOb9b6[0x0]){ Ox2b=OxOb9b6[0x4]+Ox2c+OxOb9b6[0x5]+obj[OxOb9b6[0x1]]+OxOb9b6[0x6] ;} ;} ; editor.PasteHTML(Ox2b) ; Window_CloseDialog(window) ;}  ; function cancel(){ Window_CloseDialog(window) ;}  ; function getFontValue(){var Ox2f=document.getElementsByName(OxOb9b6[0x7]);for(var i=0x0;i<Ox2f[OxOb9b6[0x8]];i++){if(Ox2f.item(i)[OxOb9b6[0x9]]){return Ox2f.item(i)[OxOb9b6[0xa]];} ;} ;}  ; function sel_font_change(){var Ox31=getFontValue()||OxOb9b6[0x0];var Ox2fb=Window_GetElement(window,OxOb9b6[0xb],true);var Ox2fc=Window_GetElement(window,OxOb9b6[0xc],true); Ox2fb[OxOb9b6[0xe]][OxOb9b6[0xd]]=Ox31 ; Ox2fb[OxOb9b6[0xe]][OxOb9b6[0xf]]=(Ox31!=OxOb9b6[0x2]?OxOb9b6[0x10]:OxOb9b6[0x11]) ; Ox2fc[OxOb9b6[0xe]][OxOb9b6[0xf]]=(Ox31==OxOb9b6[0x2]?OxOb9b6[0x10]:OxOb9b6[0x11]) ;}  ;