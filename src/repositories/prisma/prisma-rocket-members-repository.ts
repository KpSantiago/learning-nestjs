import { Injectable } from "@nestjs/common";
import { RocketMembersRepository } from "../rocket-members-repository";

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
    constructor() { }

    async create(name: string, memberFunction: string): Promise<void> {
        let r = await 'sksksksks';
    }
}