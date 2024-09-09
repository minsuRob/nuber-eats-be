import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CategoriesResolver, RestaurantResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.service';
import { CategoryRepository } from './repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, CategoryRepository])],
  providers: [RestaurantResolver, RestaurantService, CategoriesResolver],
})
export class RestaurantsModule {}
