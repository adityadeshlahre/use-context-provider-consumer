import react from "react";
import { useNotificationContext } from "~/context/NotificationContext";

export default function NotificationInit() {
  const { notifySuccess, notifyError, notifyInfo } = useNotificationContext();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Notification Initialization</h1>
      <p className="mt-4 text-gray-600">
        This component initializes the notification system.
      </p>
      <button
        onClick={() => {
          notifySuccess("notifySuccess");
        }}
      >
        notifySuccess
      </button>
      <button
        onClick={() => {
          notifyError("notifyError");
        }}
      >
        notifyError
      </button>
      <button
        onClick={() => {
          notifyInfo("notifyInfo");
        }}
      >
        notifyInfo
      </button>
    </div>
  );
}
