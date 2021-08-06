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
import { CertificatesaleService } from './certificatesale.service';
import { CreateCertificatesaleDto } from './dto/create-certificatesale.dto';
import { UpdateCertificatesaleDto } from './dto/update-certificatesale.dto';

@UseGuards(AuthGuard)
@Controller('certificatesales')
export class CertificatesaleController {
  constructor(
    private readonly certificatesalesService: CertificatesaleService,
  ) {}

  @Post()
  create(
    @BodyWithProfile() createCertificatesaleDto: CreateCertificatesaleDto,
  ) {
    return this.certificatesalesService.create(createCertificatesaleDto);
  }

  @Patch(':id')
  update(
    @Param('id') certificatesaleId: string,
    @Body() updateCertificatesaleDto: UpdateCertificatesaleDto,
  ) {
    return this.certificatesalesService.updateCertificatesale(
      certificatesaleId,
      updateCertificatesaleDto,
    );
  }

  @Get()
  async getAll(@QueryWithProfile() query) {
    const certificatesale = await this.certificatesalesService.findAll(query);
    return certificatesale;
  }

  @Get(':id')
  findOne(@Param('id') certificatesaleId: string) {
    return this.certificatesalesService.findOne(certificatesaleId);
  }

  @Delete(':id')
  delete(@Param('id') certificatesaleId: string) {
    return this.certificatesalesService.delete(certificatesaleId);
  }

  @Delete('/recover/:id')
  recover(@Param('id') certificatesaleId: string) {
    return this.certificatesalesService.recover(certificatesaleId);
  }
}
