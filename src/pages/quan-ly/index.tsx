import React from 'react';

import { AdminLayout } from '@/layouts/admin';
import { Meta } from '@/templates/Meta';

const Dashboard = React.memo(function Dashboard() {
  return (
    <AdminLayout
      meta={
        <Meta title="Dodoris - Dashboard" description="Dodoris - Quản lý" />
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
    </AdminLayout>
  );
});

export default Dashboard;
