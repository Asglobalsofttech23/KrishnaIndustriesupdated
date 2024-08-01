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

const admin_leads = {
  id: 'admin_leads',
  title: 'Leads',
  type: 'group',
  children: [
    {
      id: 'admin-leads',
      title: 'Leads Index',
      type: 'item',
      url: '/leadsIndex',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
        id: 'admin-flwleads',
        title: 'Following Leads Index',
        type: 'item',
        url: '/flwLeadsIndex',
        icon: icons.IconTypography,
        breadcrumbs: false
      },
      {
        id: 'admin-Allleads',
        title: 'All Leads',
        type: 'item',
        url: '/AllLeads',
        icon: icons.IconTypography,
        breadcrumbs: false
      },

      {
        id: 'admin-notcallleads',
        title: 'Not Attended Call Leads',
        type: 'item',
        url: '/NotAttendedcall',
        icon: icons.IconTypography,
        breadcrumbs: false
      }
  ]
};

export default admin_leads;
