/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Res, Post, HttpStatus  } from "@nestjs/common";
import { Response } from "express";
import { userService } from "../services/user.service";

@Controller('/user')
export class userController{
    constructor(private readonly userService: userService) {}

    @Get('/:username')
    getUser(@Param('username') username: string) {
        return this.userService.getUser(username);
    }

    @Post()
    postUser(@Body('username') username: string, @Res() res: Response):
    {username: string; createdAt: Date}{
        res.status(HttpStatus.CREATED).json({username, createdAt: new Date()});
        return {
            username,
            createdAt: new Date(),
        };
    }
}