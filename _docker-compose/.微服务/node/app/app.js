const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// 获取环境变量
const consulHost = process.env.CONSUL_HOST || 'localhost';
const zipkinHost = process.env.ZIPKIN_HOST || 'localhost';
const rabbitmqHost = process.env.RABBITMQ_HOST || 'localhost';

// 路由
app.get('/', (req, res) => {
  res.json({
    service: 'node-microservice',
    status: 'running',
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
  });
});

app.get('/consul', async (req, res) => {
  try {
    const response = await axios.get(`http://${consulHost}:8500/v1/status/leader`);
    res.json({
      consul_status: 'connected',
      consul_response: response.data,
    });
  } catch (error) {
    res.json({
      consul_status: 'error',
      error: error.message,
    });
  }
});

app.get('/zipkin', async (req, res) => {
  try {
    const response = await axios.get(`http://${zipkinHost}:9411/health`);
    res.json({
      zipkin_status: 'connected',
      zipkin_response: response.data,
    });
  } catch (error) {
    res.json({
      zipkin_status: 'error',
      error: error.message,
    });
  }
});

app.get('/rabbitmq', async (req, res) => {
  try {
    const response = await axios.get(`http://${rabbitmqHost}:15672/api/overview`, {
      auth: {
        username: process.env.RABBITMQ_USER || 'admin',
        password: process.env.RABBITMQ_PASSWORD || 'admin',
      },
    });
    res.json({
      rabbitmq_status: 'connected',
      rabbitmq_response: response.data,
    });
  } catch (error) {
    res.json({
      rabbitmq_status: 'error',
      error: error.message,
    });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Node微服务启动在端口 ${port}...`);
});
