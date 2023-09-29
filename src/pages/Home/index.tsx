import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainMenu from "../../Components/Menu/MainMenu";
import OptionsMenu from "../../Components/Menu/OptionsMenu";
import {
  Text,
  CardHeader,
  Grid,
  GridItem,
  Card,
  SimpleGrid,
  Heading,
  CardBody,
} from "@chakra-ui/react";
import { Container } from "../../styles/Home";
import ReactApexChart from "react-apexcharts";
import { TableComponets } from "../../Components/TableComponets/Table";
import api from "../../Services/api";

const Home: React.FC = () => {
  const [ordersSold, setOrderSsold] = useState<
    { value: number; growth: number } | undefined
  >(undefined);
  const [ticketmonth, seTicketmonth] = useState<
    { value: number; growth: number } | undefined
  >(undefined);
  const [ticketDay, setTicketDay] = useState<
    { value: number; growth: number } | undefined
  >(undefined);
  const [alerts, setAlerts] = useState<
    { type: string; value: number; since: number } | undefined
  >(undefined);
  const [ordersMonth, setOrdersmonth] = useState<
    { value: number; growth: number } | undefined
  >(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/signin");
      toast.error("Você precisa fazer login para acessar esta página.");
    }
  }, [navigate]);

  useEffect(() => {
    const TicketMonth = async () => {
      const response = await api.get("/avg-ticket-month");
      const data = response.data;
      seTicketmonth(data);
    };
    TicketMonth();
  }, []);

  useEffect(() => {
    const TicketDay = async () => {
      const response = await api.get("/avg-ticket-day");
      const data = response.data;
      setTicketDay(data);
    };
    TicketDay();
  }, []);

  useEffect(() => {
    const Alerts = async () => {
      console.log(alerts);
      const response = await api.get("/alerts");
      const data = response.data;
      setAlerts(data);
    };
    Alerts();
  }, []);

  useEffect(() => {
    const OrdersMonth = async () => {
      const response = await api.get("/orders-month");
      const data = response.data;
      setOrdersmonth(data);
    };
    OrdersMonth();
  }, []);
  useEffect(() => {
    api
      .get("/orders-month")
      .then((response) => {
        setOrderSsold(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados dos pedidos:", error);
      });
  }, []);

  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    chart: {
      height: 350,
      type: "bar" as const,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        // Ajuste a função para receber um número
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#011d33"],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#13202f",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: [
      {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: number) {
            // Ajuste a função para receber um número
            return val + "%";
          },
        },
      },
    ],
  };
  return (
    <Container>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"100px 6fr 100px"}
        gridTemplateColumns={"150px 1fr"}
        h="700px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <MainMenu />
        </GridItem>
        <GridItem pl="2" className="nav" area={"nav"}>
          <OptionsMenu />
        </GridItem>
        <GridItem pl="5" area={"main"}>
          <h1>Início</h1>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            className="simple-grid"
          >
            <Card className="cards-home">
              <CardHeader>
                <Heading size="md">Ticket médio últimas 24h</Heading>
              </CardHeader>
              <CardBody className="cards-body-home">
                {ticketDay ? (
                  <>
                    <Text>{ticketDay.value}</Text>
                    <Text>{ticketDay.growth}</Text>
                    <h4></h4>
                  </>
                ) : (
                  <p>Carregando...</p>
                )}
              </CardBody>
            </Card>

            <Card className="cards-home">
              <CardHeader>
                <Heading size="md">Ticket médio mensal</Heading>
              </CardHeader>
              <CardBody className="cards-body-home">
                {ticketmonth ? (
                  <>
                    <Text>{ticketmonth.value}</Text>
                    <Text>{ticketmonth.growth}</Text>
                    <h4></h4>
                  </>
                ) : (
                  <p>Carregando...</p>
                )}
              </CardBody>
            </Card>
            <Card className="cards-home">
              {alerts ? (
                <>
                  <CardHeader>
                    <Heading size="md">{alerts.type}</Heading>
                  </CardHeader>
                  <CardBody className="cards-body-home">
                    <>
                      <Text>{alerts.value}</Text>
                      <Text>{alerts.since}</Text>
                      <h4></h4>
                    </>
                  </CardBody>
                </>
              ) : (
                <p>Carregando...</p>
              )}
            </Card>
            <Card className="cards-home">
              <CardHeader>
                <Heading size="md">Acabando o estoque</Heading>
              </CardHeader>
              <CardBody className="cards-body-home">
                {ordersMonth ? (
                  <>
                    <Text>{ordersMonth.value}</Text>
                    <Text>{ordersMonth.growth}</Text>
                    <h4></h4>
                  </>
                ) : (
                  <p>Carregando...</p>
                )}
              </CardBody>
            </Card>
            <Card className="cards-home">
              <CardHeader>
                <Heading size="md">Pedidos realizados no mês</Heading>
              </CardHeader>
              <CardBody className="cards-body-home">
                {ordersSold ? (
                  <>
                    <Text>{ordersSold.value}</Text>
                    <Text>{ordersSold.growth}</Text>
                  </>
                ) : (
                  <p>Carregando...</p>
                )}

                <h4></h4>
              </CardBody>
            </Card>
          </SimpleGrid>
          <h3>Dashboard de vendas</h3>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            className="simple-grid"
          >
            <Card className="cards-home">
              <CardHeader>
                <Heading size="md"> Pedidos por Mês</Heading>
              </CardHeader>
              <CardBody className="cards-grafic">
                <div className="chart">
                  <ReactApexChart
                    options={options}
                    series={options.series}
                    type="bar"
                    height={350}
                  />
                </div>
              </CardBody>
            </Card>
            <Card className="cards-grafic">
              <CardHeader>
                <Heading size="md"> Expectativa de lucro x lucro real</Heading>
              </CardHeader>
              <CardBody className="cards-grafic">
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
            <Card className="cards-grafic">
              <CardHeader>
                <Heading size="md">
                  Pedidos realizados x pedidos cancelados
                </Heading>
              </CardHeader>
              <CardBody className="cards-grafic">
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>

          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(1000px, 1fr))"
          >
            <Card className="card-products">
              <div className="container">
                <TableComponets />
              </div>
            </Card>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
