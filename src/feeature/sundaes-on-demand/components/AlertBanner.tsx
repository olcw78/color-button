import { FC } from "react";

interface AlertBannerProps {
  message?: string;
}

const AlertBanner: FC<AlertBannerProps> = ({ message }) => {
  const alertMessage =
    message || "an unexpected error occurred. please try again later";
  console.log(alertMessage);

  return (
    <div role="alert" aria-live="assertive" id="alert-banner">
      {alertMessage}
    </div>
  );
};
export default AlertBanner;
