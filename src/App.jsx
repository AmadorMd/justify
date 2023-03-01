import { useState } from "react";
import { Calculator } from "./components/Calculator";
import { TypingEffect } from "./components/TypingEffect";
import { LogoSVG, WhatsAppIcon } from "./icons/LogoSVG";
import { useFormik } from "formik";
import { BannerSection } from "./components/BannerSection";
import { ContactForm } from "./components/ContactForm";
import {
  convertDaysIntoYearMothDaysValue,
  constructMessage,
  laborSettlementPayments,
  arrayIsEmpty,
} from "./logic/logic";

function App() {
  const [texts, setTexts] = useState("");

  const formik = useFormik({
    initialValues: {
      start_date: new Date(),
      end_date: new Date(),
      quantity: "",
      types: "",
    },
    onSubmit: (values) => {
      if (texts) {
        setTexts("");
      }
      const monthPaymenty = values.quantity;
      const dailySalary = parseFloat(monthPaymenty) / 30;
      const daysWorked = Math.ceil(
        (values.end_date - values.start_date) / (1000 * 60 * 60 * 24)
      );
      const timeWorked = convertDaysIntoYearMothDaysValue(daysWorked);
      const unfairDismissalPayments = laborSettlementPayments(
        values.start_date,
        values.end_date,
        dailySalary
      );

      const textSalary = constructMessage({
        ...unfairDismissalPayments,
        monthPaymenty,
        ...timeWorked,
      });
      setTexts(textSalary);
    },
  });

  return (
    <>
      <nav className="mt-5">
        <div className="w-full">
          <LogoSVG className="mx-auto" />
        </div>
      </nav>
      <main>
        <BannerSection />
        <section
          className="mt-5 py-8 w-full px-6 bg-cover bg-center"
          style={{ backgroundImage: "url(./src/assets/calculator-bg.jpg)" }}
        >
          <div className="md:mx-auto md:max-w-screen-lg">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid gap-3 grid-rows-2 grid-cols-2 items-center">
                <div>
                  <p className="text-lg font-bold text-center leading-tight mb-3 text-white">
                    <span className="text-secondary">Fecha de inicio</span>{" "}
                    <br /> de labores:
                  </p>
                  <Calculator
                    name="start_date"
                    value={formik.values.start_date}
                    formikChange={(value) =>
                      formik.setFieldValue("start_date", value)
                    }
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-center leading-tight mb-3 text-white">
                    <span className="text-secondary">Último día</span> <br /> de
                    labores:
                  </p>
                  <Calculator
                    name="end_date"
                    value={formik.values.end_date}
                    formikChange={(value) =>
                      formik.setFieldValue("end_date", value)
                    }
                  />
                </div>
                <div className="mt-3">
                  <p className="text-lg font-bold text-center leading-tight mb-3 text-white">
                    <span className="text-secondary">Último salario</span>{" "}
                    <br /> mensual:
                  </p>
                  <input
                    name="quantity"
                    type="number"
                    placeholder="$0.00"
                    className="bg-white flex justify-center items-center text-primary rounded-full border-none w-full py-2 text-center placeholder:text-primary font-semibold"
                    onChange={formik.handleChange}
                    value={formik.values.quantity}
                  />
                </div>
                <div className="mt-3">
                  <p className="text-lg font-bold text-center leading-tight mb-3 text-white">
                    Tipo de reclamo:
                  </p>
                  <select
                    onChange={formik.handleChange}
                    value={formik.values.types}
                    name="types"
                    id="types"
                    className="bg-white flex justify-center items-center text-primary rounded-full border-none w-full py-2 text-center placeholder:text-primary font-semibold"
                  >
                    <option value="">Reclamo</option>
                    <option value="despido">Despido injustificado</option>
                  </select>
                </div>
              </div>
              <div className="w-full text-center mt-10">
                <button
                  type="submit"
                  className="bg-secondary text-2xl text-white font-extrabold px-6 py-2 rounded-full hover:bg-yellow-700 focus:ring-4 focus:ring-secondary focus:ring-opacity-40"
                >
                  CALCULAR
                </button>
              </div>
            </form>
            <div className="text-white font-light py-10">
              {texts ? <TypingEffect texts={texts} /> : " "}
            </div>
            <div className="w-full text-center">
              <a
                href="#contact"
                className="bg-secondary text-2xl text-white font-extrabold px-6 py-2 rounded-full hover:bg-yellow-700 focus:ring-4 focus:ring-secondary focus:ring-opacity-40"
              >
                AGENDA TU CITA
              </a>
            </div>
          </div>
        </section>
        <section className="py-5 px-6 md:mt-10">
          <div className="md:mx-auto md:max-w-screen-lg grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div>
              <h4 className="text-secondary font-bold text-xl md:text-3xl">
                ¿En qué creemos?
              </h4>
              <p className="text-primary font-medium text-base md:text-xl md:mt-5">
                En Justify, creemos en la importancia de proteger los derechos
                de los trabajadores, ya que son ellos quienes construyen las
                empresas y hacen que la economía funcione. Nuestro equipo de
                abogados expertos en derecho laboral están dispuestos a luchar
                por tus derechos y a asesorarte en todo lo que necesites.
              </p>
            </div>
            <div>
              <h4 className="text-secondary font-bold text-xl md:text-3xl">
                ¿Cómo podemos ayudarte?
              </h4>
              <p className="text-primary font-medium text-base md:text-xl md:mt-5">
                En Justify, nos encargamos de proteger y defender tus intereses.
              </p>
              <p className="text-primary font-medium text-base md:text-xl md:mt-5">
                Trabajamos en equipo contigo para encontrar la mejor estrategia
                para proteger tus derechos laborales en casos de despido
                injustificado, discriminación, acoso laboral, entre otros.
              </p>
              <p className="font-bold text-primary md:text-xl md:mt-5">
                En Justify, creemos que todo trabajador tiene derecho a un trato
                justo en el lugar de trabajo, y estamos aquí para asegurarnos de
                que se cumpla.
              </p>
            </div>
          </div>
        </section>

        <footer>
          <div className="md:mx-auto md:max-w-screen-lg grid grid-cols-1 md:grid-cols-2 md:gap-5 items-center md:pb-10">
            <ContactForm />
            <div className="text-center pt-10 pb-16">
              <a
                href="tel:3334444873"
                className="text-primary text-2xl md:text-3xl font-bold"
              >
                ó llámanos <br />
                33-3444-4873
              </a>
              <div className="w-full mt-5 md:mt-10">
                <LogoSVG className="mx-auto" />
              </div>
              <p className="font-medium text-primary mt-5 md:mt-10 md:text-xl">
                Av. Manuel Acuña 2095, <br />
                Ladrón de Guevara, Ladron De Guevara, <br />
                44600 Guadalajara, Jal.
              </p>
              <p className="mt-5 md:mt-10">
                <a
                  href="tel:3334444873"
                  className="leading-none text-2xl md:text-3xl font-extrabold text-primary"
                >
                  3334444873
                </a>
              </p>
            </div>
          </div>
        </footer>
        <a
          className="fixed bg-[#25D366] bottom-0 right-0 text-white px-3 py-1 rounded-full mb-5 mr-3 inline-flex items-center"
          href="https://api.whatsapp.com/send?phone=5213334444873&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20online."
        >
          <WhatsAppIcon />
          <span className="ml-1">Asesoria Online</span>
        </a>
      </main>
    </>
  );
}

export default App;
