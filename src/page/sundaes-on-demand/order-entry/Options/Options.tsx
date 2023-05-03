import type { FC } from "react";
import { useEffect, useState } from "react";
import type { Scoop } from "../../../../model/Scoop";
import ScoopOptions from "./ScoopOptions";

interface OptionsProps {
  optionType: "scoops" | "toppings";
}

const Options: FC<OptionsProps> = ({ optionType }) => {
  // const { data, isLoading, error } = useQuery<Readonly<Scoop[]>, Error>(
  //   ["scoopOptions"],
  //   () =>
  //     fetch("*/scoops", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }).then((res) => {
  //       if (!res.ok) {
  //         throw new Error(res.statusText);
  //       }
  //
  //       return res.json();
  //     }),
  //   {
  //     refetchOnWindowFocus: false,
  //     refetchOnReconnect: false
  //   }
  // );
  //
  // if (isLoading) return "Loading...";
  // if (error) return `Error: ${error.message}`;

  const [scoops, setScoops] = useState<Readonly<Scoop[]>>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`*/${optionType}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data: Readonly<Scoop[]> = await response.json();
      setScoops(data);
    })();
  }, [optionType]);

  if (optionType === "toppings") {
    return null;
  }

  return (
    <ul>
      {scoops?.map((scoop: Scoop) => (
        <li key={scoop.name}>
          <ScoopOptions {...scoop} />
        </li>
      ))}
    </ul>
  );
};

export default Options;
