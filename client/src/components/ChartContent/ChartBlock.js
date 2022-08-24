import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Line, LineChart, XAxis, YAxis, Label } from "recharts";
import { Container, Paper, Typography } from "@mui/material";

const minuteAgo = new Date(Date.now() - 185000 * 60);
const initialTime = minuteAgo.toLocaleString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const ChartBlock = () => {
  const [chartData, setChartData] = useState([
    {
      name: 0,
      value: initialTime,
    },
  ]);
  const { id } = useParams();

  const tickersData = useSelector((store) => store.tickers?.data);
  const filteredTicker =
    tickersData.length > 0 && tickersData?.filter((el) => el.ticker === id);

  const { last_trade_time, price } = filteredTicker && filteredTicker[0];

  const operationDate = new Date(Date.parse(last_trade_time)).toLocaleString(
    [],
    { hour: "2-digit", minute: "2-digit" }
  );

  useEffect(() => {
    setChartData((currentData) => [
      ...currentData,
      {
        name: price,
        value: operationDate !== "Invalid Date" ? operationDate : initialTime,
      },
    ]);
  }, [operationDate, price]);

  return (
    <Container component={Paper} maxWidth="sm" sx={{ py: 4, mt: 4 }}>
      <Typography variant="h3" color="inherit" align="center">
        {`${id} ticker`}
      </Typography>

      <LineChart width={500} height={300} data={chartData}>
        <XAxis dataKey="value">
          <Label value="Time" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value="Price" offset={-8} position="left" angle={270} />
        </YAxis>
        <Line dataKey="name" />
      </LineChart>

      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          marginTop: "15px",
          fontWeight: "bold",
        }}
      >
        <ArrowBackIcon />
        <div>Back</div>
      </Link>
    </Container>
  );
};

export default ChartBlock;
