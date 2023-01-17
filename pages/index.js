import Head from 'next/head'
import App from '../components/App'
import Header from '../components/Header'
import ChatMessage from '../components/ChatMessage'
import Footer from '../components/Footer'
import MessageTable from '../components/MessageTable'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>ICS221 Lab 2</title>
        <meta name="description" content="Created by David Abram-Krismer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App/>
    </>
  )
}
