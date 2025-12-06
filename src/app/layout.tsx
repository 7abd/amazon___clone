import "./globals.css";
import Header from "@/components/header";
import { AuthProvider } from "../../lib/context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <Header />
        
        <main>{children}</main>
        </AuthProvider>

      </body>
    </html>
  );
}
