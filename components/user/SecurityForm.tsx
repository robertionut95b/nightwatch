const SecurityForm = (): JSX.Element => {
  return (
    <section>
      <h4 className="font-bold text-xl tracking-wide">Email</h4>
      <p className="dark:text-gray-200 mb-1">
        This section contains a form to change the user&apos;s email address
      </p>
      <small className="tracking-wide mb-4 font-semibold text-red-600 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Be warned! This change is irreversible and cannot be undone!
      </small>
    </section>
  );
};

export default SecurityForm;
