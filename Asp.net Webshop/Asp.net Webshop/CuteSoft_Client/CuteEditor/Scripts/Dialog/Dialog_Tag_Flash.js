var OxO335b=["flash_preview","btnbrowse","inp_src","onclick","value","cssText","style","Movie"];var flash_preview=Window_GetElement(window,OxO335b[0x0],true);var btnbrowse=Window_GetElement(window,OxO335b[0x1],true);var inp_src=Window_GetElement(window,OxO335b[0x2],true); btnbrowse[OxO335b[0x3]]=function btnbrowse_onclick(){ function Ox2db(Ox137){if(Ox137){ inp_src[OxO335b[0x4]]=Ox137 ;} ;}  ; editor.SetNextDialogWindow(window) ; editor.ShowSelectFileDialog(Ox2db,inp_src.value) ;}  ; UpdateState=function UpdateState_Flash(){ flash_preview[OxO335b[0x6]][OxO335b[0x5]]=element[OxO335b[0x6]][OxO335b[0x5]] ; flash_preview.mergeAttributes(element) ;}  ; SyncToView=function SyncToView_Flash(){ inp_src[OxO335b[0x4]]=element[OxO335b[0x7]] ;}  ; SyncTo=function SyncTo_Flash(element){ element[OxO335b[0x7]]=inp_src[OxO335b[0x4]] ;}  ;