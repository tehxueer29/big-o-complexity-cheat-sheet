import SideNavigation from '../components/SideNavigation';
import ContentBody from '../components/ContentBody';

export default function Layout() {
  return (
    <div className="flex">
      <SideNavigation />
      <ContentBody />
    </div>
  );
}
