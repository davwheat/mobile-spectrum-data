import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 2125,
    owner: "Orange",
    ownerLongName: "Orange Polska S.A.",
    pairedWith: {
      endFreq: 1935,
      startFreq: 1920,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/2100-mhz,3.html",
    },
    startFreq: 2110,
    type: "fddDown",
  },
  {
    endFreq: 2140,
    owner: "T-Mobile",
    ownerLongName: "T-Mobile Polska S.A.",
    pairedWith: {
      endFreq: 1950,
      startFreq: 1935,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/2100-mhz,3.html",
    },
    startFreq: 2125,
    type: "fddDown",
  },
  {
    endFreq: 2155,
    owner: "Plus",
    ownerLongName: "Polkomtel Sp. z o.o.",
    pairedWith: {
      endFreq: 1965,
      startFreq: 1950,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/2100-mhz,3.html",
    },
    startFreq: 2140,
    type: "fddDown",
  },
  {
    endFreq: 2170,
    owner: "Play",
    ownerLongName: "P4 Sp. z o.o.",
    pairedWith: {
      endFreq: 1980,
      startFreq: 1965,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/2100-mhz,3.html",
    },
    startFreq: 2155,
    type: "fddDown",
  },
];

export default data;
