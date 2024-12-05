
import {UserProvider, DataProvider} from "./components/provider";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <UserProvider>
        <DataProvider>
        <body className="">
        <NextTopLoader color="#8C52FF" showSpinner={false} />
        {children}
        </body>
        </DataProvider>
      </UserProvider>
    </html>
  )
}
