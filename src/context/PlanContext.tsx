"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { Workout } from "@/types/workouts";

export interface PlanItem extends Workout {
  done: boolean;
}

interface PlanContextValue {
  plan: PlanItem[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  markDone: (id: number) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const MAX_PLAN = 5;
const STORAGE_KEY = "fitlog-plan-data";

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved data only after the component mounts in the browser.
  useEffect(() => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);

      if (storedData) {
        const parsedData: { plan?: PlanItem[]; saved?: Workout[] } =
          JSON.parse(storedData);

        setPlan(Array.isArray(parsedData.plan) ? parsedData.plan : []);
        setSaved(Array.isArray(parsedData.saved) ? parsedData.saved : []);
      }
    } catch {
      // Ignore invalid or unavailable localStorage data.
      setPlan([]);
      setSaved([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Do not overwrite stored data with the initial empty arrays before loading.
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ plan, saved }));
    } catch {
      // The app can still work for this session if storage is unavailable.
    }
  }, [plan, saved, isLoaded]);

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Already in today's plan");
      return;
    }

    if (plan.length >= MAX_PLAN) {
      toast.error("Plan is full. Cap of five lifts for today");
      return;
    }

    setPlan([...plan, { ...workout, done: false }]);
    toast.success(`${workout.name} added to today's plan`);
  };

  const saveForLater = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already saved");
      return;
    }

    setSaved([...saved, workout]);
    toast.success(`${workout.name} saved for later`);
  };

  const markDone = (id: number) => {
    setPlan(plan.map((item) => (item.id === id ? { ...item, done: true } : item)));
    toast.success("Marked as done");
  };

  const removeFromPlan = (id: number) => {
    setPlan(plan.filter((item) => item.id !== id));
    toast.success("Removed from plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved(saved.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
        markDone,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}