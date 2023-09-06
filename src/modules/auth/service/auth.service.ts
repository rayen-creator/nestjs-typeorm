import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/service/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService, private usersService: UserService) { }

  async validateUser(username: string, password: string) {

    const user = await this.usersService.findByUsername(username);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

}
