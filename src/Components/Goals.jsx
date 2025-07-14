
import cross from '../assets/cross.svg';
import Navbar from './Navbar';
import useStore from '../usestore';
import styles from './Goals.module.css';
import { useState } from 'react';

function Goals({ sharedData }) {
  const username = "Deepak";
  const day = 45;
  const training = "Push Day";
  const { exerciseList } = useStore();
  const {goal,updateGoal} = useStore();
  const [exercise, setExercise] = useState("");
  

  const handleSetGoal = (muscleGroup, exerciseName) => {
    const weight = prompt(`Set goal weight for ${exerciseName}:`);
    if (weight === null || weight.trim() === "") return;
    updateGoal(muscleGroup,exerciseName,weight);
  }
    

  const handleSelect = (part) => {
    document.querySelector(`.${styles.input}`).style.opacity = "1";
    document.querySelector(`.${styles.cross}`).style.opacity = "1";
    setExercise(part);
  };

  const closeinput = () => {
    document.querySelector(`.${styles.input}`).style.opacity = "0";
    document.querySelector(`.${styles.cross}`).style.opacity = "0";
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.training}>{training}</div>
        <div className={styles.programs}>
          <div className={styles.goals}>Goals</div>
          <div className={styles.list}>
            <ol>
              <li onClick={() => handleSelect("Back")}>Back</li>
              <li onClick={() => handleSelect("Chest")}>Chest</li>
              <li onClick={() => handleSelect("Shoulder")}>Shoulder</li>
              <li onClick={() => handleSelect("Biceps")}>Biceps</li>
              <li onClick={() => handleSelect("Triceps")}>Triceps</li>
              <li onClick={() => handleSelect("Legs")}>Legs</li>
              <li onClick={() => handleSelect("Forearms")}>Forearms</li>
            </ol>
          </div>
          <div className={styles.input}>
            <div className={styles.cross} onClick={closeinput}>
              <img src={cross} alt="Close" />
            </div>
            <div className={styles.exercisename}>
              <b>{exercise}</b>
            </div>
            <div className={styles.exerciseList}>
              <ol>
                {exerciseList[exercise]?.map((item, index) => {
                  const currentGoal = goal[exercise]?.find(g => g.name === item);
                  return (
                    <div key={index} className={styles.goalItem}>
                      <li>
                        {item} — Goal: {currentGoal ? `${currentGoal.weight} kg` : "0"}
                      </li>
                      <button onClick={() => handleSetGoal(exercise, item)}>➕</button>
                    </div>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
