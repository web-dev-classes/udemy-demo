import styles from "./examples.module.css";
import { UdemyDemo } from "udemy-demo/server";

export default function Examples() {
  return (
    <div className={styles.examples}>
      <UdemyDemo />
    </div>
  );
}
