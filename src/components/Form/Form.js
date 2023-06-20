import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <section className={styles.form_container}>
      <h2>Contac Us</h2>
            <div>
                <form action="" >   
                    <div class="col-md-6">
                        <div>
                            <label for="">Nombre</label>
                            <input class="form-control" type="text" placeholder="Ingresá tu nombre" /> 
                        </div>
                        <div>
                            <label for="">Mail</label>
                            <input class="form-control" type="email" placeholder="Ingresá tu mail" /> 
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="">Contanos tu idea</label>
                            <textarea  placeholder="Describí tu idea, el diseño, si es a color o en negro, etc. " name="idea" id="consulta" class="form-control" rows="6"></textarea>
                        </div>
                    </div>
                    <button type="submit">Pedir Presupuesto</button>
                </form>     
            </div>
    </section>
  );
};

export default Form;
