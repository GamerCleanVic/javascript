function toLimit(string = ""){
	string.value = string.value.substring(0,16);
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

	var aux1 = document.getElementById("caixa1").value;
	//var aux2 = document.getElementById("caixa2").value;
	//var aux3 = document.getElementById("caixa2").value;
	//var aux4 = document.getElementById("caixa2").value;
	
	if(document.getElementById("caixa1").value == ""){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE ALGO!</a>");
	}
	else if(document.getElementById("caixa1").value == 0){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE 1 Nº INTEIRO DIFERENTE DE ZERO!</a>");
	}
	/* else if(document.getElementById("caixa2").value == ""){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE ALGO!</a>");
	}
	else if(document.getElementById("caixa2").value == 0){
		document.write("<a href='index.html' style='text-align:center; text-decoration:none; width:400px; height:80px; font-weight:bold; font-size:25px; display:flex; flex-direction:row; justify-content:center; align-items:center; background-color:#6600ff; color:#d9d9d9; border-radius:5px; border:1px solid #6600ff; box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px #d9d9d9;'>CLICK E DIGITE 1 Nº INTEIRO DIFERENTE DE ZERO!</a>");
	} */
	
			/* ALG. SOMA*/
			/* document.location.reload(true); */
			let num = 0;
			//let num2 = 0;			
			//let soma = 0;
					
			//num = parseInt(aux1);
			//num2 = parseInt(aux2);	
			
				//soma = num1 + num2;
			var fibo = function (num = parseInt(aux1)){
				if(num == 1 || num == 2) return 1;
				else return fibo(num -1) + fibo(num -2);
			}
				
			p1.insertAdjacentHTML("afterend",`<p class='bgResult'>
				<font class='texto1'>
					<div style="color: darkgreen; border: solid 2px darkgreen; padding-top: 3px; padding-bottom: 3px; padding-right: 4px; padding-left: 4px;">
						Fibonacci = ${fibo(10)}
					</div>
				</font>
			</p>`);
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
