/*

	Script.js
	Author: Rafael Souza 
	
	Description: Arquivo javascript para funcionalidades básicas da página.

*/

document.addEventListener("DOMContentLoaded", () => {
	const client = new ClientHTTP("http://localhost/apisolarts/");
	
	client.GET({url: '', msg: ''});
	
	client.response(()=>{
		console.info(client.data);
	});
	
} ,false);