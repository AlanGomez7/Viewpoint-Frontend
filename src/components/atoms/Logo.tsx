import { Link } from "react-router-dom";
type LogoProp = {
  isTop: boolean;
};
function Logo({ isTop }: LogoProp) {
  return (
    <Link to={"/"}>
      <div className={` text-5xl font-logoFont ${isTop ? "p-4" : "p-9"}`}>
        clickies
      </div>
    </Link>
  );
}

export default Logo;
// bg-gradient-to-r from-pink-300 via-red-500 to-red-400 text-transparent bg-clip-text
