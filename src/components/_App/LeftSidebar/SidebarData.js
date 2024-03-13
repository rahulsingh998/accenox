import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddchartIcon from "@mui/icons-material/Addchart";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import FeedIcon from '@mui/icons-material/Feed';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin/",
    icon: <GridViewIcon />,
  },
  {
    title: "Email",
    path: "/admin/email/inbox/",
    icon: <MailOutlineIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Inbox",
        path: "/admin/email/inbox/",
      },
      {
        title: "Read Email",
        path: "/admin/email/read-email/",
      },
    ],
  },
  {
    title: "Blog",
    path: "/admin/ecommerce/products/",
    icon: <FeedIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Blogs",
        path: "/admin/ecommerce/products/",
      },
      {
        title: "Create Blog",
        path: "/admin/ecommerce/create-product/",
      },
    ],
  },
  {
    title: "UI Elements",
    path: "/admin/ui-elements/alerts/",
    icon: <ViewQuiltIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Alerts",
        path: "/admin/ui-elements/alerts/",
      },
      {
        title: "Autocomplete",
        path: "/admin/ui-elements/autocomplete/",
      },
      {
        title: "Avatar",
        path: "/admin/ui-elements/avatar/",
      },
      {
        title: "Badge",
        path: "/admin/ui-elements/badge/",
      },
      {
        title: "Buttons",
        path: "/admin/ui-elements/buttons/",
      },
      {
        title: "Cards",
        path: "/admin/ui-elements/cards/",
      },
      {
        title: "Checkbox",
        path: "/admin/ui-elements/checkbox/",
      },
      {
        title: "Swiper Slider",
        path: "/admin/ui-elements/swiper-slider/",
      },
      {
        title: "Radio",
        path: "/admin/ui-elements/radio/",
      },
      {
        title: "Rating",
        path: "/admin/ui-elements/rating/",
      },
      {
        title: "Select",
        path: "/admin/ui-elements/select/",
      },
      {
        title: "Slider",
        path: "/admin/ui-elements/slider/",
      },
      {
        title: "Switch",
        path: "/admin/ui-elements/switch/",
      },
      {
        title: "Chip",
        path: "/admin/ui-elements/chip/",
      },
      {
        title: "List",
        path: "/admin/ui-elements/list/",
      },
      {
        title: "Modal",
        path: "/admin/ui-elements/modal/",
      },
      {
        title: "Table",
        path: "/admin/ui-elements/table/",
      },
      {
        title: "Tooltip",
        path: "/admin/ui-elements/tooltip/",
      },
      {
        title: "Progress",
        path: "/admin/ui-elements/progress/",
      },
      {
        title: "Skeleton",
        path: "/admin/ui-elements/skeleton/",
      },
      {
        title: "Snackbar",
        path: "/admin/ui-elements/snackbar/",
      },
      {
        title: "Accordion",
        path: "/admin/ui-elements/accordion/",
      },
      {
        title: "Pagination",
        path: "/admin/ui-elements/pagination/",
      },
      {
        title: "Stepper",
        path: "/admin/ui-elements/stepper/",
      },
      {
        title: "Tabs",
        path: "/admin/ui-elements/tabs/",
      },
      {
        title: "Image List",
        path: "/admin/ui-elements/image-list/",
      },
      {
        title: "Transitions",
        path: "/admin/ui-elements/transitions/",
      },
    ],
  },
  {
    title: "Forms",
    path: "/admin/forms/form-layouts/",
    icon: <CheckBoxOutlineBlankIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Basic Elements",
        path: "/admin/forms/form-layouts/",
      },
      {
        title: "Advanced Elements",
        path: "/admin/forms/advanced-elements/",
      },
      {
        title: "Editors",
        path: "/admin/forms/editors/",
      },
      {
        title: "File Uploader",
        path: "/admin/forms/file-uploader/",
      },
    ],
  },
  {
    title: "Pages",
    path: "/admin/pages/invoice/",
    icon: <ContentCopyIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Invoice",
        path: "/admin/pages/invoice/",
      },
      {
        title: "Invoice Details",
        path: "/admin/pages/invoice-details/",
      },
      {
        title: "ApexCharts",
        path: "/admin/pages/apexcharts/",
      },
      {
        title: "Recharts",
        path: "/admin/pages/recharts/",
      },
      {
        title: "Profile",
        path: "/admin/pages/profile/",
      },
      {
        title: "Pricing",
        path: "/admin/pages/pricing/",
      },
      {
        title: "Testimonials",
        path: "/admin/pages/testimonials/",
      },
      {
        title: "Timeline",
        path: "/admin/pages/timeline/",
      },
      {
        title: "FAQ",
        path: "/admin/pages/faq/",
      },
      {
        title: "Gallery",
        path: "/admin/pages/gallery/",
      },
      {
        title: "Support",
        path: "/admin/pages/support/",
      },
      {
        title: "Search",
        path: "/admin/pages/search/",
      },
      {
        title: "Material Icons",
        path: "/admin/pages/material-icons/",
      },
      {
        title: "Remixicon",
        path: "/admin/pages/remixicon/",
      },
      {
        title: "Maps",
        path: "/admin/pages/maps/",
      },
      {
        title: "404 Error Page",
        path: "/admin/404/",
      },
      {
        title: "Terms & Conditions",
        path: "/admin/pages/terms-conditions/",
      },
    ],
  },
  {
    title: "Authentication",
    path: "/admin/authentication/sign-in/",
    icon: <LockIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Sign Up",
        path: "/admin/authentication/sign-up/",
      },
      {
        title: "Forgot Password",
        path: "/admin/authentication/forgot-password/",
      },
      {
        title: "Lock Screen",
        path: "/admin/authentication/lock-screen/",
      },
      {
        title: "Confirm Mail",
        path: "/admin/authentication/confirm-mail/",
      },
      {
        title: "Logout",
        path: "/admin/authentication/logout/",
      },
    ],
  },
  {
    title: "Notification",
    path: "/admin/notification/",
    icon: <NotificationsNoneIcon />,
  },
  {
    title: "Settings",
    path: "/admin/settings/account/",
    icon: <SettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Account",
        path: "/admin/settings/account/",
      },
      {
        title: "Security",
        path: "/admin/settings/security/",
      },
      {
        title: "Privacy Policy",
        path: "/admin/settings/privacy-policy/",
      },
      {
        title: "Terms & Conditions",
        path: "/admin/pages/terms-conditions/",
      },
      {
        title: "Logout",
        path: "/admin/authentication/logout/",
      },
    ],
  },
];
