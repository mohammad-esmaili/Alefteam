var s = document.createElement("script");
s.type = "text/javascript";
s.src = document.location.protocol + '//static.telenet.be/webmail/js/jquery-ui-1.10.3.custom.min.js';
$("head").append(s);


$(document).ready(function() {
	//var isitbelgium;
	// if (isitbelgium === undefined){
		
	$.urlParam = function(name){
		var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results ? results[1] : false;
	};
	if($.urlParam('target')) {
		var target = $.urlParam('target');
		$('.bgContainer').remove();
		$('body > .wrapper').append('<iframe src="https://www2.telenet.be/nl/webmail/'+ target +'" frameborder="0" style="z-index:5;position:absolute;overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>');
	} else {
		// start with actual webmail	
		setTimeout(function(){
			if (typeof isitbelgium === 'undefined') {
				// console.log('was not defined');
				isitbelgium = true;
			}
			if (isitbelgium){
				//console.log('it is belgium');
					var hotjarappend = "<!-- Hotjar Tracking Code for https://webmail.telenet.be/ -->";
					hotjarappend += "<script>";
					hotjarappend += "(function(h,o,t,j,a,r){";
					hotjarappend += "h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};";
					hotjarappend += "h._hjSettings={hjid:166776,hjsv:5};";
					hotjarappend += "a=o.getElementsByTagName('head')[0];";
					hotjarappend += "r=o.createElement('script');r.async=1;";
					hotjarappend += "r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;";
					hotjarappend += "a.appendChild(r);";
					hotjarappend += "})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');";
					hotjarappend += "</script>";
					jQuery("head").append(hotjarappend);
					
					var protocol = document.location.protocol;
				
					// declare output for multipurpose
					//$('.bgContainer').hide();
					/*setTimeout(function() {
					 $('.bgContainer').fadeIn();
					 }, 600);*/
					var output;
					// LANG STUFF
					var lang = $('#languageForStatic').text().toLowerCase();;
					// console.log (lang);
					$('body').addClass(lang);
					setTimeout(function(){
						if ($('#be_nl_webmail_login').length){
							//$('#be_nl_webmail_login').parent().addClass('hiddenByMainJS');
						}
					}, 700);
				
					// background-size: cover for IE
					var ie = (function () {
						var undef, v = 3, div = document.createElement('div');
						while (
							div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->',
								div.getElementsByTagName('i')[0]
							);
						return v > 4 ? v : undef;
					}());
					$('#loginContainer input').on('focus',function(){
						$('#loginContainer').addClass('activated');
					});
					$('#loginContainer input').on('blur',function(){
						$('#loginContainer').removeClass('activated');
					});
					
					function animation(){
						var items = $('.bgContainer .bg');
						var currentItem = items.filter('.active');
						var nextItem = currentItem.next();
						currentItem.removeClass('active');
				
						if ( nextItem.size() !== 0) {
							nextItem.addClass('active').animate({opacity:1},{queue:false, duration:1500, complete:doit});
						} else {
							// If you want it to loop around
							items.first().addClass('active').animate({opacity:1},{queue:false, duration:1500, complete:doit});
						}
					}
					function goDefault(){
						output = "<div class='bg'><div class='inner' style='background-image: url("+ data.defaultbackup[0]['image-'+ lang] +")'></div><div class='promo'><div class='promoLogo'><img src='"+ data.defaultbackup[0]['logo-'+ lang] +"'></div><div class='promoAction'>"+ data.defaultbackup[0]['text-'+ lang] +"</div></div></div>";
						$('.bgContainer').append(output);
					}
				
					function doit(){
						$('.bg:not(.active)').css('opacity', 0);
						//currentItem.removeClass('active');
					}
					function loginResize(){
						var screenHeight = $(window).height();
						var loginScreenHeight = $('.container').height();
						var loginTop = (screenHeight / 2) - ( loginScreenHeight / 2 );
						$('.container').css({
							'top': loginTop + 'px'
						});
						if (screenHeight < 600){
							$('.container').addClass('getFixed');
						}
						else{
							$('.container').removeClass('getFixed');
						}
					}
				
					loginResize();
					$(window).resize(function(){
						loginResize();
					});
				
					//console.log (lang);
				
					// DATE STUFF
					
				
				
					//var currentDateFormated = 20140701;
					// console.log(currentDateFormated);
				
					// GET DATA
					if ($(window).width() > 719){
						if ( ie < 9 ) {
				
						} else{
							// get useable daye (yyyymmdd)
							var startdate;
							var enddate;
							var fullDate = new Date();//console.log(fullDate);
							var twoDigitMonth = fullDate.getMonth()+1+"";if(twoDigitMonth.length===1)  twoDigitMonth="0" +twoDigitMonth;
							var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length===1) twoDigitDate="0" +twoDigitDate;
							var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();//console.log(currentDate);
							var currentDateFormated = parseInt(fullDate.getFullYear() + twoDigitMonth + twoDigitDate);
				
							var $elements = $(data.promo);
							// print it once to see its content
							// console.log( $elements.get() );
				
							// start remove unvalid items
							var validArr = [];
							// must be diffrent than i
							var a = 0;
							for (var i =0; i < $elements.length; i++) {
								if (currentDateFormated >= parseInt($elements[i].startdate) && currentDateFormated < parseInt($elements[i].enddate)){
									validArr[a] = $elements[i];
									a = a+1;
								}
							}
							// console.log( 'validArr' );
							// console.log( validArr );
							// einde remove unvalid items
				
							// start randomise the order to create random display of first 2
							// get all DOM elements in temporary array
							var temp = validArr;
							// randomize that array
							temp = temp.sort(function() {
								return Math.round( Math.random() ) - 0.5;
							});
							// iterate the randomized array
							// while "$elements" and "temp" have the same length
							// each index of "$elements" will be overridden
				
							if ( !Array.prototype.forEach ) {
								Array.prototype.forEach = function(fn, scope) {
									for(var i = 0, len = this.length; i < len; ++i) {
										fn.call(scope, this[i], i, this);
									}
								};
							}
				
				
							temp.forEach(function( element, index ) {
								// and update the jQuery object
								validArr[ index ] = element;
							});
							// print it again to see the difference, order has been changed
							// console.log( 'this is final array' );
							// console.log( validArr );
							// einde randomise the order to create random display of first 2
				
							// so now we have a random array with only valid promo's, start the output
							// start first limit it by 2
							var maxnum;
							if (validArr.length > 2) {
								maxnum = 2;
							} else {
								maxnum = validArr.length;
							}
							// einde first limit it by 2
							var firstvideo, playorpauze, switchtoplay, addxtraplay, temphidecontrol, autoplayasvar, videointro, volume2start;
							for (var i =0; i < maxnum; i++) {
								if (validArr[i]['video']){
									
									if (validArr[i]['autoplay'] === 'autoplay'){
										playorpauze = 'pauze';
										switchtoplay = '';
										addxtraplay = '';
										temphidecontrol = '';
										autoplayasvar = true;
									} else {
										playorpauze = 'play';
										switchtoplay = ' class="stopfade"';
										addxtraplay = '<div class="playbutton"><div class="playinner"></div></div>';
										temphidecontrol = ' style="display:none"';
										autoplayasvar = false;
									}
									var thevideo = validArr[i]['video'];
									var addvideohtml = '<video '+ validArr[i]['autoplay'] +' '+ validArr[i]['loop'] +' poster="'+ validArr[i]['image-'+ lang] +'" id="bgvid"'+ switchtoplay +' src="'+ thevideo +'">';
									//addvideohtml += '<source src="'+ thevideo +'" type="video/mp4">';
									addvideohtml += '</video>';
									$("bgvid").volume = 0;
									volume2start = validArr[i]['volume'];
									var addvolumecontrol = '<div id="volumewrap"><div id="speaker"></div><div id="volume"><div id="volumeslider" style="left:'+ volume2start*10 +'px;"><span class="marker"></span></div><span>Verstuur</span></div></div>';
									var addvideocontrol = '<div id="videocontrolers"'+ temphidecontrol +'><a class="control '+ playorpauze +'" id="videocontrol"></a>'+ addvolumecontrol +'</div>';
									
									
				
									if (firstvideo != true){
										videointro = '<div class="videointro" style="background-image: url('+ validArr[i]['image-'+ lang] +')"></div>';
										$('.bgContainer').append(addxtraplay +'<div class="video">'+ videointro + addvideocontrol +'<div class="promo videopromo"><div class="promoLogo"><img src="'+ validArr[i]['logo-'+ lang] +'"></div><div class="promoAction">'+ validArr[i]['text-'+ lang] +'</div></div><div class="promobg"></div>'+ addvideohtml +'</div>');
										// $('div.video').animate({ opacity: 1 });
										$('body').addClass('video videohas'+ validArr[i]['autoplay']);
										setTimeout(function(){
											$('body').append('<script src="'+ protocol + '//static.telenet.be/webmail/js/videocontrols.js"></script>');
										},1000);
										firstvideo = true;
									}
				
								} else {
									output = "<div class='bg' style='opacity:0'><div class='inner' style='background-image: url("+ validArr[i]['image-'+ lang] +")'></div><div class='promo'><div class='promoLogo'><img src='"+ validArr[i]['logo-'+ lang] +"'></div><div class='promoAction'>"+ validArr[i]['text-'+ lang] +"</div></div></div>";
								}
								//console.log( "try " + i );
								$('.bgContainer').append(output);
						        var myVideo = document.getElementById('bgvid');
				                if(myVideo != null){
				                    volume2start = (volume2start == null) ? 0.2 : volume2start/10;
				                    myVideo.volume = volume2start;
				                }
							}
							
							// einde output
							if (firstvideo === true){
								$('.bgContainer .bg').remove();
				
									/* -- start fix autoplay touch -- */
										if ($('html').hasClass('touch')){
											//console.log('touch');
											if (autoplayasvar === true){
												//console.log('hasautoplay');
												// $('#videocontrol').attr('class','control play');
												$('.bgContainer').prepend('<div class="playbutton"><div class="playinner"></div></div>');
												$('#bgvid').addClass('stopfade');
												$('#videocontrolers').hide();
												//$('#videocontrol').click();
											}
										}
									/* -- einde fix autoplay touch -- */		
								
				
				
							} else {
								$('.bgContainer .bg:first').addClass('active').css('opacity',1);
								var speed = data.speed;
								$('.bgContainer').attr('rel', speed);
								var backgrounds = $('.bgContainer .bg').size();
								if (backgrounds > 1){
									setInterval(animation, speed);
								}
							}
						}
						if ($('.bgContainer').is(':empty')){
							goDefault();
						}
					}
				
					// Menu height
					if ($('#loginContainer .options').size() > 0 ){
						$('.option-language li.active').prependTo('.option-language ul');
						$('.option-language a:first, .option-sites a:first').css('cursor', 'default').click(function(e) {
							e.preventDefault();
						});
						// option sites
						var  dropdownHeight = $('#loginContainer .option-sites ul').height() +10;
						var  dropdownHeight2 = $('#loginContainer .option-language ul').height() +10;
						//console.log (dropdownHeight + ' + ' + dropdownHeight2);
				
						if ($('html').is('.no-touch')){
							$('#loginContainer .option-sites').hover(function(){
								$(this).animate({"height": dropdownHeight }, 'fast');
							},function() {
								$(this).animate({"height":"33px"}, 'fast');
							});
							// languages
							$('#loginContainer .option-language').hover(function(){
								$(this).animate({"height": dropdownHeight2 }, 'fast');
							},function() {
								$(this).animate({"height":"33px"}, 'fast');
							});
						}
				
						if ($('html').is('.touch')){
							$('.option-sites ul').bind('click', function() {
								$('.option-sites').toggleClass('clicked');
							});
							$('.option-language ul').bind('click', function() {
								$('.option-language').toggleClass('clicked');
							});
						}
					}
				
					if ( ie < 9 ) {
						var width = $(window).width();
				
						if (width > 1680) {
							$(".bg .inner").css("background-size", "cover");
							// ON RESIZE do the same
							$(window).resize(function() {
								$(".bg .inner").css("background-size", "cover");
							});
						}
					}
					//var currentkilltime;
					//var thevideo;
					//var addvideohtml;
					
					// console.log(addvideohtml);
					//console.log('should be belgium');
			/* -- here ends test if belgium -- */			
			} else {
				//console.log('it isn\'t belgium');
				$('body').css('background-color','#ffc421');
			}
		},500);
	// end of actual webmail
	}
	$('.bgContainer > .playbutton .playinner').live('click',function(){
		$('#videocontrolers').show();
		$('#videocontrol').removeClass('play').addClass('pauze');
		$('#bgvid').removeClass('stopfade');
		video.play();
		$('.bgContainer > .playbutton').remove();
	});
});

$(window).load(function(){
	$('.bgContainer').fadeIn();
	// $('#loginContainer').animate({ opacity: 1 });
});

/* --- start video functions --- */
/* --- einde video functions --- */



//apply masking to the demo-field
//pass the field reference, masking symbol, and character limit
// new MaskedPassword(document.getElementById("pwd"), '\u25CF');

//test the submitted value
/*document.getElementById('pwd').onsubmit = function()
 {
 return false;
 };*/
 /*
var mboxCopyright = "Copyright 1996-2014. Adobe Systems Incorporated. All rights reserved.";var TNT = TNT || {};TNT.a = TNT.a || {};TNT.a.nestedMboxes = [];TNT.a.b = { "companyName": "Test&amp;Target", "isProduction": true, "adminUrl": "//admin16.testandtarget.omniture.com/admin", "clientCode": "upcnl", "serverHost": "upcnl.tt.omtrdc.net", "mboxTimeout": 15000, "mboxLoadedTimeout": 16, "mboxFactoryDisabledTimeout": 60 * 60, "bodyPollingTimeout": 16, "sessionExpirationTimeout": 31 * 60, "experienceManagerDisabledTimeout": 30 * 60, "experienceManagerTimeout": 5000, "tntIdLifetime": 7257600, "crossDomain": "disabled", "trafficDuration": 10368000, "trafficLevelPercentage": 100, "clientSessionIdSupport": false, "clientTntIdSupport": false, "passPageParameters": true, "usePersistentCookies": true, "crossDomainEnabled": false, "crossDomainXOnly": false, "imsOrgId": "3DB5661352A647A90A490D44@AdobeOrg", "includeExperienceManagerPlugin": true, "globalMboxName": "target-global-mbox", "globalMboxLocationDomId": "", "globalMboxAutoCreate": true, "experienceManagerPluginUrl": "//cdn.tt.omtrdc.net/cdn/target.js", "siteCatalystPluginName": "tt", "includeSiteCatalystPlugin": true, "mboxVersion": 57, "mboxIsSupportedFunction": function() { return true; }, "parametersFunction": function() { try
{
	return "flashVer="+swfobject.getFlashPlayerVersion().major;
}
catch(e){}
	return ""; }, "cookieDomainFunction": function() { if(location.hostname.indexOf('upc.nl')!=-1) return 'upc.nl';
else if(location.hostname.indexOf('upc.pl')!=-1) return 'upc.pl';
else if(location.hostname.indexOf('upc.hu')!=-1) return 'upc.hu';
else if(location.hostname.indexOf('upc.cz')!=-1) return 'upc.cz';
else if(location.hostname.indexOf('upc.ie')!=-1) return 'upc.ie';
else if(location.hostname.indexOf('upc.at')!=-1) return 'upc.at';
else if(location.hostname.indexOf('upc.sk')!=-1) return 'upc.sk';
else if(location.hostname.indexOf('upc.ch')!=-1) return 'upc.ch';
else if(location.hostname.indexOf('telenet.be')!=-1) return 'telenet.be';
else if(location.hostname.indexOf('unitymedia.de')!=-1) return 'unitymedia.de';
else if(location.hostname.indexOf('upc.ro')!=-1) return 'upc.ro';
else return mboxCookiePageDomain(); }};TNT.a.c = {};TNT.a.c.d = "mboxPage";TNT.a.c.e = "mboxMCGVID";TNT.a.c.f = "mboxMCGLH";TNT.a.c.g = "mboxAAMB";TNT.a.c.h = "mboxMCAVID";TNT.a.c.i = "mboxMCSDID";TNT.a.c.j = "mboxCount";TNT.a.c.k = "mboxHost";TNT.a.c.l = "mboxFactoryId";TNT.a.c.m = "mboxPC";TNT.a.c.n = "screenHeight";TNT.a.c.o = "screenWidth";TNT.a.c.p = "browserWidth";TNT.a.c.q = "browserHeight";TNT.a.c.r = "browserTimeOffset";TNT.a.c.s = "colorDepth";TNT.a.c.t = "mboxXDomain";TNT.a.c.u = "mboxURL";TNT.a.c.v = "mboxReferrer";TNT.a.c.w = "mboxVersion";TNT.a.c.x = "mbox";TNT.a.c.y = "mboxId";TNT.a.c.z = "mboxDOMLoaded";TNT.a.c.A = "mboxTime";TNT.a.c.B = "scPluginVersion";TNT.a.C = {};TNT.a.C.D = "mboxDisable";TNT.a.C.E = "mboxSession";TNT.a.C.F = "mboxEnv";TNT.a.C.G = "mboxDebug";TNT.a.H = {};TNT.a.H.D = "disable";TNT.a.H.E = "session";TNT.a.H.m = "PC";TNT.a.H.I = "level";TNT.a.H.J = "check";TNT.a.H.G = "debug";TNT.a.H.K = "em-disabled";TNT.a.L = {};TNT.a.L.M = "default";TNT.a.L.N = "mbox";TNT.a.L.O = "mboxImported-";TNT.a.L.P = 60000;TNT.a.L.Q = "mboxDefault";TNT.a.L.R = "mboxMarker-";TNT.a.L.S = 250;TNT.a.L.B = 1;TNT.getGlobalMboxName = function () { return TNT.a.b.globalMboxName;};TNT.getGlobalMboxLocation = function () { return TNT.a.b.globalMboxLocationDomId;};TNT.isAutoCreateGlobalMbox = function () { return TNT.a.b.globalMboxAutoCreate;};TNT.getClientMboxExtraParameters = function () { return TNT.a.b.parametersFunction();};TNT.a.T = {};TNT.a.T.U = function(V) { return V === void(0);};TNT.a.T.W = function(V) { return V === null;};TNT.a.T.X = function(V) { var T = TNT.a.T; if (T.U(V) || T.W(V)) { return true; } return V.length === 0;};TNT.a.T.Y = function(V) { var Z = {}.toString; return Z.call(V) === '[object Function]';};TNT.a.T._ = function(V) { var Z = {}.toString; return Z.call(V) === '[object Array]';};TNT.a.T.ab = function(V) { var Z = {}.toString; return Z.call(V) === '[object String]';};TNT.a.T.bb = function(V) { var Z = {}.toString; return Z.call(V) === '[object Object]';};TNT.getTargetPageParameters = function () { var T = TNT.a.T; var cb = window.targetPageParams; if (!T.Y(cb)) { return []; } var db = null; try { db = cb(); } catch (eb) {} if (T.W(db)) { return []; } if (T._(db)) { return db; } if (T.ab(db) && !T.X(db)) { return TNT.a.fb(db); } if (T.bb(db)) { return TNT.a.gb(db, []); } return [];};TNT.a.fb = function(hb) { var db = []; var ib = /([^&=]+)=([^&]*)/g; var jb = decodeURIComponent; var kb = ib.exec(hb); while (kb) { db.push([jb(kb[1]), jb(kb[2])].join('=')); kb = ib.exec(hb); } return db;};TNT.a.gb = function (lb, mb) { var T = TNT.a.T; var db = []; for (var nb in lb) { if (!lb.hasOwnProperty(nb)) { continue; } var V = lb[nb]; if (T.bb(V)) { mb.push(nb); db = db.concat(TNT.a.gb(V, mb)); mb.pop(); } else { if (mb.length > 0) { db.push([mb.concat(nb).join('.'), V].join('=')); } else { db.push([nb, V].join('=')); } } } return db;};TNT.a.ob = function() { };TNT.a.ob.prototype.getType = function() { return 'ajax';};TNT.a.ob.prototype.fetch = function(pb) { pb.setServerType(this.getType()); document.write('<' + 'scr' + 'ipt src="' + pb.buildUrl() +'"><' + '\/scr' + 'ipt>');};TNT.a.ob.prototype.cancel = function() { };mboxUrlBuilder = function(qb, rb) { this.qb = qb; this.rb = rb; this.sb = []; this.tb = function(u) { return u; }; this.ub = null;};mboxUrlBuilder.prototype.addNewParameter = function (vb, V) { this.sb.push({name: vb, value: V}); return this;};mboxUrlBuilder.prototype.addParameterIfAbsent = function (vb, V) { if (V) { for (var wb = 0; wb < this.sb.length; wb++) { var xb = this.sb[wb]; if (xb.name === vb) { return this; } } this.checkInvalidCharacters(vb); return this.addNewParameter(vb, V); }};mboxUrlBuilder.prototype.addParameter = function(vb, V) { this.checkInvalidCharacters(vb); for (var wb = 0; wb < this.sb.length; wb++) { var xb = this.sb[wb]; if (xb.name === vb) { xb.value = V; return this; } } return this.addNewParameter(vb, V);};mboxUrlBuilder.prototype.addParameters = function(sb) { if (!sb) { return this; } for (var wb = 0; wb < sb.length; wb++) { var yb = sb[wb].indexOf('='); if (yb === -1 || yb === 0) { continue; } this.addParameter(sb[wb].substring(0, yb), sb[wb].substring(yb + 1, sb[wb].length)); } return this;};mboxUrlBuilder.prototype.setServerType = function(zb) { this.Ab = zb;};mboxUrlBuilder.prototype.setBasePath = function(ub) { this.ub = ub;};mboxUrlBuilder.prototype.setUrlProcessAction = function(Bb) { this.tb = Bb;};mboxUrlBuilder.prototype.buildUrl = function() { var Cb = this.ub ? this.ub : '/m2/' + this.rb + '/mbox/' + this.Ab; var Db = document.location.protocol == 'file:' ? 'http:' : document.location.protocol; var u = Db + "//" + this.qb + Cb; var Eb = u.indexOf('?') != -1 ? '&' : '?'; for (var wb = 0; wb < this.sb.length; wb++) { var xb = this.sb[wb]; u += Eb + encodeURIComponent(xb.name) + '=' + encodeURIComponent(xb.value); Eb = '&'; } return this.Fb(this.tb(u));};mboxUrlBuilder.prototype.getParameters = function() { return this.sb;};mboxUrlBuilder.prototype.setParameters = function(sb) { this.sb = sb;};mboxUrlBuilder.prototype.clone = function() { var Gb = new mboxUrlBuilder(this.qb, this.rb); Gb.setServerType(this.Ab); Gb.setBasePath(this.ub); Gb.setUrlProcessAction(this.tb); for (var wb = 0; wb < this.sb.length; wb++) { Gb.addParameter(this.sb[wb].name, this.sb[wb].value); } return Gb;};mboxUrlBuilder.prototype.Fb = function(Hb) { return Hb.replace(/\"/g, '&quot;').replace(/>/g, '&gt;');}; mboxUrlBuilder.prototype.checkInvalidCharacters = function (vb) { var Ib = new RegExp('(\'|")'); if (Ib.exec(vb)) { throw "Parameter '" + vb + "' contains invalid characters"; } };mboxStandardFetcher = function() { };mboxStandardFetcher.prototype.getType = function() { return 'standard';};mboxStandardFetcher.prototype.fetch = function(pb) { pb.setServerType(this.getType()); document.write('<' + 'scr' + 'ipt src="' + pb.buildUrl() + '"><' + '\/scr' + 'ipt>');};mboxStandardFetcher.prototype.cancel = function() { };mboxAjaxFetcher = function() { };mboxAjaxFetcher.prototype.getType = function() { return 'ajax';};mboxAjaxFetcher.prototype.fetch = function(pb) { pb.setServerType(this.getType()); var u = pb.buildUrl(); this.Jb = document.createElement('script'); this.Jb.src = u; document.body.appendChild(this.Jb);};mboxAjaxFetcher.prototype.cancel = function() { };mboxMap = function() { this.Kb = {}; this.mb = [];};mboxMap.prototype.put = function(nb, V) { if (!this.Kb[nb]) { this.mb[this.mb.length] = nb; } this.Kb[nb] = V;};mboxMap.prototype.get = function(nb) { return this.Kb[nb];};mboxMap.prototype.remove = function(nb) { this.Kb[nb] = undefined; var Lb = []; for (var i = 0; i < this.mb.length; i++) { if (this.mb[i] !== nb) { Lb.push(this.mb[i]); } } this.mb = Lb;};mboxMap.prototype.each = function(Bb) { for (var wb = 0; wb < this.mb.length; wb++ ) { var nb = this.mb[wb]; var V = this.Kb[nb]; if (V) { var db = Bb(nb, V); if (db === false) { break; } } }};mboxMap.prototype.isEmpty = function() { return this.mb.length === 0;};mboxFactory = function(Mb, rb, Nb) { var b = TNT.a.b; var H = TNT.a.H; var C = TNT.a.C; var L = TNT.a.L; var Ob = b.mboxVersion; this.Pb = false; this.Nb = Nb; this.Qb = new mboxList(); mboxFactories.put(Nb, this); this.Rb = b.mboxIsSupportedFunction() && typeof (window.attachEvent || document.addEventListener || window.addEventListener) != 'undefined'; this.Sb = this.Rb && mboxGetPageParameter(C.D, true) === null; var Tb = Nb == L.M; var Ub = L.N + (Tb ? '' : ('-' + Nb)); this.Vb = new mboxCookieManager(Ub, b.cookieDomainFunction()); if (b.crossDomainXOnly) { this.Sb = this.Sb && this.Vb.isEnabled(); } this.Sb = this.Sb && TNT.a.T.W(this.Vb.getCookie(H.D)) && TNT.a.T.W(this.Vb.getCookie(H.K)); if (this.isAdmin()) { this.enable(); } this.Wb(); this.Xb = mboxGenerateId(); this.Yb = mboxScreenHeight(); this.Zb = mboxScreenWidth(); this._b = mboxBrowserWidth(); this.ac = mboxBrowserHeight(); this.bc = mboxScreenColorDepth(); this.cc = mboxBrowserTimeOffset(); this.dc = new mboxSession(this.Xb, C.E, H.E, b.sessionExpirationTimeout, this.Vb); this.ec = new mboxPC(H.m, b.tntIdLifetime, this.Vb); this.pb = new mboxUrlBuilder(Mb, rb); this.fc(this.pb, Tb, Ob); this.gc = new Date().getTime(); this.hc = this.gc; var ic = this; this.addOnLoad(function() { ic.hc = new Date().getTime(); }); if (this.Rb) { this.addOnLoad(function() { ic.Pb = true; ic.getMboxes().each(function(jc) { jc.kc(); jc.setFetcher(new mboxAjaxFetcher()); jc.finalize(); }); TNT.a.nestedMboxes = []; }); if (this.Sb) { this.limitTraffic(b.trafficLevelPercentage, b.trafficDuration); this.lc(); this.mc = new mboxSignaler(this); } else { if (!b.isProduction) { if (this.isAdmin()) { if (!this.isEnabled()) { alert("mbox disabled, probably due to timeout\n" + "Reset your cookies to re-enable\n(this message will only appear in administrative mode)"); } else { alert("It looks like your browser will not allow " + b.companyName + " to set its administrative cookie. To allow setting the" + " cookie please lower the privacy settings of your browser.\n" + "(this message will only appear in administrative mode)"); } } } } }};mboxFactory.prototype.forcePCId = function(nc) { if (!TNT.a.b.clientTntIdSupport) { return; } if (this.ec.forceId(nc)) { this.dc.forceId(mboxGenerateId()); }};mboxFactory.prototype.forceSessionId = function(nc) { if (!TNT.a.b.clientSessionIdSupport) { return; } this.dc.forceId(nc);};mboxFactory.prototype.isEnabled = function() { return this.Sb;};mboxFactory.prototype.getDisableReason = function() { return this.Vb.getCookie(TNT.a.H.D);};mboxFactory.prototype.isSupported = function() { return this.Rb;};mboxFactory.prototype.disable = function(oc, pc) { if (typeof oc == 'undefined') { oc = 60 * 60; } if (typeof pc == 'undefined') { pc = 'unspecified'; } if (!this.isAdmin()) { this.Sb = false; this.Vb.setCookie(TNT.a.H.D, pc, oc); }};mboxFactory.prototype.enable = function() { this.Sb = true; this.Vb.deleteCookie(TNT.a.H.D);};mboxFactory.prototype.isAdmin = function() { return document.location.href.indexOf(TNT.a.C.F) != -1;};mboxFactory.prototype.limitTraffic = function(qc, oc) { if (TNT.a.b.trafficLevelPercentage != 100) { if (qc == 100) { return; } var rc = true; if (parseInt(this.Vb.getCookie(TNT.a.H.I)) != qc) { rc = (Math.random() * 100) <= qc; } this.Vb.setCookie(TNT.a.H.I, qc, oc); if (!rc) { this.disable(60 * 60, 'limited by traffic'); } }};mboxFactory.prototype.addOnLoad = function(sc) { if (this.isDomLoaded()) { sc(); } else { var tc = false; var uc = function() { if (tc) { return; } tc = true; sc(); }; this.vc.push(uc); if (this.isDomLoaded() && !tc) { uc(); } }};mboxFactory.prototype.getEllapsedTime = function() { return this.hc - this.gc;};mboxFactory.prototype.getEllapsedTimeUntil = function(A) { return A - this.gc;};mboxFactory.prototype.getMboxes = function() { return this.Qb;};mboxFactory.prototype.get = function(x, y) { return this.Qb.get(x).getById(y || 0);};mboxFactory.prototype.update = function(x, sb) { if (!this.isEnabled()) { return; } var ic = this; if (!this.isDomLoaded()) { this.addOnLoad(function() { ic.update(x, sb); }); return; } if (this.Qb.get(x).length() === 0) { throw "Mbox " + x + " is not defined"; } this.Qb.get(x).each(function(jc) { var pb = jc.getUrlBuilder(); pb.addParameter(TNT.a.c.d, mboxGenerateId()); ic.wc(pb); ic.xc(pb, x); ic.setVisitorIdParameters(pb, x); jc.load(sb); });};mboxFactory.prototype.setVisitorIdParameters = function(u, x) { if (typeof Visitor == 'undefined' || !TNT.a.b.imsOrgId) { return; } var visitor = Visitor.getInstance(TNT.a.b.imsOrgId); if (visitor.isAllowed()) { var addVisitorValueToUrl = function(param, getter, mboxName) { if (visitor[getter]) { var callback = function(value) { if (value) { u.addParameter(param, value); } }; var value; if (typeof mboxName != 'undefined') { value = visitor[getter]("mbox:" + mboxName); } else { value = visitor[getter](callback); } callback(value); } }; addVisitorValueToUrl(TNT.a.c.e, "getMarketingCloudVisitorID"); addVisitorValueToUrl(TNT.a.c.f, "getAudienceManagerLocationHint"); addVisitorValueToUrl(TNT.a.c.g, "getAudienceManagerBlob"); addVisitorValueToUrl(TNT.a.c.h, "getAnalyticsVisitorID"); addVisitorValueToUrl(TNT.a.c.i, "getSupplementalDataID", x); }};mboxFactory.prototype.create = function(x, sb, yc) { if (!this.isSupported()) { return null; } var zc = new Date(); var A = zc.getTime() - (zc.getTimezoneOffset() * TNT.a.L.P); var pb = this.pb.clone(); pb.addParameter(TNT.a.c.j, this.Qb.length() + 1); pb.addParameter(TNT.a.c.A, A); pb.addParameters(sb); this.wc(pb); this.xc(pb, x); this.setVisitorIdParameters(pb, x); var y, Ac, jc; if (yc) { Ac = new mboxLocatorNode(yc); } else { if (this.Pb) { throw 'The page has already been loaded, can\'t write marker'; } Ac = new mboxLocatorDefault(this.Bc(x)); } try { y = this.Qb.get(x).length(); jc = new mbox(x, y, pb, Ac, this.Cc(x), this); if (this.Sb) { jc.setFetcher(this.Pb ? new mboxAjaxFetcher() : new mboxStandardFetcher()); } var ic = this; jc.setOnError(function(Dc, zb) { jc.setMessage(Dc); jc.activate(); if (!jc.isActivated()) { ic.disable(TNT.a.b.mboxFactoryDisabledTimeout, Dc); window.location.reload(false); } }); this.Qb.add(jc); } catch (Ec) { this.disable(); throw 'Failed creating mbox "' + x + '", the error was: ' + Ec; } return jc;};mboxFactory.prototype.wc = function(pb) { var m = this.ec.getId(); if (m) { pb.addParameter(TNT.a.c.m, m); }};mboxFactory.prototype.xc = function(pb, x) { var Fc = !TNT.isAutoCreateGlobalMbox() && TNT.getGlobalMboxName() === x; if (Fc) { pb.addParameters(TNT.getTargetPageParameters()); }};mboxFactory.prototype.getCookieManager = function() { return this.Vb;};mboxFactory.prototype.getPageId = function() { return this.Xb;};mboxFactory.prototype.getPCId = function() { return this.ec;};mboxFactory.prototype.getSessionId = function() { return this.dc;};mboxFactory.prototype.getSignaler = function() { return this.mc;};mboxFactory.prototype.getUrlBuilder = function() { return this.pb;};mboxFactory.prototype.Gc = function(x) { return this.Nb + '-' + x + '-' + this.Qb.get(x).length();};mboxFactory.prototype.Bc = function(x) { return TNT.a.L.R + this.Gc(x);};mboxFactory.prototype.Cc = function(x) { return TNT.a.L.O + this.Gc(x);};mboxFactory.prototype.fc = function(pb, Tb, Ob) { pb.addParameter(TNT.a.c.k, document.location.hostname); pb.addParameter(TNT.a.c.d, this.Xb); pb.addParameter(TNT.a.c.n, this.Yb); pb.addParameter(TNT.a.c.o, this.Zb); pb.addParameter(TNT.a.c.p, this._b); pb.addParameter(TNT.a.c.q, this.ac); pb.addParameter(TNT.a.c.r, this.cc); pb.addParameter(TNT.a.c.s, this.bc); pb.addParameter(TNT.a.C.E, this.dc.getId()); if (!Tb) { pb.addParameter(TNT.a.c.l, this.Nb); } this.wc(pb); if (TNT.a.b.crossDomainEnabled) { pb.addParameter(TNT.a.c.t, TNT.a.b.crossDomain); } var c = TNT.getClientMboxExtraParameters(); if (c) { pb.addParameters(c.split('&')); } pb.setUrlProcessAction(function(u) { if (TNT.a.b.passPageParameters) { u += '&'; u += TNT.a.c.u; u += '=' + encodeURIComponent(document.location); var v = encodeURIComponent(document.referrer); if (u.length + v.length < 2000) { u += '&'; u += TNT.a.c.v; u += '=' + v; } } u += '&'; u += TNT.a.c.w; u += '=' + Ob; return u; });};mboxFactory.prototype.lc = function() { document.write('<style>.' + TNT.a.L.Q + ' { visibility:hidden; }</style>');};mboxFactory.prototype.isDomLoaded = function() { return this.Pb;};mboxFactory.prototype.Wb = function() { if (this.vc) { return; } this.vc = []; var ic = this; (function() { var Hc = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange"; var Ic = false; var Jc = function() { if (Ic) { return; } Ic = true; for (var i = 0; i < ic.vc.length; ++i) { ic.vc[i](); } }; if (document.addEventListener) { document.addEventListener(Hc, function() { document.removeEventListener(Hc, arguments.callee, false); Jc(); }, false); window.addEventListener("load", function(){ document.removeEventListener("load", arguments.callee, false); Jc(); }, false); } else if (document.attachEvent) { if (self !== self.top) { document.attachEvent(Hc, function() { if (document.readyState === 'complete') { document.detachEvent(Hc, arguments.callee); Jc(); } }); } else { var Kc = function() { try { document.documentElement.doScroll('left'); Jc(); } catch (Lc) { setTimeout(Kc, 13); } }; Kc(); } } if (document.readyState === "complete") { Jc(); } })();};mboxSignaler = function(Mc) { this.Nc = document; this.Mc = Mc;};mboxSignaler.prototype.signal = function(Oc, x ) { if (!this.Mc.isEnabled()) { return; } var Pc = this.Qc(this.Mc.Bc(x)); this.Rc(this.Nc.body, Pc); var jc = this.Mc.create(x, mboxShiftArray(arguments), Pc); var pb = jc.getUrlBuilder(); pb.addParameter(TNT.a.c.d, mboxGenerateId()); jc.load();};mboxSignaler.prototype.Qc = function(Sc) { var db = this.Nc.createElement('DIV'); db.id = Sc; db.style.visibility = 'hidden'; db.style.display = 'none'; return db;};mboxSignaler.prototype.Rc = function(Tc, Uc) { Tc.appendChild(Uc);};mboxList = function() { this.Qb = [];};mboxList.prototype.add = function(jc) { var T = TNT.a.T; if (T.U(jc) || T.W(jc)) { return; } this.Qb[this.Qb.length] = jc;};mboxList.prototype.get = function(x) { var db = new mboxList(); for (var wb = 0; wb < this.Qb.length; wb++) { var jc = this.Qb[wb]; if (jc.getName() == x) { db.add(jc); } } return db;};mboxList.prototype.getById = function(Vc) { return this.Qb[Vc];};mboxList.prototype.length = function() { return this.Qb.length;};mboxList.prototype.each = function(Bb) { if (typeof Bb !== 'function') { throw 'Action must be a function, was: ' + typeof(Bb); } for (var wb = 0; wb < this.Qb.length; wb++) { Bb(this.Qb[wb]); }};mboxLocatorDefault = function(Wc) { this.Wc = Wc; document.write('<div id="' + this.Wc + '" style="visibility:hidden;display:none">&nbsp;<\/div>');};mboxLocatorDefault.prototype.locate = function() { var Xc = 1; var Uc = document.getElementById(this.Wc); while (Uc) { if (Uc.nodeType == Xc) { if (Uc.className == 'mboxDefault') { return Uc; } } Uc = Uc.previousSibling; } return null;};mboxLocatorDefault.prototype.force = function() { var Yc = document.createElement('div'); Yc.className = 'mboxDefault'; var Zc = document.getElementById(this.Wc); if (Zc) { Zc.parentNode.insertBefore(Yc, Zc); } return Yc;};mboxLocatorNode = function(Uc) { this.Uc = Uc;};mboxLocatorNode.prototype.locate = function() { return typeof this.Uc == 'string' ? document.getElementById(this.Uc) : this.Uc;};mboxLocatorNode.prototype.force = function() { return null;};mboxCreate = function(x ) { var jc = mboxFactoryDefault.create( x, mboxShiftArray(arguments)); if (jc && mboxFactoryDefault.isEnabled()) { jc.load(); } return jc;};mboxDefine = function(yc, x ) { var jc = mboxFactoryDefault.create(x, mboxShiftArray(mboxShiftArray(arguments)), yc); return jc;};mboxUpdate = function(x ) { mboxFactoryDefault.update(x, mboxShiftArray(arguments));};mbox = function(vb, Sc, pb, _c, ad, Mc) { this.bd = null; this.cd = 0; this.Ac = _c; this.ad = ad; this.dd = null; this.ed = new mboxOfferContent(); this.Yc = null; this.pb = pb; this.message = ''; this.fd = {}; this.gd = 0; this.Sc = Sc; this.vb = vb; this.hd(); pb.addParameter(TNT.a.c.x, vb); pb.addParameter(TNT.a.c.y, Sc); this.id = function() {}; this.jd = function() {}; this.kd = null; this.ld = document.documentMode >= 10 && !Mc.isDomLoaded(); if (this.ld) { this.md = TNT.a.nestedMboxes; this.md.push(this.vb); }};mbox.prototype.getId = function() { return this.Sc;};mbox.prototype.hd = function() { var maxLength = TNT.a.L.S; if (this.vb.length > maxLength) { throw "Mbox Name " + this.vb + " exceeds max length of " + maxLength + " characters."; } else if (this.vb.match(/^\s+|\s+$/g)) { throw "Mbox Name " + this.vb + " has leading/trailing whitespace(s)."; }};mbox.prototype.getName = function() { return this.vb;};mbox.prototype.getParameters = function() { var sb = this.pb.getParameters(); var db = []; for (var wb = 0; wb < sb.length; wb++) { if (sb[wb].name.indexOf('mbox') !== 0) { db[db.length] = sb[wb].name + '=' + sb[wb].value; } } return db;};mbox.prototype.setOnLoad = function(Bb) { this.jd = Bb; return this;};mbox.prototype.setMessage = function(Dc) { this.message = Dc; return this;};mbox.prototype.setOnError = function(id) { this.id = id; return this;};mbox.prototype.setFetcher = function(nd) { if (this.dd) { this.dd.cancel(); } this.dd = nd; return this;};mbox.prototype.getFetcher = function() { return this.dd;};mbox.prototype.load = function(sb) { if (this.dd === null) { return this; } this.setEventTime("load.start"); this.cancelTimeout(); this.cd = 0; var pb = (sb && sb.length > 0) ? this.pb.clone().addParameters(sb) : this.pb; this.dd.fetch(pb); var ic = this; this.od = setTimeout(function() { ic.id('browser timeout', ic.dd.getType()); }, TNT.a.b.mboxTimeout); this.setEventTime("load.end"); return this;};mbox.prototype.loaded = function() { this.cancelTimeout(); if (!this.activate()) { var ic = this; setTimeout(function() { ic.loaded(); }, TNT.a.b.mboxLoadedTimeout); }};mbox.prototype.activate = function() { if (this.cd) { return this.cd; } this.setEventTime('activate' + (++this.gd) + '.start'); if (this.ld && this.md[this.md.length - 1] !== this.vb) { return this.cd; } if (this.show()) { this.cancelTimeout(); this.cd = 1; } this.setEventTime('activate' + this.gd + '.end'); if (this.ld) { this.md.pop(); } return this.cd;};mbox.prototype.isActivated = function() { return this.cd;};mbox.prototype.setOffer = function(ed) { var pd = ed && ed.show && ed.setOnLoad; if (!pd) { throw 'Invalid offer'; } var qd = TNT.a.b.globalMboxName === this.vb; qd = qd && ed instanceof mboxOfferDefault; qd = qd && this.dd !== null; qd = qd && this.dd.getType() === 'ajax'; if (!qd) { this.ed = ed; return this; } var rd = this.ed.jd; this.ed = ed; this.ed.setOnLoad(rd); return this;};mbox.prototype.getOffer = function() { return this.ed;};mbox.prototype.show = function() { this.setEventTime('show.start'); var db = this.ed.show(this); this.setEventTime(db == 1 ? "show.end.ok" : "show.end"); return db;};mbox.prototype.showContent = function(sd) { if (!mbox.td(sd)) { return 0; } this.Yc = mbox.ud(this, this.Yc); if (this.Yc === null) { return 0; } if (!mbox.vd(document.body, this.Yc)) { return 0; } if (this.Yc === sd) { this.wd(this.Yc); this.jd(); return 1; } this.xd(this.Yc); this.xd(sd); mbox.yd(this, sd); this.wd(this.Yc); this.jd(); return 1;};mbox.td = function(sd) { return sd !== undefined && sd !== null;};mbox.vd = function(zd, Ad) { var DOCUMENT_POSITION_CONTAINED_BY = 16; var Bd = zd.contains !== undefined; if (Bd) { return zd !== Ad && zd.contains(Ad); } else { return Boolean(zd.compareDocumentPosition(Ad) & DOCUMENT_POSITION_CONTAINED_BY); }};mbox.ud = function(jc, Yc) { if (Yc !== undefined && Yc !== null && mbox.vd(document.body, Yc)) { return Yc; } return jc.getDefaultDiv();};mbox.yd = function(jc, Cd) { jc.Yc.parentNode.replaceChild(Cd, jc.Yc); jc.Yc = Cd;}; mbox.prototype.hide = function() { this.setEventTime('hide.start'); var db = this.showContent(this.getDefaultDiv()); this.setEventTime(db == 1 ? 'hide.end.ok' : 'hide.end.fail'); return db;};mbox.prototype.finalize = function() { this.setEventTime('finalize.start'); this.cancelTimeout(); if (!this.getDefaultDiv()) { if (this.Ac.force()) { this.setMessage('No default content, an empty one has been added'); } else { this.setMessage('Unable to locate mbox'); } } if (!this.activate()) { this.hide(); this.setEventTime('finalize.end.hide'); } this.setEventTime('finalize.end.ok');};mbox.prototype.cancelTimeout = function() { if (this.od) { clearTimeout(this.od); } if (this.dd) { this.dd.cancel(); }};mbox.prototype.getDiv = function() { return this.Yc;};mbox.prototype.getDefaultDiv = function() { if (this.kd === null) { this.kd = this.Ac.locate(); } return this.kd;};mbox.prototype.setEventTime = function(Dd) { this.fd[Dd] = (new Date()).getTime();};mbox.prototype.getEventTimes = function() { return this.fd;};mbox.prototype.getImportName = function() { return this.ad;};mbox.prototype.getURL = function() { return this.pb.buildUrl();};mbox.prototype.getUrlBuilder = function() { return this.pb;};mbox.prototype.Ed = function(Yc) { return Yc.style.display != 'none';};mbox.prototype.wd = function(Yc) { this.Fd(Yc, true);};mbox.prototype.xd = function(Yc) { this.Fd(Yc, false);};mbox.prototype.Fd = function(Yc, Gd) { Yc.style.visibility = Gd ? "visible" : "hidden"; Yc.style.display = Gd ? "block" : "none";};mbox.prototype.kc = function() { this.ld = false;};mbox.prototype.relocateDefaultDiv = function() { this.kd = this.Ac.locate();};mboxOfferContent = function() { this.jd = function() {};};mboxOfferContent.prototype.show = function(jc) { var db = jc.showContent(document.getElementById(jc.getImportName())); if (db == 1) { this.jd(); } return db;};mboxOfferContent.prototype.setOnLoad = function(jd) { this.jd = jd;};mboxOfferAjax = function(sd) { this.sd = sd; this.jd = function() {};};mboxOfferAjax.prototype.setOnLoad = function(jd) { this.jd = jd;};mboxOfferAjax.prototype.show = function(jc) { var Hd = document.createElement('div'); Hd.id = jc.getImportName(); Hd.innerHTML = this.sd; var db = jc.showContent(Hd); if (db == 1) { this.jd(); } return db;};mboxOfferDefault = function() { this.jd = function() {};};mboxOfferDefault.prototype.setOnLoad = function(jd) { this.jd = jd;};mboxOfferDefault.prototype.show = function(jc) { var db = jc.hide(); if (db == 1) { this.jd(); } return db;};mboxCookieManager = function mboxCookieManager(vb, Id) { this.vb = vb; this.Id = Id === '' || Id.indexOf('.') === -1 ? '' : '; domain=' + Id; this.Jd = new mboxMap(); this.loadCookies();};mboxCookieManager.prototype.isEnabled = function() { this.setCookie(TNT.a.H.J, 'true', 60); this.loadCookies(); return this.getCookie(TNT.a.H.J) == 'true';};mboxCookieManager.prototype.setCookie = function(vb, V, oc) { if (typeof vb != 'undefined' && typeof V != 'undefined' && typeof oc != 'undefined') { var Kd = {}; Kd.name = vb; Kd.value = encodeURIComponent(V); Kd.expireOn = Math.ceil(oc + new Date().getTime() / 1000); this.Jd.put(vb, Kd); this.saveCookies(); }};mboxCookieManager.prototype.getCookie = function(vb) { var Kd = this.Jd.get(vb); return Kd ? decodeURIComponent(Kd.value) : null;};mboxCookieManager.prototype.deleteCookie = function(vb) { this.Jd.remove(vb); this.saveCookies();};mboxCookieManager.prototype.getCookieNames = function(Ld) { var Md = []; this.Jd.each(function(vb, Kd) { if (vb.indexOf(Ld) === 0) { Md[Md.length] = vb; } }); return Md;};mboxCookieManager.prototype.saveCookies = function() { var Nd = TNT.a.b.crossDomainXOnly; var Od = TNT.a.H.D; var Pd = []; var Qd = 0; this.Jd.each(function(vb, Kd) { if(!Nd || vb === Od) { Pd[Pd.length] = vb + '#' + Kd.value + '#' + Kd.expireOn; if (Qd < Kd.expireOn) { Qd = Kd.expireOn; } } }); var Rd = new Date(Qd * 1000); var Sd = []; Sd.push(this.vb, '=', Pd.join('|')); if (TNT.a.b.usePersistentCookies) { Sd.push('; expires=', Rd.toGMTString()); } Sd.push('; path=/', this.Id); document.cookie = Sd.join("");};mboxCookieManager.prototype.loadCookies = function() { this.Jd = new mboxMap(); var Td = document.cookie.indexOf(this.vb + '='); if (Td != -1) { var Ud = document.cookie.indexOf(';', Td); if (Ud == -1) { Ud = document.cookie.indexOf(',', Td); if (Ud == -1) { Ud = document.cookie.length; } } var Vd = document.cookie.substring( Td + this.vb.length + 1, Ud).split('|'); var Wd = Math.ceil(new Date().getTime() / 1000); for (var wb = 0; wb < Vd.length; wb++) { var Kd = Vd[wb].split('#'); if (Wd <= Kd[2]) { var Xd = {}; Xd.name = Kd[0]; Xd.value = Kd[1]; Xd.expireOn = Kd[2]; this.Jd.put(Xd.name, Xd); } } }};mboxSession = function(Yd, Zd, Ub, _d, Vb) { this.Zd = Zd; this.Ub = Ub; this._d = _d; this.Vb = Vb; this.Sc = typeof mboxForceSessionId != 'undefined' ? mboxForceSessionId : mboxGetPageParameter(this.Zd, true); if (this.Sc === null || this.Sc.length === 0) { this.Sc = Vb.getCookie(Ub); if (this.Sc === null || this.Sc.length === 0) { this.Sc = Yd; } } this.Vb.setCookie(Ub, this.Sc, _d);};mboxSession.prototype.getId = function() { return this.Sc;};mboxSession.prototype.forceId = function(nc) { this.Sc = nc; this.Vb.setCookie(this.Ub, this.Sc, this._d);};mboxPC = function(Ub, _d, Vb) { this.Ub = Ub; this._d = _d; this.Vb = Vb; this.Sc = typeof mboxForcePCId != 'undefined' ? mboxForcePCId : Vb.getCookie(Ub); if (this.Sc) { Vb.setCookie(Ub, this.Sc, _d); }};mboxPC.prototype.getId = function() { return this.Sc;};mboxPC.prototype.forceId = function(nc) { if (this.Sc != nc) { this.Sc = nc; this.Vb.setCookie(this.Ub, this.Sc, this._d); return true; } return false;};mboxGetPageParameter = function(vb, ae) { ae = ae || false; var be; if (ae) { be = new RegExp("\\?[^#]*" + vb + "=([^\&;#]*)", "i"); } else { be = new RegExp("\\?[^#]*" + vb + "=([^\&;#]*)"); } var db = null; var ce = be.exec(document.location); if (ce && ce.length >= 2) { db = ce[1]; } return db;};mboxSetCookie = function(vb, V, oc) { return mboxFactoryDefault.getCookieManager().setCookie(vb, V, oc);};mboxGetCookie = function(vb) { return mboxFactoryDefault.getCookieManager().getCookie(vb);};mboxCookiePageDomain = function() { var Id = (/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1]; var de = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/; if (!de.exec(Id)) { var ee = (/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(Id); if (ee) { Id = ee[0]; if (Id.indexOf("www.") === 0) { Id=Id.substr(4); } } } return Id ? Id: "";};mboxShiftArray = function(fe) { var db = []; for (var wb = 1; wb < fe.length; wb++) { db[db.length] = fe[wb]; } return db;};mboxGenerateId = function() { return (new Date()).getTime() + "-" + Math.floor(Math.random() * 999999);};mboxScreenHeight = function() { return screen.height;};mboxScreenWidth = function() { return screen.width;};mboxBrowserWidth = function() { return (window.innerWidth) ? window.innerWidth : document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth;};mboxBrowserHeight = function() { return (window.innerHeight) ? window.innerHeight : document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;};mboxBrowserTimeOffset = function() { return -new Date().getTimezoneOffset();};mboxScreenColorDepth = function() { return screen.pixelDepth;};mboxScPluginFetcher = function (rb, ge) { this.rb = rb; this.ge = ge;};mboxScPluginFetcher.prototype.he = function (pb) { pb.setBasePath('/m2/' + this.rb + '/sc/standard'); this.ie(pb); var je = TNT.a.c.B; var ke =TNT.a.L.B; pb.addParameter(je, ke); return pb.buildUrl();};mboxScPluginFetcher.prototype.ie = function (pb) { var le = [ "dynamicVariablePrefix", "visitorID", "vmk", "ppu", "charSet", "visitorNamespace", "cookieDomainPeriods", "cookieLifetime", "pageName", "currencyCode", "variableProvider", "channel", "server", "pageType", "transactionID", "purchaseID", "campaign", "state", "zip", "events", "products", "linkName", "linkType", "resolution", "colorDepth", "javascriptVersion", "javaEnabled", "cookiesEnabled", "browserWidth", "browserHeight", "connectionType", "homepage", "pe", "pev1", "pev2", "pev3", "visitorSampling", "visitorSamplingGroup", "dynamicAccountSelection", "dynamicAccountList", "dynamicAccountMatch", "trackDownloadLinks", "trackExternalLinks", "trackInlineStats", "linkLeaveQueryString", "linkDownloadFileTypes", "linkExternalFilters", "linkInternalFilters", "linkTrackVars", "linkTrackEvents", "linkNames", "lnk", "eo" ]; for (var wb = 0; wb < le.length; wb++) { this.me(le[wb], pb); } for (wb = 1; wb <= 75; wb++) { this.me('prop' + wb, pb); this.me('eVar' + wb, pb); this.me('hier' + wb, pb); }};mboxScPluginFetcher.prototype.me = function (vb, pb) { var T = TNT.a.T; var V = this.ge[vb]; if (T.X(V) || T.bb(V)) { return; } pb.addParameter(vb, V);};mboxScPluginFetcher.prototype.cancel = function () {};mboxScPluginFetcher.prototype.fetch = function (pb) { pb.setServerType(this.getType()); var u = this.he(pb); this.Jb = document.createElement('script'); this.Jb.src = u; document.body.appendChild(this.Jb);};mboxScPluginFetcher.prototype.getType = function () { return 'ajax';};mboxLoadSCPlugin = function (ge) { if (!ge) { return null; } var ne = TNT.a.b.siteCatalystPluginName; var rb = TNT.a.b.clientCode; ge["m_" + ne] = function (ge) { var oe = '_t'; var qe = 'm_i'; var re = ge[qe](ne); re.Sb = true; re.rb = rb; re[oe] = function () { if (!this.isEnabled()) { return; } var jc = this.se(); if (jc) { var nd = new mboxScPluginFetcher(this.rb, this.s); jc.setFetcher(nd); jc.load(); } }; re.isEnabled = function () { return this.Sb && mboxFactoryDefault.isEnabled(); }; re.se = function () { var x = this.te(); var Yc = document.createElement('DIV'); return mboxFactoryDefault.create(x, [], Yc); }; re.te = function () { var ue = this.s.events && this.s.events.indexOf('purchase') != -1; return 'SiteCatalyst: ' + (ue ? 'purchase' : 'event'); }; }; return ge.loadModule(ne);};TNT.a.ve = function(we, xe, Ub, oc, Vb) { if (!xe.targetJSLoaded) { Vb.setCookie(Ub, true, oc); we.location.reload(); }};TNT.a.ye = function(we, Nc, b, H, Vb) { var ze = '_AT'; var Be = 50; var Ub = H.K; var oc = b.experienceManagerDisabledTimeout; var bd = b.experienceManagerTimeout; var u = b.experienceManagerPluginUrl; var Ce = we.setTimeout; var De = function(Ee){}; var Fe = function(Ee){ Ce(function() {we[ze].applyWhenReady(Ee);}, Be); }; if (ze in we) { return; } we[ze] = {}; if (Vb.getCookie(Ub) !== 'true') { Nc.write('<scr' + 'ipt src="' + u + '"><\/sc' + 'ript>'); we[ze].applyWhenReady = Fe; Ce(function() { TNT.a.ve(we, we[ze], Ub, oc, Vb); }, bd); } else { we[ze].applyWhenReady = De; }};mboxVizTargetUrl = function(x ) { if (!mboxFactoryDefault.isEnabled()) { return; } var c = TNT.a.c; var P = TNT.a.L.P; var rb = TNT.a.b.clientCode; var zc = new Date(); var Ge = zc.getTimezoneOffset() * P; var pb = mboxFactoryDefault.getUrlBuilder().clone(); pb.setBasePath('/m2/' + rb + '/viztarget'); pb.addParameter(c.x, x); pb.addParameter(c.y, 0); pb.addParameter(c.j, mboxFactoryDefault.getMboxes().length() + 1); pb.addParameter(c.A, zc.getTime() - Ge); pb.addParameter(c.d, mboxGenerateId()); pb.addParameter(c.z, mboxFactoryDefault.isDomLoaded()); var sb = mboxShiftArray(arguments); if (sb && sb.length > 0) { pb.addParameters(sb); } mboxFactoryDefault.wc(pb); mboxFactoryDefault.xc(pb, x); mboxFactoryDefault.setVisitorIdParameters(pb, x); return pb.buildUrl();};TNT.createGlobalMbox = function () { var He = TNT.getGlobalMboxName(); var Ie = TNT.getGlobalMboxLocation(); var Je; if (!Ie) { Ie = "mbox-" + He + "-" + mboxGenerateId(); Je = document.createElement("div"); Je.className = "mboxDefault"; Je.id = Ie; Je.style.visibility = "hidden"; Je.style.display = "none"; var Ke = setInterval(function(){ if (document.body) { clearInterval(Ke); document.body.insertBefore(Je, document.body.firstChild); } }, TNT.a.b.bodyPollingTimeout); } var Le = TNT.getTargetPageParameters(); var Me = mboxFactoryDefault.create(He, Le, Ie); if (Me && mboxFactoryDefault.isEnabled()) { Me.setFetcher(new TNT.a.ob()); Me.load(); }};TNT.a.Ne = function(Vb, Oe, Pe) { return mboxGetPageParameter(Oe, true) || Vb.getCookie(Pe);};TNT.a.Qe = function(b) { setTimeout(function() { if (typeof mboxDebugLoaded == 'undefined') { alert('Could not load the remote debug.\nPlease check your connection to ' + b.companyName + ' servers'); } }, 60*60); var u = b.adminUrl + '/mbox/mbox_debug.jsp?mboxServerHost=' + b.serverHost + '&clientCode=' + b.clientCode; document.write('<' + 'scr' + 'ipt src="' + u + '"><' + '\/scr' + 'ipt>');};TNT.a.Re = function(b) { var T = TNT.a.T; return !T.U(b) && !T.W(b) && T.bb(b);};TNT.a.Se = function(b, Te) { var T = TNT.a.T; var Ue; var Ve; var V; for (var nb in b) { Ue = b.hasOwnProperty(nb) && Te.hasOwnProperty(nb); V = b[nb]; Ve = !T.U(V) && !T.W(V); if (Ue && Ve) { Te[nb] = V; } } return Te;};TNT.a.We = function() { var b = window.targetGlobalSettings; if (TNT.a.Re(b)) { TNT.a.b = TNT.a.Se(b, TNT.a.b); } var Ob = TNT.a.b.mboxVersion; var Xe = TNT.a.b.serverHost; var rb = TNT.a.b.clientCode; var M = TNT.a.L.M; var Oe = TNT.a.C.G; var Pe = TNT.a.H.G; if (typeof mboxVersion == 'undefined') { window.mboxFactories = new mboxMap(); window.mboxFactoryDefault = new mboxFactory(Xe, rb, M); window.mboxVersion = Ob; } if (TNT.a.Ne(mboxFactoryDefault.getCookieManager(), Oe, Pe)){ TNT.a.Qe(TNT.a.b); }};TNT.a.We();(function(){ var b = TNT.a.b; var H = TNT.a.H; var Vb = mboxFactoryDefault.getCookieManager(); TNT.a.ye(window, document, b, H, Vb);}());var mboxTrack=function(mbox,params){var m,u,i,f=mboxFactoryDefault;if(f.getMboxes().length()>0){m=f.getMboxes().getById(0);u=m.getURL().replace("mbox="+escape(m.getName()),"mbox="+mbox).replace("mboxPage="+f.getPageId(),"mboxPage="+mboxGenerateId())+'&'+params,i=new Image();i.style.display='none';i.src=u;document.body.appendChild(i)}else{f.getSignaler().signal('onEvent',mbox+'&'+params)}},mboxTrackLink=function(mbox,params,url){mboxTrack(mbox,params);setTimeout("location='"+url+"'",500)};if (TNT.isAutoCreateGlobalMbox()) { TNT.createGlobalMbox();}
*/