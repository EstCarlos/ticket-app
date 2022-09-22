import React from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

export const CrearTicket = () => {
  useHideMenu(true);

  const nuevoTicket = () => {
    console.log("nuevoTicket");
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el boton para un nuevo ticket</Title>

          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={nuevoTicket}
          >
            Nuevo ticket
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={1}>Su número</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};