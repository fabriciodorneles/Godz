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

		async EventMenu_Event3_Act1(runtime, localVars)
		{
			if (Cookies.get('fauna-auth')) {
			runtime.globalVars.AuthToken = Cookies.get('fauna-auth');
			} else {
			runtime.globalVars.AuthToken = "";
			}
			
		},

		async EventMenu_Event5_Act1(runtime, localVars)
		{
			await fetch('/api/FireInit', {
				method: 'POST',
				body: JSON.stringify({
					authToken: runtime.globalVars.AuthToken
				}),		
			}).then((res) => res.json())
				.then((json) => {
				runtime.globalVars.planetRun = json.planetRun ? json.planetRun : 0;
				runtime.objects.planetText.getFirstInstance().text =`[outline=#000000]BEST: ${runtime.globalVars.planetRun}[/outline]`;
			})
		},

		async EventMenu_Event6_Act4(runtime, localVars)
		{
			runtime.objects.planetText.getFirstInstance().text =`[outline=#000000]BEST: ${runtime.globalVars.planetRun}[/outline]`;
			const response = await fetch('/api/FireHit', {
			    method: 'POST',
			    body: JSON.stringify({
					authToken: runtime.globalVars.AuthToken,
					planetRun: runtime.globalVars.planetRun,
			   	}),
			})
			  
			console.log("-->", response)
		},

		async EventMenu_Event7_Act1(runtime, localVars)
		{
			runtime.objects.planetText.getFirstInstance().text =`[outline=#000000]BEST: ${runtime.globalVars.planetRun}[/outline]`;
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

