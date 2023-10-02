import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function sendEmail(form, e) {
	e.preventDefault();
	const SERVICE_ID = 'service_soidyaj';
	const TEMPLATE_ID = 'template_edoafdd';
	const USER_ID = 'HvBsq8wJYBkqmXShM';

	emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
		(result) => {
			Swal.fire({
				icon: 'success',
				title: 'Message Sent Successfully',
			});
		},
		(error) => {
			Swal.fire({
				icon: 'error',
				title: 'Ooops, something went wrong',
				text: error.text,
			});
		},
	);
	e.target.reset();
}
