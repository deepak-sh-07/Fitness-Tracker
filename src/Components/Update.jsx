import Navbar from './Navbar';
import useStore from '../usestore';
import cross from '../assets/cross.svg';
import styles from './Update.module.css';
import { useState } from 'react';

function Update() {
    const [exercise, setExercise] = useState("");
    const [total, setTotal] = useState(0);
    const { exerciseList, updatedDaily } = useStore();
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
    const handleUpdate = (_exercise) => {
        const weight = prompt(`Set goal weight for ${_exercise}:`);
        if (weight === null || weight.trim() === "") return;
        setTotal((prevTotal) => prevTotal + parseInt(weight));
    }
    const submit = () => {
        updatedDaily(exercise, total);
        setTotal(0);
    }
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.select}>
                    <div className={styles.msg}>Select your Exercises</div>
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
                                <div className={styles.cross}>
                                    <img onClick={closeinput} src={cross} alt="close" style={{ cursor: "pointer" }} />
                                </div>

                                <div className={styles.exerciseList}>
                                    <ol>
                                        {exerciseList[exercise]?.map((item, index) => (
                                            <li key={index}>
                                                {index + 1}. {item}
                                                <button onClick={() => handleUpdate(item)}>➕</button>
                                            </li>

                                        ))}
                                    </ol>
                                </div>
                                <div className={styles.updatebutton}>
                                    <div className={styles.total}>Total: {total} kg</div>
                                    <button onClick={submit}>Update</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.update}></div>
            </div>
        </div>
    );
}

export default Update;
