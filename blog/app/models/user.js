import Model, { attr, hasMany } from '@ember-data/model';

export default class User extends Model {
  @attr('string') name;
  @hasMany('post', { async: false }) posts;
  @hasMany('bookmark', { async: true }) bookmarks;
}