import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const admin_reports = {
  id: 'admin_report',
  title: 'Reports',
  type: 'group',
  children: [
    
    {
      id: 'admin-purreport',
      title: 'purchase Report',
      type: 'item',
      url: '/purreports',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'admin-salreport',
      title: 'Sales Report',
      type: 'item',
      url: '/salesreports',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    // {
    //   id: 'admin-proreport',
    //   title: 'Profit Report',
    //   type: 'item',
    //   url: '/profitreports',
    //   icon: icons.IconTypography,
    //   breadcrumbs: false
    // },
    {
        id: 'admin-empreport',
        title: 'Employees attendance',
        type: 'item',
        url: 'empAttendancereports',
        icon: icons.IconTypography,
        breadcrumbs: false
      },
    
  ]
};

export default admin_reports;