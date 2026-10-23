// import { connection } from "next/server";
// import AllItems from "@/components/AllItems";
// import Banner from "@/components/banner";
// import { getAllItems } from "@/Library/api";

// export const instant = false;

// export default async function Home() {
//   await connection();

//   const data = await getAllItems();



//   return (
//     <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-6 sm:px-6 lg:py-10">
//       <Banner />
//       <AllItems />
//     </div>
//   );
// }



import { getAllItems } from "@/Library/api";
import AllItems from "@/components/AllItems";
import Banner from "@/components/banner";
import { Workout } from "@/types/workouts";

export default async function Home() {
  const workouts: Workout[] = await getAllItems();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-6 sm:px-6 lg:py-10">
      <Banner />
      <AllItems workouts={workouts} />
    </div>
  );
}