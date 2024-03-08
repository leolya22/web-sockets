const online = document.querySelector( '#online' );
const offline = document.querySelector( '#offline' );
const mensaje = document.querySelector( '#mensaje' );
const enviarMensaje = document.querySelector( '#enviarMensaje' );

offline.style.display = 'none';
online.style.display = 'none';

const socket = io();

socket.on( 'connect', () => {
    online.style.display = '';
    offline.style.display = 'none';
});

socket.on( 'disconnect', () => {
    offline.style.display = '';
    online.style.display = 'none';
});

socket.on( 'enviar-mensaje', newMensaje => {
    console.log( newMensaje );
});


enviarMensaje.addEventListener( 'click', () => {
    const newMensaje = mensaje.value;
    socket.emit( 'enviar-mensaje', newMensaje, id => {
        console.log( 'Desde el server ', id );
    });
});