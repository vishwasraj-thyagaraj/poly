import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
	extractPolymorphicRelationship(relationshipType, relationshipHash, relationshipOptions) {
		debugger
		if (typeof relationshipHash === 'string') {
			let [type, id] = relationshipHash.split(':');
      return { id, type };
    }
		return super.extractPolymorphicRelationship(...arguments); 
	}
}