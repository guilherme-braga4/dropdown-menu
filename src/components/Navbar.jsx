import MenuItems from "./MenuItems";

const Navbar = ({data}) => {
  return (
    <nav>
      <ul className="menus">
        {data.map((menu, index) => {
          console.log('menu', menu)
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
