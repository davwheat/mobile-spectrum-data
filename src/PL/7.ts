import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 2640,
    owner: "Plus",
    ownerLongName: "Polkomtel Sp. z o.o.",
    pairedWith: {
      endFreq: 2520,
      startFreq: 2500,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/2600-mhz,2.html",
    },
    startFreq: 2620,
    type: "fddDown",
  },
  {
    endFreq: 2655,
    owner: "Orange",
    ownerLongName: "Orange Polska S.A.",
    pairedWith: {
      endFreq: 2535,
      startFreq: 2520,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/2600-mhz,2.html",
    },
    startFreq: 2640,
    type: "fddDown",
  },
  {
    endFreq: 2670,
    owner: "T-Mobile",
    ownerLongName: "T-Mobile Polska S.A.",
    pairedWith: {
      endFreq: 2550,
      startFreq: 2535,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/2600-mhz,2.html",
    },
    startFreq: 2655,
    type: "fddDown",
  },
  {
    endFreq: 2690,
    owner: "Play",
    ownerLongName: "P4 Sp. z o.o.",
    pairedWith: {
      endFreq: 2570,
      startFreq: 2550,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/2600-mhz,2.html",
    },
    startFreq: 2670,
    type: "fddDown",
  },
];

export default data;
