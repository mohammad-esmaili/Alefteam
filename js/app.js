function setCoocki(cname,cvalue,days)
{
	var d = new Date();
	d.setTime(d.getTime() + (days*24*60*60*1000));

	var expires = "expires=" + d.toUTCString();

	var location = document.location.pathname;

	document.cookie = cname + " = " + cvalue + "; " + expires + "; path = " + location ;
}