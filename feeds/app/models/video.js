import { attr } from '@ember-data/model';
import Feed from './feed';

export default class Video extends Feed {
  @attr('number') length;
  get formatted() {
    return `${this.length/60} hour(s)`;
  }
}
