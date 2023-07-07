import { LoadScript } from "./scriptLoad.js";


const scriptsInEvents = {

	async EventMenu_Event2_Act1(runtime, localVars)
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

	async EventMenu_Event4_Act1(runtime, localVars)
	{
		if (Cookies.get('fauna-auth')) {
		runtime.globalVars.AuthToken = Cookies.get('fauna-auth');
		} else {
		runtime.globalVars.AuthToken = "";
		}
		
	},

	async EventMenu_Event7_Act4(runtime, localVars)
	{
		runtime.objects.planetText.getFirstInstance().text =`[outline=#000000][lineThickness=0.6]BEST: ${runtime.globalVars.planetRun}[/lineThickness][/outline]`;
		const response = await fetch('/api/FireHit', {
		    method: 'POST',
		    body: JSON.stringify({
				authToken: runtime.globalVars.AuthToken,
				planetRun: runtime.globalVars.planetRun,
		   	}),
		})
		  
		console.log("-->", response)
	},

	async EventMenu_Event8_Act1(runtime, localVars)
	{
		runtime.objects.planetText.getFirstInstance().text =`[outline=#000000][lineThickness=0.6]BEST: ${runtime.globalVars.planetRun}[/lineThickness][/outline]`;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

