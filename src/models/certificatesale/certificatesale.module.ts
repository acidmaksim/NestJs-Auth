import { Module } from '@nestjs/common';
import { CertificatesaleService } from './certificatesale.service';
import { CertificatesaleController } from './certificatesale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CertificatesaleEntity } from './entities/certificatesale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CertificatesaleEntity])],
  controllers: [CertificatesaleController],
  providers: [CertificatesaleService],
})
export class CertificatesaleModule {}
