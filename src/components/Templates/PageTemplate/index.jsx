import { Header } from "../../Header";
import { Footer } from "../../Footer";

export function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
