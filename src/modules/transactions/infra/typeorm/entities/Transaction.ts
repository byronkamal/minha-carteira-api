import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'

import Category from './Category'
import User from '@modules/users/infra/typeorm/entities/User'

@Entity('transactions')
class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  value: number;

  @Column()
  description: string;

  @Column()
  user_id: number;

  @Column()
  category_id: number;

  @JoinColumn({ name: 'category_id' })
  @ManyToOne(() => Category, (category) => category.transactions)
  category?: Category

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User, (user) => user.transactions)
  user?: User

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
