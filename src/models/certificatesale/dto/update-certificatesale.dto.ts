import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCertificatesaleDto } from './create-certificatesale.dto';

export class UpdateCertificatesaleDto extends PartialType(
  OmitType(CreateCertificatesaleDto, ['profileId'] as const),
) {}
