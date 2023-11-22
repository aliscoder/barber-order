import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.centerDiv}>
        <img src="img/mobile.png" />
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label>نام آرایشگاه</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.inputGroup}>
            <label>نام آرایشگر</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.inputGroup}>
            <label>کلمه عبور</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.inputGroup}>
            <label>تکرار کلمه عبور</label>
            <input type="text" name="" id="" />
          </div>
          <div className={styles.inputGroup}>
            <label>شماره تماس</label>
            <input type="text" name="" id="" />
          </div>

          <button>ثبت آرایشگاه و دریافت اپ</button>
        </div>
      </div>
    </main>
  );
}
