import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    endFreq: 801,
    owner: "Orange",
    ownerLongName: "Orange Polska S.A.",
    pairedWith: {
      endFreq: 842,
      startFreq: 832,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/800-mhz,6.html",
    },
    startFreq: 791,
    type: "fddDown",
  },
  {
    endFreq: 806,
    owner: "Play",
    ownerLongName: "P4 Sp. z o.o.",
    pairedWith: {
      endFreq: 847,
      startFreq: 842,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/800-mhz,6.html",
    },
    startFreq: 801,
    type: "fddDown",
  },
  {
    endFreq: 821,
    owner: "T-Mobile",
    ownerLongName: "T-Mobile Polska S.A.",
    pairedWith: {
      endFreq: 862,
      startFreq: 852,
      type: "fddUp",
    },
    sourceInfo: {
      type: "url",
      url: "https://bip.uke.gov.pl/rezerwacje-czestotliwosci/rezerwacje-ogolnopolskie-tresci/800-mhz,6.html",
    },
    startFreq: 811,
    type: "fddDown",
  },
];

export default data;
