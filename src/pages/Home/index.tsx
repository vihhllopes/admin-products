import React, { useEffect } from "react";
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

const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/signin");
      toast.error("Você precisa fazer login para acessar esta página.");
    }
  }, [navigate]);

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
    <Container className="container">
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
        <GridItem pl="2" area={"nav"}>
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
                <Text>+ 15 %</Text>
                <Text>em relação a ontem</Text>
                <h4>R$ 9.292,00</h4>
              </CardBody>
            </Card>
            <Card className="cards-home">
              <CardHeader>
                <Heading size="md">Ticket médio mensal</Heading>
              </CardHeader>
              <CardBody className="cards-body-home">
                <Text>aaaa</Text>
                <Text></Text>
                <h4>R$ 9.292,00</h4>
              </CardBody>
            </Card>
            <Card className="cards-home">
              <CardHeader>
                <Heading size="md">Produtos em manutenção</Heading>
              </CardHeader>
              <CardBody className="cards-body-home">
                <Text></Text>
                <Text></Text>
                <h4></h4>
              </CardBody>
            </Card>
            <Card className="cards-home">
              <CardHeader>
                <Heading size="md">Acabando o estoque</Heading>
              </CardHeader>
              <CardBody className="cards-body-home">
                <Text></Text>
                <Text></Text>
                <h4></h4>
              </CardBody>
            </Card>
            <Card className="cards-home">
              <CardHeader>
                <Heading size="md">Pedidos realizados no mês</Heading>
              </CardHeader>
              <CardBody className="cards-body-home">
                <Text></Text>
                <Text></Text>
                <h4></h4>
              </CardBody>
            </Card>
          </SimpleGrid>
          <h3>Dashboard de vendas</h3>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
            className="Cards-home"
          >
            <Card className="cards-grafic">
              <CardHeader>
                <Heading size="md"> Pedidos por Mês</Heading>
              </CardHeader>
              <CardBody>
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
              <CardBody>
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
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>

          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(700px, 1fr))"
            className="Cards-home"
          >
            <Card>
              <TableComponets />
            </Card>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
