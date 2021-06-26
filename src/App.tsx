import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/light';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import Header from "./components/Header";
import { AuthContextProvider } from "./contexts/AuthContext";
import Room from "./pages/Room";
import AdminRoom from "./pages/AdminRoom";
import GlobalStyle from './styles/global';


function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
