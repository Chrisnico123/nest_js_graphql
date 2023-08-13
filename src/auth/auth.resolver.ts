import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse } from './dto/login.user.response';
import { LoginUserInput } from './dto/login.user.input';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './gql.Authguard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(@Args('loginUserInput') loginUserinput: LoginUserInput) {
    console.log(loginUserinput.password);
    return this.authService.login(loginUserinput);
  }
}
