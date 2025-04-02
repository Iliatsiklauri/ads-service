import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
