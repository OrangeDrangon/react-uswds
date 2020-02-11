import { Dispatch, SetStateAction } from "react";

import { createContext } from "react";

export const AccordionContext = createContext<{
  open: string | null;
  setOpen: Dispatch<SetStateAction<null | string>>;
}>({
  open: null,
  setOpen: (_val) => undefined,
});
