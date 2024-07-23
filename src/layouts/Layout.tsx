import SideNavigation from "../components/SideNavigation";
import ContentBody from "../components/ContentBody";

export default function Layout() {
  return (
    <div className="bg-white-100 text-black-900 xl:flex">
      <SideNavigation />
      <ContentBody />
    </div>
  );
}
