import JSONSerializer from '@ember-data/serializer/json';

// https://www.reddit.com/api/info.json?id=t5_2tjb2
// let payload = {
//   "data": {
//     "children": [
//       {
//         "data": {
//           "id": "2tjb2",
//           "title": "ember.js: a framework for ambitious web developers",
//           "description": "Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It Includes everything you need to build rich UIs that work on any device.",
//           "subscribers": 3962
//         }
//       }
//     ]
//   }
// }

export default class SubredditSerializer extends JSONSerializer {
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let resource = payload.data.children[0].data;
    // requsted id => t5_2tjb2
    // id in resource => 2tjb2
    resource.id = id;
    return super.normalizeFindRecordResponse(store, primaryModelClass, resource, id, requestType);
  }
}
