/*

	ClientHTTPClass.js
	Author: Rafael Souza
	
	Description: Esta classe criar cliente HTTP responsavel em enviar requisições a um servidor de autenticação;

*/

class ClientHTTP {
	// Atributos publicos
	
	// Atributos privados
	#client;
	#baseURL
	#eventResponse;
	#data;
	
	// Método construtor
	constructor(baseURL) {
		try{
			this.#baseURL = baseURL; // Armazena a URL base
			this.#client = new XMLHttpRequest(); // Instancia o objeto XMLHttpRequest			
			this.#eventResponse = new CustomEvent("loadResponse"); // Cria um evento para o retorno da resposta			
			console.info("O objeto 'ClientHTTP' foi criado!"); // Confirma a instancia do objeto ClientHTTP
		}
		catch(e){
			console.error(e);
		}		
	} 
	
	/*
		Método 'GET': envia uma requisição do tipo GET para o servidor.	
	*/
	GET(obj) {		
		if(!obj.url){
			obj.url = "";
		}
		
		this.#client.open("get", this.#baseURL + obj.url,true);
		this.#client.onload = () => {			
			this.#data = this.#client.responseText;
			document.dispatchEvent(this.#eventResponse);
		};
		this.#client.send(obj.msg);
	}
	
	/*
		Método 'POST': envia uma requisição do tipo GET para o servidor.	
	*/
	POST(obj) {
		if(!obj.url){
			obj.url = "";
		}
		
		this.#client.open("post", this.#baseURL + obj.url,true);
		this.#client.onload = () => {			
			this.#data = this.#client.responseText;
			document.dispatchEvent(this.#eventResponse);
		};
		this.#client.send(obj.msg);
	}
	
	get data() {
		return this.#data;
	}
	
	response(callback) {		
		document.addEventListener("loadResponse",callback,false);			
	}
	
}