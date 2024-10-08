import { IsEmail, IsNumber, IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import {Role} from '../../../auth/entities/roles.entity'; // los roles se definiran mas adelante 
import { Tournament } from "src/modules/tournamet/entities/tournamet.entity";
import { TournamentPlayerScore } from "../../scor/entities/scor.entity";

@Entity()
export class Players {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @Column()
    nickname: string;

    @Column()
    fullname:string

    @Column({ unique: true })
    @IsEmail()
    email: string;

    @Column()
    age: number;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    @IsString()
    password: string;

    @Column({ type: 'bigint' })
    @IsNumber()
    whatsapp: number;


    @ManyToMany(() => Role, role => role.users)
    @JoinTable() 
    roles: Role[];


    @ManyToMany(() => Tournament, tournament => tournament.players)
    tournaments: Tournament[];

    @OneToMany(() => TournamentPlayerScore, score => score.player)
    scores: TournamentPlayerScore[];
}