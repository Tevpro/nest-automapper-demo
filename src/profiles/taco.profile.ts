import { mapFrom } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Taco } from '../entity';
import { Filling, Shell } from 'src/enums';

export class TacoProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper
        .createMap(String, Taco, {})
        .forMember(
          (dest) => dest.shell,
          mapFrom((src) => {
            const text = src.toLowerCase();
            if (text.indexOf(Shell.BLUE_CORN) >= 0) return Shell.BLUE_CORN;
            else if (text.indexOf(Shell.CORN) >= 0) return Shell.CORN;
            else if (text.indexOf(Shell.FLOUR) >= 0) return Shell.FLOUR;
            return null;
          }),
        )
        .forMember(
          (dest) => dest.filling,
          mapFrom((src) => {
            const filling: Filling[] = [];
            const text = src.toLowerCase();
            if (text.indexOf(Filling.BLACK_BEAN) >= 0)
              filling.push(Filling.BLACK_BEAN);
            if (text.indexOf(Filling.PEPPER_JACK) >= 0)
              filling.push(Filling.PEPPER_JACK);
            if (text.indexOf(Filling.QUESO_BLANCO) >= 0)
              filling.push(Filling.QUESO_BLANCO);
            if (text.indexOf(Filling.BRUSSELS_SPROUT) >= 0)
              filling.push(Filling.BRUSSELS_SPROUT);
            for (const item of src.toLowerCase().split(' ')) {
              switch (item) {
                case Filling.BEEF:
                case Filling.PORTOBELLO:
                case Filling.PORK:
                case Filling.CHICKEN:
                case Filling.CARNITAS:
                case Filling.JALAPENOS:
                  filling.push(item);
                  break;
              }
            }
            return filling;
          }),
        );
    };
  }
}
