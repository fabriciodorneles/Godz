import { LoadScript } from "./scriptLoad.js";


const scriptsInEvents = {

	async Menuevent_Event1_Act1(runtime, localVars)
	{
		const cookiesAvailable = await LoadScript("https://cdn.jsdelivr.net/npm/js-cookie@3.0.1");
		if (cookiesAvailable)
		{
			if(!Cookies.get('fauna-auth')){
			runtime.objects.WalletMsg.getFirstInstance().text ="[outline=#000000][lineThickness=0.6]CONNECT YOUR WALLET[/lineThickness][/outline]";
			} 
			else {
			console.log("Usuário não Autorizado");
			}
		}
		else
		{
			console.log("The COOKIES is not available");
		}
	},

	async Menuevent_Event5_Act1(runtime, localVars)
	{
		if (Cookies.get('fauna-auth')) {
		runtime.globalVars.AuthToken = Cookies.get('fauna-auth');
		} else {
		runtime.globalVars.AuthToken = "";
		}
		
	},

	async Gameevent_Event39_Act2(runtime, localVars)
	{
		      const response = await fetch('/api/FireHit', {
		        method: 'POST',
		        body: JSON.stringify({
					authToken: runtime.globalVars.AuthToken,
					highScore: runtime.globalVars.best,
		        }),
		      })
			  
			  console.log(response)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

