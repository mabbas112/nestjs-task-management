import { Module } from '@nestjs/common';
import { ConversionController } from './conversion.controller';
import { ConversionService } from './conversion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oconversions } from './Oconversions';
import { Tonicpayouts } from './Tonicpayouts';
import { Vconversions } from './Vconversions';

@Module({
  controllers: [ConversionController],
  providers: [ConversionService],
  imports: [
    TypeOrmModule.forFeature([
      Oconversions,
      Tonicpayouts,
      Vconversions
    ])

  ]
})
export class ConversionModule { }
