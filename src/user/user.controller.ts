import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

// ここのエンドポイントは、ログインしているユーザーの情報を返す

@UseGuards(AuthGuard('jwt'))
// ユーザー関係のエンドポイントをJWTでプロテクトする
// 認証にも色々あると思うが、その中でもJWTを使う
// AuthGuardをカスタマイズするための、strategyを指定する
// それはJWTがheaderにある場合もあるし、cookieにある場合もあるからそれに合わせて設定する

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getLoginUser(@Req() req: Request): Omit<User, 'hashedPassword'> {
    // Requestについては、型定義をカスタマイズしている
    // それはcustom.d.tsに書いてある
    return req.user;
  }

  // ニックネーむをアップデートしている
  @Patch()
  updateUser(
    @Req() req: Request,
    @Body() dto: UpdateUserDto,
  ): Promise<Omit<User, 'hashedPassword'>> {
    return this.userService.updateUser(req.user.id, dto);
  }
}
