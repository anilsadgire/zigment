import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';

@Module({
  controllers: [NotificationsController], // Add the controller here
  providers: [NotificationsService], // Add the service here
  exports: [NotificationsService], // Export the service if needed
})
export class NotificationsModule {}
