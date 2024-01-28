interface PropsType {
  perPage: number;
  total: number;
  current: number;
  paginate: any;
  prevPage: any;
  nextPage: any;
}

const PaginationComponent = ({
  perPage,
  total,
  current,
  paginate,
  prevPage,
  nextPage,
}: PropsType) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex w-full justify-center py-4">
      <ul className="flex items-center justify-center gap-0.5">
        <li
          onClick={prevPage}
          className={`ease mr-2 flex h-10 cursor-pointer items-center justify-center border border-brand-blue px-3 font-semibold text-brand-blue transition-colors duration-300 hover:bg-brand-blue hover:text-white`}
        >
          prev
        </li>
        {pageNumbers.map((item) => (
          <li
            key={item}
            onClick={() => paginate(item)}
            className={`flex aspect-square w-10 items-center justify-center ${
              current === item && "pointer-events-none bg-brand-blue text-white"
            } ease cursor-pointer border border-brand-blue font-semibold text-brand-blue transition-colors duration-300 hover:bg-brand-blue hover:text-white`}
          >
            {item}
          </li>
        ))}
        <li
          onClick={nextPage}
          className="ease ml-2 flex h-10 cursor-pointer items-center justify-center border border-brand-blue px-3 font-semibold text-brand-blue transition-colors duration-300 hover:bg-brand-blue hover:text-white"
        >
          next
        </li>
      </ul>
    </div>
  );
};

export default PaginationComponent;
