import { useContext } from "react";
import ContainerContext from "../context/ContainerContext";

export default function useMainContainer() {
  const context = useContext(ContainerContext);

  if (!context) {
    throw new Error(
      "useMainContainer must be used within a MainContainerProvider"
    );
  }

  return context;
}
