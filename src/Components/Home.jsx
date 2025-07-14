import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
    const navigate = useNavigate();
    const training = "Push Day";
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

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
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
