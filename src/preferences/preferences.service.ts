import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Preferences } from './schemas/preferences.schema';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(Preferences.name)
    private readonly preferencesModel: Model<Preferences>,
  ) {}

  async createPreference(preferenceDto: any): Promise<Preferences> {
    const newPreference = new this.preferencesModel(preferenceDto);
    return await newPreference.save();
  }

  async getPreferenceById(userId: string): Promise<Preferences> {
    return this.preferencesModel.findOne({ userId });
  }

  async updatePreference(userId: string, updates: any): Promise<Preferences> {
    return this.preferencesModel.findOneAndUpdate({ userId }, updates, {
      new: true,
    });
  }

  async deletePreference(userId: string): Promise<Preferences> {
    return this.preferencesModel.findOneAndDelete({ userId });
  }
}
