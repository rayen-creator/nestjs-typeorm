import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { Public } from 'src/decorator/public.decorator';

@Public()
@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("/signin")
  async login(@Body() user:any) {
    return await this.authService.login(user);
  }

  
}
