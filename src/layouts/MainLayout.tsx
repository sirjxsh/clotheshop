import { AppNavBar } from "../components/AppNavBar";

export function MainLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <AppNavBar />
      {children}
    </>
  )

}