import { ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./Coursegoal";
import InfoBox from "./InfoBox";

// type CourseGoals = {
//   id: number;
//   title: string;
//   description: string;
// };

interface CourseGoalListProps {
  courseGoals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList(props: CourseGoalListProps) {
  if (props.courseGoals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (props.courseGoals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {props.courseGoals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDeleteGoal={props.onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
