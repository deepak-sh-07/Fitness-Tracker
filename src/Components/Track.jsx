import Navbar from './Navbar';
import useStore from '../usestore';
import VolumeChart from './VolumeChart';
import { useNavigate } from 'react-router-dom';
import bar from '../assets/hamburger.svg';
import clear from '../assets/clear.svg';
import cross from '../assets/cross.svg';
import home from '../assets/home.svg';
import workout from '../assets/workout.svg';
import edit from '../assets/edit.svg';
import update from '../assets/update.svg';
import goals from '../assets/goals.svg';
import track from '../assets/track.svg';
import styles from './Track.module.css';
import { useState } from 'react';

function Track() {
    const [exercise, setExercise] = useState("");
    const {updateDaily } = useStore();
    const handleSelect = (part) => {
        document.querySelector(`.${styles.editInfo}`).style.opacity = "1";
        document.querySelector(`.${styles.editInfo}`).style.display = "block";
        document.querySelector(`.${styles.exercises}`).style.opacity = "0";
        document.querySelector(`.${styles.exercises}`).style.display = "none";
        setExercise(part);
    }
    const closeinput = () => {
        document.querySelector(`.${styles.editInfo}`).style.opacity = "0";
        document.querySelector(`.${styles.editInfo}`).style.display = "none";
        document.querySelector(`.${styles.exercises}`).style.opacity = "1";
        document.querySelector(`.${styles.exercises}`).style.display = "flex";
    }
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
                <div className={styles.select}>
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
                    <div className={styles.msg}>Track Your Progress</div>
                    <div className={styles.exercises}>
                        <div className={styles.Back} onClick={() => handleSelect("Back")}>Back</div>
                        <div className={styles.Chest} onClick={() => handleSelect("Chest")}>Chest</div>
                        <div className={styles.Shoulder} onClick={() => handleSelect("Shoulder")}>Shoulder</div>
                        <div className={styles.Legs} onClick={() => handleSelect("Legs")}>Legs</div>
                        <div className={styles.Bisceps} onClick={() => handleSelect("Bisceps")}>Bisceps</div>
                        <div className={styles.Triceps} onClick={() => handleSelect("Triceps")}>Triceps</div>
                        <div className={styles.Forearms} onClick={() => handleSelect("Forearms")}>Forearms</div>
                    </div>
                    <div className={styles.editInfo}>
                        <div className={styles.name}>{exercise}</div>
                        <div className={styles.Dummy}>
                            <div className={styles.list}>
                                <div className={styles.cross_input}>
                                    <img onClick={closeinput} src={cross} alt="close" style={{ cursor: "pointer" }} />
                                </div>
                                <VolumeChart data={updateDaily[exercise]} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.update}></div>
            </div>
        </div>
    );
}

export default Track;
