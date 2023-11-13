import { useEventBus } from "@vueuse/core";
import type { EventBusKey } from "@vueuse/core";
const fooKey: EventBusKey<string[]> = Symbol("symbol-key");
export const { off, on, emit } = useEventBus(fooKey);
