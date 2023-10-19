import { useState, useContext } from "react";
import styles from "./paths.module.css"
import { useNavigate } from "react-router-dom";
import { Animation } from "../../Handlers/context";

const Paths = (props) => {

  const [currState, updateState] = useState(props.showNavbar);
  const {setAnimationType} = useContext(Animation);
  const navigate = useNavigate();

  const fadeInAnim = `${styles.paths} ${styles.zoomIn}`;
  const fadeOutAnim = `${styles.paths} ${styles.zoomOut}`;

  const changePath = (path) => {
    setAnimationType("");
    updateState(false); 
    setTimeout( () => {
      navigate(path); 
      props.setNavbar(false);
    }, 200);
  }

  return (
    <div className={currState ? fadeInAnim : fadeOutAnim }>
      <div className={styles.expProjCross} onClick={() => {updateState(false); setTimeout( () => {props.setNavbar(false)}, 200); } }>
        <div className={styles.expProjCrossBefore}></div>
        <div className={styles.expProjCrossAfter}></div>
      </div>
      <div className={styles.centerBack}>
        <div className={styles.button}>
          <button onClick={() => changePath("/")}>HOME</button>
        </div>
        <div className={styles.button}>
          <button onClick={() => changePath("/about")}>ABOUT ME</button>
        </div>
        <div className={styles.button}>
          <button onClick={() => changePath("/project")}>PROJECTS</button>
        </div>
      </div>
    </div>
  )
};


export default Paths;