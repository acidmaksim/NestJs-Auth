import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCertificateDto } from './create-certificate.dto';

export class UpdateCertificateDto extends PartialType(
  OmitType(CreateCertificateDto, ['profileId'] as const),
) {}