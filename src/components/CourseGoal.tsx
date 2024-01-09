import { ReactNode } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoal(props: CourseGoalProps) {
  return (
    <article>
      <div>
        <h1>{props.title}</h1>
        {props.children}
      </div>
      <button onClick={() => props.onDeleteGoal(props.id)}>DELETE</button>
    </article>
  );
}
