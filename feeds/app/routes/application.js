import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
	async model() {
		let user = await this.store.findRecord('user', 1);
		let feed = await this.store.findRecord('feed', 1);
		return {
			user,
			feed
		}
	}
}
