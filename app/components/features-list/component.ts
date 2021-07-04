import Component from '@glimmer/component';

interface FeaturesListArgs {}

export default class FeaturesList extends Component<FeaturesListArgs> {
	features = [
		'TypeScript',
		'Using Pods folder structure',
		'Removed IE 11 support',
		'Bootstrap 5',
		'Fontawesome 5',
		'Typed Template',
	];
}
