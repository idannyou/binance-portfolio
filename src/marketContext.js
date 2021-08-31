import React from "react";

// Example data state
// const data = {
//   BTCUSDT: {
//       e: "24hrTicker", // Event type
//       E: 123456789, // Event time
//       s: "BNBBTC", // Symbol
//       p: "0.0015", // Price change
//       P: "250.00", // Price change percent
//       w: "0.0018", // Weighted average price
//       x: "0.0009", // First trade(F)-1 price (first trade before the 24hr rolling window)
//       c: "0.0025", // Last price
//       Q: "10", // Last quantity
//       b: "0.0024", // Best bid price
//       B: "10", // Best bid quantity
//       a: "0.0026", // Best ask price
//       A: "100", // Best ask quantity
//       o: "0.0010", // Open price
//       h: "0.0025", // High price
//       l: "0.0010", // Low price
//       v: "10000", // Total traded base asset volume
//       q: "18", // Total traded quote asset volume
//       O: 0, // Statistics open time
//       C: 86400000, // Statistics close time
//       F: 0, // First trade ID
//       L: 18150, // Last trade Id
//       n: 18151, // Total number of trades
//   },
// };

const MarketContext = React.createContext();

function connectToBinance(setData) {
  const streamUrl = "wss://stream.binance.com:9443/ws";
  const conn = new WebSocket(streamUrl);

  const symbols = [
    "usdcusdt@ticker",
    "rsrusdt@ticker",
    "oceanusdt@ticker",
    "mirusdt@ticker",
    "1inchusdt@ticker",
    "bandusdt@ticker",
    "bnbusdt@ticker",
    "thetausdt@ticker",
    "xtzusdt@ticker",
  ];

  conn.onopen = function () {
    conn.send(
      JSON.stringify({
        method: "SUBSCRIBE",
        params: symbols,
        id: 1,
      })
    );
  };

  conn.onmessage = function (evt) {
    if (evt.data) {
      const streamData = JSON.parse(evt.data);
      if (streamData.s) {
        setData((oldData) => {
          let data = { ...oldData };
          data[streamData.s] = streamData;
          return data;
        });
      }
    }
  };

  return function unsubscribe() {
    conn.send(
      JSON.stringify({
        method: "UNSUBSCRIBE",
        params: symbols,
        id: 1,
      })
    );
  };
}

function convertToBinanceShape(data) {
  if (!data.data) {
    return {};
  }

  const convertBuggyTime = parseInt(
    parseFloat(data.data.time).toFixed(3).split(".").join("")
  );

  return {
    c: data.data.last,
    E: convertBuggyTime,
    s: data.market,
  };
}

function connectToFTX(setData) {
  const streamUrl = "wss://ftx.com/ws/";
  const conn = new WebSocket(streamUrl);

  const symbols = ["RAY/USD", "FTT/USDT"];

  conn.onopen = function () {
    symbols.forEach((sym) => {
      conn.send(
        JSON.stringify({ op: "subscribe", channel: "ticker", market: sym })
      );
    });
  };

  conn.onmessage = function (evt) {
    if (evt.data) {
      const streamData = JSON.parse(evt.data);
      let newShape = convertToBinanceShape(streamData);

      if (newShape.s) {
        setData((oldData) => {
          let data = { ...oldData };
          data[newShape.s] = newShape;
          return data;
        });
      }
    }
  };

  return function unsubscribe() {
    symbols.forEach((sym) => {
      conn.send(
        JSON.stringify({ op: "unsubscribe", channel: "ticker", market: sym })
      );
    });
  };
}

export function MarketProvider({ children }) {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    connectToBinance(setData);
    connectToFTX(setData);
  }, []);

  return (
    <MarketContext.Provider value={data}>{children}</MarketContext.Provider>
  );
}

export function useMarket() {
  const context = React.useContext(MarketContext);
  if (context === undefined) {
    throw new Error("useMarket must be used within a MarketProvider");
  }
  return context;
}
