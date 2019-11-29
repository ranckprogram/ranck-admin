import React from 'react';
import { Form, Row, Col } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
function GeneralForm (props) {
  console.log(props)
  const { form, formItems = [], span = 24, initValues } = props
  return (<Row>
    {formItems.map(item => {
      return <Col span={span} key={item.id}>
        <Form.Item label={item.label}>
          {form.getFieldDecorator(item.id, item.config)(
            item.component
          )
          }
        </Form.Item>
      </Col>
    })}
  </Row>);
}

export default GeneralForm


function SearchForm () {

}