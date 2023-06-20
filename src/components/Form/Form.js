import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <section className={styles.form_container}>
      <h2>Contac Us</h2>
            <div>
                <form action="" >   
                    <div className="col-md-6">
                        <div>
                            <input className={styles.form_control} type="text" placeholder="Ingresá tu nombre" /> 
                        </div>
                        <div>
                            <input className={styles.form_control} type="email" placeholder="Ingresá tu mail" /> 
                        </div>
                    </div>
                    <div>
                        <div>
                            <textarea  placeholder="Describí tu idea, el diseño, si es a color o en negro, etc. " name="idea" id="consulta" className={styles.form_control} rows="6"></textarea>
                        </div>
                    </div>
                    <button type="submit">Pedir Presupuesto</button>
                </form>     
            </div>
    </section>
  );
};

export default Form;
