import SideNavigation from '../components/SideNavigation';
import ContentBody from '../components/ContentBody';

export default function Layout() {
  return (
    <div className="flex bg-white-100 text-black-900">
      <SideNavigation />
      <ContentBody />
    </div>
  );
}
