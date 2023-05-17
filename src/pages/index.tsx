import { Button } from 'antd';

import { MainLayout } from '@/layouts/main';
import { Meta } from '@/templates/Meta';

const Index = () => {
  return (
    <MainLayout
      meta={
        <Meta
          title="Dodoris - Website bán váy online"
          description="Dodoris - Website bán váy online"
        />
      }
    >
      <Button type="primary">Primary Button</Button>
      <Button type="primary" disabled>
        Primary Button disabled
      </Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </MainLayout>
  );
};

export default Index;
