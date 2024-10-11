<h1>Memoria de FUNDAMENTOS-DE-JS-ES6-_CJ  - 2º DAW</h1>
<h2>Plantilla03 - 01</h2>

<h2>Índice</h2>
<ul>
  <li><a href="#introduccion">Introducción</a></li>
  <li><a href="#resumen">Resumen</a></li>
  <li><a href="#estructura">Estructura</a></li>
  <li><a href="#calculadora">Calculadora</a></li>
  <li><a href="#conversor">Conversor</a></li>
  <li><a href="#estilo">Estilo</a></li>
</ul>

<h2 id="introduccion">Introducción</h2>
<p>Trabajo realizado por: Sergio Ramos Alarcón</p>
<p>Proyecto de web de FUNDAMENTOS-DE-JS-ES6</p>
<p>Octubre de 2024</p>
<p>Licencia CC-BY</p>

<h2 id="resumen">Resumen</h2>
<p>He añadido un header con mi nombre y el título de los ejercicios.</p>
<p>Posteriormente, he hecho una barra de navegación con herramientas y la colección de ejercicios.</p>
<p>En el body he añadido el ejercicio correspondiente de la plantilla 3.</p>
<p>He incorporado una funcionalidad de inicio de sesión mediante ventanas emergentes.</p>
<p>Se ha añadido una calculadora con operaciones básicas, funciones para obtener el número entero o decimal del resultado y el cálculo de factorial.</p>
<p>También he añadido un conversor de sistemas numéricos (octal, hexadecimal, etc.) en JavaScript.</p>
<p>Finalmente, he creado un nuevo `index.html` para hacer un redireccionamiento inicial y he organizado todo el proyecto en carpetas específicas.</p>

<h2 id="estructura">Estructura</h2>
<p>La web está dividida en 4 secciones principales:</p>
<ul>
  <li>Header</li>  
  <li>Navbar</li>
  <li>Body</li>
  <li>Formulario</li>
  <li>Footer</li>
</ul>

<p>La estructura del proyecto se ha organizado de la siguiente manera, con cada funcionalidad o página separada en su propia carpeta:</p>
<ul>
  <li>`/css`: Archivo de estilos CSS</li>
  <li>`/js`: Archivos JavaScript</li>
  <li>`/img`: Imágenes</li>
  <li>`/login`: Archivo HTML para hacer el redirect después de iniciar sesión</li>
  <li>`/calculadora`: Archivo HTML para la calculadora</li>
  <li>`/conversor`: Archivo HTML para el conversor</li>
  <li>`/cookies`: Archivo HTML para las cookies</li>
</ul>

<p>Se ha añadido un nuevo en `/login` -> `index.html` que redirecciona a la página principal de la web tras el login.</p>

<h2 id="calculadora">Calculadora</h2>
<p>He creado una calculadora en JavaScript que permite realizar las siguientes operaciones:</p>
<ul>
  <li>Suma</li>
  <li>Resta</li>
  <li>Multiplicación</li>
  <li>División</li>
  <li>Factorial</li>
</ul>
<p>Además, la calculadora cuenta con las siguientes funcionalidades adicionales:</p>
<ul>
  <li>Obtener el número entero del resultado.</li>
  <li>Obtener el número decimal del resultado (si lo hubiera).</li>
</ul>
<p>La calculadora está disponible en el navbar y se puede acceder a ella después de iniciar sesión. El archivo HTML de la calculadora está en la carpeta `/calculadora`.</p>

<h2 id="conversor">Conversor</h2>
<p>He añadido un conversor de sistemas numéricos que permite convertir entre los siguientes sistemas:</p>
<ul>
  <li>Binario</li>
  <li>Octal</li>
  <li>Decimal</li>
  <li>Hexadecimal</li>
</ul>
<p>El conversor facilita la conversión entre estos diferentes sistemas de numeración y está disponible en el navbar después de iniciar sesión. El archivo HTML del conversor está en la carpeta `/conversor`.</p>

<h2>Header</h2>
<p>La cabecera incluye el título del temario de JavaScript.</p>
<p>También tiene todos los enlaces de js,favicon,css que necesito</p>

<h2>Navbar</h2>
<p>En el navbar he añadido los enlaces a la Plantilla 3, la Calculadora y el Conversor que están en el desplegable de "Cookies", los cuales solo son visibles después de iniciar sesión.</p>

<h2>Body</h2>
<p>En el body he añadido el contenido de los ejercicios.</p>

<h2>Formulario</h2>
<p>El login que se realiza mediante un formulario gestionado con JavaScript.</p>

<h2>Footer</h2>
<h4>Menú vertical central</h4>
<p>He incluido mi nombre con copyright para los derechos de autor.</p>

<h2 id="estilo">Estilo de la página</h2>
<h3>Paleta de colores (TODAVÍA NO ESTÁN TODOS USADOS)</h3>
<p>
  <li>#FFE66D</li>
  <li>#FF6B6B</li>
  <li>#F7FFF7</li>
  <li>#4ECDC4</li>
  <li>#1A535C</li>
  <li>black</li>
  <li>white</li> 
</p>

<h3>Tipografías</h3>
<p>
  <li>Roboto (Google)</li>
  <li>Helvetica</li>
  <li>Arial</li>
  <li>sans-serif</li>
</p>

<h3>Imágenes</h3>
<img src="img/bgblanco.png" alt="fondo blanco" width="200">
<img src="img/sergio.jfif" alt="mi cara" width="400">


<h3>Videos</h3>
<p>(Ninguno por ahora)</p>

<h2 id="snippets">Code snippets</h2>
<p>He utilizado los siguientes snippets:</p>
<ul>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://www.w3schools.com/howto/howto_css_dropdown.asp">
</ul>
