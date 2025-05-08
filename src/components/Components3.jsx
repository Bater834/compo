import { Components4 } from "./Components4";

export const Components3 = (props) => {
  console.log("3", props.prop3);
  return (
    <div>
      <Components4 prop4={props.prop3} />
    </div>
  );
};
