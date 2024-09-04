import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { IsString, Length } from 'class-validator';

@InputType('CategoryInputType', { isAbstract: true })
@ObjectType()
@Entity() // db table?
export class Category extends CoreEntity {
  @Field(type => String)
  @Column({ unique: true }) // db column
  @IsString()
  @Length(5)
  name: string;

  @Field(type => String, { nullable: true })
  @Column({ nullable: true })
  @IsString()
  coverImg: string;

  @Field(type => String)
  @Column({ unique: true })
  @IsString()
  slug: string;

  @Field(type => [Restaurant], { nullable: true })
  @OneToMany(
    type => Restaurant,
    restaurant => restaurant.category,
  )
  restaurants: Restaurant[];
}
