export function getUFs() {
  return {
    BRASIL: [-16.64, -49.31],
    AC: [-8.77, -70.55],
    AL: [-9.71, -35.73],
    AM: [-3.07, -61.66],
    AP: [1.41, -51.77],
    BA: [-12.96, -38.51],
    CE: [-3.71, -38.54],
    DF: [-15.83, -47.86],
    ES: [-19.19, -40.34],
    GO: [-16.64, -49.31],
    MA: [-2.55, -44.3],
    MT: [-12.64, -55.42],
    MS: [-20.51, -54.54],
    MG: [-18.1, -44.38],
    PA: [-5.53, -52.29],
    PB: [-7.06, -35.55],
    PR: [-24.89, -51.55],
    PE: [-8.28, -35.07],
    PI: [-8.28, -43.68],
    RJ: [-22.84, -43.15],
    RN: [-5.22, -36.52],
    RO: [-11.22, -62.8],
    RS: [-30.01, -51.22],
    RR: [1.89, -61.22],
    SC: [-27.33, -49.44],
    SE: [-10.9, -37.07],
    SP: [-23.55, -46.64],
    TO: [-10.25, -48.25],
  };
}
export function getTypes() {
  return ["GAFANHOTO", "FERRUGEM ASIATICA", "ARANHA", "OUTRO"];
}
export function removerMask(value: string) {
  if (value) {
    return value.replace(/[.|\-|/()\s]/g, "");
  }
  return "";
}
export function formattedDate(date: string, ISO?: boolean): string {
  if (!date) {
    return "";
  } else if (date === "0001-01-01T00:00:00") {
    return "";
  }

  const dateFormatOptions = {
    // timeZone: "UTC",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  if (ISO) {
    const dateFormatISOOptions = {
      timeZone: "UTC",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    let returnDate = date.slice(0, 19);
    if (returnDate.length === 10) {
      returnDate = returnDate.concat("T00:00:00.000Z");
    } else {
      returnDate = returnDate.concat("Z");
    }
    return new Date(returnDate).toLocaleDateString(
      "pt-BR",
      dateFormatISOOptions
    );
  }

  return new Date(date).toLocaleDateString("pt-BR", dateFormatOptions);
}
