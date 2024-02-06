const StepButton = ({ onClick, disabled, label }) => {
  const nextButtonStyles = "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 ml-2 btn";
  const defaultButtonStyles = "ml-2 btn px-5 py-2.5";

  const buttonStyles = label === 'Next' ? nextButtonStyles : defaultButtonStyles;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {label}
    </button>
  );
};

export default StepButton;