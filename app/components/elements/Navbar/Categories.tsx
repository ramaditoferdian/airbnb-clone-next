import Container from "../Container/Container";
import{ TbBeach } from "react-icons/tb";
import{ GiWindmill } from "react-icons/gi";
import{ MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is cloese to the beach!'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills!'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!'
  },
]

const Categories = () => {
  return (
    <div>
      <Container>
        <div
          className="
            pt-4
            felx
            flex-row
            items-center
            justify-between
            overflow-x-auto
          "
        >

        </div>
      </Container>
    </div>
  );
}

export default Categories;