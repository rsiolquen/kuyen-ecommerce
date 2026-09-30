import "./ErrorMessage.css";

interface ErrorMessageProps {
    message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    );
}

export default ErrorMessage;