const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const numParticles = 100;

let mouse = { x: null, y: null };

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = 2;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
}

function drawLines() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.move();
        particle.draw();
    });

    drawLines();

    requestAnimationFrame(animate);
}

animate();


function typeWriter(element, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// Iniciar la animación al cargar la página
// Función para escribir texto con efecto de tipeo
// Función para convertir {color+palabra} en spans con color antes de la animación
// Función para convertir {color+palabra} en spans con color antes de la animación
// Función para convertir {color+palabra} en spans con color antes de la animación
// Función para convertir {color+palabra} en spans con color antes de la animación
function formatTextWithColors(text) {
    return text.replace(/\{([a-zA-Z0-9#]+)\+([^\}]+)\}/g, '<span style="color: $1; font-weight: bold;">$2</span>');
}

// Función para escribir texto con efecto de tipeo sin pausas y con velocidad controlada
function typeWriter(element, rawText, speed, callback) {
    let formattedHTML = formatTextWithColors(rawText); // Convertimos {color+palabra} en spans antes de animarlo
    let tempContainer = document.createElement("div");
    tempContainer.innerHTML = formattedHTML;

    let nodes = [];
    
    // Extraer nodos de texto y span en un array
    tempContainer.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            nodes.push(...node.textContent.split("").map(char => ({ type: "text", content: char })));
        } else {
            let span = document.createElement("span");
            span.innerHTML = node.innerHTML;
            nodes.push({ type: "element", content: span });
        }
    });

    let i = 0;
    function typing() {
        if (i < nodes.length) {
            let item = nodes[i];
            if (item.type === "text") {
                element.appendChild(document.createTextNode(item.content));
            } else {
                element.appendChild(item.content);
            }
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// Iniciar la animación al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    let titleElement = document.getElementById("subtitle-title");
    let textElement = document.getElementById("subtitle-text");
    let buttonsContainer = document.getElementById("nav-buttons");

    typeWriter(titleElement, "¿Qué es el Charlismo?", 50, function () {
        setTimeout(() => {
            typeWriter(
                textElement,
                "El Charlismo es un estilo de Vida, una forma Diferente de ver el Mundo, una teoría diferente a la que Conocemos. El Charlismo es amar, conocer, razonar, pensar y hacer.",
                40,
                function () {
                    // Cuando termine de escribirse todo, mostramos los botones
                    setTimeout(() => {
                        buttonsContainer.classList.add("show-buttons");
                    }, 700);
                }
            );
        }, 500);
    });
});

function getSpainTime() {
    let options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    let spainTime = new Date().toLocaleTimeString("es-ES", options);
    return spainTime;
}

document.addEventListener("DOMContentLoaded", function () {
    let createdByElement = document.getElementById("created-by");
    let videoContainer = null;
    let videoMati = null;

    let españa_hora = getSpainTime();
    let mensaje = "ha son las " + españa_hora;

    let texts = [
        "Created by zPaio_ For fun",
        "Muerte al GronchoMC",
        "MatiAto También Participó",
        "Viva el Charlismo",
        "Estoy re aburrido",
        "Texto6",
        "Se me olvido poner el anterior texto",
        "Ultimo texto",
        "twitch.tv/adreanup",
        "BASTAAAAA",
        "viva messi",
        "Empiezo a creer que zPaio_ y Badoqq son la misma persona",
        "Created by Badoqq For fun",
        "uh asi no era",
        "pinta asado?",
        "yo prefiero las milanesas a la napolitana",
        "milanesa de pollo o de carne?",
        "de pescado",
        "que?",
        "FOOORMIDABLE",
        "que la parta y la choke",
        "y que solita se trepe y se monte",
        "NO ME HAGO EL DURO NO",
        "ME HAGO EL DURISIMO",
        "PERO EN EL FONDO, TE EXTRAÑO MUCHISIMO",
        "No me he podido olvidar de ti",
        "Aún guardo lo' recuerdos dentro de mí",
        "¿Pa' qué digo que no, si sí?",
        "Si nunca he conocido alguien así, así, así",
        "Así, así de buena, así, así de loca",
        "Si lo mueve', no existe quien no te reconozca",
        "Cuando ella se me viene pa' adelante, no me pienso tirar pa' atrás",
        "Te doy una media vuelta y, despacito, empieza a bajar",
        "Que buena cancion la session de luck ra",
        "que mal equipo el valencia",
        "no sos del valencia no?",
        "viva el valencia",
        "Carly el mati me dejo solo pensando los textos",
        "Si lees esto decile que es un \"Mal amigo :(\"",
        "El Nazan se hace el genio por tener T-HELPER",
        "ThorDelete Traidor",
        "Hay 120 textos Caarly, tenes que llegar al ultimo",
        "PERA (emi dijo que ponga eso)",
        "Mandale saludos",
        "ESTOY EN PARTIDA",
        "att: emi",
        "Mama tells me I shouldn't bother",
        "That I ought just stick to another man",
        "A man that surely deserves me",
        "But I think you do",
        "So I cry, and I pray, and I beg",
        "Love me, love me",
        "Say that you love me",
        "que buena cancion lovefool",
        "me dijieron maricon por poner esa cancion en los textos",
        "tengo sueño",
        "me canse, sigo escribiendo mañana",
        "hola ya es mañana",
        "hola ya es pasado mañana",
        "uh me olvide de esta pagina",
        "que hora es alla en españita?",
        mensaje,
        "aca son las",
        "me dio pereza programar la hora en argentina xd",
        "mati me dejo solo y se fue a ver pelis",
        "mi unico amigo emilianito",
        "sabias que si tocas el punto del titulo te lleva a un mini juego?",
        "te la creiste",
        "y si no te la creiste?",
        "... y si enrealidad...",
        "¿Sabías que, en la infinitud de posibilidades, un solo toque en el punto del título podría transportarte a un universo distinto?",
        "Pero… ¿qué tal si nunca hubo tal universo?",
        "¿Y si la verdadera ilusión no fue creerlo, sino dudarlo?",
        "¿Acaso no es nuestra percepción del mundo un minijuego en sí mismo?",
        "carly escucha mi cancion favorita",
        "se llama medio tana, tranqui hace click de vuelta",
        "disfrutala",
        "cuanto le das?",
        "si no la escuchaste me voy a poner triste",
        "ya estoy triste",
        "tengo hambre enrealidad",
        "estoy muy flaco tengo que comer mas",
        "no se me ocurren las ideas",
        "bueno volviendo a la cancion",
        "cuando le das del 1 al 10?",
        "y por que 10?",
        "decime por discord porque me da pereza programar",
        "gracias",
        "No te lo queria decir pero no son 120 mensajes",
        "ya enseguida se acaban",
        "creo",
        "Fin.",
        "Ahora si fin.",
        "FEIN",
        "FEIN FEIN FEIN",
        "Fin"
    ];

    let index = 0;

    createdByElement.addEventListener("click", function () {
        index = (index + 1) % texts.length; 
        createdByElement.innerHTML = `<h3>${texts[index]}</h3>`;

        if (texts[index] === "disfrutala") {
            if (!videoContainer) {
                videoContainer = document.createElement("div");
                videoContainer.style.position = "absolute";
                videoContainer.style.top = "50%";
                videoContainer.style.left = "50%";
                videoContainer.style.transform = "translate(-50%, -50%)";
                videoContainer.style.width = "560px";
                videoContainer.style.height = "315px";
                videoContainer.innerHTML = `
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/6gpVjE2OYhY?autoplay=1" 
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                    </iframe>
                `;
                document.body.appendChild(videoContainer);
            }
        }
    });
});







