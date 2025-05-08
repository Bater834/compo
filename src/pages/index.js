// export default function Home() {
//   return (
//     <div>
//       <Gallery />
//     </div>
//   );
// }

// function Profile() {
//   return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
// }
// //
// function Gallery() {
//   return (
//     <div>
//       <h1>Amazing scientists</h1>
//       <h2>BILL GATES </h2>
//       <h3>BILL GATES </h3>
//       <p>Elon Musk</p>
//       <Profile />
//       <Profile />
//       <Profile />
//     </div>
//   );
// }
import { Components1 } from "@/components/Components1";

export default function Home() {
  const data = "100 components";
  return (
    <>
      <Components1 props1={data} />
    </>
  );
}
