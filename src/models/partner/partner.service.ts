import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { LoginDto } from './dto/login.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PartnerEntity } from './entities/partner.entity';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '@src/constants';

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(PartnerEntity)
    private partnerRepository: Repository<PartnerEntity>,
  ) {}

  create(createPartnerDto: CreatePartnerDto): Promise<PartnerEntity> {
    const partner = new PartnerEntity();
    return this.partnerRepository.save({ ...partner, ...createPartnerDto });
  }

  findAll(query): Promise<PartnerEntity[]> {
    return this.partnerRepository.find(query);
  }

  async findOne(partnerId: string): Promise<PartnerEntity> {
    const partner = await this.partnerRepository.findOne(partnerId, {
      withDeleted: true,
      relations: ['places'],
    });

    if (!partner) {
      throw new NotFoundException();
    }

    return partner;
  }

  async updatepartner(
    partnerId: string,
    updatePartnerDto: UpdatePartnerDto,
  ): Promise<PartnerEntity> {
    const partner = await this.findOne(partnerId);
    return this.partnerRepository.save({ ...partner, ...updatePartnerDto });
  }

  async delete(partnerId: string): Promise<PartnerEntity> {
    const partner = await this.findOne(partnerId);
    return this.partnerRepository.softRemove(partner);
  }

  async recover(partnerId: string): Promise<PartnerEntity> {
    const partner = await this.findOne(partnerId);
    return this.partnerRepository.recover(partner);
  }

  async login(loginDto: LoginDto): Promise<PartnerEntity> {
    const partner = await this.partnerRepository.findOne(
      {
        email: loginDto.email,
        password: loginDto.password,
      },
      { select: ['password', 'id'] },
    );

    const isPasswordCorrect =
      !!partner && compare(loginDto.password, partner.password);

    if (!isPasswordCorrect) {
      throw new HttpException(
        'Email or password incorrect',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    delete partner.password;

    return partner;
  }

  getToken(id: string) {
    const data = {
      id,
      type: 'partner',
    };

    return sign(data, JWT_SECRET, { expiresIn: '360d' });
  }
}
