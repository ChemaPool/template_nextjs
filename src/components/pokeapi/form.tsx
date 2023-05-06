import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { IFormSearchPkm } from "@/interfaces/pokeapi";

const FormSearchPkm = ({ onSearchPokemon }: IFormSearchPkm) => {
  const {
    formState: { isDirty },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const [form] = Form.useForm();

  return (
    <div>
      <Row>
        <Col>
          <Form form={form} onFinish={handleSubmit(onSearchPokemon)}>
            <Form.Item label="Pokemon Name">
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} allowClear placeholder="ditto" />}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={!isDirty}>
                Buscar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormSearchPkm;
