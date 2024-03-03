import styles from "./examples.module.css";
import {UdemyDemo} from  "udemy-demo/server"

export default function Examples() {
  return (
    <div className={styles.examples}>
      <h1>Create examples for your library here.</h1>
      <UdemyDemo>
        Wow! It was so simple!
      </UdemyDemo>
    </div>
  );
}
