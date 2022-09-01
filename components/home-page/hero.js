import Image from "next/image";

import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/carl.jpg"
          alt="An image showing Carl"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Carl</h1>
      <p>I blog about web development - especially React</p>
    </section>
  );
}

export default Hero;
