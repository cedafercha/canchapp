import { NotificationTypeEnum, PlacementAlignEnum, PlacementFromEnum } from "../enum/commons.enum";

/**
 * @property {number} delay - Tiempo que demora en estar visible la notificación.
 * @property {string} title - Titulo a mostrar en la notificación.
 * @property {string} message Texto a mostrar en la notificación.
 * @property {string} icon Icono a mostrar en la notificación.
 * @property {NotificationType} type Tipo de notificación.
 * @property {PlacementFrom} placementFrom Colocación de la notificación.
 * @property {placementAlign} placementAlign Alineacion de la notificación.
 */
export class Notifications {
    delay: number = 3000;
    title: string = '';
    message: string = '';
    icon: string = 'none';
    type: NotificationTypeEnum = NotificationTypeEnum.Default;
    placementFrom: PlacementFromEnum = PlacementFromEnum.Top;
    placementAlign: PlacementAlignEnum = PlacementAlignEnum.Right;
}