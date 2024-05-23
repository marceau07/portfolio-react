// Import images
import WebImageAdrar from '../images/web_projet_erp_adrar.png';
import WebImageAdrar2 from '../images/web_projet_erp_adrar2.png';
import WebImageAdrar3 from '../images/web_projet_erp_adrar3.png';
import WebImageAdrar4 from '../images/web_projet_erp_adrar4.png';
import WebImageSimpleduc from '../images/web_projet_simpleduc.png';
import WebImageSimpleduc2 from '../images/web_projet_simpleduc2.png';
import WebImageSimpleduc3 from '../images/web_projet_simpleduc3.png';
import WebImageSimpleduc4 from '../images/web_projet_simpleduc4.png';
import WebImageLeCovidDechaine from '../images/web_projet_le_covid_dechaine.png';
import WebImageLeCovidDechaine2 from '../images/web_projet_le_covid_dechaine2.png';
import WebImageLeCovidDechaine3 from '../images/web_projet_le_covid_dechaine3.png';
import WebImageLeCovidDechaine4 from '../images/web_projet_le_covid_dechaine4.png';
import WebImageLeCovidDechaine5 from '../images/web_projet_le_covid_dechaine5.png';
import WebImageSportifsDeCoeur from '../images/web_projet_sportifs_de_coeur.png';
import WebImageLegendarium from '../images/web_projet_legendarium.png';
import WebImageInnovAnglais from '../images/web_projet_innov_anglais.png';
import WebImageParcInformatique from '../images/web_projet_parc_informatique.png';
import WebImageParcInformatique2 from '../images/web_projet_parc_informatique.png';
import WebImageParcInformatique3 from '../images/web_projet_parc_informatique.png';
import WebImageKtane from '../images/web_projet_ktane.png';
import WebImageJulieBressand from '../images/web_projet_julie_bressand.png';
import WebImageChallenge from '../images/web_projet_challenge.png';
import LogicielImageDiscord from '../images/logiciel_projet_discord.png';
import LogicielImageDiscord2 from '../images/logiciel_projet_discord2.png';
import LogicielImageDiscord3 from '../images/logiciel_projet_discord3.png';
import LogicielImageSundryGame from '../images/logiciel_projet_sundry_game.png';
import LogicielImageTaquin from '../images/logo_no_logo.png';
import MobileImageYoutime from '../images/mobile_projet_youtime.png';
import MobileImageUndefinedPlay from '../images/mobile_projet_undefined_play.png';
import MobileImageTlssgc from '../images/mobile_projet_tlssgc.png';
import MobileImageInnovAnglais from '../images/mobile_projet_innov_anglais.png';
import MobileImageInnovAnglais2 from '../images/mobile_projet_innov_anglais2.png';
import MobileImageInnovAnglais3 from '../images/mobile_projet_innov_anglais3.png';
import MobileImageInnovAnglais4 from '../images/mobile_projet_innov_anglais4.png';
import MobileImageInnovAnglais5 from '../images/mobile_projet_innov_anglais5.png';
import MobileImageInnovAnglais6 from '../images/mobile_projet_innov_anglais6.png';
import MobileImageInnovAnglais7 from '../images/mobile_projet_innov_anglais7.png';
import MobileImageParcInformatique from '../images/mobile_projet_parc_informatique.png';
import MobileImageFleex from '../images/mobile_projet_fleex.png';
import MobileImageBeerMaker from '../images/mobile_projet_beer_maker.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiX
} from 'react-icons/fi';

export const singleProjectData = {
	WebErpAdrar: {
		ProjectHeader: {
			title: 'ERP ADRAR',
			publishDate: '2023',
			tags: 'ERP / Pro / Gros projet',
			logo: WebImageAdrar,
			alt: "Logo de l'ADRAR",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'espace formation',
				img: WebImageAdrar2,
			},
			{
				id: 2,
				title: 'Boîte aux lettres Session/Stagiaire',
				img: WebImageAdrar3,
			},
			{
				id: 3,
				title: 'Gestion du stage stagiaire',
				img: WebImageAdrar4,
			}
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'ADRAR',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Conception & développement',
					link: '#',
				},
				{
					id: 3,
					title: 'Github',
					details: 'https://github.com/MarceauAdrar/erp_adrar',
					link: 'https://github.com/MarceauAdrar/erp_adrar',
				},
				{
					id: 4,
					title: 'Site',
					details: 'Consultez !',
					link: 'https://www.adrar.dev',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Il me fallait un outil me permettant de gérer mes sessions, pour partager les cours, gérer les documents et permettre aux stagiaires de travailler de chez eux, je l\'ai donc fait.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JS',
						'PHP',
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'J\'ai créé cette application dans le but de me faciliter les tâches répétitives, de pouvoir voir mes cohortes, leurs noms, leurs sessions, leurs stages et tout ça au même endroit avec un design très simple et épuré.',
				},
				{
					id: 2,
					details:
						'Je l\'ai également utilisée pour permettre la génération d\'éléments (PDF, feuilles Excel), tout est rempli à un endroit, et cela permet d\'alimenter d\'autres sources.',
				},
			],
		},
	},
	LogicielBotDiscord: {
		ProjectHeader: {
			title: 'Bot Discord',
			publishDate: '2019',
			tags: 'Logiciel / UI',
			logo: LogicielImageDiscord,
			alt: "Logo du Robot",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Démonstration du profil du robot',
				img: LogicielImageDiscord2,
			},
			{
				id: 2,
				title: 'Exemple d\'utilisation',
				img: LogicielImageDiscord3,
			}
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Conception & développement',
					link: '#',
				},
				{
					id: 3,
					title: 'Github',
					details: 'https://github.com/marceau07/bot-discord',
					link: 'https://github.com/marceau07/bot-discord',
				},
				{
					id: 4,
					title: 'Site',
					details: 'Essayez-le',
					link: 'https://discord.com/oauth2/authorize?client_id=679520724163100692',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Le but de cette application était de permettre l\'interaction avec un robot répondant à des instructions pré-configurées.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'JavaScript',
						'TypeScript',
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Le but de ce projet était de découvrir un nouveau langage au travers d\'une API, celle de Discord. Ce projet permet d\'interagir avec un "Bot" qui répond à des instructions précises appelées commandes.',
				},
				{
					id: 2,
					details:
						'Ces commandes initialement n\'avaient pas de but précis autre que de manipuler des informations. A la fin, je m\'en suis servi comme automatisme de vérification de compte.',
				},
			],
		},
	},
	MobileYoutime: {
		ProjectHeader: {
			title: 'YouTime',
			publishDate: '2019',
			tags: 'API / Annulé',
			logo: MobileImageYoutime,
			alt: "Logo de YouTube",
		},
		ProjectImages: [
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'YouTime',
					link: 'https://youtime.marceau-rodrigues.fr',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Je trouvais cela dommage de ne pas avoir de statistiques sur YouTube. Ainsi, j\'ai eu l\'idée de créer cette application qui m\'aurait permis d\'assurer le suivi des vidéos consulter, de laisser un commentaire, un like, un dislike, de consulter le temps passé sur X temps, ...',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Je suis au regret de dire que ce projet ne verra pas le jour d\'aussi tôt... En effet, l\'API de YouTube dans sa version d\'essai ne nous permet pas de récolter tant d\'informations sans payer...',
				},
				{
					id: 2,
					details:
						'Cependant, j\'ai toujours pour projet de le réaliser et ne me démonterait pas, je trouverai une solution.',
				},
			],
		},
	},
	WebSimpleduc: {
		ProjectHeader: {
			title: 'Simpleduc',
			publishDate: '2018',
			tags: 'Projet scolaire / PHP / Twig',
			logo: WebImageSimpleduc,
			alt: "Logo de Simpleduc",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: WebImageSimpleduc2,
			},
			{
				id: 2,
				title: 'Gestion en CRUD intégré dans un tableau',
				img: WebImageSimpleduc3,
			},
			{
				id: 3,
				title: 'Génération à l\'aide d\'une bibliothèque de PDF dynamiques',
				img: WebImageSimpleduc4,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Simpleduc',
					link: 'https://simpleduc.marceau-rodrigues.fr',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Projet scolaire afin de nous faire découvrir PHP avec le Framework Twig',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Projet scolaire pour nous permettre de découvrir le début de PHP.',
				},
				{
					id: 2,
					details:
						'Ce projet était un projet de groupe. Nous avons également utilisé des bibliothèques, notamment pour la génération de PDFs.',
				},
			],
		},
	},
	MobileUndefinedPlay: {
		ProjectHeader: {
			title: 'Undefined Play',
			publishDate: '2019',
			tags: 'Autodidacte / Mobile / UI',
			logo: MobileImageUndefinedPlay,
			alt: "Logo de Undefined Play",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: MobileImageUndefinedPlay,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Play Store',
					details: 'Undefined Play',
					link: '#',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Je cherchais une solution simple pour avoir mes sons favoris disponible, sans connexion.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'A définir'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Projet qui va me permettre de débloquer la possibilité de lire les musiques de mon choix, en local, sans pub et avec le design que je désire.',
				},
				{
					id: 2,
					details:
						'J\'adorai énormément écouter de la musique, la seule contrainte était: les pubs. Cela m\'a fait naître l\'idée de développer ma propre application.',
				},
			],
		},
	},
	MobileTlssgc: {
		ProjectHeader: {
			title: 'The Los Santos State Gas Company',
			publishDate: '2022',
			tags: 'Mobile',
			logo: MobileImageTlssgc,
			alt: "Logo de The Los Santos State Gas Company",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: MobileImageTlssgc,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					// title: 'Play Store',
					title: 'APK',
					details: 'The Los Santos State Gas Company',
					// link: 'https://play.google.com/store/apps/details?id=fr.seaumar.tlssgc&pcampaignid=web_share',
					link: 'https://dl.marceau-rodrigues.fr/apks/gascompany.apk',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Projet pour présenter une compagnie fictive pour un serveur GTA V RP.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'Flutter'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details: 'Ce projet se voulait simple: présenter la compagnie qui allait être montée dans le jeu, présenter mon personnage, permettre aux employés de la compagnie de pouvoir voir les trajets à faire depuis l\'application.',
				},
			],
		},
	},
	LogicielSundryGame: {
		ProjectHeader: {
			title: 'Sundry Game',
			publishDate: '2021',
			tags: 'Application Logicielle',
			logo: LogicielImageSundryGame,
			alt: "Logo du jeu Sundry Game",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: LogicielImageSundryGame,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Sundry Game',
					// link: 'https://sundry-game.marceau-rodrigues.fr/',
					link: 'https://dl.marceau-rodrigues.fr/logiciels/SundryGame.rar',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Réalisation d\'un jeu 3-Match pour débloquer des avantages en boutique.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'Unity'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Le client désirait un jeu afin que ses clients puissent jouer en passant du temps dans la boutique. Ce, dans le but de consommer et de pouvoir débloquer des avantages (réductions, offres spéciables, gratuités, ...).',
				},
			],
		},
	},
	WebSportifsDeCoeur: {
		ProjectHeader: {
			title: 'Sportifs de Coeur',
			publishDate: '2022',
			tags: 'Application Web',
			logo: WebImageSportifsDeCoeur,
			alt: "Logo de l'association Sportifs de Coeur",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: WebImageSportifsDeCoeur,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Sportifs de Coeur',
					link: 'https://sportifs-de-coeur.marceau-rodrigues.fr/',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Refonte du site de l\'organisation "Sportifs de Coeur".',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Le but était de garder la base du site avec des technologies plus récentes.',
				},
			],
		},
	},
	MobileParcInformatique: {
		ProjectHeader: {
			title: 'Parc Informatique',
			publishDate: '2022',
			tags: 'Application Mobile',
			logo: MobileImageParcInformatique,
			alt: "Logo de l'application Parc Informatique",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: MobileImageParcInformatique,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Play Store',
					details: 'Parc Informatique',
					link: 'https://play.google.com/store/apps/details?id=fr.seaumar.si7&pcampaignid=web_share',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Réalisation de l\'application Android du projet Parc Informatique.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'Flutter'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Adapter le projet scolaire en une application Android.',
				},
			],
		},
	},
	WebLegendarium: {
		ProjectHeader: {
			title: 'Legendarium',
			publishDate: '2018',
			tags: 'Projet scolaire / PHP / Twig',
			logo: WebImageLegendarium,
			alt: "Logo de Legendarium",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil du site',
				img: WebImageLegendarium,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Legendarium',
					link: 'https://legendarium.marceau-rodrigues.fr',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Notre professeur a eu un ami qui désirait refaire son site pour sa vitrine de cabinet de curiosité, il a donc fait appel aux différents élèves pour constituer des groupes.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP / Twig'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Refonte totale d\'un site pour un professionnel. Désirait de mettre en avant sa boutique avec des livres, permettre de faire des jeux de rôle sur un calendrier d\'événements',
				},
				{
					id: 2,
					details:
						'Ce projet a été réalisé en groupe et constituait notre premier vrai projet en PHP.',
				},
			],
		},
	},
	WebLeCovidDechaine: {
		ProjectHeader: {
			title: 'Le Covid Déchaîné',
			publishDate: '2020',
			tags: 'Projet scolaire / PHP / Twig',
			logo: WebImageLeCovidDechaine,
			alt: "Logo de Le CovidDechaine",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: WebImageLeCovidDechaine2,
			},
			{
				id: 2,
				title: 'Liste des articles',
				img: WebImageLeCovidDechaine3,
			},
			{
				id: 3,
				title: 'Vue d\'un article avec modification et archivage possible',
				img: WebImageLeCovidDechaine4,
			},
			{
				id: 2,
				title: 'Gestion de l\'abonnement Premium',
				img: WebImageLeCovidDechaine5,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Le Covid Dechaine',
					link: 'https://le-covid-dechaine.marceau-rodrigues.fr',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Notre professeur a eu l\'idée de nous faire assurer notre veille en créant un site.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP / Twig'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Pleine période de pandémie, notre professeur de droit a émis l\'idée de créer des groupes pour parler du Covid et d\'assurer une veille auprès de cette thématique.',
				},
				{
					id: 2,
					details:
						'Ce projet reprend donc un style "journal" et était alimenté tous les jours par les actualités concernant le Covid !',
				},
			],
		},
	},
	WebKtane: {
		ProjectHeader: {
			title: 'Keep Talking and Nobody Explodes',
			publishDate: '2020',
			tags: 'Projet scolaire / PHP / Twig',
			logo: WebImageKtane,
			alt: "Logo du jeu Keep Talking and Nobody Explodes",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil du jeu',
				img: WebImageKtane,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Ktane',
					link: 'https://ktane.marceau-rodrigues.fr',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Un de nos professeurs a désiré que l\'on reproduise le jeu Keep Talking and Nobody Explodes. Ce en distanciel, en pleine pandémie.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Pleine période de pandémie, un nouveau projet nous tombe dessus: reproduire un jeu sans base.',
				},
				{
					id: 2,
					details:
						'Nous avons donc du nous documenter sur ledit jeu, utiliser une technologie sur laquelle on se sentait à l\'aise, et c\'était partie !',
				},
			],
		},
	},
	WebJulieBressand: {
		ProjectHeader: {
			title: 'Juulie Bressand',
			publishDate: '2019',
			tags: 'Stage / PHP / Twig / Pro',
			logo: WebImageJulieBressand,
			alt: "Logo du cabinet de naturopathie Julie Bressand",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil du jeu',
				img: WebImageJulieBressand,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Julie Bressand',
					link: 'https://julie-bressand.marceau-rodrigues.fr',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Réalisation d\'un site pour le cabinet de naturopathie.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP / Twig'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Projet de stage: réalisation d\'un site from scratch avec un camarade pour présenter et gérer la prise de rendez-vous du cabinet.',
				},
				{
					id: 2,
					details:
						'Discussion avec la cliente pour connaître les attendus, en passant par un cahier des charges...',
				},
			],
		},
	},
	WebParcInformatique: {
		ProjectHeader: {
			title: 'Parc Informatique',
			publishDate: '2021',
			tags: 'Application Web',
			logo: WebImageParcInformatique,
			alt: "Logo du Parc Informatique",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page de connexion de l\'application',
				img: WebImageParcInformatique2,
			},
			{
				id: 2,
				title: 'Page d\'accueil de l\'application',
				img: WebImageParcInformatique3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Parc Informatique',
					link: 'https://parc-informatique.marceau-rodrigues.fr/',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'PHP / Symfony'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'.',
				},
			],
		},
	},
	WebInnovAnglais: {
		ProjectHeader: {
			title: 'Innov\' Anglais',
			publishDate: '2020',
			tags: 'Projet scolaire / PHP / Twig',
			logo: WebImageInnovAnglais,
			alt: "Logo de Innov\' Anglais",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: WebImageInnovAnglais,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Innov\'Anglais',
					link: 'https://innov.marceau-rodrigues.fr',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Projet scolaire de groupe où l\'on devait créer une plateforme pour apprendre de nouvelles langues.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP / Twig'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Création d\'un site à la Duolingo.',
				},
				{
					id: 2,
					details:
						'Apprentissage par divers moyens: cartes, tests, mots-clés, ... !',
				},
			],
		},
	},
	MobileFleex: {
		ProjectHeader: {
			title: 'FLEEX',
			publishDate: '2020',
			tags: 'Abandonné',
			logo: MobileImageFleex,
			alt: "Logo de Fleex",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page d\'accueil de l\'application',
				img: MobileImageFleex,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Play Store',
					details: 'Fleex',
					link: 'https://play.google.com/store/apps/details?id=fr.seaumar.fleex&pcampaignid=web_share',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Faîtes des rencontres atypiques. Pas d\'images, un algorithme choisit pour vous les meilleurs profils en fonctions des centres d\'intérêts !',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'A définir'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Application pour faire des rencontres atypiques.',
				},
				{
					id: 2,
					details:
						'Cette application avait pour but de révolutionner le marché des applications de rencontres: ne pas se baser sur des préjugés comme des likes, des photos ! Ne se baser que sur des faits: musiques, hobbies, actions, ...',
				},
			],
		},
	},
	WebChallenge: {
		ProjectHeader: {
			title: 'Challenge',
			publishDate: '2020',
			tags: 'Application Web',
			logo: WebImageChallenge,
			alt: "Logo du site web Challenge",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page de connexion de l\'application',
				img: WebImageChallenge,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: 'Challenge',
					link: 'https://challenge.marceau-rodrigues.fr',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Un des premiers projets scolaires.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'HTML / CSS / JS / PHP / Twig'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Site pour un client fictif afin d\'apprendre les débuts de PHP avec TWIG	.',
				},
			],
		},
	},
	MobileBeerMaker: {
		ProjectHeader: {
			title: 'Beer Maker',
			publishDate: '2020',
			tags: 'Mobile',
			logo: MobileImageBeerMaker,
			alt: "Logo de Beer Maker",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page de connexion de l\'application',
				img: MobileImageBeerMaker,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					// title: 'Play Store',
					title: 'APK',
					details: 'Beer Maker',
					// link: 'https://play.google.com/store/apps/details?id=fr.seaumar.innovanglais&pcampaignid=web_share',
					link: 'https://dl.marceau-rodrigues.fr/apks/beermaker.apk',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Première application Android.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'Android'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Développer une application pour comprendre Android, permettre aux utilisateurs de concevoir leurs bières...',
				},
			],
		},
	},
	MobileInnovAnglais: {
		ProjectHeader: {
			title: 'Innov\'Anglais',
			publishDate: '2021',
			tags: 'Mobile',
			logo: MobileImageInnovAnglais,
			alt: "Logo d'Innov'Anglais",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page de connexion de l\'application',
				img: MobileImageInnovAnglais2,
			},
			{
				id: 2,
				title: 'Page d\'accueil de l\'application',
				img: MobileImageInnovAnglais3,
			},
			{
				id: 3,
				title: 'Caroussel des offres d\'abonnement',
				img: MobileImageInnovAnglais4,
			},
			{
				id: 4,
				title: 'Paiement via Stripe',
				img: MobileImageInnovAnglais5,
			},
			{
				id: 5,
				title: 'Affichage des données personnelles',
				img: MobileImageInnovAnglais6,
			},
			{
				id: 6,
				title: 'Affichage des tests disponibles avec leur niveau respectif',
				img: MobileImageInnovAnglais7,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Play Store',
					details: 'Inno\'Anglais',
					link: 'https://play.google.com/store/apps/details?id=fr.seaumar.innovanglais&pcampaignid=web_share',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Projet initialement scolaire que j\'ai adapté en Mobile.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'Flutter'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Le projet web initial était géré par un petit groupe dont je faisais partie, au bout d\'un moment, on a trouvé bon de vouloir faire un application mobile également, qui serait plus agréable à utiliser qu\'un site responsive.',
				},
			],
		},
	},
	LogicielTaquin: {
		ProjectHeader: {
			title: 'Ch\'Taquin',
			publishDate: '2019',
			tags: 'Logiciel / Java',
			logo: LogicielImageTaquin,
			alt: "Logo du logiciel",
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Page de connexion de l\'application',
				img: LogicielImageTaquin,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'JAR',
					details: 'Ch\'Taquin',
					link: 'https://dl.marceau-rodrigues.fr/logiciels/taquin.zip',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Projet scolaire de groupe où nous devions coder un Taquin.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						'Java'
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Développer un taquin avec la gestion du scoring, de victoire, de défaite, de plusieurs images...',
				},
			],
		},
	},
};

/*
	DefaultProject: {
		ProjectHeader: {
			title: 'Titre à définir',
			publishDate: '2019',
			tags: 'Tags à définir',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Image 1 du projet',
				img: null,
			},
		],
		ProjectInfo: {
			ClientHeading: 'A propos du client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Nom',
					details: 'Marceau RODRIGUES',
					link: '#',
				},
				{
					id: 2,
					title: 'Services',
					details: '...',
					link: '#',
				},
				{
					id: 3,
					title: 'Site',
					details: '#',
					link: '#',
				},
			],
			ObjectivesHeading: 'Objectifs',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Outils & Technologies',
					techs: [
						''
					],
				},
			],
			ProjectDetailsHeading: 'Kézaco ?',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 3,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 4,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			SocialSharingHeading: 'Partager ça !',
			SocialSharing: [
				{
					id: 1,
					name: 'X',
					icon: <FiX />,
					url: 'https://x.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
			],
		},
		RelatedProject: {
			title: 'Vous aimerez aussi voir',
			Projects: [
				{
					id: 1,
					title: 'Projet X',
					img: null,
				},
			],
		},
	}
*/
