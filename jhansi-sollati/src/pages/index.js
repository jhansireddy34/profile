import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProfileCard from '@/components/profilecard/profileCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ProfileCard name="Jhansi Sollati"desc="Aspiring Developer"notes="React/Flutter/Python" />
    </>
  )
}
