export const structure: DropdownMenuItemData[] = [
  {
    name: 'PAGES.HOME.NAME',
    path: '/home',
    menuItemList: [],
  },
  {
    name: 'PAGES.PROJECTS.NAME',
    path: '/projects',
    menuItemList: [
      {
        name: 'PAGES.PROJECTS.FIRST',
        path: '/projects/first',
      },
      {
        name: 'PAGES.PROJECTS.SECOND',
        path: '/projects/second',
      },
    ],
  },
  {
    name: 'PAGES.HOBBIES.NAME',
    path: '/hobbies',
    menuItemList: [
      {
        name: 'PAGES.HOBBIES.MUSIC',
        path: '/hobbies/music',
      },
      {
        name: 'PAGES.HOBBIES.MARTIAL_ARTS',
        path: '/hobbies/martialarts',
      },
    ],
  },
  {
    name: 'PAGES.ABOUT.NAME',
    path: '/about',
    menuItemList: [],
  },
];

export interface DropdownMenuItemData extends SimpleMenuItemData {
  menuItemList: SimpleMenuItemData[];
}

export interface SimpleMenuItemData {
  name: string;
  path?: string;
}
