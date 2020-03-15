/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default [
  {
    url: "/",
    name: "Home",
    slug: "home",
    icon: "HomeIcon"
  },
  {
    url: "/about",
    name: "Page 2",
    slug: "page-2",
    icon: "InfoIcon",
    iconSmall: true
  },
  {
    url: "/contacts",
    name: "Page 3",
    slug: "page-3",
    icon: "PhoneCallIcon",
    iconSmall: true,
    isDisabled: true
  },
  {
    url: "/testing",
    name: "Testing",
    slug: "testing",
    icon: "LoaderIcon",
    iconSmall: true
  },
  {
    url: "/image",
    name: "Image",
    slug: "image",
    icon: "ImageIcon",
    iconSmall: true
  },
  {
    header: "Companies",
    icon: "LayersIcon",
    items: [
      {
        url: null,
        name: "Companies",
        tag: "new",
        tagColor: "primary",
        icon: "ListIcon",
        submenu: [
          {
            url: "/companies/velvette",
            name: "Velvette",
            slug: "velvette"
          },
          {
            url: "/companies/multideck",
            name: "Multideck",
            slug: "multideck"
          },
          {
            url: "/companies/voldone",
            name: "Voldone",
            slug: "voldone"
          }
        ]
      }
    ]
  }
]
