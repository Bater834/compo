import { Components7 } from "./comp7";
export const Components6 = (props) => {
  console.log("6", props.prop6);
  return (
    <div>
      <Components7 prop7={props.prop6} />
    </div>
  );
};
