import { Components8 } from "./Comp8";
export const Components7 = (props) => {
  console.log("7", props.prop7);
  return (
    <div>
      <Components8 prop8={props.prop7} />
    </div>
  );
};
