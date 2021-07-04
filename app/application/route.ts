import Transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';
import { IntlService, service } from 'ember-super-template/utils/re-exports';

export default class Application extends Route.extend({
	// anything which *must* be merged to prototype here
}) {
	// normal class body definition here

	@service intl!: IntlService;

	beforeModel(transition: Transition) {
		super.beforeModel(transition);

		this.intl.setLocale(['en-us']);
	}
}
