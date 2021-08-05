import { Injectable } from '@nestjs/common';
import { CreateCertificatesaleDto } from './dto/create-certificatesale.dto';
import { UpdateCertificatesaleDto } from './dto/update-certificatesale.dto';

@Injectable()
export class CertificatesaleService {
  create(createCertificatesaleDto: CreateCertificatesaleDto) {
    return 'This action adds a new certificatesale';
  }

  findAll() {
    return `This action returns all certificatesale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} certificatesale`;
  }

  update(id: number, updateCertificatesaleDto: UpdateCertificatesaleDto) {
    return `This action updates a #${id} certificatesale`;
  }

  remove(id: number) {
    return `This action removes a #${id} certificatesale`;
  }
}
