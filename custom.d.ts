import { User } from '@prisma/client';

declare module 'express-serve-static-core' {
  // ここで型をカスタマイズしている
  // これで、Requestの型にuserを追加できる
  interface Request {
    user?: Omit<User, 'hashedPassword'>;
  }
}
