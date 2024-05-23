import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const handleSubmit = (e) => {
	e.preventDefault();
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let subject = document.getElementById('subject').value;
	let message = document.getElementById('message').value;
	const formData = new FormData();
	formData.append('name', name);
	formData.append('email', email);
	formData.append('subject', subject);
	formData.append('message', message);

	// Use formData for further processing (e.g., fetch API)
	fetch('https://api.marceau-rodrigues.fr', {
		method: 'POST',
		body: formData
	})
		.then(response => response.json())
		.then(data => {
			console.log('Form submission response:', data);
			// Clear form or show success message
		})
		.catch(error => {
			console.error('Error submitting form:', error);
		});
}

const ContactForm = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Formulaire de contact
					</p>
					<FormInput
						inputLabel="Nom complet"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Votre nom"
						ariaLabelName="Nom"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Votre email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Sujet"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Sujet"
						ariaLabelName="Sujet"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-50 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-cyan-600 hover:bg-cyan-700 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Envoyer le message"
							type="submit"
							aria-label="Envoyer le message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
