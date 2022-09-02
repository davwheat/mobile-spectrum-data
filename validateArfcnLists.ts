import EarfcnAT from "./src/AT/EARFCNs";
import NrarfcnAT from "./src/AT/NRARFCNs";
import BandDataAT from "./src/AT";

import EarfcnBG from "./src/BG/EARFCNs";
import NrarfcnBG from "./src/BG/NRARFCNs";
import BandDataBG from "./src/BG";

import EarfcnDE from "./src/DE/EARFCNs";
import NrarfcnDE from "./src/DE/NRARFCNs";
import BandDataDE from "./src/DE";

import EarfcnDK from "./src/DK/EARFCNs";
import NrarfcnDK from "./src/DK/NRARFCNs";
import BandDataDK from "./src/DK";

import EarfcnGB from "./src/GB/EARFCNs";
import NrarfcnGB from "./src/GB/NRARFCNs";
import BandDataGB from "./src/GB";

const toCheck = [
  { spectrum: BandDataAT, nr: NrarfcnAT, lte: EarfcnAT },
  { spectrum: BandDataBG, nr: NrarfcnBG, lte: EarfcnBG },
  { spectrum: BandDataDE, nr: NrarfcnDE, lte: EarfcnDE },
  { spectrum: BandDataDK, nr: NrarfcnDK, lte: EarfcnDK },
  { spectrum: BandDataGB, nr: NrarfcnGB, lte: EarfcnGB },
];

toCheck.forEach(({ spectrum, nr, lte }) => {
  spectrum
    .map((x) => x.spectrumData)
    .forEach((spectrumData) => {
      spectrumData.forEach((x) => {
        const { arfcns, uarfcns, earfcns, nrarfcns } = x;

        const allEarfcns = lte
          .map((x) => x.arfcn)
          .filter((x) => typeof x === "number");
        const allNrarfcns = nr
          .map((x) => x.arfcn)
          .filter((x) => typeof x === "number");

        if (Array.isArray(earfcns)) {
          earfcns
            .filter((x) => typeof x === "number")
            .forEach((earfcn) => {
              if (!allEarfcns.includes(earfcn as number)) {
                console.log(
                  `${x.owner} has earfcn ${earfcn} which is not in the list of earfcns`
                );
              }
            });
        }
      });
    });
});
