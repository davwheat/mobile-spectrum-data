import type { ArfcnDataItem, SimpleArfcnDataItem } from "../@types";
import { mapArfcnListToBand } from "../utils/mapArfcnListToBand";

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 100,
    bandwidth: 20,
    operator: 'Vodafone DE',
    description: 'Standard B1 deployment',
  },
  {
    arfcn: 300,
    bandwidth: [10, 15, 20],
    operator: 'O2 DE',
    description: 'Standard B1 deployment',
  },
  {
    arfcn: 500,
    bandwidth: 20,
    operator: 'Telekom',
    description: 'Standard B1 deployment',
  },
]

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1300,
    bandwidth: 20,
    operator: 'Telekom',
    description: 'Standard B3C1 deployment',
  },
  {
    arfcn: 1444,
    bandwidth: 10,
    operator: 'Telekom',
    description: 'Standard B3C2 deployment',
  },
  {
    arfcn: 1600,
    bandwidth: [5, 10, 15, 20],
    operator: 'O2 DE',
    description: 'Standard B3 deployment',
  },
  {
    arfcn: 1801,
    bandwidth: 20,
    operator: 'Vodafone DE',
    description: 'Standard B3 deployment',
  },
]

const B7: SimpleArfcnDataItem[] = [
  {
    arfcn: 2850,
    bandwidth: 20,
    operator: 'Vodafone DE',
    description: 'Standard B7 deployment',
  },
  {
    arfcn: 3050,
    bandwidth: 20,
    operator: 'Telekom',
    description: 'Standard B7 deployment',
  },
  {
    arfcn: 3200,
    bandwidth: 10,
    operator: '1&1',
    description: 'Standard B7 deployment',
  },
  {
    arfcn: 3350,
    bandwidth: 20,
    operator: 'O2 DE',
    description: 'Standard B7 deployment',
  },
]

const B8: SimpleArfcnDataItem[] = [
  {
    arfcn: 3500,
    bandwidth: [5, 6.5],
    operator: 'O2 DE',
    description: 'Standard B8 deployment. Old sites sometimes 6.5 MHz, signalled as 10 MHz (missing RBs)',
  },
  {
    arfcn: 3600,
    bandwidth: 5,
    operator: 'Vodafone DE',
    description: 'Standard B8 deployment',
  },
  {
    arfcn: 3749,
    bandwidth: 5,
    operator: 'Telekom',
    description: 'Standard B8 deployment',
  },
]

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6200,
    bandwidth: 10,
    operator: 'O2 DE',
    description: 'Standard B20 deployment',
  },
  {
    arfcn: 6300,
    bandwidth: 10,
    operator: 'Vodafone DE',
    description: 'Standard B20 deployment',
  },
  {
    arfcn: 6400,
    bandwidth: 10,
    operator: 'Telekom',
    description: 'Standard B20 deployment',
  },
]

const B28: SimpleArfcnDataItem[] = [
  {
    arfcn: 9260,
    bandwidth: 10,
    operator: 'O2 DE',
    description: 'B28 - mostly refarmed to N28',
  },
  {
    arfcn: 9460,
    bandwidth: 10,
    operator: 'Vodafone DE',
    description: 'Standard B28/n28 DSS deployment',
  },
]

const B32: SimpleArfcnDataItem[] = [
  {
    arfcn: 10020,
    bandwidth: 20,
    operator: 'Telekom',
    description: 'Standard B32 SDL deployment',
  },
  {
    arfcn: 10220,
    bandwidth: 20,
    operator: 'Vodafone DE',
    description: 'Standard B32 SDL deployment',
  },
]

const B38: SimpleArfcnDataItem[] = [
  {
    arfcn: 37975,
    bandwidth: 20,
    operator: 'Vodafone DE',
    description: 'Standard B38 deployment',
  },
]

const EARFCNs: ArfcnDataItem[] = [
  ...mapArfcnListToBand(1, B1),
  ...mapArfcnListToBand(3, B3),
  ...mapArfcnListToBand(7, B7),
  ...mapArfcnListToBand(8, B8),
  ...mapArfcnListToBand(20, B20),
  ...mapArfcnListToBand(28, B28),
  ...mapArfcnListToBand(32, B32),
  ...mapArfcnListToBand(38, B38),
]

export default EARFCNs
