import { Drink } from 'src/enums/drink.enum';
import { Taco } from './taco.entity';

export class Order {
  tacos: Taco[];
  drink: Drink;
  notes: string;
}
