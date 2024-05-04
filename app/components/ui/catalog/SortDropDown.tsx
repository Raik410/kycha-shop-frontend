import { EnumProductSort } from '@/service/product/product.types';
import { Dispatch, FC, SetStateAction } from 'react';

interface ISortType {
  sortType: EnumProductSort;
  setSortType: Dispatch<SetStateAction<EnumProductSort>>;
}

const SortDropDown: FC<ISortType> = ({ sortType, setSortType }) => {
  return (
    <select
      value={sortType}
      onChange={(e) => setSortType(e.target.value as any)}
      className="my-5 self-start"
    >
      {(
        Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
      ).map((key) => {
        return (
          <option
            key={key}
            onChange={() => setSortType(EnumProductSort[key])}
            value={EnumProductSort[key]}
          >
            {EnumProductSort[key]}
          </option>
        );
      })}
    </select>
  );
};

export default SortDropDown;
