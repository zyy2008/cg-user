import { proxyToRaw } from "@/components";
import type { Recordable } from "../../typings";

export const useFormMethods = () => {
  function handleFormValues(values: Recordable) {
    return proxyToRaw(values);
  }
  return {
    handleFormValues,
  };
};

export type FormMethods = ReturnType<typeof useFormMethods>;
