if (typeof mybuys.setupJsRun == "undefined")
{
	mybuys.setupJsRun = true;
	
mybuys.base_initPage = mybuys.initPage;
mybuys.initPage = function()
{


//magnetic BEACON ORDER CONF PAGE
if (mybuys.params["pt"] === "purchase")
{
	var order_id = mybuys.params["orderid"];
	var order_amount = mybuys.params["amount"];
	var jsNode = document.createElement('script');
	jsNode.setAttribute('type', 'text/javascript');
	jsNode.setAttribute('src', '//magnetic.t.domdex.com/23458/pix.js?t=c&for=MCMELECTRONICS_MyBuys&ord='+order_id+'&rev='+order_amount);

	document.getElementsByTagName('body')[0].appendChild(jsNode);


}
//magnetic BEACON HOME PAGE
else if(mybuys.params["pt"] === "h") 
{
	var jsNode = document.createElement('script');
	jsNode.setAttribute('type', 'text/javascript');
	jsNode.setAttribute('src', '//magnetic.t.domdex.com/23459/pix.js?t=r&for=MCMELECTRONICS_MyBuys');
	document.getElementsByTagName('body')[0].appendChild(jsNode);

}

   
//magnetic BEACON CATEGORY PAGE
else if(mybuys.params["pt"] === "cat" || mybuys.params["pt"] === "hcat")
{
	var jsNode = document.createElement('script');
	jsNode.setAttribute('type', 'text/javascript');
	jsNode.setAttribute('src', '//magnetic.t.domdex.com/23460/pix.js?t=r&for=MCMELECTRONICS_MyBuys');
	document.getElementsByTagName('body')[0].appendChild(jsNode);

   
}   
//magnetic BEACON PRODUCT DETAILS PAGE
else if(mybuys.params["pt"] === "prod")
{
	var jsNode = document.createElement('script');
	jsNode.setAttribute('type', 'text/javascript');
	jsNode.setAttribute('src', '//magnetic.t.domdex.com/23461/pix.js?t=r&for=MCMELECTRONICS_MyBuys');
	document.getElementsByTagName('body')[0].appendChild(jsNode);

   
}
   
//magnetic BEACON CART PAGE
else if(mybuys.params["pt"] === "cart")
{
	var jsNode = document.createElement('script');
	jsNode.setAttribute('type', 'text/javascript');
	jsNode.setAttribute('src', '//magnetic.t.domdex.com/23462/pix.js?t=r&for=MCMELECTRONICS_MyBuys');
	document.getElementsByTagName('body')[0].appendChild(jsNode);

   
}
   
//magnetic BEACON OTHER PAGES
else {
	var jsNode = document.createElement('script');
	jsNode.setAttribute('type', 'text/javascript');
	jsNode.setAttribute('src', '//magnetic.t.domdex.com/23463/pix.js?t=r&for=MCMELECTRONICS_MyBuys');
	document.getElementsByTagName('body')[0].appendChild(jsNode);
	}
//END Magnetic pixel


	if(this.params["pt"] && this.params["pt"].indexOf("prod") > -1)
	{
		var productId = mybuys.params["productid"];
		mybuys.set("fbtProductId", productId);
		mybuys.set("fbtImageUrl", jQuery(".primary-image img").first().attr("src"));
		
		// get the name and brand
		var nameArea = jQuery(".primary-content h1").first().clone();
		nameArea.children().remove();
		mybuys.set("fbtProductName", (nameArea.text() || "TEST PRODUCT NAME").trim());
		
		// get the price.
		mybuys.set("fbtCurrentPrice", (jQuery(".sale-price").text() || "0.00").replace(/[$,]/g, "").trim());
	}
	
	if((this.params["pt"]) && (this.params["pt"].indexOf("purchase") != -1))
	{
		if(this.params['email'])
		{
			var testemail = Math.max(this.params['email'].toUpperCase().indexOf("@MCMELECTRONICS"));
			if(testemail<0)
			{
				this.base_initPage();
			}
		} 
		else 
		{
			this.base_initPage();
		}
	}
	else
	{
		this.base_initPage();
	}
}
mybuys.setClient("MCMELECTRONICS");
mybuys.enableZones();
mybuys.setOneclkSignupAsImg("http://w.p.mybuys.com/clients/MCMELECTRONICS/images/mybuys-product-alerts-240.gif");
mybuys.setOneclkButtonAlt("Product Alerts");
mybuys.setStyle('.mbzone','border-collapse','collapse');
mybuys.setStyle('.mblegend','font-family', 'arial, helvetica, verdana','text-align','left','color','#444444','font-size','18px','font-weight','300');
mybuys.setStyle('.mbitem','width','125px','height','245px','padding-right','12px','padding-left','12px','background','url("http://w.p.mybuys.com/clients/MCMELECTRONICS/images/upsell-bg.gif") no-repeat scroll left bottom transparent');
mybuys.setStyle('a.mbnamelink:link','font-family', 'arial, helvetica, verdana','color','#000000','font-size','10px','font-weight','normal','text-decoration','none');
mybuys.setStyle('a.mbnamelink:visited','font-family', 'arial, helvetica, verdana','color','#000000','font-size','10px','font-weight','normal','text-decoration','none');
mybuys.setStyle('a.mbnamelink:hover','font-family', 'arial, helvetica, verdana','color','#000000','font-size','10px','font-weight','normal','text-decoration','none');
mybuys.setStyle('.mbpricerowleft','float','','text-align','');
mybuys.setStyle('.mbpricerowright','float','','text-align','');
mybuys.setStyle('a.mbpricelink:link','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','bold','text-decoration','none');
mybuys.setStyle('a.mbpricelink:visited','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','bold','text-decoration','none');
mybuys.setStyle('a.mbpricelink:hover','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','bold','text-decoration','none');
mybuys.setStyle('.mbpricerowspan','text-align','center');
mybuys.setStyle('a.mborderlink:link','font-family', 'arial, helvetica, verdana','color','#000000','font-size','10px','font-weight','normal','text-decoration','none');
mybuys.setStyle('a.mborderlink:visited','font-family', 'arial, helvetica, verdana','color','#000000','font-size','10px','font-weight','normal','text-decoration','none');
mybuys.setStyle('a.mborderlink:hover','font-family', 'arial, helvetica, verdana','color','#000000','font-size','10px','font-weight','normal','text-decoration','none');

mybuys.setStyle('.mblistrowleft','float','','text-align','');
mybuys.setStyle('.mblistrowright','float','','text-align','');
mybuys.setStyle('a.mblistlink:link','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','normal','text-decoration','line-through');
mybuys.setStyle('a.mblistlink:visited','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','normal','text-decoration','line-through');
mybuys.setStyle('a.mblistlink:hover','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','normal','text-decoration','line-through');
mybuys.setStyle('.mblistrowspan','text-align','center');
mybuys.setStyle('.mbsalerowleft','float','','text-align','');
mybuys.setStyle('.mbsalerowright','float','','text-align','');
mybuys.setStyle('a.mbsalelink:link','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','bold','text-decoration','none');
mybuys.setStyle('a.mbsalelink:visited','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','bold','text-decoration','none');
mybuys.setStyle('a.mbsalelink:hover','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','bold','text-decoration','none');
mybuys.setStyle('.mbsalerowspan','text-align','center');

mybuys.setStyle('img.mbaddtocart','padding-top','2px','padding-bottom','2px');

mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','a.mbnamelink:link','font-weight','bold');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','.mbpricelinkleft','font-weight','normal');

mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','a.mbpricelinkleft:link','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','normal','text-decoration','none');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','a.mbpricelinkleft:visited','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','normal','text-decoration','none');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','a.mbpricelinkleft:hover','font-family', 'arial, helvetica, verdana','color','#000000','font-size','11px','font-weight','normal','text-decoration','none');

mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','div.mbitem','width','326px','height','150px','padding-right','12px','padding-left','12px','background','url("http://w.p.mybuys.com/clients/MCMELECTRONICS/images/cat-bg.png") no-repeat scroll left top transparent');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','.mbnamerowspan','text-align','left');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','.mbsalerowspan','text-align','right');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','.mbpricerowspan','text-align','right');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','td.mbtop','vertical-align','top');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY','td.mbbottom','vertical-align','bottom');

//mybuys.setStyleByPageType('SHOPPING_CART','.mbzone', 'border-width','1px','border-color','#CCCCCC','border-style','solid');
//mybuys.setStyleByPageType('SHOPPING_CART','.mbitem','width','100px','padding-right','1.1px','padding-left','1px');

mybuys.useOneclkForExistingSignup(true);
mybuys.applyStyles();
mybuys.setFailOverMsecs(5000);

mybuys.processResponseHTML = function(zoneHtmls)
{
  clearTimeout(this.requestProcId);
  if (!this.renderOK) return;
  var leftoverZones=[]
  for (var zk=0;zk<this.zoneKeysToZoneDivIds.length;zk++)
  {
    if (this.zoneKeysToZoneDivIds[zk])
        leftoverZones[zk]=true;
  }
  for (zonekey in zoneHtmls)
  {
    try {if (typeof zoneHtmls[zonekey] == 'function') continue; } catch(e) { continue; };
    var zoneDivId = this.zoneKeysToZoneDivIds[zonekey];
    if (!zoneDivId) continue;
    var zoneDiv = document.getElementById(zoneDivId);
    if (zoneDiv)
    {       
      var zmbc=zoneHtmls[zonekey];
      
      var str1 = zmbc.replace(/\?mybuyscid/g,"&mybuyscid");
      //str1 = str1.replace(/\?green/g,"&green");
      
      zoneDiv.innerHTML=str1;
      leftoverZones[zonekey]=false;
    }
  }
  for (var zk=0;zk<leftoverZones.length;zk++)
  {
    if (leftoverZones[zk])
      this.loadFailoverImage(zk);
   }
   
   if (typeof jQuery != "undefined")
   {
		jQuery("[mybuyszone] span").each
		(
			function()
			{
				var elem = jQuery(this);
				elem.html((elem.html() || "").trim());
			}
		);
   }
};

}