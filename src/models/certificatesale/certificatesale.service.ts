import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCertificatesaleDto } from './dto/create-certificatesale.dto';
import { UpdateCertificatesaleDto } from './dto/update-certificatesale.dto';
import { CertificatesaleEntity } from './entities/certificatesale.entity';

@Injectable()
export class CertificatesaleService {
  constructor(
    @InjectRepository(CertificatesaleEntity)
    private certificatesaleRepository: Repository<CertificatesaleEntity>,
  ) {}

  create(
    certificatesaleCreateDto: CreateCertificatesaleDto,
  ): Promise<CertificatesaleEntity> {
    const certificatesale = new CertificatesaleEntity();
    return this.certificatesaleRepository.save({
      ...certificatesale,
      ...certificatesaleCreateDto,
    });
  }

  findAll(query): Promise<CertificatesaleEntity[]> {
    return this.certificatesaleRepository.find(query);
  }

  async findOne(certificatesaleId: string): Promise<CertificatesaleEntity> {
    const certificatesale = this.certificatesaleRepository.findOne(
      certificatesaleId,
      { withDeleted: true },
    );

    if (!certificatesale) {
      throw new NotFoundException();
    }

    return certificatesale;
  }

  async updateCertificatesale(
    certificatesaleId: string,
    certificatesaleUpdateDto: UpdateCertificatesaleDto,
  ): Promise<CertificatesaleEntity> {
    const certificatesale = await this.findOne(certificatesaleId);

    return this.certificatesaleRepository.save({
      ...certificatesale,
      ...certificatesaleUpdateDto,
    });
  }

  async delete(certificatesaleId: string): Promise<CertificatesaleEntity> {
    const certificatesale = await this.findOne(certificatesaleId);

    return this.certificatesaleRepository.softRemove(certificatesale);
  }

  async recover(certificatesaleId: string): Promise<CertificatesaleEntity> {
    const certificatesale = await this.findOne(certificatesaleId);

    return this.certificatesaleRepository.recover(certificatesale);
  }
}
