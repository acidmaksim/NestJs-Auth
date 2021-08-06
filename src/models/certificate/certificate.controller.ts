import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  create(@BodyWithProfile() certificateData: CreateCertificateDto) {
    return this.certificatesService.create(certificateData);
  }

  @Patch(':id')
  update(
    @Body() certificateData: UpdateCertificateDto,
    @Param('id') certificateId: string,
  ) {
    return this.certificatesService.updateCertificate(
      certificateId,
      certificateData,
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
