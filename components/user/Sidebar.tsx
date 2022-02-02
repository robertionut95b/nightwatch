import { MenuNavigationComponent } from './MenuNavigation';

export const Sidebar = (): JSX.Element => {
  return (
    <div className='className="menu-container-sidebar w-full md:w-1/4 p-4 bg-white dark:bg-background-dark h-min rounded border border-gray-800'>
      <MenuNavigationComponent />
    </div>
  );
};

export default Sidebar;
