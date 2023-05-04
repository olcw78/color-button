import constate from "constate";
import { useCallback, useState } from "react";
import type { ScoopsModel } from "../../../model/ScoopsModel";
import type { ToppingsModel } from "../../../model/ToppingsModel";

interface OrderDetailField {
  scoops: ScoopsModel;
  toppings: ToppingsModel;
}

interface OrderDetailAction {
  updateItemCounts: (
    itemName: Partial<ScoopsModel["name"]> | Partial<ToppingsModel["name"]>,
    newItemCount: number,
    optionType: "scoops" | "toppings"
  ) => void;

  resetOrder: () => void;
}

type OrderDetail = (OrderDetailField & OrderDetailAction) | null;

function useOrderDetails() {
  const [scoops, setScoops] = useState<Partial<ScoopsModel>>({});
  const [toppings, setToppings] = useState<Partial<ToppingsModel>>({});

  const updateItemCounts = useCallback<OrderDetailAction["updateItemCounts"]>(
    (itemName, newItemCount, optionType) => {
      switch (optionType) {
        case "scoops":
          {
            setScoops((prev) => ({
              ...prev,
              [itemName]: newItemCount
            }));
          }
          break;

        case "toppings":
          {
            setToppings((prevState) => ({
              ...prevState,
              [itemName]: newItemCount
            }));
          }
          break;

        default:
          break;
      }
    },
    []
  );

  const resetOrder: OrderDetailAction["resetOrder"] = () => {
    setScoops({});
    setToppings({});
  };

  return {
    scoops,
    toppings,
    updateItemCounts,
    resetOrder
  };
}

export const [OrderDetailsProvider, useOrderDetailsContext] = constate(
  useOrderDetails,
  (value) => value.resetOrder
);
