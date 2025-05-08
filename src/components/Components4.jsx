import { Components5 } from "./Components5";

export const Components4 = (props) => {
  console.log("4", props.prop4);
  return (
    <div>
      <Components5 prop5={props.prop4} />
    </div>
  );
};
