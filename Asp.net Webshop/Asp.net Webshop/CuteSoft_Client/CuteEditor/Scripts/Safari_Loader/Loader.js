var OxOc840=["isWinIE","isGecko","isSafari","isOpera","userAgent","ua","opera","safari","gecko","msie","compatMode","document","CSS1Compat","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","length","all","childNodes","nodeType","\x0D\x0A","onchange","oninitialized","command","commandui","commandvalue","returnValue","oncommand","string","event","_fireEventFunction","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Load.ashx?type=image\x26file=t-minus.gif\x22\x3E","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","onclick","onmousedown","none","/Load.ashx?type=image\x26file=t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","contains","UNSELECTABLE","on","tabIndex","-1","//TODO: event not found? throw error ?","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","preventDefault","caller","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Load.ashx?type=theme\x26theme=","\x26file=all.png","/Images/blank2020.gif","IMG","Command","Group","ThemeIndex","width","20px","height","src","backgroundImage","url(",")","backgroundPosition","0 -","px","onload","className","separator","CuteEditorButton","CuteEditor_ButtonCommandOver(this)","onmouseover","CuteEditor_ButtonCommandOut(this)","onmouseout","CuteEditor_ButtonCommandDown(this)","CuteEditor_ButtonCommandUp(this)","onmouseup","oncontextmenu","ondragstart","PostBack","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","ActiveTab","View","Code","Edit","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","cmd_fromfullpage","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Load.ashx?type=scripts\x26file=Safar_Implementation","CuteEditorImplementation","function","POST","\x26getModified=1","status","Failed to load impl time!","GET","\x26modified=","Failed to load impl code!","cursor","hand","body","InitializeCode","block","contentEditable"," \x3Cbr /\x3E ","designMode","no-drop","CuteEditorInitialize"];var _Browser_TypeInfo=null; function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox4={}; Ox4[OxOc840[0x5]]=navigator[OxOc840[0x4]].toLowerCase(),Ox4[OxOc840[0x3]]=(Ox4[OxOc840[0x5]].indexOf(OxOc840[0x6])>-0x1),Ox4[OxOc840[0x2]]=(Ox4[OxOc840[0x5]].indexOf(OxOc840[0x7])>-0x1),Ox4[OxOc840[0x1]]=(!Ox4[OxOc840[0x3]]&&!Ox4[OxOc840[0x2]]&&Ox4[OxOc840[0x5]].indexOf(OxOc840[0x8])>-0x1),Ox4[OxOc840[0x0]]=(!Ox4[OxOc840[0x3]]&&Ox4[OxOc840[0x5]].indexOf(OxOc840[0x9])>-0x1) ; _Browser_TypeInfo=Ox4 ;}  ; Browser__InitType() ; function Browser_IsWinIE(){return _Browser_TypeInfo[OxOc840[0x0]];}  ; function Browser_IsGecko(){return _Browser_TypeInfo[OxOc840[0x1]];}  ; function Browser_IsOpera(){return _Browser_TypeInfo[OxOc840[0x3]];}  ; function Browser_IsSafari(){return _Browser_TypeInfo[OxOc840[0x2]];}  ; function Browser_UseIESelection(){return _Browser_TypeInfo[OxOc840[0x0]];}  ; function Browser_IsCSS1Compat(){return window[OxOc840[0xb]][OxOc840[0xa]]==OxOc840[0xc];}  ; function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxOc840[0xd]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxOc840[0xd]){return  new ActiveXObject(OxOc840[0xe]);} ;} catch(x){return null;} ;}  ; function LoadXMLAsync(Ox963,Ox205,Ox1ae,Ox964){var Oxe0=CreateXMLHttpRequest(); function Ox965(){if(Oxe0[OxOc840[0xf]]!=0x4){return ;} ; Oxe0[OxOc840[0x10]]= new Function() ;var Ox20d=Oxe0; Oxe0=null ; Ox1ae(Ox20d) ;}  ; Oxe0[OxOc840[0x10]]=Ox965 ; Oxe0.open(Ox963,Ox205,true) ; Oxe0.send(Ox964||OxOc840[0x11]) ;}  ; function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0x0;i<p[OxOc840[0x13]][OxOc840[0x12]];i++){ arr.push(p[OxOc840[0x13]].item(i)) ;} ;return arr;} ; Ox1bc(p) ; function Ox1bc(Ox27){var Ox1bd=Ox27[OxOc840[0x14]];var Ox11=Ox1bd[OxOc840[0x12]];for(var i=0x0;i<Ox11;i++){var n=Ox1bd.item(i);if(n[OxOc840[0x15]]!=0x1){continue ;} ; arr.push(n) ; Ox1bc(n) ;} ;}  ;return arr;}  ;var __ISDEBUG=false; function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxOc840[0x16]+Debug_Todo.caller));}  ; function Window_GetElement(Ox1b5,Ox93,Ox1ba){var Ox27=Ox1b5[OxOc840[0xb]].getElementById(Ox93);if(Ox27){return Ox27;} ;var Ox2f=Ox1b5[OxOc840[0xb]].getElementsByName(Ox93);if(Ox2f[OxOc840[0x12]]>0x0){return Ox2f.item(0x0);} ;return null;}  ; function CuteEditor_AddMainMenuItems(Ox5eb){}  ; function CuteEditor_AddDropMenuItems(Ox5eb,Ox5f2){}  ; function CuteEditor_AddTagMenuItems(Ox5eb,Ox5f4){}  ; function CuteEditor_AddVerbMenuItems(Ox5eb,Ox5f4){}  ; function CuteEditor_OnInitialized(editor){}  ; function CuteEditor_OnCommand(editor,Ox5f8,Ox5f9,Ox4e){}  ; function CuteEditor_OnChange(editor){}  ; function CuteEditor_FilterCode(editor,Ox1e7){return Ox1e7;}  ; function CuteEditor_FilterHTML(editor,Ox1ff){return Ox1ff;}  ; function CuteEditor_FireChange(editor){ window.CuteEditor_OnChange(editor) ; CuteEditor_FireEvent(editor,OxOc840[0x17],null) ;}  ; function CuteEditor_FireInitialized(editor){ window.CuteEditor_OnInitialized(editor) ; CuteEditor_FireEvent(editor,OxOc840[0x18],null) ;}  ; function CuteEditor_FireCommand(editor,Ox5f8,Ox5f9,Ox4e){var Ox137=window.CuteEditor_OnCommand(editor,Ox5f8,Ox5f9,Ox4e);if(Ox137==true){return true;} ;var Ox600={}; Ox600[OxOc840[0x19]]=Ox5f8 ; Ox600[OxOc840[0x1a]]=Ox5f9 ; Ox600[OxOc840[0x1b]]=Ox4e ; Ox600[OxOc840[0x1c]]=true ; CuteEditor_FireEvent(editor,OxOc840[0x1d],Ox600) ;if(Ox600[OxOc840[0x1c]]==false){return true;} ;}  ; function CuteEditor_FireEvent(editor,Ox602,Ox603){if(Ox603==null){ Ox603={} ;} ;var Ox604=editor.getAttribute(Ox602);if(Ox604){if( typeof (Ox604)==OxOc840[0x1e]){ editor[OxOc840[0x20]]= new Function(OxOc840[0x1f],Ox604) ;} else { editor[OxOc840[0x20]]=Ox604 ;} ; editor._fireEventFunction(Ox603) ;} ;}  ; function CuteEditor_GetEditor(element){for(var Ox42=element;Ox42!=null;Ox42=Ox42[OxOc840[0x21]]){if(Ox42.getAttribute(OxOc840[0x22])==OxOc840[0x23]){return Ox42;} ;} ;return null;}  ; function CuteEditor_DropDownCommand(element,Ox967){var editor=CuteEditor_GetEditor(element);if(editor[OxOc840[0x24]]){return ;} ;if(element.getAttribute(OxOc840[0x25])==OxOc840[0x23]){var Ox13b=element.GetValue();if(Ox13b==OxOc840[0x26]){ Ox13b=OxOc840[0x11] ;} ;var Ox17d=element.GetText();if(Ox17d==OxOc840[0x26]){ Ox17d=OxOc840[0x11] ;} ; element.SetSelectedIndex(0x0) ; editor.ExecCommand(Ox967,false,Ox13b,Ox17d) ;} else {if(element[OxOc840[0x27]]){var Ox13b=element[OxOc840[0x27]];if(Ox13b==OxOc840[0x26]){ Ox13b=OxOc840[0x11] ;} ; element[OxOc840[0x28]]=0x0 ; editor.ExecCommand(Ox967,false,Ox13b,Ox17d) ;} else { element[OxOc840[0x28]]=0x0 ;} ;} ; editor.FocusDocument() ;}  ; function CuteEditor_ExpandTreeDropDownItem(src,Ox6c0){var Oxb3=null;while(src!=null){if(src[OxOc840[0x29]]==OxOc840[0x2a]){ Oxb3=src ;break ;} ; src=src[OxOc840[0x21]] ;} ;var Ox31b=Oxb3[OxOc840[0x2b]].item(0x0); Oxb3[OxOc840[0x2e]][OxOc840[0x2d]][OxOc840[0x2c]]=OxOc840[0x11] ; Ox31b[OxOc840[0x2f]]=OxOc840[0x30]+Ox6c0+OxOc840[0x31] ; Oxb3[OxOc840[0x34]]= new Function(OxOc840[0x32]+Ox6c0+OxOc840[0x33]) ; Oxb3[OxOc840[0x35]]= new Function(OxOc840[0x32]+Ox6c0+OxOc840[0x33]) ;}  ; function CuteEditor_CollapseTreeDropDownItem(src,Ox6c0){var Oxb3=null;while(src!=null){if(src[OxOc840[0x29]]==OxOc840[0x2a]){ Oxb3=src ;break ;} ; src=src[OxOc840[0x21]] ;} ;var Ox31b=Oxb3[OxOc840[0x2b]].item(0x0); Oxb3[OxOc840[0x2e]][OxOc840[0x2d]][OxOc840[0x2c]]=OxOc840[0x36] ; Ox31b[OxOc840[0x2f]]=OxOc840[0x30]+Ox6c0+OxOc840[0x37] ; Oxb3[OxOc840[0x34]]= new Function(OxOc840[0x38]+Ox6c0+OxOc840[0x33]) ; Oxb3[OxOc840[0x35]]= new Function(OxOc840[0x38]+Ox6c0+OxOc840[0x33]) ;}  ; function Element_Contains(element,Ox16c){if(!Browser_IsOpera()){if(element[OxOc840[0x39]]){return element.contains(Ox16c);} ;} ;for(;Ox16c!=null;Ox16c=Ox16c[OxOc840[0x21]]){if(element==Ox16c){return true;} ;} ;return false;}  ; function Element_SetUnselectable(element){ element.setAttribute(OxOc840[0x3a],OxOc840[0x3b]) ; element.setAttribute(OxOc840[0x3c],OxOc840[0x3d]) ;var arr=Element_GetAllElements(element);var len=arr[OxOc840[0x12]];if(!len){return ;} ;for(var i=0x0;i<len;i++){ arr[i].setAttribute(OxOc840[0x3a],OxOc840[0x3b]) ; arr[i].setAttribute(OxOc840[0x3c],OxOc840[0x3d]) ;} ;}  ; function Event_GetEvent(Ox1c0){ Ox1c0=Event_FindEvent(Ox1c0) ;if(Ox1c0==null){ Debug_Todo(OxOc840[0x3e]) ;} ;return Ox1c0;}  ; function Frame_GetContentWindow(Ox2c7){if(Ox2c7[OxOc840[0x3f]]){return Ox2c7[OxOc840[0x3f]];} ;if(Ox2c7[OxOc840[0x40]]){if(Ox2c7[OxOc840[0x40]][OxOc840[0x41]]){return Ox2c7[OxOc840[0x40]][OxOc840[0x41]];} ;} ;var Ox1b5;if(Ox2c7[OxOc840[0x42]]){ Ox1b5=window[OxOc840[0x43]][Ox2c7[OxOc840[0x42]]] ;if(Ox1b5){return Ox1b5;} ;} ;var len=window[OxOc840[0x43]][OxOc840[0x12]];for(var i=0x0;i<len;i++){ Ox1b5=window[OxOc840[0x43]][i] ;if(Ox1b5[OxOc840[0x44]]==Ox2c7){return Ox1b5;} ;if(Ox1b5[OxOc840[0xb]]==Ox2c7[OxOc840[0x40]]){return Ox1b5;} ;} ; Debug_Todo(OxOc840[0x45]) ;}  ; function Array_IndexOf(arr,Ox1c2){for(var i=0x0;i<arr[OxOc840[0x12]];i++){if(arr[i]==Ox1c2){return i;} ;} ;return -0x1;}  ; function Array_Contains(arr,Ox1c2){return Array_IndexOf(arr,Ox1c2)!=-0x1;}  ; function Event_FindEvent(Ox1c0){if(Ox1c0&&Ox1c0[OxOc840[0x46]]){return Ox1c0;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxOc840[0x1f]]){return window[OxOc840[0x1f]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;}  ; function Event_FindEvent_FindEventFromCallers(){var Ox1c8=Event_GetEvent[OxOc840[0x47]];for(var i=0x0;i<0x64;i++){if(!Ox1c8){break ;} ;var Ox1c0=Ox1c8[OxOc840[0x48]][0x0];if(Ox1c0&&Ox1c0[OxOc840[0x46]]){return Ox1c0;} ; Ox1c8=Ox1c8[OxOc840[0x47]] ;} ;}  ; function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox1ca(window); function Ox1ca(Ox1b5){if(Ox1b5==null){return null;} ;if(Ox1b5[OxOc840[0x1f]]){return Ox1b5[OxOc840[0x1f]];} ;if(Array_Contains(arr,Ox1b5)){return null;} ; arr.push(Ox1b5) ;var Ox1cb=[];if(Ox1b5[OxOc840[0x49]]!=Ox1b5){ Ox1cb.push(Ox1b5.parent) ;} ;if(Ox1b5[OxOc840[0x4a]]!=Ox1b5[OxOc840[0x49]]){ Ox1cb.push(Ox1b5.top) ;} ;if(Ox1b5[OxOc840[0x4b]]){ Ox1cb.push(Ox1b5.opener) ;} ;for(var i=0x0;i<Ox1b5[OxOc840[0x43]][OxOc840[0x12]];i++){ Ox1cb.push(Ox1b5[OxOc840[0x43]][i]) ;} ;for(var i=0x0;i<Ox1cb[OxOc840[0x12]];i++){try{var Ox1c0=Ox1ca(Ox1cb[i]);if(Ox1c0){return Ox1c0;} ;} catch(x){} ;} ;return null;}  ;}  ; function Event_GetSrcElement(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;if(Ox1c0[OxOc840[0x4c]]){return Ox1c0[OxOc840[0x4c]];} ;if(Ox1c0[OxOc840[0x4d]]){return Ox1c0[OxOc840[0x4d]];} ; Debug_Todo(OxOc840[0x4e]) ;return null;}  ; function Event_GetFromElement(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;if(Ox1c0[OxOc840[0x4f]]){return Ox1c0[OxOc840[0x4f]];} ;if(Ox1c0[OxOc840[0x50]]){return Ox1c0[OxOc840[0x50]];} ;return null;}  ; function Event_GetToElement(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;if(Ox1c0[OxOc840[0x51]]){return Ox1c0[OxOc840[0x51]];} ;if(Ox1c0[OxOc840[0x50]]){return Ox1c0[OxOc840[0x50]];} ;return null;}  ; function Event_GetKeyCode(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;return Ox1c0[OxOc840[0x52]];}  ; function Event_GetClientX(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;return Ox1c0[OxOc840[0x53]];}  ; function Event_GetClientY(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;return Ox1c0[OxOc840[0x54]];}  ; function Event_GetOffsetX(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;return Ox1c0[OxOc840[0x55]];}  ; function Event_GetOffsetY(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;return Ox1c0[OxOc840[0x56]];}  ; function Event_IsLeftButton(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;if(Browser_IsWinIE()){return Ox1c0[OxOc840[0x57]]==0x1;} ;if(Browser_IsGecko()){return Ox1c0[OxOc840[0x57]]==0x0;} ;return Ox1c0[OxOc840[0x57]]==0x0;}  ; function Event_IsCtrlKey(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;return Ox1c0[OxOc840[0x58]];}  ; function Event_IsAltKey(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;return Ox1c0[OxOc840[0x59]];}  ; function Event_IsShiftKey(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ;return Ox1c0[OxOc840[0x5a]];}  ; function Event_PreventDefault(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ; Ox1c0[OxOc840[0x1c]]=false ;if(Ox1c0[OxOc840[0x46]]){ Ox1c0.preventDefault() ;} ;}  ; function Event_CancelBubble(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ; Ox1c0[OxOc840[0x5b]]=true ;if(Ox1c0[OxOc840[0x5c]]){ Ox1c0.stopPropagation() ;} ;return false;}  ; function Event_CancelEvent(Ox1c0){ Ox1c0=Event_GetEvent(Ox1c0) ; Event_PreventDefault(Ox1c0) ;return Event_CancelBubble(Ox1c0);}  ; function CuteEditor_BasicInitialize(editor){var Ox96b=Browser_IsOpera();var Ox68a= new Function(OxOc840[0x5d]);var Ox96c= new Function(OxOc840[0x5e]);var Ox96d= new Function(OxOc840[0x5f]);var Ox96e=editor.GetScriptProperty(OxOc840[0x60]);var Ox96f=editor.GetScriptProperty(OxOc840[0x61]);var Ox970=Ox96e+OxOc840[0x62]+Ox96f+OxOc840[0x63];var Ox971=Ox96e+OxOc840[0x64];var images=editor.getElementsByTagName(OxOc840[0x65]);var len=images[OxOc840[0x12]];for(var i=0x0;i<len;i++){var img=images[i];var Ox12e=img.getAttribute(OxOc840[0x66]);var Ox5f2=img.getAttribute(OxOc840[0x67]);var Ox972=img.getAttribute(OxOc840[0x68]);if(parseInt(Ox972)>=0x0){ img[OxOc840[0x2d]][OxOc840[0x69]]=OxOc840[0x6a] ; img[OxOc840[0x2d]][OxOc840[0x6b]]=OxOc840[0x6a] ; img[OxOc840[0x6c]]=Ox971 ; img[OxOc840[0x2d]][OxOc840[0x6d]]=OxOc840[0x6e]+Ox970+OxOc840[0x6f] ; img[OxOc840[0x2d]][OxOc840[0x70]]=OxOc840[0x71]+(Ox972*0x14)+OxOc840[0x72] ; img[OxOc840[0x2d]][OxOc840[0x2c]]=OxOc840[0x11] ;} ;if(!Ox12e&&!Ox5f2){if(Ox96b){ img[OxOc840[0x73]]=CuteEditor_OperaHandleImageLoaded ;} ;continue ;} ;if(img[OxOc840[0x74]]!=OxOc840[0x75]){ img[OxOc840[0x74]]=OxOc840[0x76] ; img[OxOc840[0x78]]= new Function(OxOc840[0x77]) ; img[OxOc840[0x7a]]= new Function(OxOc840[0x79]) ; img[OxOc840[0x35]]= new Function(OxOc840[0x7b]) ; img[OxOc840[0x7d]]= new Function(OxOc840[0x7c]) ;} ;if(!img[OxOc840[0x7e]]){ img[OxOc840[0x7e]]=Event_CancelEvent ;} ;if(!img[OxOc840[0x7f]]){ img[OxOc840[0x7f]]=Event_CancelEvent ;} ;if(Ox12e){var Ox1c8=img.getAttribute(OxOc840[0x80])==OxOc840[0x23]?Ox96c:Ox68a;if(img[OxOc840[0x34]]==null){ img[OxOc840[0x34]]=Ox1c8 ;} ;if(img[OxOc840[0x81]]==null){ img[OxOc840[0x81]]=Ox1c8 ;} ;} else {if(Ox5f2){if(img[OxOc840[0x34]]==null){ img[OxOc840[0x34]]=Ox96d ;} ;} ;} ;} ;var Ox6f5=Window_GetElement(window,editor.GetScriptProperty(OxOc840[0x82]),true);var Ox6f6=Window_GetElement(window,editor.GetScriptProperty(OxOc840[0x83]),true);var Ox6f1=Window_GetElement(window,editor.GetScriptProperty(OxOc840[0x84]),true); Ox6f1[OxOc840[0x74]]+=OxOc840[0x85] ; Ox6f5[OxOc840[0x74]]+=OxOc840[0x86] ; Ox6f6[OxOc840[0x74]]+=OxOc840[0x86] ; Element_SetUnselectable(Ox6f5) ; Element_SetUnselectable(Ox6f6) ;var Ox773=editor.GetScriptProperty(OxOc840[0x87]);switch(Ox773){case OxOc840[0x8a]: Ox6f5[OxOc840[0x2d]][OxOc840[0x2c]]=OxOc840[0x11] ;break ;case OxOc840[0x89]: Ox6f6[OxOc840[0x2d]][OxOc840[0x2c]]=OxOc840[0x11] ;break ;case OxOc840[0x88]:break ;;;;} ;}  ; function CuteEditor_OperaHandleImageLoaded(){var img=this;if(img[OxOc840[0x2d]][OxOc840[0x2c]]){ img[OxOc840[0x2d]][OxOc840[0x2c]]=OxOc840[0x36] ; setTimeout(function Ox974(){ img[OxOc840[0x2d]][OxOc840[0x2c]]=OxOc840[0x11] ;} ,0x1) ;} ;}  ; function CuteEditor_ButtonOver(element){if(!element[OxOc840[0x8b]]){ element[OxOc840[0x7e]]=Event_CancelEvent ; element[OxOc840[0x7a]]=CuteEditor_ButtonOut ; element[OxOc840[0x35]]=CuteEditor_ButtonDown ; element[OxOc840[0x7d]]=CuteEditor_ButtonUp ; Element_SetUnselectable(element) ; element[OxOc840[0x8b]]=true ;} ; element[OxOc840[0x8c]]=true ; element[OxOc840[0x74]]=OxOc840[0x8d] ;}  ; function CuteEditor_ButtonOut(){var element=this; element[OxOc840[0x74]]=OxOc840[0x76] ; element[OxOc840[0x8c]]=false ;}  ; function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this; element[OxOc840[0x74]]=OxOc840[0x8e] ;}  ; function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOc840[0x8c]]){ element[OxOc840[0x74]]=OxOc840[0x8d] ;} else { element[OxOc840[0x74]]=OxOc840[0x8f] ;} ;}  ; function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOc840[0x8b]]){ element[OxOc840[0x7e]]=Event_CancelEvent ; element[OxOc840[0x7a]]=CuteEditor_ColorPicker_ButtonOut ; element[OxOc840[0x35]]=CuteEditor_ColorPicker_ButtonDown ; Element_SetUnselectable(element) ; element[OxOc840[0x8b]]=true ;} ; element[OxOc840[0x8c]]=true ; element[OxOc840[0x2d]][OxOc840[0x90]]=OxOc840[0x91] ; element[OxOc840[0x2d]][OxOc840[0x92]]=OxOc840[0x93] ; element[OxOc840[0x2d]][OxOc840[0x94]]=OxOc840[0x95] ;}  ; function CuteEditor_ColorPicker_ButtonOut(){var element=this; element[OxOc840[0x8c]]=false ; element[OxOc840[0x2d]][OxOc840[0x90]]=OxOc840[0x96] ; element[OxOc840[0x2d]][OxOc840[0x92]]=OxOc840[0x11] ; element[OxOc840[0x2d]][OxOc840[0x94]]=OxOc840[0x95] ;}  ; function CuteEditor_ColorPicker_ButtonDown(){var element=this; element[OxOc840[0x2d]][OxOc840[0x90]]=OxOc840[0x97] ; element[OxOc840[0x2d]][OxOc840[0x92]]=OxOc840[0x11] ; element[OxOc840[0x2d]][OxOc840[0x94]]=OxOc840[0x95] ;}  ; function CuteEditor_ButtonCommandOver(element){ element[OxOc840[0x8c]]=true ;if(element[OxOc840[0x98]]){ element[OxOc840[0x74]]=OxOc840[0x99] ;} else { element[OxOc840[0x74]]=OxOc840[0x8d] ;} ;}  ; function CuteEditor_ButtonCommandOut(element){ element[OxOc840[0x8c]]=false ;if(element[OxOc840[0x9a]]){ element[OxOc840[0x74]]=OxOc840[0x9b] ;} else {if(element[OxOc840[0x98]]){ element[OxOc840[0x74]]=OxOc840[0x99] ;} else {if(element[OxOc840[0x42]]!=OxOc840[0x9c]){ element[OxOc840[0x74]]=OxOc840[0x76] ;} ;} ;} ;}  ; function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ; element[OxOc840[0x74]]=OxOc840[0x8e] ;}  ; function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOc840[0x98]]){ element[OxOc840[0x74]]=OxOc840[0x99] ;return ;} ;if(element[OxOc840[0x8c]]){ element[OxOc840[0x74]]=OxOc840[0x8d] ;} else {if(element[OxOc840[0x9a]]){ element[OxOc840[0x74]]=OxOc840[0x9b] ;} else { element[OxOc840[0x74]]=OxOc840[0x76] ;} ;} ;}  ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML]; function SetupCuteEditorGlobalFunctions(){for(var i=0x0;i<CuteEditorGlobalFunctions[OxOc840[0x12]];i++){var Ox1c8=CuteEditorGlobalFunctions[i];var name=Ox1c8+OxOc840[0x11]; name=name.substr(0x8,name.indexOf(OxOc840[0x9d])-0x8).replace(/\s/g,OxOc840[0x11]) ;if(!window[name]){ window[name]=Ox1c8 ;} ;} ;}  ; SetupCuteEditorGlobalFunctions() ;var __danainfo=null;var danaurl=window[OxOc840[0x9f]][OxOc840[0x9e]];var danapos=danaurl.indexOf(OxOc840[0xa0]);if(danapos!=-0x1){var pluspos1=danaurl.indexOf(OxOc840[0xa1],danapos+0xa);var pluspos2=danaurl.indexOf(OxOc840[0xa2],danapos+0xa);if(pluspos1!=-0x1&&pluspos1<pluspos2){ pluspos2=pluspos1 ;} ; __danainfo=danaurl.substring(danapos,pluspos2)+OxOc840[0xa2] ;} ; function CuteEditor_GetScriptProperty(name){var Ox13b=this[OxOc840[0xa3]][name];if(Ox13b&&__danainfo){if(name==OxOc840[0x60]){return Ox13b+__danainfo;} ;var Ox300=this[OxOc840[0xa3]][OxOc840[0x60]];if(Ox13b.substr(0x0,Ox300.length)==Ox300){return Ox300+__danainfo+Ox13b.substring(Ox300.length);} ;} ;return Ox13b;}  ; function CuteEditor_SetScriptProperty(name,Ox13b){if(Ox13b==null){ this[OxOc840[0xa3]][name]=null ;} else { this[OxOc840[0xa3]][name]=String(Ox13b) ;} ;}  ; function CuteEditorInitialize(Ox97f,Ox980){var editor=Window_GetElement(window,Ox97f,true); editor[OxOc840[0xa3]]=Ox980 ; editor[OxOc840[0xa4]]=CuteEditor_GetScriptProperty ;var Ox6f1=Window_GetElement(window,editor.GetScriptProperty(OxOc840[0x84]),true);var editwin,editdoc;try{ editwin=Frame_GetContentWindow(Ox6f1) ; editdoc=editwin[OxOc840[0xb]] ;} catch(x){} ;var Ox981=false;var Ox982;var Ox983=false;var Ox984=editor.GetScriptProperty(OxOc840[0x60])+OxOc840[0xa5]; function Ox985(){if( typeof (window[OxOc840[0xa6]])==OxOc840[0xa7]){return ;} ; LoadXMLAsync(OxOc840[0xa8],Ox984+OxOc840[0xa9],Ox986) ;}  ; function Ox986(Ox20d){if(Ox20d[OxOc840[0xaa]]!=0xc8){ alert(OxOc840[0xab]) ;return ;} ; LoadXMLAsync(OxOc840[0xac],Ox984+OxOc840[0xad]+Ox20d.responseText,Ox987) ;}  ; function Ox987(Ox20d){if(Ox20d[OxOc840[0xaa]]!=0xc8){ alert(OxOc840[0xae]) ;return ;} ; CuteEditorInstallScriptCode(Ox20d.responseText,OxOc840[0xa6]) ;if(Ox981){ Ox988() ;} ;}  ; function Ox988(){if(Ox983){return ;} ; Ox983=true ;try{ window.CuteEditorImplementation(editor) ;} catch(x){ alert(x) ;} ;try{ editor[OxOc840[0x2d]][OxOc840[0xaf]]=OxOc840[0xb0] ;} catch(x){} ;try{ editdoc[OxOc840[0xb1]][OxOc840[0x2d]][OxOc840[0xaf]]=OxOc840[0xb0] ;} catch(x){} ;var Ox989=editor.GetScriptProperty(OxOc840[0xb2]);if(Ox989){ editor.Eval(Ox989) ;} ;}  ; function Ox98a(){if(!Element_Contains(window[OxOc840[0xb]].body,editor)){return ;} ;try{ Ox6f1=Window_GetElement(window,editor.GetScriptProperty(OxOc840[0x84]),true) ; editwin=Frame_GetContentWindow(Ox6f1) ; editdoc=editwin[OxOc840[0xb]] ;var y=editdoc[OxOc840[0xb1]];} catch(x){ setTimeout(Ox98a,0x64) ;return ;} ;if(!editdoc[OxOc840[0xb1]]){ setTimeout(Ox98a,0x64) ;return ;} ;if(!Ox981){ Ox6f1[OxOc840[0x2d]][OxOc840[0x2c]]=OxOc840[0xb3] ;if(Browser_IsOpera()){ editdoc[OxOc840[0xb1]][OxOc840[0xb4]]=true ;} else {if(Browser_IsGecko()){ editdoc[OxOc840[0xb1]][OxOc840[0x2f]]=OxOc840[0xb5] ;} ; editdoc[OxOc840[0xb6]]=OxOc840[0x3b] ;} ; Ox981=true ; setTimeout(Ox98a,0x32) ;return ;} ;if( typeof (window[OxOc840[0xa6]])==OxOc840[0xa7]){ Ox988() ;} else {try{ editdoc[OxOc840[0xb1]][OxOc840[0x2d]][OxOc840[0xaf]]=OxOc840[0xb7] ;} catch(x){} ;} ;}  ;var Ox98b=0x0;var Ox42=CuteEditor_Find_DisplayNone(editor);if(Ox42){ function Ox98c(){if(Ox42[OxOc840[0x2d]][OxOc840[0x2c]]!=OxOc840[0x36]){ window.clearInterval(Ox98b) ; Ox98b=OxOc840[0x11] ; CuteEditorInitialize(Ox97f,Ox980) ;} ;}  ; Ox98b=setInterval(Ox98c,0x3e8) ;} else { CuteEditor_BasicInitialize(editor) ; Ox985() ; Ox98a() ;} ; function CuteEditor_Find_DisplayNone(element){var Ox98e;for(var Ox42=element;Ox42!=null;Ox42=Ox42[OxOc840[0x21]]){if(Ox42[OxOc840[0x2d]]&&Ox42[OxOc840[0x2d]][OxOc840[0x2c]]==OxOc840[0x36]){ Ox98e=Ox42 ;break ;} ;} ;return Ox98e;}  ;}  ; function CuteEditorInstallScriptCode(Ox922,Ox923){ eval(Ox922) ; window[Ox923]=eval(Ox923) ;}  ; window[OxOc840[0xb8]]=CuteEditorInitialize ;