import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  totalAccess: boolean;

  @IsBoolean()
  calendarAccess: boolean;

  @IsBoolean()
  sheduleAccess: boolean;

  @IsBoolean()
  certificateAccess: boolean;

  @IsBoolean()
  financeAccess: boolean;

  @IsBoolean()
  employeeAccess: boolean;

  @IsBoolean()
  settingsAccess: boolean;

  @IsBoolean()
  statisticsAccess: boolean;

  profileId: string;
}
