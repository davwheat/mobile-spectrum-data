import json


def isFloat(s):
    try:
        float(s)
        return True
    except ValueError:
        return False


data = None

with open("lte.json") as f:
    data = json.load(f)

bands = data.values()
changedBands = {}

for band in bands:
    duplexing = band["duplexMode"]
    print(f"\n\nBand {band['band']} - {band['name']}")
    print(f"Duplexing: {duplexing}")

    keysToUpdate = []

    match duplexing:
        case "FDD":
            keysToUpdate = [
                "downlinkStartFrequency",
                "downlinkEndFrequency",
                "uplinkStartFrequency",
                "uplinkEndFrequency",
            ]
        case "TDD":
            keysToUpdate = [
                "startFrequency",
                "endFrequency",
            ]
        case "SDL":
            keysToUpdate = [
                "startFrequency",
                "endFrequency",
            ]
        case "SUL":
            keysToUpdate = [
                "startFrequency",
                "endFrequency",
            ]

    print("")
    print("Leave a blank line to skip updating the field")
    print("")

    for key in keysToUpdate:
        curr_val = band.get(key)
        val = input(f"{key} ({curr_val}): ")

        if val == "":
            print("skipped")
            continue

        if isFloat(val):
            val = float(val)

        band[key] = val

    changedBands[band["band"]] = band

with open("new.json", "w") as f:
    json.dump(changedBands, f, indent=2)
