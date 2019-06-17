let speedo = mp.browsers.new("package://speedometer/CEF/speedometer.html");
let showed = false;
let player = mp.players.local;

mp.events.add('render', () =>
{
	if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) // Check if player is in vehicle and is driver
	{
		if(showed === false) // Check if speedo is already showed
		{
			speedo.execute("showSpeedo();");
			showed = true;
		}
		/*Get vehicle infos*/
		let vel = player.vehicle.getSpeed() * 3.6;  	//Doc: https://wiki.rage.mp/index.php?title=Entity::getSpeed
		let rpm = player.vehicle.rpm * 1000; 			//Doc: https://wiki.rage.mp/index.php?title=Vehicle::rpm
		let gas = player.vehicle.getPetrolTankHealth(); //Doc: https://wiki.rage.mp/index.php?title=Vehicle::getPetrolTankHealth
		gas = gas < 0 ? 0: gas / 10;
		
		speedo.execute(`update(${vel}, ${rpm}, ${gas});`); // Send data do CEF
	}
	else
	{
		if(showed)
		{
			speedo.execute("hideSpeedo();");
			showed = false;
		}
	}
});