import { memo } from 'react';

import { MainLayout } from '@/layouts/main';
import { Meta } from '@/templates/Meta';

const About = memo(function About() {
  return (
    <MainLayout
      meta={
        <Meta
          title="Dodoris - Giới thiệu"
          description="Giới thiệu website bán váy online Dodoris"
        />
      }
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </MainLayout>
  );
});

export default About;
