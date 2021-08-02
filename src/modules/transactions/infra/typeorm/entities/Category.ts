import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import Transaction from './Transaction'

@Entity('categories')
class Category extends BaseEntity {

  @PrimaryGeneratedColumn('increment')
  readonly id: number

  @Column()
  name: string

  @JoinColumn({ name: 'category_id' })
  @OneToMany(() => Transaction, (transaction) => transaction.category, {
    cascade: ['insert', 'update'],
  })
  transactions: Transaction[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Category
