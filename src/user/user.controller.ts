import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get() //경로를 설정하지 않으면 "user/" 경로로 설정이 된다.
    getHelloWorld(): string {
        return this.userService.getHelloWorld();
    }

    @Post('/create_user')
    onCreateUser(@Body('id') id: number, @Body('name') name: string): User[] {
        return this.userService.onCreateUser(id, name);
    }

    @Get('/user_all')
    getUserAll(): User[] {
        return this.userService.getUserAll();
    }

    @Get('/user')
    findByUserOne1(@Query('id') id: number): User {
        return this.userService.findByUserOne(id);
    }

    /**
     * @author Ryan
     * @description @Param 방식 - 단일 유저 조회
     *
     * @param id 유저 고유 아이디
     */
    @Get('/user/:id')
    findByUserOne2(@Param('id') id: number): User {
        return this.userService.findByUserOne(id);
    }

    @Patch('/user/:id')
    setUser(@Param('id') id: number, @Body('name') name: string): User {
        return this.userService.setUser(id, name);
    }

    /**
     * @author Ryan
     * @description @Body 방식 - 전체 유저 수정
     *
     * @param id 유저 고유 아이디
     * @param name 유저 이름
     */
    @Put('/user/update')
    setAllUser(@Body('id') id: number, @Body('name') name: string): User[] {
        return this.userService.setAllUser(id, name);
    }

    /**
     * @author Ryan
     * @description @Query 방식 - 단일 유저 삭제
     *
     * @param id 유저 고유 아이디
     */
    @Delete('/user/delete')
    deleteUser(@Query('id') id: number): User[] {
        return this.userService.deleteUser(id);
    }
}
