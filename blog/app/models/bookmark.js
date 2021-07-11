import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class Post extends Model {
  @attr('string') name;
  @attr('string') url;
  @belongsTo('user') user;
}