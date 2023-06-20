import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about_container}>
      
            <article className={`col_4 col_mb_12 ${styles.sirena}`}>
            </article>

            <article className={`col_8 col_mb_12 ${styles.black}`}>
              <h2>About Us</h2>
              <p>
                Somos un estudio de tatuajes situado en Buenos Aires, Argentina.
                Nuestra apertura fue en 2019 y desde entonces no hemos parado de
                trabajar para llevarle excelencia a nuestros clientes. Nos
                caracterizamos por tener especialistas y primeros en realizar
                una experiencia dirigida únicamente hacia la vivencia del
                cliente donde ellos son y serán siempre nuestros protagonistas.
                Contamos con un equipo de trabajo altamente calificado y
                profesional que lleva a cabo las obras donde los clientes quedan
                encantados y siempre quieren volver a repetir. Y vos? Qué
                esperas para vivir la tuya?
              </p>
            </article> 

      
    </section>
  );
};

export default About;
