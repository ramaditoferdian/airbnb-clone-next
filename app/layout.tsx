import Modal from './components/elements/Modals/Modal'
import RegisterModal from './components/elements/Modals/RegisterModal/RegisterModal'
import Navbar from './components/elements/Navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/elements/Modals/LoginModal/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/elements/Modals/RentModal/RentModal'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  )
}
