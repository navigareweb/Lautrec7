import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/400x600.jpeg"}
        width={600}
        height={600}
        className={styles.img}
        alt="imgLautrec"
      ></Image>
      <div className={styles.description}>
        <h3 className={styles.text}>LE RIRE</h3>
        <audio controls src="/LE-RIRE.mp3" className={styles.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p className={styles.p}>
          Le Rire was a French magazine of political and social satire founded
          in Paris by Felix Juven and published from October 1894 to 1950. Le
          Rire was one of the newspaper hosting major artists of the time,
          including Théophile Steinlen, Henri de Toulouse-Lautrec, and
          Jean-Louis Forain. It also launched important authors and drawers,
          such as the French-Spanish Manuel Luque, who was also an Impressionist
          painter, Adolphe Willette, drawer and engraver, René Georges
          Hermann-Paul, Juan Gris, later a Cubist painter, Lucien Metivet,
          Georges Meunier, Joaquín Xaudaró, Leonetto Cappiello, Albert
          Guillaume, Jules Grandjouan, and Jules-Alexandre Grün. The exhibition
          features the original covers of the magazine on the back of which are
          Toulouse-Lautrec's illustrations.
        </p>
      </div>
    </main>
  );
}
