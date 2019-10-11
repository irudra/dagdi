import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import myData from "views/dagdi/Pages/crops.json";
// reactstrap components
import {
    Button,
    Card,
    CardFooter,
    CardHeader,
    Container,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table
} from "reactstrap";
import DagdiNavbar from "components/Navbars/DagdiNavbar";
import CardsFooter from "components/Footers/CardsFooter";
import {Col} from "react-bootstrap";

function PredictionFucntion() {
    const {t} = useTranslation();
    return <Container fluid>
        {/* Table */}
        <Row>
            <div className="col">
                <Card className="shadow ">
                    <CardHeader className="border-0 text-center">
                        <Row>
                            <Col className="col-lg-1"><Link
                                to={"/prediction-requirement"}><Button
                                className="mr-4"
                                color="default"
                                href="#pablo"
                                size="sm"
                            >
                                {t("Search again")}
                            </Button></Link></Col>
                            <Col className="col-lg-11"><h3 className="mb-0 display-3">{t("Crop Result")}</h3></Col>
                        </Row>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">{t("Images")}</th>
                            <th class="text-center" scope="col">{t("Crop Description")}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {myData.map((obj) => {
                            return <tr>
                                <td class="w-25">
                                    <Link to={"cropProfile-page/" + obj.id}><img
                                        alt={obj.name}
                                        className="img-fluid rounded shadow"
                                        src={obj.image}
                                    /></Link>
                                </td>
                                <td>
                                    {obj.details}
                                    <br/>
                                    <br/>
                                    <Link align-items-right to={"cropProfile-page/" + obj.id}>Show Details</Link>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </Table>

                    <CardFooter className="py-4">
                        <nav aria-label="...">
                            <Pagination
                                className="pagination justify-content-end mb-0"
                                listClassName="justify-content-end mb-0"
                            >
                                <PaginationItem className="disabled">
                                    <PaginationLink
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                        tabIndex="-1"
                                    >
                                        <i className="fas fa-angle-left"/>
                                        <span className="sr-only">Previous</span>
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem className="active">
                                    <PaginationLink
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        2 <span className="sr-only">(current)</span>
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fas fa-angle-right"/>
                                        <span className="sr-only">{t("Next")}</span>
                                    </PaginationLink>
                                </PaginationItem>
                            </Pagination>
                        </nav>
                    </CardFooter>
                </Card>
            </div>
        </Row>

    </Container>
}


class Prediction extends React.Component {
    state = {
        name: "name"
    };

    render() {
        return (
            <>
                <DagdiNavbar/>
                <section className="section section-shaped ">
                    <div className="shape shape-style-1 shape-primary">

                    </div>
                </section>
                <PredictionFucntion/>
                <CardsFooter/>
            </>
        );
    }
}

export default Prediction;
