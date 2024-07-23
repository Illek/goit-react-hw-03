import s from "./Notification.module.css";
import clsx from "clsx";

const Notification = () => {
  return <p className={clsx(s.ntfText)}>No feedback yet</p>;
};

export default Notification;
