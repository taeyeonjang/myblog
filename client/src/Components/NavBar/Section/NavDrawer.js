import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const NavDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <MenuOutlined style={{color:'#F5F5F5'}} onClick={showDrawer} />
      <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default NavDrawer;