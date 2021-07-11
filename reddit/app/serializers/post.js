import JSONSerializer from '@ember-data/serializer/json';
import { underscore } from '@ember/string';

// https://www.reddit.com/r/emberjs.json

// let payload = {
//   "data": {
//     "children": [
//       {
//         "data": {
//           "id": "ogx7nu",
//           "title": "What's the preferred IDE for ember dev?",
//           "url": "https://www.reddit.com/r/emberjs/comments/ogx7nu/whats_the_preferred_ide_for_ember_dev/",
//           "num_comments": 7,
//           "subreddit_id": "t5_2tjb2"
//         }
//       }
//     ]
//   }
// }

export default class PostSerializer extends JSONSerializer {
  // map keys from the API to relationships on our model
  attrs = {
    // belongsTo attribute - subreddit => foreign key mapping subreddit_id in posts response
    subreddit: 'subreddit_id'
  };

  keyForAttribute(attr) {
    // JSONSerializer expects camelCasing, as we have num_comments, we do this conversion
    return underscore(attr);
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    // get the data from payload
    return super.normalizeArrayResponse(store, primaryModelClass, payload.data.children, id, requestType);
  }

  normalize(typeClass, hash) {
    // inside array the data is present "data", this is executed for each item in the array
    return super.normalize(typeClass, hash.data);
  }
}
