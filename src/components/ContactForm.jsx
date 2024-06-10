import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Contact Us</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Send Message
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
