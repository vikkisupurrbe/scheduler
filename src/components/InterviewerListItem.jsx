import classnames from "classnames";

import "./InterviewerListItem.scss";

export default function InterviewerItem(props) {
  const itemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={itemClass} onClick={props.setInterviewer}>
      <img
        referrerPolicy="no-referrer"
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
