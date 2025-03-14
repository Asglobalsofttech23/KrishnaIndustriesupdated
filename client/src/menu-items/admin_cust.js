// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const admin_cust = {
  id: 'admin_cust',
  title: 'Customers',
  type: 'group',
  children: [
    {
      id: 'admin-customer',
      title: 'Customer Index',
      type: 'item',
      url: '/custIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'admin-customerpur',
      title: 'Customer Purchase',
      type: 'item',
      url: '/custPurchIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    }
  ]
};

export default admin_cust;
