function setCoocki(cname,cvalue,days)
{
	var d = new Date();
	d.setTime(d.getTime() + (days*24*60*60*1000));

	var expires = "expires=" + d.toUTCString();

	var location = document.location.pathname;

	document.cookie = cname + " = " + cvalue + "; " + expires + "; path = " + location ;
}




/****** add code for responsive Menu *******/


$(document).ready(function () {
                $("#showMenu").hide();
                $("#dogleMenu").click(function () {
                    $("#showMenu").slideToggle();
                }) ;

                function windowsize() {

                    var winsize= $(window).width();
                    if(winsize <= "640")
                    {
                        $(".menuList").css("display","none");
                        $("#dogleMenu").css("display","block");
                    }
                    else
                    {
                        $(".menuList").css("display","block");
                        $("#dogleMenu").css("display","none");


                    }

                }

				windowsize();

                $(window).resize(function () {
                    var winsize= $(window).width();
                    if(winsize <= "640")
                    {
                       $(".menuList").css("display","none");
                        $("#dogleMenu").css("display","block");
                    }
                    else
                    {
                        $(".menuList").css("display","block");
                        $("#dogleMenu").css("display","none");

                    }
                });

            });
