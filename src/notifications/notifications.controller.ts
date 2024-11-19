import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  sendNotification(@Body() notificationData: any) {
    const { userId, type, channel, content } = notificationData;
    return this.notificationsService.sendNotification(
      userId,
      type,
      channel,
      content,
    );
  }
}
