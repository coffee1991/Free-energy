🌞 Free Energy

Free Energy es una iniciativa creada para inspirar el cambio hacia un futuro más sostenible. Su propósito es informar, educar y motivar a las personas a descubrir el poder de las energías renovables, especialmente la energía solar, como una alternativa limpia, accesible y eficiente.

🚀 Descripción del Proyecto

Este proyecto consiste en una página web educativa e interactiva que promueve el uso responsable de la energía y el aprovechamiento de fuentes renovables.
Incluye herramientas visuales y una calculadora de consumo energético que permite comparar el uso de energía convencional con el de paneles solares, mostrando los beneficios económicos y ambientales de esta transición.

🌿 Características Principales

🌍 Información educativa sobre energías renovables y su evolución histórica.

☀️ Simulador solar: Calcula el número de paneles solares necesarios y el ahorro potencial.

📊 Visualización de datos: Gráficos interactivos creados con Plotly que muestran:

Producción de energía renovable por fuente.

Participación de energías renovables en el total eléctrico.

Tendencias históricas en capacidad instalada.

Comparación entre consumo de energía renovable y convencional.

💡 Diseño responsive con Bootstrap, optimizado para dispositivos móviles y escritorio.

♻️ Enfoque sostenible, promoviendo la educación ambiental y la acción climática.

🧩 Tecnologías Utilizadas
Categoría	Herramienta / Lenguaje
Frontend	HTML5, CSS3, JavaScript, Bootstrap 5
Visualización de Datos	Python (Plotly, Pandas)
Backend / Datos	Flask o FastAPI (opcional para endpoints)
Datos	Archivos .xlsx con información de consumo y generación energética
Diseño	Canva / Illustrator (para logo y recursos visuales)

⚙️ Instalación y Ejecución Local
1️⃣ Clona el repositorio
git clone https://github.com/tuusuario/free-energy.git
cd free-energy

2️⃣ Abre el proyecto web

Abre el archivo index.html directamente en tu navegador o usa un servidor local:

npx live-server

3️⃣ (Opcional) Ejecuta los gráficos con Python

Si deseas regenerar los gráficos desde Excel:

pip install pandas plotly
python generar_graficos.py


Los gráficos se guardarán en la carpeta /static/plots/ listos para mostrarse en la web.

🌞 Estructura del Proyecto
free-energy/
│
├── index.html                 # Página principal
├── about.html                 # Sección informativa
├── calculator.html            # Calculadora solar
│
├── css/
│   └── styles.css             # Estilos personalizados
│
├── js/
│   ├── main.js                # Lógica general
│   └── calculator.js          # Script de la calculadora
│
├── assets/
│   ├── img/                   # Imágenes y logos
│   └── plots/                 # Gráficos generados con Plotly
│
├── data/
│   └── renewable-energy-consumption.xlsx
│
├── python/
│   └── generar_graficos.py    # Script para generar visualizaciones
│
└── README.md

🌍 Impacto y Objetivo

Free Energy busca empoderar a las personas y comunidades para que comprendan su papel en la transición energética.
A través de herramientas digitales accesibles, promueve la educación ambiental, la adopción de tecnologías limpias y la reducción de la huella de carbono.

👥 Autores
Free Energy Team


📄 Licencia

Este proyecto está bajo la licencia MIT, lo que permite su uso, copia y modificación con fines educativos y no comerciales.


“La energía más limpia es aquella que no se desperdicia.
En Free Energy creemos en un futuro donde cada rayo de sol cuenta.” ☀️
