import { Html, Head, Main, NextScript } from "next/document";
import { AuthProvider } from "./components/AuthContext";





export default function Document({chlidren}) {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#FFFFFF]">
        <AuthProvider>
          {chlidren}
        </AuthProvider>
      <Main/>
      <NextScript />
    </body>
    </Html>
  );
}
