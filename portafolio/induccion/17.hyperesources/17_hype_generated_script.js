//	HYPE.documents["17"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="17.hyperesources",c="17",e="17_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/17_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"all_functions",source:"function(hypeDocument, element, event) {\t\n\tvar numBotones = 2;\n  \t\n  \tvar arreglo_botones = [0,0,0,0,0,0,0,0,0,0,0];\n\n\t\n\t\n\t$( \".validarNavegacion\" ).each(function(indexSlide) {\n\t\n\t\t\t\t  \n  \t\n                 $(this).on('mousedown touchstart', function(){\n                 \t\t\n         \t\t\t  var newIndex\t = indexSlide+1;\n                     var arreglo = arreglo_botones;\n         \t\t\t  var suma = 0;\n         \t\t\t  arreglo[newIndex] = 1;\n         \t\t\t  //sym.setVariable(\"arreglo_botones\", arreglo);\n         \t\t\t  \n         \t\t\t  ////Bandera\n         \t\t\t  //$('#slide15_bandera'+newIndex).show(); ///botonActivar\n         \t\t\t  ///\n\n         \n         \t\t\t  for(var i = 0; i <= arreglo.length -1 ; i++)\n         \t\t\t  {\n         \t\t\t\t suma = suma + arreglo[i];\n         \t\t\t  }\n         \t\t\t  if(suma == numBotones)\n         \t\t\t  {\n         \t\t\t\t ////TODO codigo para aparecer luego de ver todos los botones\n\n         \t\t\t\t setCookie(\"2020_IC\",true,10);\n         \t\t\t\t \n         \t\t\t\t \n         \t\t\t  }\n         \n                 });\n     });\n\n\t\n}",identifier:"35"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"7":{p:1,n:"17_cont2.png",g:"33",t:"@1x"},"3":{p:1,n:"17_titulo.png",g:"13",t:"@1x"},"-2":{n:"blank.gif"},"4":{p:1,n:"17_imagen.png",g:"15",t:"@1x"},"0":{p:1,n:"guia.png",g:"5",t:"@1x"},"5":{p:1,n:"17_botones.png",g:"17",t:"@1x"},"1":{n:"jquery-3.2.1.slim.min.js"},"6":{p:1,n:"17_cont1.png",g:"19",t:"@1x"},"2":{n:"jquery-ui.js"},"-1":{n:"PIE.htc"}},h,[],d,[{n:"Escena sin t\u00edtulo",o:"1",X:[0]}],[{o:"3",p:"600px",cA:false,Y:1240,Z:800,L:[],c:"#FFFFFF",bY:1,d:1240,U:{"37":{V:{"Control temporal principal":"50"},W:"50",n:"actividad"},"42":{V:{"Control temporal principal":"51"},W:"51",n:"cont_1"},"45":{V:{"Control temporal principal":"52"},W:"52",n:"cont_2"}},T:{"51":{c:"42",z:1,i:"51",n:"Control temporal principal",a:[{f:"c",y:0,z:1,i:"cR",e:1,s:0,o:"43"},{f:"c",y:0,z:1,i:"cQ",e:1,s:0,o:"43"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:7,b:"51",symbolOid:"23"}]},o:"51"},{f:"c",y:0,z:1,i:"cQ",e:1,s:0,o:"49"},{f:"c",y:0,z:1,i:"cR",e:1,s:0,o:"49"},{y:1,i:"cR",s:1,z:0,o:"43",f:"c"},{y:1,i:"cQ",s:1,z:0,o:"43",f:"c"},{y:1,i:"cR",s:1,z:0,o:"49",f:"c"},{y:1,i:"cQ",s:1,z:0,o:"49",f:"c"}],f:30,b:[]},"50":{c:"37",z:1,i:"50",n:"Control temporal principal",a:[],f:30,b:[{D:1,H:true,E:true,z:false,F:0,G:0,C:0,b:"51"},{D:1,H:true,E:true,z:false,F:0,G:0,C:0,b:"52"}]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Control temporal principal",z:1,b:[{D:1,H:true,E:true,z:false,F:0,G:0,C:0,b:"50"}],a:[],f:30},"52":{c:"45",z:1,i:"52",n:"Control temporal principal",a:[{f:"c",y:0,z:1,i:"cR",e:1,s:0,o:"47"},{f:"c",y:0,z:1,i:"cQ",e:1,s:0,o:"47"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:7,b:"52",symbolOid:"23"}]},o:"52"},{f:"c",y:0,z:1,i:"cQ",e:1,s:0,o:"48"},{f:"c",y:0,z:1,i:"cR",e:1,s:0,o:"48"},{y:1,i:"cR",s:1,z:0,o:"47",f:"c"},{y:1,i:"cQ",s:1,z:0,o:"47",f:"c"},{y:1,i:"cR",s:1,z:0,o:"48",f:"c"},{y:1,i:"cQ",s:1,z:0,o:"48",f:"c"}],f:30,b:[]}},bZ:180,O:["38","37","36","39","47","45","43","42","49","48","40","41","44","46"],n:"Dise\u00f1o sin t\u00edtulo","_":0,v:{"42":{x:"visible",a:69,cA:false,b:80,j:"absolute",bF:"37",c:24,k:"div",bY:1,d:23,z:6,cP:"validarNavegacion",bX:false,bZ:180,cV:[]},"36":{h:"5",p:"no-repeat",x:"visible",a:5,q:"100% 100%",b:0,j:"absolute",dB:"img",z:4,k:"div",c:1240,d:800,r:"none"},"47":{h:"33",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:7,k:"div",bF:"45",d:673,c:1214,cQ:0,r:"inline",cR:0},"37":{x:"visible",a:0,cA:false,bX:false,j:"absolute",b:0,c:1240,k:"div",bY:1,d:800,z:1,cK:{a:[{p:4,h:"35"}]},bZ:180,cV:[]},"43":{h:"19",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",dB:"img",z:7,k:"div",bF:"42",d:673,c:1214,cQ:0,r:"inline",cR:0},"48":{c:78,d:78,I:"Solid",cQ:0,e:0,J:"Solid",K:"Solid",cR:0,g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,aI:"50%",aA:{a:[{b:"52",p:8,z:true,symbolOid:"23",J:false}]},O:1,A:"#D8DDE4",x:"visible",aJ:"50%",j:"absolute",dB:"button",z:9,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",k:"div",B:"#D8DDE4",bF:"45",a:990,aL:"50%",P:1,b:49},"38":{c:1238,d:798,I:"Solid",J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,bF:"37",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:1,C:"#D8DDE4",z:2,P:1,D:"#D8DDE4",a:0,b:0},"44":{c:276,d:100,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"42",A:"#D8DDE4",x:"visible",aA:{a:[{b:"51",p:8,z:false,symbolOid:"23",J:false}]},O:1,j:"absolute",k:"div",dB:"button",z:8,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:62,b:170},"49":{c:100,d:100,I:"Solid",cQ:0,e:0,J:"Solid",K:"Solid",cR:0,g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,aI:"50%",aA:{a:[{b:"51",p:8,z:true,symbolOid:"23",J:false}]},O:1,A:"#D8DDE4",x:"visible",aJ:"50%",j:"absolute",dB:"button",z:9,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",k:"div",B:"#D8DDE4",bF:"42",a:985,aL:"50%",P:1,b:46},"40":{h:"15",p:"no-repeat",x:"visible",a:444,q:"100% 100%",b:142,j:"absolute",bF:"37",z:4,k:"div",dB:"img",d:477,c:691,r:"inline"},"39":{h:"13",p:"no-repeat",x:"visible",a:85,q:"100% 100%",b:32,j:"absolute",bF:"37",z:3,k:"div",dB:"img",d:71,c:1134,r:"inline"},"45":{x:"visible",a:69,cA:false,b:80,j:"absolute",r:"inline",c:31,k:"div",bY:1,d:28,z:7,cP:"validarNavegacion",bF:"37",bZ:180,bX:false,cV:[]},"41":{h:"17",p:"no-repeat",x:"visible",a:123,q:"100% 100%",b:242,j:"absolute",bF:"37",z:5,k:"div",dB:"img",d:316,c:311,r:"inline"},"46":{c:276,d:100,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"45",A:"#D8DDE4",x:"visible",aA:{a:[{b:"52",p:8,z:false,symbolOid:"23",J:false}]},O:1,j:"absolute",k:"div",dB:"button",z:8,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:1,a:71,b:356}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
