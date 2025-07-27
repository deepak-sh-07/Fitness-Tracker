import { useNavigate } from 'react-router-dom';
import useStore from '../usestore';
import Navbar from './Navbar';
import bar from '../assets/hamburger.svg';
import cross from '../assets/cross.svg';
import clear from '../assets/clear.svg';
import home from '../assets/home.svg';
import workout from '../assets/workout.svg';
import edit from '../assets/edit.svg';
import update from '../assets/update.svg';
import goals from '../assets/goals.svg';
import track from '../assets/track.svg';
import styles from './Workout.module.css'; 
import { useState } from 'react';

function Workout() {
  const [exercise, setExercise] = useState("");
  const [input, setInput] = useState("");
  const { exerciseList, deleteExercise, updateExerciseGroup, training_plan } = useStore();

  const handleSelect = (part) => {
    document.querySelector(`.${styles.exercises}`).style.display = "none";
    document.querySelector(`.${styles.input}`).style.display = "flex";
    document.querySelector(`.${styles.input}`).style.opacity = "1";
    document.querySelector(`.${styles.cross}`).style.opacity = "1";
    setExercise(part);
    setInput("");
  };

  const handleAdd = () => {
    if (!input.trim()) return;
    const currentList = exerciseList[exercise] || [];
    const updatedList = [...currentList, input];
    updateExerciseGroup(exercise, updatedList);
    setInput("");
  };

  const handleDelete = (indexToDelete) => {
    deleteExercise(exercise, indexToDelete);
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
  const closeinput = () => {
    document.querySelector(`.${styles.input}`).style.display = "none";
    document.querySelector(`.${styles.cross}`).style.opacity = "0";
    document.querySelector(`.${styles.input}`).style.opacity = "0";
    document.querySelector(`.${styles.exercises}`).style.display = "flex";
  };
  const handlereset = () =>{
    localStorage.clear();
  }
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.subcontainer}>
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
                        
        <div className={styles.split}>
          <div className={styles.plan}>Training Plan</div>
          <div className={styles.planList}>
            <ol>
              {Object.entries(training_plan).map(([day, exercises]) => (
                <li key={day}>
                  <span>{day}</span>: {exercises.join(", ") || ""}
                </li>
              ))}
            </ol>
          </div>
          {/* <div className={styles.edit} onClick={handleEdit}>
            <button>Edit </button>
          </div> */}
        </div>

        

        <div className={styles.exercises}>
          <div className={styles.Back} onClick={() => handleSelect("Back")}>Back</div>
          <div className={styles.Chest} onClick={() => handleSelect("Chest")}>Chest</div>
          <div className={styles.Shoulder} onClick={() => handleSelect("Shoulder")}>Shoulder</div>
          <div className={styles.Legs} onClick={() => handleSelect("Legs")}>Legs</div>
          <div className={styles.Bisceps} onClick={() => handleSelect("Bisceps")}>Bisceps</div>
          <div className={styles.Triceps} onClick={() => handleSelect("Triceps")}>Triceps</div>
          <div className={styles.Forearms} onClick={() => handleSelect("Forearms")}>Forearms</div>
        </div>
        <div className={styles.input}>
          <div className={styles.subInput}>
            <div className={styles.cross}>
             <img onClick={closeinput} src={cross} alt="close" style={{ cursor: "pointer" }} />
            </div>
            <div className={styles.head}>{exercise}</div>
            <div className={styles.add}>
              <input
                type="text"
                placeholder="Enter Exercise"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={handleAdd}>ADD</button>
            </div>
            <div className={styles.exerciseList}>
              <ol>
                {exerciseList[exercise]?.map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item}
                    <button className={styles.crossBtn} onClick={() => handleDelete(index)}>❌</button>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workout;
