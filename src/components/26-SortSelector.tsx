import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../services/22-store";

/** Part One */
// interface Props {
//   onSelectSortOrder: (sortOrder: string) => void;
//   sortOrder: string;
// }

// const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
//   /** 27-Sorting Games */
//   const sortOrders = [
//     { value: "", label: "Relevance" },
//     { value: "-added", label: "Date added" },
//     { value: "name", label: "Name" },
//     { value: "-released", label: "Release date" },
//     { value: "-metacritic", label: "Popularity" },
//     { value: "-rating", label: "Average rating" },
//   ];

//   const currentSortOrder = sortOrders.find(
//     (order) => order.value === sortOrder
//   );

//   return (
//     <Menu>
//       <MenuButton as={Button} rightIcon={<BsChevronDown />}>
//         Order by: {currentSortOrder?.label}
//       </MenuButton>
//       <MenuList>
//         {sortOrders.map((order) => (
//           <MenuItem
//             onClick={() => onSelectSortOrder(order.value)}
//             key={order.value}
//             value={order.value}
//           >
//             {order.label}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// };

// export default SortSelector;

/** Part Two */
const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
