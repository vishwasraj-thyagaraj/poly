import Model, { attr, belongsTo } from '@ember-data/model';

export default class Feed extends Model {
  @attr('string') title;
  @attr('string') url;

  get feedType() {
    return this.constructor.modelName;
  }

  @belongsTo('user') user;
}
