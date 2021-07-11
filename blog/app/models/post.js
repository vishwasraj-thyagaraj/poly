import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class Post extends Model {
  @attr('string') title;
  @attr('string') description;
  @belongsTo('user') user;
}