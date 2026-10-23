// import { cache } from "react";

// export const getAllItems= async  () => {
//     const res = await fetch (
//         "https://api.abcz.workers.dev/api/fitlog",
//         {cache : "no-store"} ,
//     );
//     return res.json() ;
// };


// export const getAllItems = async () => {
//   const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
//   return res.json();
// };


// export const getAllItems = async () => {
//   const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
//     next: { revalidate: 0 }
//   });
//   return res.json();
// };



import { Workout } from "@/types/workouts";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getAllItems = async (): Promise<Workout[]> => {
  const res = await fetch(BASE_URL, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to load workouts");
  }

  return res.json();
};

export const getSingleItem = async (id: string): Promise<Workout> => {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to load workout");
  }

  return res.json();
};