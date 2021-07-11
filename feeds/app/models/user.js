import Model, { attr, hasMany } from '@ember-data/model';

export default class User extends Model {
  @attr('string') name;
  @hasMany('feed', { polymorphic: true, async: true }) feeds;
}
