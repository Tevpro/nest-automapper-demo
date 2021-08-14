import { mapFrom, mapWith } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, MappingProfile } from '@automapper/types';
import { OrderDto } from '../dto';
import { Order, Taco } from '../entity';
import { Drink } from 'src/enums/drink.enum';

export class OrderProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper: Mapper) => {
      mapper
        .createMap(OrderDto, Order, {})
        .forMember(
          (dest) => dest.drink,
          mapFrom((src) => {
            switch (src.drink?.toLowerCase()) {
              case 'coke':
                return Drink.COKE;
              case 'margarita':
                return Drink.MARGARITA;
              case 'topo chico':
                return Drink.TOPO_CHICO;
              default:
                return Drink.WATER;
            }
          }),
        )
        .forMember(
          (dest) => dest.tacos,
          mapFrom((src) => {
            return this.mapper.mapArray(src.taco, Taco, String);
          }),
          //mapWith(String[], Taco[], (source) => source.taco),
        );
    };
  }
}
