
var selector;
var lotnumber;
var avaspots;

function start()
{
	selector = document.getElementById("lotselector");
	lotnumber = document.getElementById("lotnumber");
	avaspots = document.getElementById("avaspots");

}

function selected(event)
{
	var lotselected = selector.options[selector.selectedIndex].value;
	lotnumber.innerHTML = "Lot "+lotselected;

	//set up request to server to get lot count

	document.getElementById("defaultlot").selected = true;
}

addEventListener("load", start, false);