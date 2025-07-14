import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      exerciseList: {
        Back: [],
        Chest: [],
        Shoulder: [],
        Legs: [],
        Bisceps: [],
        Triceps: [],
        Forearms: []
      },

      setExerciseList: (newList) => set(() => ({ exerciseList: newList })),

      updateExerciseGroup: (group, newExercises) =>
        set((state) => ({
          exerciseList: {
            ...state.exerciseList,
            [group]: newExercises
          }
        })),

      deleteExercise: (group, index) =>
        set((state) => {
          const updatedGroup = [...state.exerciseList[group]];
          updatedGroup.splice(index, 1);
          return {
            exerciseList: {
              ...state.exerciseList,
              [group]: updatedGroup
            }
          };
        }),

      training_plan: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thrusday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
      },

      setTrainingPlan: (day, newPlan) =>
        set((state) => ({
          training_plan: {
            ...state.training_plan,
            [day]: newPlan
          }
        })),

      goal: {
        Back: [],
        Chest: [],
        Shoulder: [],
        Legs: [],
        Biceps: [],
        Triceps: [],
        Forearms: []
      },

      setGoal: (newList) => set(() => ({ goal: newList })),

      updateGoal: (muscleGroup, exerciseName, weight) => {
        set((state) => {
          const prevGroup = state.goal[muscleGroup] || [];
          const updatedGroup = [...prevGroup];
          const existing = updatedGroup.find(item => item.name === exerciseName);

          if (existing) {
            existing.weight = weight;
          } else {
            updatedGroup.push({ name: exerciseName, weight });
          }

          return {
            goal: {
              ...state.goal,
              [muscleGroup]: updatedGroup,
            },
          };
        });
      },
  updateDaily: {
  Back: [],
  Chest: [],
  Shoulder: [],
  Legs: [],
  Biceps: [],
  Triceps: [],
  Forearms: []
},

updatedDaily: (muscleGroup, total) => {
  set((state) => {
    const previous = state.updateDaily[muscleGroup] || [];
    return {
      updateDaily: {
        ...state.updateDaily,
        [muscleGroup]: [...previous, total],
      },
    };
  });
}





    }),

    {
      name: 'workout-storage',
    }
  )
);

export default useStore;
