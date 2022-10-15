import organisatorsWorkshopsData from './organisatorsWorkshopsList';

const projectsList = [
	{
		align: 'start',
		title: '🪓 Warsztat stolarski ',
		anchor: 'wood',
		showMoreInfo: false,
		description:
			'Stolarka jest zajęciem tylko dla mężczyzn? Oczywiście, że nie! Jeśli zawsze chciałaś spróbować swoich sił w tym obszarze, ale nie do końca wiedziałaś jak się do tego zabrać to te warsztaty są dla Ciebie!',
		moreInfo: {
			text: [
				'Na zajęciach nauczycie się podstawowych umiejętności pracy z drewnem oraz bezpiecznego i prawidłowego używania narzędzi stolarskich! Na początek trochę teorii, a resztę zajęć poświęcicie praktyce. Będziecie mierzyć, wiercić, ciąć, szlifować, skręcać, czego efektem będzie samodzielnie wykonany przedmiot o niewielkim stopniu trudności!',
				'Widzimy się w każdą środę 16-19! PS.Mężczyźni również mile widziani 😉'
			],
			orgs: [
				organisatorsWorkshopsData.alt,
				organisatorsWorkshopsData.sds,
				organisatorsWorkshopsData.slowoOfWood
				// organisatorsWorkshopsData.alt

				// sds alt; slowoOfWood; hackerspace; darkdev;
			]
		}
	},
	{
		align: 'end',
		title: '💻 44Hackerspace ',
		anchor: 'hackerspace',
		showMoreInfo: false,
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		moreInfo: {
			text: ['', '', ''],
			orgs: [
				organisatorsWorkshopsData.hackerspace,
				organisatorsWorkshopsData.darkdev,
				organisatorsWorkshopsData.alt,
				organisatorsWorkshopsData.sds
			]
		}
	},
	{
		align: 'start',
		title: '📷 Warsztaty fotograficzne ',
		anchor: 'photo',
		showMoreInfo: false,
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		moreInfo: {
			text: ['', '', ''],
			orgs: [organisatorsWorkshopsData.alt, organisatorsWorkshopsData.sds]
		}
	},
	{
		align: 'end',
		title: '🏅 Turnieje sportowe',
		anchor: 'ping-pong',
		showMoreInfo: false,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		// 🏓 Turnieje ping-pongowe, ♟️ Turnieje szachowe
		moreInfo: {
			text: ['', '', ''],
			orgs: [organisatorsWorkshopsData.alt, organisatorsWorkshopsData.sds]
		}
	},
	{
		align: 'start',
		title: '🚲 Warsztat rowerowy ',
		anchor: 'bicycle',
		showMoreInfo: false,
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		moreInfo: {
			text: ['', '', ''],
			orgs: [
				organisatorsWorkshopsData.hackerspace,
				organisatorsWorkshopsData.darkdev,
				organisatorsWorkshopsData.alt,
				organisatorsWorkshopsData.sds
			]
		}
	},
	{
		align: 'end',
		title: '🎲 Wypożyczalnia gier planszowych',
		anchor: 'boardgames',
		showMoreInfo: false,
		description:
			'Gry planszowe to okazja do intelektualnej zabawy i miłego spędzenia wieczoru. 🧠 Zapraszamy wszystkich, którzy tęsknią za grami planszowymi i tych, którzy będą grać pierwszy raz . ',
		moreInfo: {
			text: ['', '', ''],
			orgs: [
				organisatorsWorkshopsData.hackerspace,
				organisatorsWorkshopsData.darkdev,
				organisatorsWorkshopsData.alt,
				organisatorsWorkshopsData.sds
			]
		}
	},
	{
		align: 'start',
		title: '🛠 Naprawa elektronarzędzi ',
		anchor: 'repair',
		showMoreInfo: false,
		description:
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
		moreInfo: {
			text: ['', '', ''],
			orgs: [
				organisatorsWorkshopsData.hackerspace,
				organisatorsWorkshopsData.darkdev,
				organisatorsWorkshopsData.alt,
				organisatorsWorkshopsData.sds
			]
		}
	}
];

export default projectsList;
