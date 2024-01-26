interface ErrorMessageProps {
  errorMsg: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMsg }) => {
  return (
    <div className="fixed h-8 ">
      <p className=" text-sm text-red-600 ">{errorMsg}</p>
    </div>
  );
};

export default ErrorMessage;
