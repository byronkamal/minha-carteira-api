import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';

@Entity('users')
class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @JoinColumn({ name: 'user_id' })
  @OneToMany(() => Transaction, transaction => transaction.category, {
    cascade: ['insert', 'update'],
  })
  transactions: Transaction[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
