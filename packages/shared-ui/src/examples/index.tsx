import styles from "./examples.module.css";
import { UdemyDemo } from "@web-dev-classes/udemy-demo/server";

export default function Examples() {
  return (
    <div className={styles.examples}>
      <UdemyDemo />
    </div>
  );
}
