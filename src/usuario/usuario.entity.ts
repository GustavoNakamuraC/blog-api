import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    email: String;

    @Column()
    password: String;

    @Column({default: true})
    isActive: String;
}