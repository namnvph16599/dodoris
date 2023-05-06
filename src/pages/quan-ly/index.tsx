import React from 'react';

import { Meta } from '@/layouts/Meta';
import { AdminLayout } from '@/templates/Admin';

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
