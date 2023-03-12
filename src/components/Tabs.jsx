import { Container, Row, Tabs, Tab } from 'react-bootstrap';

import AllBeer from '../view/AllBeer';
import MyBeer from '../view/MyBeer';

const BeerTabs = () => {
    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Tabs
                    defaultActiveKey="allBeer"
                    className="mb-1 p-0 "
                    justify
                >
                    <Tab eventKey="allBeer" title="All Beer">
                        <hr />
                        <AllBeer />
                    </Tab>
                    <Tab eventKey="myBeer" title="My Beer">
                        <hr />
                        <MyBeer />
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
}

export default BeerTabs;