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

const admin_Stock = {
  id: 'admin_Stock',
  title: 'Stock',
  type: 'group',
  children: [
    {
      id: 'admin-stockproduct',
      title: 'Stock Index',
      type: 'item',
      url: '/stockIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    }
  ]
};

export default admin_Stock;
