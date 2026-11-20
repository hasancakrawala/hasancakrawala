import { createContext } from "react";

/* True when a case is rendered inline on its role page (one long page per
   role) instead of on its own /work/$slug page. */
export const CaseEmbedContext = createContext(false);
