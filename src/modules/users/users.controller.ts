import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./services/users.service";
import { Prisma } from "@prisma/client";
import { Chance } from "chance";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.users({});
  }

  @Get("/:id")
  async getUserById(@Param("id") id: string) {
    return this.usersService.user({ id: parseInt(id) });
  }

  @Post()
  async createUser() {
    const input = {
      email: Chance().email(),
      firstName: Chance().name(),
      lastName: Chance().last(),
    } satisfies Prisma.UserCreateInput;
    return this.usersService.createUser(input);
  }

  @Put("/:id")
  async updateUser(@Param("id") id: string) {
    const input = {
      email: Chance().email(),
      firstName: Chance().name(),
      lastName: Chance().last(),
    } satisfies Prisma.UserUpdateInput;
    return this.usersService.updateUser({ where: { id: parseInt(id) }, data: input });
  }

  @Delete("/:id")
  async deleteUser(@Param("id") id: string) {
    return this.usersService.deleteUser(parseInt(id));
  }
}
