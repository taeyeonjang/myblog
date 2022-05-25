import React from 'react'
import { Row, Col } from 'antd';

function LandingPage() {
  return (
    <div>
    <Row gutter={[16, 16]}>
      <Col lg={6} xs={24}>   
          <div style={{backgroundColor:'white'}}>
              hihi
          </div>
      </Col>

      <Col lg={18} xs={24}>
      <div style={{backgroundColor:'white'}}>
        hji
      </div>
      </Col>
  </Row>
  </div>

  )
}

export default LandingPage