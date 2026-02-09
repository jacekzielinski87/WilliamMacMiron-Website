import "/styles/global.css";
import { AuthProvider } from "./components/Auth/AuthContext";
import { SearchProvider } from "./components/Ui/SearchContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </AuthProvider>
  );
}
