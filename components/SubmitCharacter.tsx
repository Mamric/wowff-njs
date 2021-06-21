import { useState } from "react";
import { races } from "../data/races";
import { zones } from "../data/zones";

type factionT = "alliance" | "horde" | "none";

export const SubmitCharacter = () => {
  const [expanded, setExpanded] = useState(false);
  const [faction, setFaction] = useState<factionT>("none");
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [zone, setZone] = useState("");
  const [level, setLevel] = useState("");

  const changeName = (value: string) => {
    setName(value.slice(0, 12));
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white font-bold p-2 rounded active:bg-blue-700 mt-3"
        onClick={() => setExpanded(!expanded)}
      >
        Submit your character
      </button>
      <div
        className={`bg-gray-700 p-1 my-4 transition-all duration-500 ease-in-out ${
          expanded ? `hidden` : `h-100`
        }`}
      >
        <div className="text-2xl text-center">CHARACTER INFORMATION</div>
        <div className="grid grid-cols-2 gap-6 p-3">
          <button
            className={`bg-blue-${
              faction === "alliance" ? "600" : "500"
            } text-white font-bold p-2 rounded active:bg-blue-700`}
            onClick={() => setFaction("alliance")}
          >
            Alliance
          </button>
          <button
            className={`bg-blue-${
              faction === "horde" ? "600" : "500"
            } text-white font-bold p-2 rounded active:bg-blue-700`}
            onClick={() => setFaction("horde")}
          >
            Horde
          </button>
          <div>
            <div>
              <label>Character name*</label>
              <input
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-100 rounded-md border-gray-300 p-1 text-xl text-black"
                placeholder="Enter here"
                value={name}
                onChange={(e) => changeName(e.target.value)}
              />
            </div>
            <select
              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-100 rounded-md border-gray-300 p-1 text-xl text-black"
              value={race}
              onChange={(e) =>
                setRace(
                  e.target.value !== "Select Race" ? e.target.value : race
                )
              }
            >
              <option>Select Race</option>
              {races[faction].map((r) => (
                <option value={r} key={r}>
                  {r}
                </option>
              ))}
            </select>
            <select
              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-100 rounded-md border-gray-300 p-1 text-xl text-black"
              value={zone}
              onChange={(e) =>
                setZone(
                  e.target.value !== "Select Zone" ? e.target.value : zone
                )
              }
            >
              <option>Select Zone</option>
              {zones.map((z) => (
                <option value={z} key={z}>
                  {z}
                </option>
              ))}
            </select>
            <select
              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-100 rounded-md border-gray-300 p-1 text-xl text-black"
              value={level}
              onChange={(e) =>
                setLevel(
                  e.target.value !== "Select Level" ? e.target.value : level
                )
              }
            >
              <option>Select Level</option>
              {Array.from({ length: 60 }, (_, i) => i + 1).map((l) => (
                <option value={l} key={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      RACE:
      {race}
      Zone:
      {zone}
      Level:
      {level}
    </div>
  );
};
