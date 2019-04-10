import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

library.add(
  faTrashAlt,
  faCircle,
  faCheckCircle,
);

const Goal = ({
  goal: { goal, id, complete },
  deleteGoal,
  changeGoalStatus,
}) => (
  <li className="goal">
    <p>{goal}</p>
    <div className="goal-button-group">
      {complete ?
        <button
          className="small no-border"
          onClick={() => changeGoalStatus(id, false)}
        >
          <FontAwesomeIcon icon="check-circle" size="lg" />
        </button>
        :
        <button
          className="small no-border"
          onClick={() => changeGoalStatus(id, true)}
        >
          <FontAwesomeIcon icon={['far', 'circle']} size="lg" />
        </button>
      }
      <button
        className="small no-border"
        onClick={() => deleteGoal(id)}
      >
        <FontAwesomeIcon icon={['far', 'trash-alt']} size="lg" />
      </button>
    </div>
  </li>
);

export default Goal;