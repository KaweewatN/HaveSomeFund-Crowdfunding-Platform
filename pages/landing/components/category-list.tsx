import Link from "next/link";
import { categories } from "../../../common/constants/Categories";

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/campaigns?category=${category.id}`}
          className="flex flex-col items-center p-6 rounded-lg border hover:border-teal-500 hover:shadow-md transition-all"
        >
          <div className={`p-3 rounded-full ${category.color} mb-3`}>
            <category.icon className="h-6 w-6" />
          </div>
          <h3 className="font-medium text-center">{category.name}</h3>
          <p className="text-xs text-center text-muted-foreground mt-1">
            {category.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
