// Polimorfismo
class Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando notificación: ${mensaje}`);
        
    }
}

class NotificacionMail extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando mail: ${mensaje}`);
        
    }
}

class NotificacionSMS extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando SMS: ${mensaje}`);
        
    }
}

class NotificacionPush extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando notificación Push: ${mensaje}`);
        
    }
}

function enviarNotificacion(notificacion: Notificacion, mensaje: string): void {
    notificacion.enviar(mensaje);
} 

enviarNotificacion(new NotificacionMail(), 'Bienvenidos!');
enviarNotificacion(new NotificacionSMS(), 'Código de verificación: 1234');
enviarNotificacion(new NotificacionPush(), 'Tienes un nuevo mensaje.')