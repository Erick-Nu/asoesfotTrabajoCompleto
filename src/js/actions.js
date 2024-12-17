//Writing efect 
// Creamos una variable en la libreria Typed, donde configuraremos el texto que queremos mostrar en nuestra pagina web
const typed = new Typed('.typed', {
    // Objeto string con las plabras que vamos a mostrar y animar en nuestra pagina web
    strings: [
        'Bienvenid@s Esfotdianos',
        'Noticias actuales', 
        'Apoyo académico', 
        'Cursos de refuerzo', 
        ' y mucho más....'],
    // Propiedades para la ejecucion del texto
        // Velocidad de escritura in milisegundo
        typeSpeed: 60,
        // Tiempo de espera antes de borrar lo que se escribio
        backDelay: 400,
        // Tiempo de espera antes de empezar a escribir
        startDelay: 1000,
        // loop defide la animacion se va a repetir o no (True = Bucle) (False = 1 sola vez)
        loop: true,
});




