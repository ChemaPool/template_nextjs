import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const TaskListContainer = () => {
  const { control } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <div>
      <Row>
        <Col>
          <Form.Item label="Email">
            <Controller
              name="email"
              defaultValue=""
              control={control}
              render={({ field }) => <Input {...field} placeholder="example@example.com" />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Guardar</Button>
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default TaskListContainer;
