import type { AppProps } from "next/app";
import "./globals.css";
import { Providers } from "../redux/provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
