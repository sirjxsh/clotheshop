//import { CssBaseline } from "@mui/material";
import { AppNavBar } from "../components/AppNavBar";
import { Footer } from "../components/Footer";

//<CssBaseline enableColorScheme/>

export function MainLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      
      <AppNavBar />
      <div style={{marginTop: '8rem'}}>
        {children}
      </div>
      <Footer />
    </>
  )

}