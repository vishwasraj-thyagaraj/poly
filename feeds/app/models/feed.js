import Model, { attr, hasMany } from '@ember-data/model';

export default class Feed extends Model {
  @attr('string') title;
  @attr('string') url;
  @hasMany('comment', { polymorphic: true, async: true }) comments;
  // @type('modelName', arguments) accessorProperty;
}
