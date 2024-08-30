import { ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class EditProfileOutput extends CoreOutput {}

@ObjectType()
export class EditProfileInput extends PartialType(
  PickType(User, ['email', 'password']),
) {}
