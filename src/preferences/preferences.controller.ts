import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PreferencesService } from './preferences.service';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  async createPreference(@Body() preferenceDto: any) {
    return this.preferencesService.createPreference(preferenceDto);
  }

  @Get(':userId')
  async getPreference(@Param('userId') userId: string) {
    return this.preferencesService.getPreferenceById(userId);
  }

  @Patch(':userId')
  async updatePreference(
    @Param('userId') userId: string,
    @Body() updates: any,
  ) {
    return this.preferencesService.updatePreference(userId, updates);
  }

  @Delete(':userId')
  async deletePreference(@Param('userId') userId: string) {
    return this.preferencesService.deletePreference(userId);
  }
}
