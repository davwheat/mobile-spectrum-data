export function isUplinkArfcn(arfcn: number, rat: "lte") {
  if (rat === "lte") {
    return (arfcn >= 18000 && arfcn <= 27810) || arfcn >= 131972;
  }
}
