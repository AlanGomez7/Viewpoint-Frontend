import NavbarNew from "../components/navbar/NavbarNew";
import Suggestions from "../components/Suggestions";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 min-h-dvh gap-1">
        <div className="col-span-2 row-span-12">
          <NavbarNew />
        </div>
        <div className="col-span-6 row-span-12">{children}</div>
        <div className="col-span-4 row-span-12">
            <Suggestions/>
        </div>
      </div>
    </>
  );
}

export default Layout;
