import { Injectable } from '@angular/core';
import { JqueryService } from './service/jquery-service.service';
import { Notifications } from './models/notification.model';
import { NotificationTypeEnum } from './enum/commons.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly $ = this.jqueryService.useJQuery();

  constructor(private readonly jqueryService: JqueryService) { 

  }

    /**
   * Genera una notificacion.
   * @param {Notifications}  notificacion - Objeto configuración de la notificación.
   */
  showCustomNotification(notification: Notifications) {    
    this.$.notify(notification,{
      type: notification.type,
      placement: {
        from: notification.placementFrom,
        align: notification.placementAlign
      },
      time: 1000,
      delay: notification.delay,
    });
  }

  /**
   * Genera una notificacion con plantilla exitosa.
   * @param _message - Mensaje a mostrar en la notificación.
   */
  SuccesNotification(_message: string) {
    const notiSucces: Notifications = new Notifications();
    notiSucces.message = _message;
    notiSucces.icon = 'fa-solid fa-check';
    notiSucces.type = NotificationTypeEnum.Succes;
    this.showCustomNotification(notiSucces);
  }

  /**
   * Genera una notificacion con plantilla informativa.
   * @param _title - Titulo de la notificación.
   * @param _message - Mensaje a mostrar en la notificación.
   */
  InfoNotification(_message: string) {
    const notiSucces: Notifications = new Notifications();
    notiSucces.message = _message;
    notiSucces.icon = 'fa-solid fa-info';
    notiSucces.type = NotificationTypeEnum.Info;
    this.showCustomNotification(notiSucces);
  }

  /**
 * Genera una notificacion con plantilla de error.
 * @param _title - Titulo de la notificación.
 * @param _message - Mensaje a mostrar en la notificación.
 */
  ErrorNotification(_message: string) {
    const notiSucces: Notifications = new Notifications();
    notiSucces.message = _message;
    notiSucces.icon = 'fa-solid fa-bell';
    notiSucces.type = NotificationTypeEnum.Danger;
    this.showCustomNotification(notiSucces);
  }

  /**
 * Genera una notificacion con plantilla de advertencia.
 * @param _title - Titulo de la notificación.
 * @param _message - Mensaje a mostrar en la notificación.
 */
  WarningNotification( _message: string) {
    const notiSucces: Notifications = new Notifications();
    notiSucces.message = _message;
    notiSucces.icon = 'fa-solid fa-exclamation';
    notiSucces.type = NotificationTypeEnum.Warning;
    this.showCustomNotification(notiSucces);
  }

}
