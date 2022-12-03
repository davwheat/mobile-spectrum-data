import type { SpectrumBlock } from "../@types";

const data: SpectrumBlock[] = [
  {
    owner: "Neotel",
    startFreq: 3400,
    endFreq: 3460,
    type: "tdd",
    earfcns: [41665, 41690, 41815],
    details: [
      "Available in regions 1 (Skopije, Ilinden, Petrovets, Zelenikovo, Studenichani, Sopishte, Chucher Sandevo and Arachinovo), 4 (Bitola, Prilep, Demir Hisar, Krushevo, Dolneni, Krivogashtani, Mogila, Novaci and Resen), 5 (Ohrid, Struga, Debarca, Vevchani, Kichevo, M. Brod, Drugovo, Zajac, Oslomej, Vraneshtica, Plasnica, Debar and Centar Jupa) and 6 (Tetovo, Gostivar, Tearce, Jegunovce, Jelino, Brvenica, Bogovinje, Mavrovo and Rostushe",
    ],
  },
  {
    owner: "Unallocated",
    startFreq: 3460,
    endFreq: 3600,
    type: "generic",
  },
  {
    owner: "A1",
    startFreq: 3600,
    endFreq: 3700,
    type: "tdd",
  },
  {
    owner: "Telekom",
    startFreq: 3700,
    endFreq: 3800,
    type: "tdd",
    nrarfcns: [647424],
  },
];

export default data;
