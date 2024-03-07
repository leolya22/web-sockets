const online = document.querySelector( '#online' );
const offline = document.querySelector( '#offline' );
const mensaje = document.querySelector( '#mensaje' );
const enviarMensaje = document.querySelector( '#enviarMensaje' );

offline.style.display = 'none';
online.style.display = 'none';

const socket = io();

socket.on( 'connect', () => {
    console.log( 'Conectado', socket.id );
    online.style.display = '';
    offline.style.display = 'none';
});

socket.on( 'disconnect', () => {
    console.log( 'Desconectado' );
    offline.style.display = '';
    online.style.display = 'none';
});

enviarMensaje.addEventListener( 'click', () => {
    const newMensaje = mensaje.value;
    socket.emit( 'enviar-mensaje', newMensaje );
})