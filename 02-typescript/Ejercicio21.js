"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Polimorfismo
class Notificacion {
    enviar(mensaje) {
        console.log(`Enviando notificación: ${mensaje}`);
    }
}
class NotificacionMail extends Notificacion {
    enviar(mensaje) {
        console.log(`Enviando mail: ${mensaje}`);
    }
}
class NotificacionSMS extends Notificacion {
    enviar(mensaje) {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}
class NotificacionPush extends Notificacion {
    enviar(mensaje) {
        console.log(`Enviando notificación Push: ${mensaje}`);
    }
}
function enviarNotificacion(notificacion, mensaje) {
    notificacion.enviar(mensaje);
}
enviarNotificacion(new NotificacionMail(), 'Bienvenidos!');
enviarNotificacion(new NotificacionSMS(), 'Código de verificación: 1234');
enviarNotificacion(new NotificacionPush(), 'Tienes un nuevo mensaje.');
