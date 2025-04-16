import styles from "./page.module.css";
import { Postlist } from "@/components/Postlist";

export default function Home() {
  return <div className={styles.main}>
    <h1>All Posts</h1>
    <Postlist/>
  </div>;
}
