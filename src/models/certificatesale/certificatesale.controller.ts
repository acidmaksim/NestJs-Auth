import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CertificatesaleService } from './certificatesale.service';
import { CreateCertificatesaleDto } from './dto/create-certificatesale.dto';
import { UpdateCertificatesaleDto } from './dto/update-certificatesale.dto';

@Controller('certificatesale')
export class CertificatesaleController {
  constructor(private readonly certificatesaleService: CertificatesaleService) {}

  @Post()
  create(@Body() createCertificatesaleDto: CreateCertificatesaleDto) {
    return this.certificatesaleService.create(createCertificatesaleDto);
  }

  @Get()
  findAll() {
    return this.certificatesaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatesaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCertificatesaleDto: UpdateCertificatesaleDto) {
    return this.certificatesaleService.update(+id, updateCertificatesaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatesaleService.remove(+id);
  }
}
