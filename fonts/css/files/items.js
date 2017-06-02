// :::::::: LEAVE THIS -> environment dependant
var secure = document.location.protocol;
var env;
if (document.URL.indexOf("sup") > -1 || document.URL.indexOf("uat") > -1) {
    env = "uat.";
} else {
    env = "";
}

// :::: CHANGE only this DATA
var data = {
    "speed": 5000,
    "promo": [

        // start video

        {
            "_comment": "NL: the young pope, FR: the young pope, EN: the young pope",
            "startdate": "20170203",
            "enddate": "20170204",
            "video": "" + secure + "//static." + env + "telenet.be/webmail/assets/movies/the-young-pope.mp4",
            "autoplay": "autoplay",
            "loop": "loop",
            "volume": 0,
            "utag-video": "video The Young Pope",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/webmail-the-young-pope.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/webmail-the-young-pope.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/webmail-the-young-pope.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>The Young Pope</strong><br>Jude Law zet het Vaticaan op stelten als brutale en machtsgeile kerkleider. Prachtig staaltje tv!<br><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheYoungPope - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'><strong>Meer info <span>></span></strong></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>The Young Pope</strong><br>Jude Law zet het Vaticaan op stelten als brutale en machtsgeile kerkleider. Prachtig staaltje tv!<br><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheYoungPope - FR'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'><strong>Meer info <span>></span></strong></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>The Young Pope</strong><br>Jude Law zet het Vaticaan op stelten als brutale en machtsgeile kerkleider. Prachtig staaltje tv!<br><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheYoungPope - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'><strong>Meer info <span>></span></strong></a></p>",
        },



        {
            "_comment": "NL: netweters, FR: netweters, EN: netweters",
            "startdate": "20161117",
            "enddate": "20170201",
            "video": "" + secure + "//static." + env + "telenet.be/webmail/assets/movies/netweters_11-01-17-webmail.mp4",
            "autoplay": "autoplay",
            "loop": "loop",
            "volume": 0,
            "utag-video": "video De Netweters",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/movies/netweters_11-01-17-webmail-poster.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/movies/netweters_11-01-17-webmail-poster.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/movies/netweters_11-01-17-webmail-poster.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/spacer.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/spacer.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/spacer.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>De Netweters</strong><br>De eerste help-mekaar-desk voor en door klanten.</p><p class='link'><a style='color:#FFFFFF' onClick=\" _gaq.push(['_trackEvent', 'Background', 'DeNetweters']);\" href='http://community.telenet.be/?category.id=TaalNL' target='_blank'>Meer weten <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Les Netnologues</strong></p><p class='link'><a style='color:#FFFFFF' onClick=\" _gaq.push(['_trackEvent', 'Background', 'LesNetnologues']);\" href='http://community.telenet.be/?category.id=TaalFr' target='_blank'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>De Netweters</strong><br>De eerste help-mekaar-desk voor en door klanten.</p><p class='link'><a style='color:#FFFFFF' onClick=\" _gaq.push(['_trackEvent', 'Background', 'DeNetweters']);\" href='http://community.telenet.be/?category.id=TaalNL' target='_blank'>Meer weten <span>></span></a></p>",
        },

        // end video

        {
            "_comment": "NL: Play more, FR: Play more, EN:  Play more",
            "startdate": "20170213",
            "enddate": "20170301",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/mr_more_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/mr_more_webmail.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/mr_more_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: MrMore - NL'});\" href='http://m.me/playmorebe/' target='_blank' style='color:#ffc421'>Ask Mr More <span>></span></a></p>",
            "text-fr": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: MrMore - FR'});\" href='http://m.me/playmorebe/' target='_blank' style='color:#ffc421'>Ask Mr More <span>></span></a></p>",
            "text-en": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: MrMore - EN'});\" href='http://m.me/playmorebe/' target='_blank' style='color:#ffc421'>Ask Mr More <span>></span></a></p>",
        },
		{
			"_comment": "NL: Smartphones, FR: Smartphones, EN: Smartphones",
			"startdate": "20170220",
			"enddate": "20170401",
			"image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/promo-201702-nl.jpg",
			"image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/promo-201702-fr.jpg",
			"image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/promo-201702-nl.jpg",
			"logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/promo-201702-logo-nl.png",
			"logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/promo-201702-logo-fr.png",
			"logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/promo-201702-logo-nl.png",
			"text-nl": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Smartphones - NL'});\" href='https://www2.telenet.be/nl/mobiel/smartphones/' target='_blank' style='color:#58595b'>Ontdek ze allemaal <span>></span></a></p>",
			"text-fr": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Smartphones - FR'});\" href='https://www2.telenet.be/fr/produits-mobiles/smartphones/' target='_blank' style='color:#58595b'>Découvrez <span>></span></a></p>",
			"text-en": "<p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Smartphones - EN'});\" href='https://www2.telenet.be/nl/mobiel/smartphones/' target='_blank' style='color:#58595b'>Ontdek ze allemaal <span>></span></a></p>",
		},
        // start scheduling Play Sports


        {
            "_comment": "NL: Play Sports, FR: Play Sports, EN:  Play Sports",
            "startdate": "20170125",
            "enddate": "20170130",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/playsports-20170126.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/playsports-20170126.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/playsports-20170126.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlaySports.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlaySports.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlaySports.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Gratis voor alle digitale tv-klanten</strong></p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: PlaySports - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-sports/' target='_blank' style='color:#ffc421'>Ontdek Play Sports <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Gratis voor alle digitale tv-klanten</strong></p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: PlaySports - FR'});\" href='https://www2.telenet.be/nl/entertainment/play-sports/' target='_blank' style='color:#ffc421'>Ontdek Play Sports <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Gratis voor alle digitale tv-klanten</strong></p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: PlaySports - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-sports/' target='_blank' style='color:#ffc421'>Ontdek Play Sports <span>></span></a></p>",
        },


        {
            "_comment": "NL: Play Sports Winterstop FR: Tip Top Tour, EN: Play Sports Winterstop",
            "startdate": "20170119",
            "enddate": "20170219",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/20170117_playsports_winterstop.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/20170117_playsports_winterstop.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlaySports.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlaySports.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Klaar voor de tweede helft?</strong><br>Klaar voor alle spannende sportontknopingen die eraan komen?<br>Zorg dat je de komende weken geen enkele wedstrijd mist!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: PlaySportsWinterstop - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-sports/' target='_blank' style='color:#ffc421'>Abonneer je nu op Play Sports <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Klaar voor de tweede helft?</strong><br>Klaar voor alle spannende sportontknopingen die eraan komen?<br>Zorg dat je de komende weken geen enkele wedstrijd mist!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: PlaySportsWinterstop - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-sports/' target='_blank' style='color:#ffc421'>Abonneer je nu op Play Sports <span>></span></a></p>",
        },

        // end scheduling Play Sports



        // start scheduling Play

        {
            "_comment": "NL: Dinosaur  FR: Tip Top Tour, EN:  Dinosaur",
            "startdate": "20170201",
            "enddate": "20170206",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/dinosaur_2000_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/dinosaur_2000_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Dinosaur</strong><br/>Keer miljoenen jaren terug in de tijd en begeef je tussen de dino's in een wonderlijk Disneyavontuur.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Dinosaur - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Dinosaur</strong><br/>Keer miljoenen jaren terug in de tijd en begeef je tussen de dino's in een wonderlijk Disneyavontuur.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Dinosaur - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Achter de wolken  FR: Tip Top Tour, EN:  Achter de wolken",
            "startdate": "20170201",
            "enddate": "20170206",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/achter_de_wolken_2014_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/achter_de_wolken_2014_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Achter de wolken</strong><br/>Liefde is… twee tortelduifjes op leeftijd die in elkaars armen vallen in dit fijngevoelige Vlaamse drama.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AchterDeWolken - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Achter de wolken</strong><br/>Liefde is… twee tortelduifjes op leeftijd die in elkaars armen vallen in dit fijngevoelige Vlaamse drama.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AchterDeWolken - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Slumdog Millionaire  FR: Tip Top Tour, EN:  Slumdog Millionaire",
            "startdate": "20170201",
            "enddate": "20170206",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/slumdog_millionaire_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/slumdog_millionaire_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Slumdog Millionaire</strong><br/>Een Indische tiener zoekt geluk en liefde via een populaire tv-quiz. Een onweerstaanbaar meesterwerk.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: SlumdogMillionaire - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Slumdog Millionaire</strong><br/>Een Indische tiener zoekt geluk en liefde via een populaire tv-quiz. Een onweerstaanbaar meesterwerk.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: SlumdogMillionaire - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Divergent  FR: Tip Top Tour, EN:  Divergent",
            "startdate": "20170206",
            "enddate": "20170213",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/divergent_2014_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/divergent_2014_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Divergent</strong><br/>Girl power in een spannende scifi-prent waarin de toekomst op de schouders van een heldhaftige meid rust.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Divergent - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Divergent</strong><br/>Girl power in een spannende scifi-prent waarin de toekomst op de schouders van een heldhaftige meid rust.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Divergent - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Scandal  FR: Tip Top Tour, EN:  Scandal",
            "startdate": "20170206",
            "enddate": "20170213",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/scandal_show_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/scandal_show_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Scandal</strong><br/>Olivia Pope is een topwijf dat elk politiek schandaal kan doen verdwijnen. Resultaat: een knalserie!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Scandal - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Scandal</strong><br/>Olivia Pope is een topwijf dat elk politiek schandaal kan doen verdwijnen. Resultaat: een knalserie!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Scandal - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: The Chronicles of Narnia: The Lion The Witch and The Wardrobe  FR: Tip Top Tour, EN:  The Chronicles of Narnia: The Lion The Witch and The Wardrobe",
            "startdate": "20170206",
            "enddate": "20170213",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/chronicles_of_narnia_wardrobe_2005_still.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/chronicles_of_narnia_wardrobe_2005_still.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>The Chronicles of Narnia: the lion, the witch and the wardrobe</strong><br/>Kruip in de kast en beland in een wereld boordevol magische leeuwen, heksen en epische veldslagen.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheChroniclesofNarnia:TheLionTheWitchandTheWardrobe - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>The Chronicles of Narnia: the lion, the witch and the wardrobe</strong><br/>Kruip in de kast en beland in een wereld boordevol magische leeuwen, heksen en epische veldslagen.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheChroniclesofNarnia:TheLionTheWitchandTheWardrobe - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: The Benchwarmers  FR: Tip Top Tour, EN:  The Benchwarmers",
            "startdate": "20170213",
            "enddate": "20170220",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/the_benchwarmers_2006_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/the_benchwarmers_2006_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>The Benchwarmers</strong><br/>Drie idioten die een baseballteam vormen? Je lacht je ongetwijfeld een breuk!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheBenchwarmers - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>The Benchwarmers</strong><br/>Drie idioten die een baseballteam vormen? Je lacht je ongetwijfeld een breuk!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheBenchwarmers - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Letters to Juliet  FR: Tip Top Tour, EN:  Letters to Juliet",
            "startdate": "20170213",
            "enddate": "20170220",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/letters_to_juliet_2010_still1.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/letters_to_juliet_2010_still1.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Letters to Juliet</strong><br/>Zak knus onderuit in je zetel voor deze liefelijke romantische klepper die resoluut je hart verovert.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: LetterstoJuliet - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Letters to Juliet</strong><br/>Zak knus onderuit in je zetel voor deze liefelijke romantische klepper die resoluut je hart verovert.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: LetterstoJuliet - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Zot van A  FR: Tip Top Tour, EN:  Zot van A",
            "startdate": "20170213",
            "enddate": "20170220",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/zot_van_a_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/zot_van_a_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Zot van A</strong><br/>Ontdek hoe een bende bekende Vlaamse acteurs de liefde probeert te vinden tijdens de feestdagen.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: ZotVanA - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Zot van A</strong><br/>Ontdek hoe een bende bekende Vlaamse acteurs de liefde probeert te vinden tijdens de feestdagen.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: ZotVanA - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Code Black  FR: Tip Top Tour, EN:  Code Black",
            "startdate": "20170220",
            "enddate": "20170301",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/code_black_show_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/code_black_show_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Code Black</strong><br/>Intrige, drama en liefdesperikelen in de beste ziekenhuisserie sinds Grey's Anatomy. Niet te missen!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: CodeBlack - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Code Black</strong><br/>Intrige, drama en liefdesperikelen in de beste ziekenhuisserie sinds Grey's Anatomy. Niet te missen!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: CodeBlack - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: The Longest Yard  FR: Tip Top Tour, EN:  The Longest Yard",
            "startdate": "20170220",
            "enddate": "20170301",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/the_longest_yard_2005_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/the_longest_yard_2005_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>The Longest Yard</strong><br/>Lachen en gieren met enkele gevangenen die cipiers uitdagen voor een wedstrijdje rugby.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheLongestYard - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>The Longest Yard</strong><br/>Lachen en gieren met enkele gevangenen die cipiers uitdagen voor een wedstrijdje rugby.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheLongestYard - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },

        {
            "_comment": "NL: Super Buddies  FR: Tip Top Tour, EN:  Super Buddies",
            "startdate": "20170220",
            "enddate": "20170301",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/super_buddies_2013_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/super_buddies_2013_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Super Buddies</strong><br/>De wereld is in gevaar en kan enkel gered worden door een bende heldhaftige en schattige viervoeters.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login ::  - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Super Buddies</strong><br/>De wereld is in gevaar en kan enkel gered worden door een bende heldhaftige en schattige viervoeters.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login ::  - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Meer info <span>></span></a></p>",
        },





        {
            "_comment": "NL: Tinkerbell  FR: Tip Top Tour, EN:  Tinkerbell",
            "startdate": "20170123",
            "enddate": "20170131",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/tinkerbell_2008_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/tinkerbell_2008_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Tinkerbell</strong><br/>Treed toe tot de wereld van de schattige elf Tinkerbell en haar trouwe vriendinnetjes.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Tinkerbell - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Ontdek Play hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Tinkerbell</strong><br/>Treed toe tot de wereld van de schattige elf Tinkerbell en haar trouwe vriendinnetjes.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Tinkerbell - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Ontdek Play hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: The Talented Mr. Ripley FR: Tip Top Tour, EN:  The Talented Mr. Ripley",
            "startdate": "20170123",
            "enddate": "20170131",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/the_talented_mr_ripley_1999_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/the_talented_mr_ripley_1999_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_Play.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>The Talented Mr. Ripley</strong><br/>De jonge Tom Ripley neemt extreme maatregelen om een luxeus leven te leiden. Topthriller.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheTalentedMrRipley - NL'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Ontdek Play hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>The Talented Mr. Ripley</strong><br/>De jonge Tom Ripley neemt extreme maatregelen om een luxeus leven te leiden. Topthriller.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TheTalentedMrRipley - EN'});\" href='https://www2.telenet.be/nl/tv-en-entertainment/play/' target='_blank' style='color:#ffc421'>Ontdek Play hier <span>></span></a></p>",
        },

        // end scheduling Play

        // start scheduling Play More

        {
            "_comment": "NL: Angry Birds FR: Tip Top Tour, EN: Angry Birds",
            "startdate": "20170201",
            "enddate": "20170206",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/the_angry_birds_movie_2016_still4.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/the_angry_birds_movie_2016_still4.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Angry Birds</strong><br>Woede! Furie! Razernij! De Angry Birds zijn kwaad en gaan de strijd aan met een bende varkens!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AngryBirds - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Angry Birds</strong><br>Woede! Furie! Razernij! De Angry Birds zijn kwaad en gaan de strijd aan met een bende varkens!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AngryBirds - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Acquitted FR: Tip Top Tour, EN: Acquitted",
            "startdate": "20170201",
            "enddate": "20170206",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/acquitted_sz2_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/acquitted_sz2_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Acquitted</strong><br>Moord, mysterie en lugubere locaties in een niet te missen Scandinavische thrillerreeks.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Acquitted - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Acquitted</strong><br>Moord, mysterie en lugubere locaties in een niet te missen Scandinavische thrillerreeks.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Acquitted - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Mother's Day FR: Tip Top Tour, EN: Mother's Day",
            "startdate": "20170201",
            "enddate": "20170206",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/mothers_day_2016_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/mothers_day_2016_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Mother's Day</strong><br>Wat beter dan moederdag samen vieren met Jennifer Aniston, Kate Hudson en Julia Roberts? </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: MothersDay - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Mother's Day</strong><br>Wat beter dan moederdag samen vieren met Jennifer Aniston, Kate Hudson en Julia Roberts? </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: MothersDay - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: A Bigger Splash FR: Tip Top Tour, EN: A Bigger Splash",
            "startdate": "20170206",
            "enddate": "20170213",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/a_bigger_splash_2015_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/a_bigger_splash_2015_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>A Bigger Splash</strong><br>Zwoele, zomerse en bloedhete cinema met Matthias Schoenaerts als onweerstaanbare bink.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: ABiggerSplash - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>A Bigger Splash</strong><br>Zwoele, zomerse en bloedhete cinema met Matthias Schoenaerts als onweerstaanbare bink.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: ABiggerSplash - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Nobel FR: Tip Top Tour, EN: Nobel",
            "startdate": "20170206",
            "enddate": "20170213",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/nobel_show_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/nobel_show_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Nobel</strong><br>Politieke spelletjes en militaire misdrijven clashen in een explosieve Noorse knalserie. </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Nobel - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Nobel</strong><br>Politieke spelletjes en militaire misdrijven clashen in een explosieve Noorse knalserie. </p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: Nobel - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Bastille Day FR: Tip Top Tour, EN: Bastille Day",
            "startdate": "20170206",
            "enddate": "20170213",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/bastille_day_2016_still2.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/bastille_day_2016_still2.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Bastille Day</strong><br>Corrupte politici en terrorisme? Idris Elba maakt er alschietend en knokkend komaf mee.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: BastilleDay - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Bastille Day</strong><br>Corrupte politici en terrorisme? Idris Elba maakt er alschietend en knokkend komaf mee.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: BastilleDay - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Kung Fu Panda 3 FR: Tip Top Tour, EN: Kung Fu Panda 3",
            "startdate": "20170213",
            "enddate": "20170220",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/kung_fu_panda_3_2016_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/kung_fu_panda_3_2016_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Kung Fu Panda 3</strong><br>Everybody was kung fu fighting! Panda Po is terug om een bende schurken om zeep te helpen.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: KungFuPanda3 - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Kung Fu Panda 3</strong><br>Everybody was kung fu fighting! Panda Po is terug om een bende schurken om zeep te helpen.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: KungFuPanda3 - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Whiskey Tango Foxtrot FR: Tip Top Tour, EN: Whiskey Tango Foxtrot",
            "startdate": "20170213",
            "enddate": "20170220",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/whiskey_tango_foxtrot_2016_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/whiskey_tango_foxtrot_2016_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Whiskey Tango Foxtrot</strong><br>Oorlog en humor gaan soms hand in hand, zeker als Tina Fey en Margot Robbie van de partij zijn.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: WhiskeyTangoFoxtrot - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Whiskey Tango Foxtrot</strong><br>Oorlog en humor gaan soms hand in hand, zeker als Tina Fey en Margot Robbie van de partij zijn.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: WhiskeyTangoFoxtrot - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Last Week Tonight with John Oliver FR: Tip Top Tour, EN: Last Week Tonight with John Oliver",
            "startdate": "20170213",
            "enddate": "20170220",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/last_week_tonight_with_john_oliver_show_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/last_week_tonight_with_john_oliver_show_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Last Week Tonight with John Oliver</strong><br>John Oliver slijpt de messen voor een vierde seizoen waarin hij geen blad voor de mond neemt.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: LastWeekTonightWithJohnOliver - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Last Week Tonight with John Oliver</strong><br>John Oliver slijpt de messen voor een vierde seizoen waarin hij geen blad voor de mond neemt.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: LastWeekTonightWithJohnOliver - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Teenage Mutant Ninja Turtles 2 FR: Tip Top Tour, EN: Teenage Mutant Ninja Turtles 2",
            "startdate": "20170220",
            "enddate": "20170301",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/teenage_mutant_ninja_turtles_out_of_the_shadows_2016_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/teenage_mutant_ninja_turtles_out_of_the_shadows_2016_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Teenage Mutant Ninja Turtles 2</strong><br></p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TeenageMutantNinjaTurtles2 - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Teenage Mutant Ninja Turtles 2</strong><br></p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: TeenageMutantNinjaTurtles2 - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Big Little Lies FR: Tip Top Tour, EN: Big Little Lies",
            "startdate": "20170220",
            "enddate": "20170301",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/big_little_lies_show_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/big_little_lies_show_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Big Little Lies</strong><br>Nicole Kidman en Reese Witherspoon maken het mooie weer in de nieuwste topper van HBO.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: BigLittleLies - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Big Little Lies</strong><br>Nicole Kidman en Reese Witherspoon maken het mooie weer in de nieuwste topper van HBO.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: BigLittleLies - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: Our Kind Of Traitor FR: Tip Top Tour, EN: Our Kind Of Traitor",
            "startdate": "20170220",
            "enddate": "20170301",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/our_kind_of_traitor_2016_bg.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/our_kind_of_traitor_2016_bg.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Our Kind Of Traitor</strong><br>De maffia en de Britse geheime dienst achter je aan krijgen op vakantie? Fun, fun, fun!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: OurKindOfTraitor - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>Our Kind Of Traitor</strong><br>De maffia en de Britse geheime dienst achter je aan krijgen op vakantie? Fun, fun, fun!</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: OurKindOfTraitor - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },






        {
            "_comment": "NL: 10 Cloverfield Lane FR: Tip Top Tour, EN: 10 Cloverfield Lane",
            "startdate": "20170123",
            "enddate": "20170131",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/10_cloverfield_lane_2016_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/10_cloverfield_lane_2016_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>10 Cloverfield Lane</strong><br>Rillen en trillen met deze zenuwslopende topthriller die uitpakt met heel wat mysteries.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: 10CloverfieldLane - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>10 Cloverfield Lane</strong><br>Rillen en trillen met deze zenuwslopende topthriller die uitpakt met heel wat mysteries.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: 10CloverfieldLane - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        {
            "_comment": "NL: In the Heart of the Sea FR: Tip Top Tour, EN: In the Heart of the Sea",
            "startdate": "20170123",
            "enddate": "20170131",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/in_the_heart_of_the_sea_2015_webmail.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/in_the_heart_of_the_sea_2015_webmail.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_PlayMore.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>In the Heart of the Sea</strong><br>Chris Hemsworth vs. een walvis! Het spectaculaire ware verhaal achter de mythe van Moby Dick.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: IntheHeartoftheSea - NL'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
            "text-en": "<p style='color:#FFFFFF'><strong>In the Heart of the Sea</strong><br>Chris Hemsworth vs. een walvis! Het spectaculaire ware verhaal achter de mythe van Moby Dick.</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: IntheHeartoftheSea - EN'});\" href='https://www2.telenet.be/nl/entertainment/play-more/' target='_blank' style='color:#ffc421'>Ontdek Play More hier <span>></span></a></p>",
        },

        // end scheduling Play More


        // Start SOLDEN

        {
            "_comment": "NL: SOLDEN 2017, FR: SOLDEN 2017",
            "startdate": "20170102",
            "enddate": "20170131",
            "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/2017-solden-snelste-internet.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/2017-solden-snelste-internet-fr.jpg",
            "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/2017-solden-snelste-internet.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/spacer.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/spacer.png",
            "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/spacer.png",
            "text-nl": "<p class='link'><a onClick=\" _gaq.push(['_trackEvent', 'Background', 'SOLDEN2017 NL']);\" href='https://www2.telenet.be/nl/internet-en-tv/internet/' target='_blank'><img src='" + secure + "//static." + env + "telenet.be/webmail/assets/logos/2017-solden-snelste-internet.jpg'></a></p>",
            "text-fr": "<p class='link'><a onClick=\" _gaq.push(['_trackEvent', 'Background', 'SOLDEN2017 FR']);\" href='https://www2.telenet.be/fr/internet-et-tv/internet/' target='_blank'><img src='" + secure + "//static." + env + "telenet.be/webmail/assets/logos/2017-solden-snelste-internet-fr.jpg'></a></p>",
            "text-en": "<p class='link'><a onClick=\" _gaq.push(['_trackEvent', 'Background', 'SOLDEN2017 EN']);\" href='https://www2.telenet.be/nl/internet-en-tv/internet/' target='_blank'><img src='" + secure + "//static." + env + "telenet.be/webmail/assets/logos/2017-solden-snelste-internet.jpg'></a></p>",
        },

        // End SOLDEN


        // start care
       /*
        {
            "_comment": "NL: Telenet Community forum, FR: Telenet Community forum",
            "startdate": "20150929",
            "enddate": "20171231",
            "image-nl": "" + secure + "//static." + env + "telenet.be/oauth2/assets/backgrounds/community-nl-fr.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/oauth2/assets/backgrounds/community-nl-fr.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/oauth2/assets/logos/loginPageLogo_CommunityForum.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/oauth2/assets/logos/loginPageLogo_CommunityForum.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>De Telenet Community, waar klanten elkaar helpen.</strong><br>Stel je vraag aan andere Telenet-klanten en help elkaar met Telenet-tips en weetjes.</p><p class='link'><a style='color:#FFFFFF' onClick=\" _gaq.push(['_trackEvent', 'Background', 'CommunityForum Nl']);\" href='http://community.telenet.be/?category.id=TaalNL' target='_blank'>Naar de Community</a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>La Communauté Telenet, là où les clients s’entraident.</strong><br>Posez votre question à d’autres clients Telenet et aidez-vous les uns les autres en fournissant astuces et conseils au sujet de Telenet.<p class='link'><a style='color:#FFFFFF' onClick=\" _gaq.push(['_trackEvent', 'Background', 'CommunityForum Fr']);\" href='http://community.telenet.be/?category.id=TaalFr' target='_blank'>Accéder à la Communauté</a></p>"
        },

        {
            "_comment": "NL: Support App, FR: Support App",
            "startdate": "20151101",
            "enddate": "20171231",
            "image-nl": "" + secure + "//static." + env + "telenet.be/oauth2/assets/backgrounds/support-app-nl.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/oauth2/assets/backgrounds/support-app-fr.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/oauth2/assets/logos/spacer.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/oauth2/assets/logos/spacer.png",
            "text-nl": "<p style='color:#FFFFFF'><strong>Onze hulp, altijd op zak</strong><br>Een antwoord op je vraag, persoonlijke berichten, je internetverbruik checken… De Telenet Support-app geeft het je allemaal!</p><p class='link'><a style='color:#FFFFFF' href='https://www2.telenet.be/nl/klantenservice/alles-wat-je-moet-weten-over-telenet-support/?intcmp=Community|Backgroundlogin|Supportapp_nl' target='_blank'>Lees meer</a></p>",
            "text-fr": "<p style='color:#FFFFFF'><strong>Notre aide toujours à portée de main</strong><br>Une réponse à vos questions, messages personnels, consulter votre consommation internet... Vous trouverez tout ceci dans l’appli Telenet Support !</p><p class='link' style='color:#FFFFFF'><a style='color:#FFFFFF' href='https://www2.telenet.be/fr/serviceclient/tout-ce-quil-faut-savoir-au-sujet-de-telenet-support/?intcmp=Community|Backgroundlogin|Supportapp_fr' target='_blank'>En savoir plus</a></p>"
        },

        {
            "_comment": "NL: OCP, FR: OCP",
            "startdate": "20151101",
            "enddate": "20171231",
            "image-nl": "" + secure + "//static." + env + "telenet.be/oauth2/assets/backgrounds/klantenservice-nl.jpg",
            "image-fr": "" + secure + "//static." + env + "telenet.be/oauth2/assets/backgrounds/klantenservice-fr.jpg",
            "logo-nl": "" + secure + "//static." + env + "telenet.be/oauth2/assets/logos/spacer.png",
            "logo-fr": "" + secure + "//static." + env + "telenet.be/oauth2/assets/logos/spacer.png",
            "text-nl": "<p style='color:#58595b'><strong>Hulp nodig?</strong><br>Ook online helpen we je graag verder. We geven je een antwoord op de meestgestelde vragen.</p><p class='link'><a onClick=\" _gaq.push(['_trackEvent', 'Background', 'OCP Nl']);\" href='https://www2.telenet.be/nl/klantenservice/' target='_blank'>Ontdek het meteen</a></p>",
            "text-fr": "<p style='color:#58595b'><strong>Besoin d'aide ?</strong><br>Nous nous ferons aussi un plaisir de vous aider en ligne. Nous vous donnons une réponse aux questions les plus fréquentes.</p><p class='link'><a onClick=\" _gaq.push(['_trackEvent', 'Background', 'OCP FR']);\" href='https://www2.telenet.be/fr/serviceclient/' target='_blank'><img src='" + secure + "//static." + env + "telenet.be/oauth2/assets/logos/supportapp_verbruik-fr.png'> </a></p>"
        }
        */
        // einde care


        /* template for falc images

         {
         "_comment": "NL: Broer, FR: Service Client, EN: Broer",
         "startdate": "20160516",
         "enddate": "20160523",
         "image-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/broer_2014_webmail_falc_2005.jpg",
         "image-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/login-allemaal-digitaal.jpg",
         "image-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/backgrounds/broer_2014_webmail_falc_2005.jpg",
         "logo-nl": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-geel.png",
         "logo-fr": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-wit.png",
         "logo-en": "" + secure + "//static." + env + "telenet.be/webmail/assets/logos/loginPageLogo_logo-geel.png",
         "text-nl": "<p style='color:#FFFFFF'><strong>Vanaf 20/5, Broer</strong><br>Nu in onze TV-Theek.</p>",
         "text-fr": "<p style='color:#FFFFFF'><strong>Saviez-vous que notre consommation internet double tous les 18 mois?</strong><br>Chez Telenet nous mettons tout en oeuvre pour que vous puissiez continuer à en profiter sans soucis</p><p class='link'><a onClick=\"utag.link({link_name:' Webmail :: Login :: AllemaalDigitaal - FR'});\" href='https://www2.telenet.be/fr/serieusementtop/' target='_blank' style='color:#ffc421'>Dites-moi tout! <span>></span></a></p>",
         "text-en": "<p style='color:#FFFFFF'><strong>Vanaf 20/5, Broer</strong><br>Nu in onze TV-Theek.</p>",
         },

         */

    ],

    // DEFAULT (if there is no other promo within time range...
    "defaultbackup": [
        {
            "_comment": "******** THIS ONE IS DEFAULT *******",
            "startdate": "20140422",
            "enddate": "20280422",
            "image-nl": "" + secure + "//static.telenet.be/webmail/assets/default.jpg",
            "image-fr": "" + secure + "//static.telenet.be/webmail/assets/default.jpg",
            "image-en": "" + secure + "//static.telenet.be/webmail/assets/default.jpg",
            "logo-nl": "" + secure + "//static.telenet.be/webmail/assets/spacer.png",
            "logo-fr": "" + secure + "//static.telenet.be/webmail/assets/spacer.png",
            "logo-en": "" + secure + "//static.telenet.be/webmail/assets/spacer.png",
            "text-nl": "",
            "text-fr": "",
            "text-en": ""
        }
    ]
}; // :::::: END DATAs
