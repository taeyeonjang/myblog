import { Button, Drawer } from 'antd';
import { HolderOutlined } from '@ant-design/icons';
import { useState } from 'react';

const NoticeBoard = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <HolderOutlined style={{color:'#F5F5F5'}} onClick={showDrawer} />
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default NoticeBoard;
