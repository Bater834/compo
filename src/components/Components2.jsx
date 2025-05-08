import { Components3 } from "./Components3";

export const Components2 = (props) => {
  console.log("Components2 :", props.prop2);
  return (
    <div>
      <Components3 prop3={props.prop2} />
    </div>
  );
};
