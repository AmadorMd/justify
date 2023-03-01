import { YEAR_IN_DAYS, MONTH_IN_DAYS } from "../const";
export const convertDaysIntoYearMothDaysValue = (totalDays) => {
  const years = Math.floor(totalDays / YEAR_IN_DAYS);
  const months = Math.floor((totalDays % YEAR_IN_DAYS) / MONTH_IN_DAYS);
  const days = Math.floor(
    totalDays - years * YEAR_IN_DAYS - months * MONTH_IN_DAYS
  );
  return {
    years: years,
    months: months,
    days: days,
  };
};
export const constructMessage = ({ ...props }) => {
  let moneyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return [
    `*Salario:* ${moneyFormat.format(props.monthPaymenty)} pesos mensuales.`,
    `*Tiempo trabajado*: ${props.years} años, ${props.months} meses y ${props.days} días.`,
    `A continuación te explicamos el cálculo estimado:`,
    `*Aguinaldo:* se debe pagar una cantidad equivalente a 12 días de salario por cada año trabajado, por lo que en total se deben pagar ${moneyFormat.format(
      props.cristhmasBonus
    )} pesos.`,
    `*Vacaciones:* la cantidad por concepto de vacaciones que corresponden al empleado según la cantidad de días que trabajó en el último año, tomando en cuenta los años laborados,  por lo que en total se deben pagar: ${moneyFormat.format(
      props.vacationPayment
    )} pesos.`,
    `*Prima vacacional:* se debe pagar una cantidad equivalente al 25% del salario correspondiente a los días de vacaciones. En este caso, el total de la prima vacacional sería de ${moneyFormat.format(
      props.vacationPrima
    )} pesos.`,
    `*Indemnización:* En caso de despido injustificado, se debe pagar una indemnización equivalente a tres meses de salario. En este caso, la indemnización sería de ${moneyFormat.format(
      props.compensation
    )} pesos.`,
    `Por lo tanto, el finiquito consta de la siguiente suma:`,
    `*Monto de vacaciones:* ${moneyFormat.format(props.vacationPayment)}`,
    `*Prima vacacional:* ${moneyFormat.format(props.vacationPrima)}`,
    `*Aguinaldo (último año):* ${moneyFormat.format(
      props.cristhmasBonus.toFixed(2)
    )}`,
    `*Indemnización (90 días):* ${moneyFormat.format(props.compensation)}`,
    `*Prima de antigüedad:* ${moneyFormat.format(
      props.antiquityPayment.toFixed(2)
    )}`,
    `/Total: ${moneyFormat.format(props.total.toFixed(2))} pesos./`,
    `Es importante mencionar que el cálculo del finiquito puede variar según las circunstancias específicas de cada caso, por lo que es recomendable consultar a un de nuestros expertos en recursos humanos para realizar el cálculo de manera precisa.`,
  ];
};
export const laborSettlementPayments = (startDate, endDate, dailySalary) => {
  const ONE_YEAR_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * YEAR_IN_DAYS;
  const oneYearAgo = new Date(Date.now() - ONE_YEAR_IN_MILLISECONDS);

  const daysWorkedLastYear = Math.max(
    0,
    Math.ceil((endDate - oneYearAgo) / (1000 * 60 * 60 * 24))
  );
  const daysVacationLastYear = Math.min(6, daysWorkedLastYear * 0.041);
  const vacationPay = daysVacationLastYear * dailySalary;
  const primaVacacional = vacationPay * 0.25;
  const aguinaldo = ((daysWorkedLastYear * dailySalary) / YEAR_IN_DAYS) * 15;
  const indemnization = dailySalary * 90;
  const primaAntiguedad =
    414.44 * 12 * (Math.abs(endDate - startDate) / ONE_YEAR_IN_MILLISECONDS);

  const total =
    vacationPay + primaVacacional + aguinaldo + indemnization + primaAntiguedad;

  return {
    vacationPayment: vacationPay,
    vacationPrima: primaVacacional,
    cristhmasBonus: aguinaldo,
    compensation: indemnization,
    antiquityPayment: primaAntiguedad,
    total: total,
  };
};
export const getNumberOfBonus = (totalDays) => {
  const totalBonus = totalDays / YEAR_IN_DAYS;
  return totalBonus.toFixed(2);
};
export const totalVacationDays = (yearsWorked) => {
  const minVacationDays = 12;
  const first5yearsMax = 20;
  const daysAdded = yearsWorked / 5;
  if (yearsWorked === 0) {
    return minVacationDays;
  }
  if (yearsWorked >= 1 && yearsWorked <= 5) {
    return minVacationDays + (yearsWorked - 1) * 2;
  } else if (yearsWorked > 5 && yearsWorked % 5 === 0) {
    return first5yearsMax + daysAdded + (daysAdded - 2);
  } else {
    return first5yearsMax;
  }
};

export function arrayIsEmpty(array) {
  //If it's not an array, return FALSE.
  if (!Array.isArray(array)) {
    return FALSE;
  }
  //If it is an array, check its length property
  if (array.length == 0) {
    //Return TRUE if the array is empty
    return true;
  }
  //Otherwise, return FALSE.
  return false;
}
