import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../app/store";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default Providers;