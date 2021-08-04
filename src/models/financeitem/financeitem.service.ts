import { Injectable } from '@nestjs/common';
import { CreateFinanceitemDto } from './dto/create-financeitem.dto';
import { UpdateFinanceitemDto } from './dto/update-financeitem.dto';

@Injectable()
export class FinanceitemService {
  create(createFinanceitemDto: CreateFinanceitemDto) {
    return 'This action adds a new financeitem';
  }

  findAll() {
    return `This action returns all financeitem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financeitem`;
  }

  update(id: number, updateFinanceitemDto: UpdateFinanceitemDto) {
    return `This action updates a #${id} financeitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} financeitem`;
  }
}
