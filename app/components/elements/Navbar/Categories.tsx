'use client'

import Container from "../Container/Container";
import CategoryBox from "../CategoryBox/CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { categories } from "@/app/utils/constants";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <div>
      <Container>
        <div
          className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
          "
        >
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Categories;