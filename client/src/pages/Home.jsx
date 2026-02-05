import { menuData } from "../data/menuData";
import FoodCard from "../components/FoodCard";

export default function Home() {
  return (
    <div className="px-6 py-2">
      <div className="
        grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-6
  px-6
      ">
        {menuData.map(item => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
