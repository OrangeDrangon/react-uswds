import { Dispatch, SetStateAction } from "react";

import { createContext } from "react";

export const context = createContext<{
  open: string | null;
  setOpen: Dispatch<SetStateAction<null | string>>;
}>({
  open: null,
  setOpen: (val) => undefined,
});
