// import React from 'react'

// const AllItems = () => {
//   return (
//     <div>
//         <h2>All Items</h2>
//     </div>
//   )
// }

// export default AllItems





// import { Workout } from "@/types/workouts";

// const AllItems = ({ workouts }: { workouts: Workout[] }) => {
//   return (
//     <section id="library">
//       <h2>The Library</h2>
//       <ul>
//         {workouts.map((workout) => (
//           <li key={workout.id}>{workout.name}</li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default AllItems;


import { Workout } from "@/types/workouts";
import WorkoutCard from "./WorkoutCard";

const AllItems = ({ workouts }: { workouts: Workout[] }) => {
  return (
    <section id="library" className="mt-12 scroll-mt-6">
      <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide">
        The Library
      </h2>
      <p className="mt-1 text-xs text-muted">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default AllItems;