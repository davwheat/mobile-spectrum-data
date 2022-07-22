import EarfcnGB from "./src/GB/EARFCNs";
import NrarfcnGB from "./src/GB/NRARFCNs";
import BandDataGB from "./src/GB";

const toCheck = [{ spectrum: BandDataGB, nr: NrarfcnGB, lte: EarfcnGB }];

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
