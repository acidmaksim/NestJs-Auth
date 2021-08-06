import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { CertificateEntity } from './entities/certificate.entity';

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(CertificateEntity)
    private certificateRepository: Repository<CertificateEntity>,
  ) {}

  create(
    certificateCreateDto: CreateCertificateDto,
  ): Promise<CertificateEntity> {
    const certificate = new CertificateEntity();

    return this.certificateRepository.save({
      ...certificate,
      ...certificateCreateDto,
    });
  }

  findAll(query): Promise<CertificateEntity[]> {
    return this.certificateRepository.find(query);
  }

  async findOne(certificateId: string): Promise<CertificateEntity> {
    const certificate = await this.certificateRepository.findOne(
      certificateId,
      { withDeleted: true },
    );

    if (!certificate) {
      throw new NotFoundException();
    }

    return certificate;
  }

  async updateCertificate(
    certificateId: string,
    certificateUpdateDto: UpdateCertificateDto,
  ): Promise<CertificateEntity> {
    const certificate = await this.findOne(certificateId);

    return this.certificateRepository.save({
      ...certificate,
      ...certificateUpdateDto,
    });
  }

  async delete(certificateId: string): Promise<CertificateEntity> {
    const certificate = await this.findOne(certificateId);
    return this.certificateRepository.softRemove(certificate);
  }

  async recover(certificateId: string): Promise<CertificateEntity> {
    const certificate = await this.findOne(certificateId);
    return this.certificateRepository.recover(certificate);
  }
}
