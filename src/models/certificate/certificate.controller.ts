import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BodyWithProfile } from '@src/decorators/body-decorator';
import { QueryWithProfile } from '@src/decorators/query-decorator';
import { AuthGuard } from '../user/guards/auth.guard';
import { CertificateService } from './certificate.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';

@UseGuards(AuthGuard)
@Controller('certificates')
export class CertificateController {
  constructor(private readonly certificatesService: CertificateService) {}

  @Post()
  create(@BodyWithProfile() createCertificateDto: CreateCertificateDto) {
    return this.certificatesService.create(createCertificateDto);
  }

  @Patch(':id')
  update(
    @Body() updateCertificateDto: UpdateCertificateDto,
    @Param('id') certificateId: string,
  ) {
    return this.certificatesService.updateCertificate(
      certificateId,
      updateCertificateDto,
    );
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const certificate = await this.certificatesService.findAll(query);
    return certificate;
  }

  @Get(':id')
  getOne(@Param('id') certificateId: string) {
    return this.certificatesService.findOne(certificateId);
  }

  @Patch('/recover/:id')
  recover(@Param('id') certificateId: string) {
    return this.certificatesService.recover(certificateId);
  }
}
