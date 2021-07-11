import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class Bookmark extends Model {
  @attr('string') name;
  @attr('string') url;
  @belongsTo('user') user;
}