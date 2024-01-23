interface ErrorMessageProps {
  errorMsg: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMsg }) => {
  return (
    <div className="flex justify-center h-8 mb-2 ">
      <p className=" text-sm text-red-600 ">{errorMsg}</p>
    </div>
  );
};

export default ErrorMessage;
