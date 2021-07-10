import { attr } from '@ember-data/model';
import Feed from './feed';

export default class Image extends Feed {
  @attr('number') size;
  get formatted() {
    return `${this.size/1000}Kb`;
  }
}
