type TopNavProp = {
  isTop: boolean;
};
function Logo({ isTop }: TopNavProp) {
  return (
    <div className={`text-5xl font-logoFont ${isTop ? "p-4" : "p-9"}`}>
      Viewpoint
    </div>
  );
}

export default Logo;
