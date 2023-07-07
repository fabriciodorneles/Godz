import { LoadScript } from "./scriptLoad.js";


const scriptsInEvents = {

	async Es_mainmenu_Event1_Act1(runtime, localVars)
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

	async Es_mainmenu_Event3_Act1(runtime, localVars)
	{
		if (Cookies.get('fauna-auth')) {
		runtime.globalVars.AuthToken = Cookies.get('fauna-auth');
		} else {
		runtime.globalVars.AuthToken = "";
		}
	},

	async Es_game_Event41_Act6(runtime, localVars)
	{
		      const response = await fetch('/api/FireHit', {
		        method: 'POST',
		        body: JSON.stringify({
					authToken: runtime.globalVars.AuthToken,
					FireHit: runtime.globalVars.FireHit,
		        }),
		      })
			  
			  console.log(response)
	},

	async Es_game_Event48_Act3(runtime, localVars)
	{
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

