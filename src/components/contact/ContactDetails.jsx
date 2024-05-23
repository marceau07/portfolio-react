import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Montpellier - 34070, France',
		icon: <FiMapPin />,
		link: 'https://www.google.com/maps/place/Montpellier/@43.6100709,3.8329699,13z/data=!3m1!4b1!4m6!3m5!1s0x12b6af0725dd9db1:0xad8756742894e802!8m2!3d43.610769!4d3.876716!16zL20vMGpxMjc?authuser=0&entry=ttu'
	},
	{
		id: 2,
		name: 'contact@marceau-rodrigues.fr',
		icon: <FiMail />,
		link: 'mailto:contact@marceau-rodrigues.fr'
	},
	{
		id: 3,
		name: '+33 6 38 26 56 41',
		icon: <FiPhone />,
		link: 'tel:+33638265641'
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Me contacter
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								<a className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500" href={contact.link} target="_blank" rel="noopener noreferrer">{contact.name}</a>
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
