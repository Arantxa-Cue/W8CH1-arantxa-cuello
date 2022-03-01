import Navigation from "../pages/navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
