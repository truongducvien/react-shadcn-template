import PostIcon from '@/assets/icons/PostIcon';
import Profile from '@/assets/icons/Profile';
import SettingIcon from '@/assets/icons/Setting';
import { IMenuItem } from '@/components/common/side-bar/types';

export const menuList: IMenuItem[] = [
  {
    key: 'posts',
    label: 'Posts',
    icon: <PostIcon />,
    children: [
      {
        key: 'new',
        label: 'New Post',
        href: '/posts/new',
        showIcon: false,
        className: 'hover:bg-platinum',
        activeClassName: 'bg-platinum',
      },
      {
        key: 'all-post',
        label: 'All Posts',
        href: '/posts',
        showIcon: false,
        className: 'hover:bg-platinum',
        activeClassName: 'bg-platinum',
      },
    ],
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: <Profile />,
    children: [
      { key: 'my-profile', label: 'My profile', href: '/me' },
      { key: 'explore', label: 'Explore', href: '/explore' },
    ],
  },
  {
    key: 'setting',
    label: 'Setting',
    icon: <SettingIcon />,
    href: '/setting',
  },
];
