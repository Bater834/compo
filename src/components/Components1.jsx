import { Components2 } from "./Components2";

export const Components1 = (props) => {
  console.log("1", props.props1);
  return <Components2 prop2={props.props1} />;
};
