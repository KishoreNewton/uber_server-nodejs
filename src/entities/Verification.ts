import { verificationTarget } from 'src/types/types';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import User from './User';

const PHONE: verificationTarget = 'PHONE';
const EMAIL: verificationTarget = 'EMAIL';

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text', enum: [PHONE, EMAIL] })
  target: verificationTarget;

  @Column({ type: 'text' })
  payload: string;

  @Column({ type: 'text' })
  key: string;

  @Column({ type: 'boolean', default: false })
  used: boolean;

  @ManyToOne((type) => User, (user) => user.verifications)
  user: User;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  private createKey(): void {
    if (this.target === PHONE) {
      this.key = Math.floor(Math.random() * 1000000).toString();
    } else if (this.target === EMAIL) {
      this.key = Math.random().toString(36).substr(2);
    } else {
      throw new Error('Something went wrong');
    }
  }
}

export default Verification;
