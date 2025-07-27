import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import bar from '../assets/hamburger.svg';
import cross from '../assets/cross.svg';
import clear from '../assets/clear.svg';
import home from '../assets/home.svg';
import workout from '../assets/workout.svg';
import edit from '../assets/edit.svg';
import update from '../assets/update.svg';
import goals from '../assets/goals.svg';
import track from '../assets/track.svg';
import Navbar from './Navbar';

function Home() {
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
                <div className={styles.training}>{training}</div>
                
                <div className={styles.programs}>
                    <div className={styles.workout} onClick={handleworkout}>Workouts</div>
                    <div className={styles.update} onClick={handleupdate}>Update</div>
                    <div className={styles.goals} onClick={handlegoals}>Goals</div>
                    <div className={styles.track} onClick={handleTrack}>Track Progress</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
