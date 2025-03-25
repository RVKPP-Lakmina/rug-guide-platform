import { createContext } from "react";
import { ContainerContextType } from "../types/types";

const ContainerContext = createContext<ContainerContextType | null>(null);

export default ContainerContext;
