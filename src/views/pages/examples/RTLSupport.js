// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from 'reactstrap';
// core components
import RTLProfileHeader from 'components/Headers/RTLProfileHeader.js';

function RTLSupport() {
  return (
    <>
      <RTLProfileHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-2" xl="4">
            <Card className="card-profile">
              <CardImg alt="..." src={require('assets/img/theme/img-1-1000x600.jpg').default} top />
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img alt="..." className="rounded-circle" src={require('assets/img/theme/team-4.jpg').default} />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button className="mr-4" color="info" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                    الاتصال
                  </Button>
                  <Button className="float-right" color="default" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                    رسالة
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">اصحاب</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">الصور</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">تعليقات</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h5 className="h3">
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h5>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">مسار التقدم</h5>
              </CardHeader>

              <CardBody>
                <ListGroup className="list my--3" flush>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img alt="..." src={require('assets/img/theme/bootstrap.jpg').default} />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Argon Design System</h5>
                        <Progress className="progress-xs mb-0" max="100" value="60" color="warning" />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img alt="..." src={require('assets/img/theme/angular.jpg').default} />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Angular Now UI Kit PRO</h5>
                        <Progress className="progress-xs mb-0" max="100" value="100" color="success" />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img alt="..." src={require('assets/img/theme/sketch.jpg').default} />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Black Dashboard</h5>
                        <Progress className="progress-xs mb-0" max="100" value="72" color="danger" />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img alt="..." src={require('assets/img/theme/react.jpg').default} />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>React Material Dashboard</h5>
                        <Progress className="progress-xs mb-0" max="100" value="90" color="info" />
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a className="avatar rounded-circle" href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img alt="..." src={require('assets/img/theme/vue.jpg').default} />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Vue Paper UI Kit PRO</h5>
                        <Progress className="progress-xs mb-0" max="100" value="100" color="success" />
                      </div>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Row>
              <Col lg="6">
                <Card className="bg-gradient-success border-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle className="text-uppercase text-muted mb-0 text-white" tag="h5">
                          إجمالي حركة المرور
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">350,897</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                          <i className="ni ni-active-40" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-white ml-2">
                        <i className="fa fa-arrow-up ml-2" />
                        3.48%
                      </span>
                      <span className="text-nowrap text-light">منذ اخر شهر</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="bg-gradient-danger border-0" tag="h5">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle className="text-uppercase text-muted mb-0 text-white">أداء</CardTitle>
                        <span className="h2 font-weight-bold mb-0 text-white">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-white text-dark rounded-circle shadow">
                          <i className="ni ni-spaceship" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-sm">
                      <span className="text-white ml-2">
                        <i className="fa fa-arrow-up ml-2" />
                        3.48%
                      </span>
                      <span className="text-nowrap text-light">منذ اخر شه</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8" className="text-right">
                    <h3 className="mb-0">تعديل الملف الشخصي</h3>
                  </Col>
                  <Col className="text-left" xs="4">
                    <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                      الإعدادات
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">معلومات المستخدم</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-username">
                            اسم المستخدم
                          </label>
                          <Input defaultValue="اسم المستخدم" id="input-username" placeholder="Username" type="text" />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-email">
                            عنوان البريد الإلكتروني
                          </label>
                          <Input id="input-email" placeholder="jesse@example.com" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-first-name">
                            الاسم
                          </label>
                          <Input defaultValue="الاسم" id="input-first-name" placeholder="First name" type="text" />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-last-name">
                            الكنية
                          </label>
                          <Input defaultValue="الكنية" id="input-last-name" placeholder="Last name" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">معلومات الاتصال</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-address">
                            عنوان
                          </label>
                          <Input defaultValue="عنوان" id="input-address" placeholder="Home Address" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-city">
                            مدينة
                          </label>
                          <Input defaultValue="مدينة" id="input-city" placeholder="City" type="text" />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-country">
                            بلد
                          </label>
                          <Input defaultValue="بلد" id="input-country" placeholder="Country" type="text" />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="input-country">
                            الكود
                          </label>
                          <Input id="input-postal-code" placeholder="الكود" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">عني</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label className="form-control-label">عني</label>
                      <Input placeholder="الجميلة." rows="4" type="textarea" defaultValue="الجميلة." />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RTLSupport;
