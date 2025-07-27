
import cross from '../assets/cross.svg';
import Navbar from './Navbar';
import useStore from '../usestore';
import styles from './Goals.module.css';
import { useNavigate } from 'react-router-dom';
import clear from '../assets/clear.svg';
import bar from '../assets/hamburger.svg';
import home from '../assets/home.svg';
import workout from '../assets/workout.svg';
import edit from '../assets/edit.svg';
import update from '../assets/update.svg';
import goals from '../assets/goals.svg';
import track from '../assets/track.svg';
import { useState } from 'react';

function Goals({ sharedData }) {
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
  const navigate = useNavigate();
    const training = "Push Day";
    const handlehome = () =>{
        navigate("/");
        closesidebar;
    }
    const handleworkout = () => {
        navigate("/workout");
    };
    const handlegoals = () => {
        navigate("/goals");
    };
    const handleupdate = () => {
        navigate("/update");
    };
    const handleTrack=()=>{
        navigate("/track");
    };
    const opensidebar = ()=>{
            document.querySelector(`.${styles.sidebar}`).style.opacity = "1";
            document.querySelector(`.${styles.sidebar}`).style.display = "block";
            document.querySelector(`.${styles.bar}`).style.opacity = "0";
        }
        const closesidebar = ()=>{
            document.querySelector(`.${styles.sidebar}`).style.opacity = "0";
            document.querySelector(`.${styles.sidebar}`).style.display = "none";
            document.querySelector(`.${styles.bar}`).style.opacity = "1";
        }
        const handlereset = () =>{
    localStorage.clear();
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.sidebar}>
                            <div className={styles.cross}>
                                         <img src={cross} onClick={closesidebar} />
                                        </div>
                            <div className={styles.sidebarlist}>
                            <div onClick={handlehome}><img src={home}/> Home</div>
                            <div onClick={handleworkout}><img src={workout}/> Workouts</div>
                            <div onClick={handleupdate}><img src={update}/> Update</div>
                            <div onClick={handlegoals}><img src={goals}/> Goals</div>
                            <div onClick={handleTrack}><img src={track}/> Track Progress</div>
                            <div><img src={edit}/> Edit Training plan</div>
                            <div onClick={handlereset}><img src={clear}/> Reset all data</div>
                            </div>
                        </div>
                        <div className={styles.bar}>
                            <img src={bar} onClick={opensidebar}/>
                        </div>
        <div className={styles.training}>Select Your Goals</div>
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
            <div className={styles.cross_input} onClick={closeinput}>
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
