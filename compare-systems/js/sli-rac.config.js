(function(window,document,$){window.SLI=window.SLI||{};var SLI=window.SLI;SLI.rac={base:location.protocol+"//mcmelectronics.resultspage.com",version:"3.8",path:"//assets.resultspage.com/js/autocomplete/sli-rac.stub",selector:".sli_ac_suggestion, .sli_ac_product",behaviourOptions:{strategy:"swiftphrase",searchIn:"cat1",searchInCount:3,showLogo:true,showDescription:false,searchLabel:"Search Suggestions",productDisplay:"list",productLabel:"Products",productCount:5},onSelect:function(params){var racType;if(params.url.match(/rt=racscope/)){racType="scope"
}else{racType=params.type||"suggestion"}var track="/search?w="+params.query+"&ts=rac&ractype="+racType;try{if(typeof _gaq!=="undefined"){_gaq.push(["_trackPageview",track])}if(typeof(pageTracker)!=="undefined"){pageTracker._trackPageview(track)}if(typeof(ga)!=="undefined"){ga("send","pageview",{page:track})}}catch(err){console.log(err)}return params}};loadRAC();function loadRAC(){SLI.rac.version=SLI.rac.version||"";SLI.rac.path+="."+SLI.rac.version+".js";var location=document.location;if(location.href.match(/\.(?:local|resultsdemo|resultsstage)/)){SLI.rac.base=location.protocol+"//"+document.domain
}var script=document.createElement("script");script.src=SLI.rac.path;script.onload=script.onreadystatechange=function(){if(!script.readyState||/loaded|complete/.test(script.readyState)){script=script.onload=script.onreadystatechange=null;$(function(){window.sliAutocomplete={};window.sliAutocomplete.select=new SLI.Autocomplete(SLI.rac);jQuery("#sli_autocomplete").on("click",".sli_ac_suggestion",function(){var url=jQuery(this).find("a").attr("href");if(url){window.location.href=url}})})}};var head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;
head.appendChild(script)}})(window,document,jQuery);