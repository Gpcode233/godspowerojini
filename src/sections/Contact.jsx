import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import Alert from '../components/Alert.jsx';
import useAlert from '../hooks/useAlert.js';

init("OsVEsxZz-vxCI9AQT"); // Replace with your actual public key

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // service_2x4eu2z
    emailjs
      .send(
        "service_2x4eu2z",
        "template_fahq9ys",
        {
          title: "Form Submission",
          from_name: form.name,
          message: form.message,
          reply_to: form.email, // Changed from from_email to reply_to
        },
        "OsVEsxZz-vxCI9AQT" // Replace with your actual public key
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative flex items-center justify-center flex-col px-4 sm:px-6 py-10">
        {/* Added padding */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/terminal.png"
            alt="terminal-bg"
            className="w-full h-full object-cover" /* Changed to object-cover */
          />
        </div>

        <div className="contact-container relative z-10 w-full max-w-2xl mx-auto">
          <h3 className="head-text text-2xl sm:text-3xl md:text-4xl text-center">
            <br />
            {/* Made heading responsive */}
            Let's talk
          </h3>
          <p className="text-base sm:text-lg text-white-600 mt-3 text-center px-4 sm:px-0">
            {/* Made text responsive */}
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-12 flex flex-col space-y-5 sm:space-y-7 px-4 sm:px-0"
          >
            <label className="space-y-2 sm:space-y-3">
              <span className="field-label text-sm sm:text-base">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input text-sm sm:text-base p-3 sm:p-4"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-2 sm:space-y-3">
              <span className="field-label text-sm sm:text-base">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input text-sm sm:text-base p-3 sm:p-4"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-2 sm:space-y-3">
              <span className="field-label text-sm sm:text-base">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input text-sm sm:text-base p-3 sm:p-4"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button
              className="field-btn text-sm sm:text-base p-3 sm:p-4"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow w-4 h-4 sm:w-5 sm:h-5"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
