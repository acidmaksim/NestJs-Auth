import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  title: string;

  @IsBoolean()
  @IsOptional()
  totalAccess: boolean;

  @IsBoolean()
  @IsOptional()
  calendarAccess: boolean;

  @IsBoolean()
  @IsOptional()
  sheduleAccess: boolean;

  @IsBoolean()
  @IsOptional()
  certificateAccess: boolean;

  @IsBoolean()
  @IsOptional()
  financeAccess: boolean;

  @IsBoolean()
  @IsOptional()
  employeeAccess: boolean;

  @IsBoolean()
  @IsOptional()
  settingsAccess: boolean;

  @IsBoolean()
  @IsOptional()
  statisticsAccess: boolean;

  @IsString()
  profileId: string;
}
