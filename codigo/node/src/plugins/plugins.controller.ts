import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { PluginsService } from './plugins.service';
import { User } from '../users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { GetPuglinsDto } from './dto/get-plugins.dto';
import { GetInstances } from './dto/instances/get-instance.dto';
import { CreateInstancesDto } from './dto/instances/create-instances.dto';
import { Instance } from './entities/instance/instance.entity';
import { Role } from 'src/auth/role.decorator';
import { UserRole } from 'src/users/user-roles.enum';
import { CreatePuglinDto } from './dto/create-plugin.dto';

@ApiTags('Plugins')
@Controller('plugins')
@UseGuards(AuthGuard())
export class PluginsController {
  constructor(private readonly pluginsService: PluginsService) {}

  @Get()
  async findAll(): Promise<GetPuglinsDto> {
    return await this.pluginsService.findAll();
  }

  @Get(':pluginId/instances')
  async getInstaces(
    @Param('pluginId') pluginId: string,
    @GetUser() user: User,
  ): Promise<GetInstances> {
    return await this.pluginsService.getInstaces(pluginId, user);
  }

  @Post()
  @Role(UserRole.ADMIN)
  async createPuglin(@Body() body: CreatePuglinDto) {
    return this, this.pluginsService.createPlugiin(body);
  }

  @Post(':pluginId/instances')
  async createInstance(
    @Param('pluginId') pluginId: string,
    @Body() createIntanceDto: CreateInstancesDto,
    @GetUser() user: User,
  ): Promise<Instance> {
    return await this.pluginsService.createInstance(
      pluginId,
      createIntanceDto,
      user,
    );
  }

  @Delete('/instances/:instanceId')
  deleteInstance(
    @Param('instanceId') instanceId: string,
    @GetUser() user: User,
  ) {
    this.pluginsService.deleteInstance(instanceId, user);
  }
}
