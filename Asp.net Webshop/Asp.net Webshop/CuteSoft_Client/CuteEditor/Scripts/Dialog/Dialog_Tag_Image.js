var OxO1584=["inp_src","btnbrowse","AlternateText","inp_id","longDesc","Align","optNotSet","optLeft","optRight","optTexttop","optAbsMiddle","optBaseline","optAbsBottom","optBottom","optMiddle","optTop","Border","bordercolor","bordercolor_Preview","inp_width","imgLock","inp_height","constrain_prop","HSpace","VSpace","outer","img_demo","onclick","src","height","width","value","cssText","style","","src_cetemp","id","vspace","hspace","border","borderColor"," ","backgroundColor","align","alt","[[ValidNumber]]","[[ValidID]]","longdesc","checked","Load.ashx?type=image\x26file=locked.gif","Load.ashx?type=image\x26file=1x1.gif","length"];var inp_src=Window_GetElement(window,OxO1584[0x0],true);var btnbrowse=Window_GetElement(window,OxO1584[0x1],true);var AlternateText=Window_GetElement(window,OxO1584[0x2],true);var inp_id=Window_GetElement(window,OxO1584[0x3],true);var longDesc=Window_GetElement(window,OxO1584[0x4],true);var Align=Window_GetElement(window,OxO1584[0x5],true);var optNotSet=Window_GetElement(window,OxO1584[0x6],true);var optLeft=Window_GetElement(window,OxO1584[0x7],true);var optRight=Window_GetElement(window,OxO1584[0x8],true);var optTexttop=Window_GetElement(window,OxO1584[0x9],true);var optAbsMiddle=Window_GetElement(window,OxO1584[0xa],true);var optBaseline=Window_GetElement(window,OxO1584[0xb],true);var optAbsBottom=Window_GetElement(window,OxO1584[0xc],true);var optBottom=Window_GetElement(window,OxO1584[0xd],true);var optMiddle=Window_GetElement(window,OxO1584[0xe],true);var optTop=Window_GetElement(window,OxO1584[0xf],true);var Border=Window_GetElement(window,OxO1584[0x10],true);var bordercolor=Window_GetElement(window,OxO1584[0x11],true);var bordercolor_Preview=Window_GetElement(window,OxO1584[0x12],true);var inp_width=Window_GetElement(window,OxO1584[0x13],true);var imgLock=Window_GetElement(window,OxO1584[0x14],true);var inp_height=Window_GetElement(window,OxO1584[0x15],true);var constrain_prop=Window_GetElement(window,OxO1584[0x16],true);var HSpace=Window_GetElement(window,OxO1584[0x17],true);var VSpace=Window_GetElement(window,OxO1584[0x18],true);var outer=Window_GetElement(window,OxO1584[0x19],true);var img_demo=Window_GetElement(window,OxO1584[0x1a],true); btnbrowse[OxO1584[0x1b]]=function btnbrowse_onclick(){ function Ox2db(Ox137){if(Ox137){ function Actualsize(){var Ox76= new Image(); Ox76[OxO1584[0x1c]]=Ox137 ;if(Ox76[OxO1584[0x1e]]>0x0&&Ox76[OxO1584[0x1d]]>0x0){ inp_width[OxO1584[0x1f]]=Ox76[OxO1584[0x1e]] ; inp_height[OxO1584[0x1f]]=Ox76[OxO1584[0x1d]] ; FireUIChanged() ;} else { setTimeout(Actualsize,0x190) ;} ;}  ; inp_src[OxO1584[0x1f]]=Ox137 ; setTimeout(Actualsize,0x190) ;} ;}  ; editor.SetNextDialogWindow(window) ;if(Browser_IsSafari()){ editor.ShowSelectImageDialog(Ox2db,inp_src.value,inp_src) ;} else { editor.ShowSelectImageDialog(Ox2db,inp_src.value) ;} ;}  ; UpdateState=function UpdateState_Image(){ img_demo[OxO1584[0x21]][OxO1584[0x20]]=element[OxO1584[0x21]][OxO1584[0x20]] ;if(Browser_IsWinIE()){ img_demo.mergeAttributes(element) ;} ;if(element[OxO1584[0x1c]]){ img_demo[OxO1584[0x1c]]=element[OxO1584[0x1c]] ;} else { img_demo.removeAttribute(OxO1584[0x1c]) ;} ;}  ; SyncToView=function SyncToView_Image(){var src; src=element.getAttribute(OxO1584[0x1c])+OxO1584[0x22] ;if(element.getAttribute(OxO1584[0x23])){ src=element.getAttribute(OxO1584[0x23])+OxO1584[0x22] ;} ; inp_src[OxO1584[0x1f]]=src ; inp_width[OxO1584[0x1f]]=element[OxO1584[0x1e]] ; inp_height[OxO1584[0x1f]]=element[OxO1584[0x1d]] ; inp_id[OxO1584[0x1f]]=element[OxO1584[0x24]] ;if(element[OxO1584[0x25]]<=0x0){ VSpace[OxO1584[0x1f]]=OxO1584[0x22] ;} else { VSpace[OxO1584[0x1f]]=element[OxO1584[0x25]] ;} ;if(element[OxO1584[0x26]]<=0x0){ HSpace[OxO1584[0x1f]]=OxO1584[0x22] ;} else { HSpace[OxO1584[0x1f]]=element[OxO1584[0x26]] ;} ; Border[OxO1584[0x1f]]=element[OxO1584[0x27]] ;if(Browser_IsWinIE()){ bordercolor[OxO1584[0x1f]]=element[OxO1584[0x21]][OxO1584[0x28]] ;} else {var arr=revertColor(element[OxO1584[0x21]].borderColor).split(OxO1584[0x29]); bordercolor[OxO1584[0x1f]]=arr[0x0] ;} ; bordercolor[OxO1584[0x21]][OxO1584[0x2a]]=bordercolor[OxO1584[0x1f]]||OxO1584[0x22] ; bordercolor[OxO1584[0x21]][OxO1584[0x2a]]=bordercolor[OxO1584[0x1f]] ; bordercolor_Preview[OxO1584[0x21]][OxO1584[0x2a]]=bordercolor[OxO1584[0x1f]] ; Align[OxO1584[0x1f]]=element[OxO1584[0x2b]] ; AlternateText[OxO1584[0x1f]]=element[OxO1584[0x2c]] ; longDesc[OxO1584[0x1f]]=element[OxO1584[0x4]] ;}  ; SyncTo=function SyncTo_Image(element){ element[OxO1584[0x1c]]=inp_src[OxO1584[0x1f]] ; element.setAttribute(OxO1584[0x23],inp_src.value) ; element[OxO1584[0x27]]=Border[OxO1584[0x1f]] ; element[OxO1584[0x26]]=HSpace[OxO1584[0x1f]] ; element[OxO1584[0x25]]=VSpace[OxO1584[0x1f]] ;try{ element[OxO1584[0x1e]]=inp_width[OxO1584[0x1f]] ; element[OxO1584[0x1d]]=inp_height[OxO1584[0x1f]] ;} catch(er){ alert(OxO1584[0x2d]) ;return false;} ;if(element[OxO1584[0x21]][OxO1584[0x1e]]||element[OxO1584[0x21]][OxO1584[0x1d]]){try{ element[OxO1584[0x21]][OxO1584[0x1e]]=inp_width[OxO1584[0x1f]] ; element[OxO1584[0x21]][OxO1584[0x1d]]=inp_height[OxO1584[0x1f]] ;} catch(er){ alert(OxO1584[0x2d]) ;return false;} ;} ;var Ox2f4=/[^a-z\d]/i;if(Ox2f4.test(inp_id.value)){ alert(OxO1584[0x2e]) ;return ;} ; element[OxO1584[0x24]]=inp_id[OxO1584[0x1f]] ; element[OxO1584[0x2b]]=Align[OxO1584[0x1f]] ; element[OxO1584[0x2c]]=AlternateText[OxO1584[0x1f]] ; element[OxO1584[0x4]]=longDesc[OxO1584[0x1f]] ; element[OxO1584[0x21]][OxO1584[0x28]]=bordercolor[OxO1584[0x1f]] ;if(element[OxO1584[0x2f]]==OxO1584[0x22]||element[OxO1584[0x2f]]==null){ element.removeAttribute(OxO1584[0x2f]) ;} ;if(element[OxO1584[0x4]]==OxO1584[0x22]||element[OxO1584[0x4]]==null){ element.removeAttribute(OxO1584[0x4]) ;} ;if(element[OxO1584[0x1e]]==0x0){ element.removeAttribute(OxO1584[0x1e]) ;} ;if(element[OxO1584[0x1d]]==0x0){ element.removeAttribute(OxO1584[0x1d]) ;} ;if(element[OxO1584[0x26]]==OxO1584[0x22]){ element.removeAttribute(OxO1584[0x26]) ;} ;if(element[OxO1584[0x25]]==OxO1584[0x22]){ element.removeAttribute(OxO1584[0x25]) ;} ;if(element[OxO1584[0x24]]==OxO1584[0x22]){ element.removeAttribute(OxO1584[0x24]) ;} ;if(element[OxO1584[0x2b]]==OxO1584[0x22]){ element.removeAttribute(OxO1584[0x2b]) ;} ;if(element[OxO1584[0x27]]==OxO1584[0x22]){ element.removeAttribute(OxO1584[0x27]) ;} ;}  ; function toggleConstrains(){if(constrain_prop[OxO1584[0x30]]){ imgLock[OxO1584[0x1c]]=OxO1584[0x31] ; checkConstrains(OxO1584[0x1e]) ;} else { imgLock[OxO1584[0x1c]]=OxO1584[0x32] ;} ;}  ;var checkingConstrains=false; function checkConstrains(Ox73){if(checkingConstrains){return ;} ; checkingConstrains=true ;try{var Ox8,Ox2b;if(constrain_prop[OxO1584[0x30]]){var Ox76= new Image(); Ox76[OxO1584[0x1c]]=inp_src[OxO1584[0x1f]] ;var Ox3a0=Ox76[OxO1584[0x1e]];var Ox3a1=Ox76[OxO1584[0x1d]];if((Ox3a0>0x0)&&(Ox3a1>0x0)){var Ox6d=inp_width[OxO1584[0x1f]];var Ox6c=inp_height[OxO1584[0x1f]];if(Ox73==OxO1584[0x1e]){if(Ox6d[OxO1584[0x33]]==0x0||isNaN(Ox6d)){ inp_width[OxO1584[0x1f]]=OxO1584[0x22] ; inp_height[OxO1584[0x1f]]=OxO1584[0x22] ;} else { Ox6c=parseInt(Ox6d*Ox3a1/Ox3a0) ; inp_height[OxO1584[0x1f]]=Ox6c ;} ;} ;if(Ox73==OxO1584[0x1d]){if(Ox6c[OxO1584[0x33]]==0x0||isNaN(Ox6c)){ inp_width[OxO1584[0x1f]]=OxO1584[0x22] ; inp_height[OxO1584[0x1f]]=OxO1584[0x22] ;} else { Ox6d=parseInt(Ox6c*Ox3a0/Ox3a1) ; inp_width[OxO1584[0x1f]]=Ox6d ;} ;} ;} ;} ;} finally{ checkingConstrains=false ;} ;}  ; bordercolor[OxO1584[0x1b]]=bordercolor_Preview[OxO1584[0x1b]]=function bordercolor_onclick(){ SelectColor(bordercolor,bordercolor_Preview) ;}  ;