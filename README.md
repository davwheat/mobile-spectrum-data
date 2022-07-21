# Mobile spectrum data <!-- omit in toc -->

This repository contains data related to mobile networking spectrum around the world, including ARFCNs, descriptions, and more.

I use this data for my own open-source mobile networking website: https://mastdatabase.co.uk

This dataset is [licensed under the GNU LGPLv3 license](./LICENSE).

- [Package structure](#package-structure)
  - [Spectrum allocation and usage](#spectrum-allocation-and-usage)
- [LTE and NR band data](#lte-and-nr-band-data)

## Package structure

This package includes typings declarations for all exported data. Your IDE should use these to detect and prevent syntax errors in your code.

### Spectrum allocation and usage

A country's sepctrum data can be imported by its two-letter ISO country code.

For example, to import the UK's spectrum data, you would do:

```ts
import SpectrumDataGB from 'mobile-spectrum-data/GB`
```

This imported data will be an array of Javascript objects with the keys `names` and `spectrumData`.

```ts
{
  names: ["B8", "n8"],
  spectrumData: [ ... ]
}
```

You can also import data for specific bands individually. This is allowed, and can be used to prevent loading more data than needed, but is considered internal and your imports _could_ break between versions (but are very unlikely to).

Sometimes multiple bands are contained within one single file. A good example of this is Denmark, with Bands 32, 75 and 76 being in the same file and spectrum allocation list due to Bands 75 and 76 being extensions of Band 32.

```ts
import Band8GB from "mobile-spectrum-data/GB/8";
import Band32_75_76GB from "mobile-spectrum-data/DK/32_75_76";
```

## LTE and NR band data

This package also contains a list of all LTE and NR bands, along with useful metadata about them.

This includes the human names for them, start and end frequencies, the offset used for DL and UL ARFCN calculation and more.

This can be imported from the BandInfo folder.

> Please note that ARFCN offsets are not currently included for NR.

```ts
import { LTEBandData, NRBandData } from "mobile-spectrum-data/BandInfo";

// or...

import { LTEBandData } from "mobile-spectrum-data/BandInfo/LTEBandData";
import { NRBandData } from "mobile-spectrum-data/BandInfo/NRBandData";
```
