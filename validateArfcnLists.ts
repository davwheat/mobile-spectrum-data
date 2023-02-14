// AT
import EarfcnAT from "./src/AT/EARFCNs";
import NrarfcnAT from "./src/AT/NRARFCNs";
import BandDataAT from "./src/AT";

// AX
import EarfcnAX from "./src/AX/EARFCNs";
import NrarfcnAX from "./src/AX/NRARFCNs";
import BandDataAX from "./src/AX";

// BG
import EarfcnBG from "./src/BG/EARFCNs";
import NrarfcnBG from "./src/BG/NRARFCNs";
import BandDataBG from "./src/BG";

// DE
import EarfcnDE from "./src/DE/EARFCNs";
import NrarfcnDE from "./src/DE/NRARFCNs";
import BandDataDE from "./src/DE";

// DK
import EarfcnDK from "./src/DK/EARFCNs";
import NrarfcnDK from "./src/DK/NRARFCNs";
import BandDataDK from "./src/DK";

// EE
// import EarfcnEE from "./src/EE/EARFCNs";
// import NrarfcnEE from "./src/EE/NRARFCNs";
// import BandDataEE from "./src/EE";

// FI
import EarfcnFI from "./src/FI/EARFCNs";
import NrarfcnFI from "./src/FI/NRARFCNs";
import BandDataFI from "./src/FI";

// GB
import EarfcnGB from "./src/GB/EARFCNs";
import NrarfcnGB from "./src/GB/NRARFCNs";
import BandDataGB from "./src/GB";

// IE
import EarfcnIE from "./src/IE/EARFCNs";
import NrarfcnIE from "./src/IE/NRARFCNs";
import BandDataIE from "./src/IE";

// KR
// import EarfcnKR from "./src/KR/EARFCNs";
// import NrarfcnKR from "./src/KR/NRARFCNs";
// import BandDataKR from "./src/KR";

// MK
import EarfcnMK from "./src/MK/EARFCNs";
import NrarfcnMK from "./src/MK/NRARFCNs";
import BandDataMK from "./src/MK";

// RO
import EarfcnRO from "./src/RO/EARFCNs";
import NrarfcnRO from "./src/RO/NRARFCNs";
import BandDataRO from "./src/RO";

// RS
import EarfcnRS from "./src/RS/EARFCNs";
// import NrarfcnRS from "./src/RS/NRARFCNs";
import BandDataRS from "./src/RS";

// UA
import EarfcnUA from "./src/UA/EARFCNs";
// import NrarfcnUA from "./src/UA/NRARFCNs";
import BandDataUA from "./src/UA";

const toCheck = [
  { spectrum: BandDataAT, nr: NrarfcnAT, lte: EarfcnAT },
  { spectrum: BandDataAX, nr: NrarfcnAX, lte: EarfcnAX },
  { spectrum: BandDataBG, nr: NrarfcnBG, lte: EarfcnBG },
  { spectrum: BandDataDE, nr: NrarfcnDE, lte: EarfcnDE },
  { spectrum: BandDataDK, nr: NrarfcnDK, lte: EarfcnDK },
  // { spectrum: BandDataEE, nr: NrarfcnEE, lte: EarfcnEE },
  { spectrum: BandDataFI, nr: NrarfcnFI, lte: EarfcnFI },
  { spectrum: BandDataGB, nr: NrarfcnGB, lte: EarfcnGB },
  { spectrum: BandDataIE, nr: NrarfcnIE, lte: EarfcnIE },
  // { spectrum: BandDataKR, nr: NrarfcnKR, lte: EarfcnKR },
  { spectrum: BandDataMK, nr: NrarfcnMK, lte: EarfcnMK },
  { spectrum: BandDataRO, nr: NrarfcnRO, lte: EarfcnRO },
  { spectrum: BandDataRS, lte: EarfcnRS },
  { spectrum: BandDataUA, lte: EarfcnUA },
];

let failed = false;

toCheck.forEach(({ spectrum, nr, lte }) => {
  spectrum
    .map((x) => x.spectrumData)
    .forEach((spectrumData) => {
      spectrumData.forEach((x) => {
        const { arfcns, uarfcns, earfcns, nrarfcns } = x;

        const allEarfcns = (lte ?? [])
          .map((x) => x.arfcn)
          .filter((x) => typeof x === "number");
        const allNrarfcns = (nr ?? [])
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
                failed = true;
              }
            });
        }
      });
    });
});

if (failed) {
  process.exit(1);
}
