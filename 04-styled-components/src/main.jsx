import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";

function Root(){
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
  useEffect(() => { localStorage.setItem("theme", isDark ? "dark" : "light"); }, [isDark]);

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <App onToggleTheme={() => setIsDark(s => !s)} />
    </ThemeProvider>
  );
}
