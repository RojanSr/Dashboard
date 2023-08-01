import AppRoutes from "./routes/AppRoutes";
import Provider from "./providers";
const App = () => {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
};

export default App;
