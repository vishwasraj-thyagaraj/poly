import Model, { attr, belongsTo } from '@ember-data/model';

export default class Comment extends Model {
  @attr('string') body;
  @belongsTo('feed', { polymorphic: true, async: true }) feed;
  // @type('modelName', arguments) accessorProperty;
}
