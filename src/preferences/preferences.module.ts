import { Module } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { PreferencesController } from './preferences.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Preferences, PreferencesSchema } from './schemas/preferences.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Preferences.name, schema: PreferencesSchema },
    ]),
  ],
  controllers: [PreferencesController],
  providers: [PreferencesService],
})
export class PreferencesModule {}
