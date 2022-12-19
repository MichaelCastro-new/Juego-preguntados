

var tema = document.getElementById('tema_');
var item_ = document.getElementById('item_text');
var quest = document.getElementById('question');
var clasques = document.getElementById('qus');

var answer_btn = document.querySelectorAll('.answer_1')



  
function theme () {
	
	// time_interval()
	




	for (y=0; y<= 3; y++){
		answer_btn[y].removeAttribute('class')
	}
    clasques.removeAttribute('class')
	setTimeout(() => {
		for (i=0; i<= 3; i++){
			answer_btn[i].classList.add('answer_1', 'animate_animated', 'animate__flipInX')
		}
		clasques.classList.add('question', 'animate_animated', 'animate__flipInX');
	}, 1)

	var random = Math.floor(Math.random()*3); 
	if (random == 0){
		tema.removeAttribute('class')
		
	    tema.classList.add('historia');
		item_.textContent = 'HISTORIA';
	}
	else if (random == 1){
        tema.removeAttribute('class')
		tema.classList.add('deportes');
		item_.textContent = 'DEPORTES';
	}

	else if (random == 2){
		tema.removeAttribute('class')
		tema.classList.add('ciencia');
		item_.textContent = 'CIENCIA'
	}

	Question(random)
}

function Question (x) {
    
	var preguntas_H = [
		'¿Cuando ocurrió la segunda guerra mundial?',
		'¿Cual de las siguientes es una de las 7 maravillas del mundo?',
		'¿Cuando se creó el primer telefono?',
		'¿Qué ocurrió en Chernóbil?',
		'¿De que murio Simon Bolivar?'
	]
	 
	var preguntas_C = [
		'¿Cuál es el animal más grande que habita la Tierra?',
		'¿En qué galaxia se encuentra la Tierra?',
		'¿Cuál es la fórmula química del agua?',
		'¿Cuál es la edad del universo?',
		'Un electrón lleva una carga positiva'
	]

	var preguntas_D = [
		'¿Qué jugador de fútbol ha ganado más copas del mundo?',
		'¿Qué jugador de la NBA ha ganado más campeonatos en la historia?',
		'¿En qué equipo jugó Carles Puyol durante su carrera como futbolista?',
		'¿En qué año se jugaron los Juegos Olímpicos de México?',
		'¿A quién se otorga el Balón de Oro?'
	]


	var prefig = ['H', 'C', 'D']
    
    var preguntaRandom = Math.floor(Math.random()*5)
	if (x == 0){
		quest.textContent = preguntas_H[preguntaRandom]
		Answer(preguntas_H[preguntaRandom], preguntas_H, prefig[0])
	}
	else if (x == 1){
        quest.textContent = preguntas_D[preguntaRandom]
        Answer(preguntas_D[preguntaRandom], preguntas_D, prefig[2])
	}

	else if(x == 2){
		quest.textContent = preguntas_C[preguntaRandom]
	    Answer(preguntas_C[preguntaRandom], preguntas_C, prefig[1])
	}

}

var respuestas_c = [
	['La ballena azul',
     'El Elefante',
	 'La ballena orca',
	 'La Jirafa'
	],
	['La via lactea',
	 'Andromeda',
	 'Palo de Hockey',
	 'ESO 486-21'	
	],
	['H2O',
	 'CO2',
	 'NH3',
	 'CH2O'	
	],
	['Trece mil millones de años',
     'Doce mil millones de años',
	 'Un millon de años',
	 'Quinientos millones de años'	
	],
	['Verdadero',
	 'Falso',
	 'El proton lleva carga positiva',
	 'El neutron lleva carga positiva'	
	]

]

var respuestas_c_redux = ['La ballena azul', 'La via lactea', 'H2O', 'Trece mil millones de años', 'Falso']


var respuestas_h = [
	['1939',
     '1945',
	 '1900',
	 '1845'
	],
	['Petra',
	 'La torre eiffel',
	 'La estatua de la libertad',
	 'El louvre'	
	],
	['1854',
	 '1876',
	 '1840',
	 '1890'	
	],
	['Incidente nuclear',
     'Gerra nuclear',
	 'Incendio',
	 'Inundación'	
	],
	['Disparo',
	 'Neumonia',
	 'Tuberculosis',
	 'Diabetes'	
	]

]

var respuestas_h_redux = ['1939', 'Petra', '1854', 'Incidente nuclear', 'Tuberculosis']


var respuestas_d = [
	['Pelé',
     'Messi',
	 'C. Ronaldo',
	 'Mbbape'
	],
	['Bill Russell',
	 'Stephen Curry',
	 'Lebron James',
	 'Ninguno de los anteriores'	
	],
	['Barcelona',
	 'Paris Saint Germain',
	 'Manchester City',
	 'Real Madrid'	
	],
	['1968',
     '1950',
	 '1970',
	 '1955'	
	],
	['Mejor futbolista del año',
	 'Mayor goleador del año',
	 'El jugador mas famoso del año',
	 'El jugador que gano mas partidos en el año'	
	]

]

var respuestas_d_redux = ['Pelé', 'Bill Russell', 'Barcelona', '1968', 'Mejor futbolista del año']

var j,k;
for (f=0; f<=3; f++){
    for (i = respuestas_c[f].length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = respuestas_c[f][i - 1];
        respuestas_c[f][i - 1] = respuestas_c[f][j];
        respuestas_c[f][j] = k;
    }

}   

var v,b;
for (f=0; f<=3; f++){
    for (i = respuestas_d[f].length; i; i--) {
        v = Math.floor(Math.random() * i);
        b = respuestas_d[f][i - 1];
        respuestas_d[f][i - 1] = respuestas_d[f][v];
        respuestas_d[f][v] = b;
    }

}

var l, z;
for (f=0; f<=3; f++){
    for (i = respuestas_h[f].length; i; i--) {
        l = Math.floor(Math.random() * i);
        z = respuestas_h[f][i - 1];
        respuestas_h[f][i - 1] = respuestas_h[f][l];
        respuestas_h[f][l] = z;
    }

}   

var idRespuestas = []

for (i=1; i<=4; i++){
    var rest = document.getElementById(`a${i}_r`);
	idRespuestas.push(rest)
}

var item_indice = ''

function Answer (q, p, r) {
	var item_letter = ['C', 'H', 'D']
	var respuestas_indice = [respuestas_c, respuestas_h, respuestas_d]
	for (s=0; s<= 2; s++){
		if(r == item_letter[s]){
			var item_letter_indice = s;
			item_indice = r
			for(i=0; i<= 4; i++){
				if(q == p[i]){
					let indice = i;
					for(i=0; i<= 3; i++){
						let ordenRandom = Math.floor(Math.random()*4)
							idRespuestas[i].textContent = respuestas_indice[s][indice][i]
						
					}
				}
			}
		}
	}
	  
}

var icons_value_id = document.getElementById('idC')
var icons_value = 0

   var ans_1 = document.getElementById('ans_1');
    ans_1.addEventListener('click', () => {conffir(ans_1)})

    var ans_2 = document.getElementById('ans_2');
    ans_2.addEventListener('click', () => {conffir(ans_2)})

    var ans_3 = document.getElementById('ans_3');
    ans_3.addEventListener('click', () => {conffir(ans_3)})

	var ans_4 = document.getElementById('ans_4');
	ans_4.addEventListener('click', () => {conffir(ans_4)})


	function conffir(e) {

		var value_element = e.firstChild.textContent;
		if (item_indice == 'C'){
			if(respuestas_c_redux.includes(value_element)){
				e.classList.remove('answer_1');
				e.classList.add('answer_2');
				setTimeout(() => {theme()}, 500)
				icons_value++
				icons_value_id.textContent = icons_value

			}
			else{
				e.classList.remove('answer_1');
				e.classList.add('answer_3');
				setTimeout(() => {theme()}, 500)
			}
		}
		
     	if (item_indice == 'D'){
			if(respuestas_d_redux.includes(value_element)){
				e.classList.remove('answer_1');
				e.classList.add('answer_2');
				setTimeout(() => {theme()}, 500)
                icons_value++;
				icons_value_id.textContent = icons_value;
			}
			else{
				e.classList.remove('answer_1');
				e.classList.add('answer_3');
				setTimeout(() => {theme()}, 500)
			}
		}
     	if (item_indice == 'H'){
			if(respuestas_h_redux.includes(value_element)){
				e.classList.remove('answer_1');
				e.classList.add('answer_2');
				setTimeout(() => {theme()}, 500)
				icons_value++
				icons_value_id.textContent = icons_value
			}
			else{
				e.classList.remove('answer_1');
				e.classList.add('answer_3');
				setTimeout(() => {theme()}, 500)
			}
		}
    }

// function time_interval () {
// 	var timer = document.getElementById('timer');
// 	var timmer_ex = 10
// 	var interval = setInterval(() => {
// 		timmer_ex--;
// 		timer.textContent = timmer_ex;
// 		console.log(timmer_ex);

// 		if(timmer_ex == 0){
// 			clearInterval(interval)
// 			theme()
			
// 		}
// 	}, 1000)
// }



// var Sp_btn = document.getElementById('btn');

// Sp_btn.addEventListener('click',() => {
// 	theme()
// })













theme()











