const App = () => {
    //const { Container, Col, Row } = ReactBootstrap;

    return (
        <Container className="">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Header />
                    <MessageTable />
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}

export default App