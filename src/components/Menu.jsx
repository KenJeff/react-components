import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <>
      <MenuItem
        dishName="Blackened Mahi"
        description="Mahi w/ blackening seasoning"
        price={20.99}
      />
      <MenuItem
        dishName="Spaghetti w/ Meatballs"
        description="Spaghetti noodles in a meat sauce with meatballs and cheese"
        price={18.99}
      />
      <MenuItem
        dishName="Big Burger"
        description="Dis a BIG burger"
        price={15.99}
      />
      <MenuItem
        dishName="Chicken Tendies"
        description="7 fried chicken tenders"
        price={17.99}
      />
    </>
  );
}
