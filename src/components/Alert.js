import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Alert({ alert }) {
  return (
    alert && (
      <div
        className={`${
          alert.type === "success" ? "bg-[#5fcc8e]" : "bg-[#fff3cd]"
        } text-center py-5 px-8 w-full mx-auto my-6 rounded-md font-text`}
      >
        <h2 className="text-slate-800 flex items-center justify-center ">
          {alert.type === "success" ? (
            <CheckBadgeIcon className="w-6 mr-1 text-teal-800" />
          ) : (
            <ExclamationTriangleIcon className="w-6 mr-1 text-red-500" />
          )}

          {alert.alertText}
        </h2>
      </div>
    )
  );
}
