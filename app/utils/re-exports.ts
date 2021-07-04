import { Registry as services } from '@ember/service';
import { Registry as controllers } from '@ember/controller';
export { default as IntlService } from 'ember-intl/services/intl';

export { inject as service } from '@ember/service';

export default function reExports() {
	return true;
}

export interface Services extends services {}
export interface Controllers extends controllers {}
