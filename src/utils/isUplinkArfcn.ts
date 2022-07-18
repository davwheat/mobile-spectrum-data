export function isUplinkArfcn(rat: "lte", arfcn: number) {
  if (rat === "lte") {
    return (arfcn >= 18000 && arfcn <= 27810) || arfcn >= 131972;
  }
}
