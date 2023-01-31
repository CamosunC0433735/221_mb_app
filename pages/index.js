import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MessageBoard from '../components/MessageBoard'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

export async function getStaticProps() {
    let jsonData;
    try {
      const { data } = await
      axios.get('http://localhost:3004/api/messages');
      jsonData = data;
    } catch (error) {
      console.log('API Error: ' + error);
    }
    return {
      props: {
      jsonData
      }
    }
  }

export default function Home({jsonData}) {
  return (
    <>
      <Head>
        <title>ICS221 Lab 2</title>
        <meta name="description" content="Created by David Abram-Krismer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Container className="">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Header />
                    <MessageBoard jsonData={jsonData}/>
                    <Footer />
                </Col>
            </Row>
        </Container>

    </>
  )
}
