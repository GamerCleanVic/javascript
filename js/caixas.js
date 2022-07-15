function toLimit(string = ""){
	string.value = string.value.substring(0,2);
}

var btnEnviar = document.querySelector('.btn1')
btnEnviar.addEventListener('click',function(event){
	event.preventDefault();
	enviar();
})



function enviar(){
	const p1 = document.getElementById("txt1");
	const p2 = document.getElementById("txt2");
	const btn2 = document.getElementById("btnRepetir");
	const h2TT = document.getElementById("tituloCaixa1");

	let aux1 = document.getElementById("caixa1").value;
	let aux2 = document.getElementById("caixa2").value;
	//var aux3 = document.getElementById("caixa2").value;
	//var aux4 = document.getElementById("caixa2").value;
	
	if(document.getElementById("caixa1").value == ""){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE ALGO!</a>");
	}
	else if(document.getElementById("caixa1").value == 0){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE 1 Nº INTEIRO DIFERENTE DE ZERO!</a>");
	}
	else if(document.getElementById("caixa2").value == ""){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE ALGO!</a>");
	}
	else if(document.getElementById("caixa2").value == 0){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE 1 Nº INTEIRO DIFERENTE DE ZERO!</a>");
	}
	
			/* ARRAY FILTER*/
			/* document.location.reload(true); */
			
			//let num2 = 0;			
			//let soma = 0;
					
			//num = parseInt(aux1);
			//num2 = parseInt(aux2);	
			
				//soma = num1 + num2;
				const numeros = [1,3]
				numeros[0] = parseInt(aux1);
				numeros[1] = parseInt(aux2);
				const apenasImpar = numeros.filter((number, indice, array) =>{
					return number % 2 !== 0;
				});
			if(apenasImpar % 2 !== 0  && numeros[0] !== numeros[1]){				
				p1.insertAdjacentHTML("afterend",`<p class='bgResult'>
						<font class='texto1' >					
							Do vetor:
							<div style='border:solid 2px darkgreen; padding:3px; margin-bottom:3px; color: darkgreen;'>
								${numeros[0]}
							</div>
							<div style='border:solid 2px darkgreen; padding:3px; margin-bottom:3px; color: darkgreen;'>
								${numeros[1]}
							</div>
							<div style='color: darkgreen; margin-bottom:3px; margin-top:14px;'>
								Ambos: ${numeros[0]} e ${numeros[1]} são ímpares!
							</div>
						</font>
				</p>`);
				console.log('Do vetor:');
				console.log(`Só ${parseInt(apenasImpar)} é ímpar!`);
			}
			else if(apenasImpar % 2 !== 0 && numeros[0] == numeros[1]){
				p1.insertAdjacentHTML("afterend",`<p class='bgResult'>
					<font class='texto1' style='margin-bottom:3px; color: darkgreen;'>					
						Do vetor, ambos são iguais e ímpares!						
					</font>
				</p>`);
			}			
			else if(apenasImpar % 2 == 0 && numeros[0] == numeros[1]){
				p1.insertAdjacentHTML("afterend",`<p class='bgResult'>
					<font class='texto1' style='margin-bottom:3px; color: darkgreen;'>					
						Do vetor, os nºs são iguais e nenhum deles é ímpar!						
					</font>
				</p>`);
			}
			else{
				p1.insertAdjacentHTML("afterend",`<p class='bgResult'>
					<font class='texto1' style='margin-bottom:3px; color: darkgreen;'>					
						Do vetor, nenhum ímpar foi detectado!						
					</font>
				</p>`);
			}
			
			//num2 = parseFloat(aux2);
			
			//num1.toLowerCase()
			/* rua = parseInt(aux2); */
						
			
			/* p1.insertAdjacentHTML("afterend","<p class='bgResult'><font class='texto1'>O nome da variáve 1 é char."); */
			/* p1.insertAdjacentHTML("afterend","<p class='bgResult'><font class='texto1'>"+char+" + "+rua+" = "+(char + rua)+"</font></p>"); */
			/* p2.insertAdjacentHTML("afterend","<p class='bgResult'><font class='texto1'>O nome da variáve 2 é rua."); */
			/* p2.insertAdjacentHTML("afterend","<p class='bgResult'><font class='texto1'>"+char+" / "+rua+" = "+(char / rua)+"</font></p>"); */

			/* var aux2 = parseInt(aux1); */
			/* console.log("O Salário Bruto = "+sb+" e o Salário Líquido = "+sL);
			p1.insertAdjacentHTML("afterend","<p class='bgResult'><font class='texto1'>O Salário Bruto = "+sb+" e o Salário Líquido = "+sL+"</font></p>"); */
			
			document.getElementById("btnRepetir").innerHTML = "<div style='display:flex; flex-direction:column; align-items:center; justify-content:space-between;'><a href='index.html' class='btnAfter' style='text-align:center; text-decoration:none; width:280px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:darkgreen; color:#d9d9d9; border-radius:5px; border:1px solid lightgreen; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>TESTE OUTROS VALORES</a></div>";
} 
