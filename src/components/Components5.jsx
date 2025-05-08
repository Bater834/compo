import { Components6 } from "./Comp6";

export const Components5 = (props) => {
  console.log("5", props.prop5);
  return (
    <div>
      <Components6 prop6={props.prop5} />
    </div>
  );
};
