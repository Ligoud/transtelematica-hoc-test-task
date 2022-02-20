import React from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../store/actions/user_actions";
import constants from "./constants";
import "../../css/paginator.css";

const Paginator = ({ page, setPage, filterString, elementsCount }) => {
  const dispatch = useDispatch();
  const { PAGE_SIZE } = constants;

  return (
    <>
      <div className="paginator">
        <div
          onClick={() => {
            const pageNumber = page > 0 ? page - 1 : 0;
            setPage(pageNumber);
            dispatch(
              addUserAction({
                name: "PrevPage",
                value: `${filterString}-${pageNumber}`,
              })
            );
          }}
        >
          {"<"}
        </div>
        <div>{page + 1}</div>
        <div
          onClick={() => {
            const pageNumber =
              page < Math.ceil(elementsCount / PAGE_SIZE) - 1 ? page + 1 : page;
            setPage(pageNumber);
            dispatch(
              addUserAction({
                name: "NextPage",
                value: `${filterString}-${pageNumber}`,
              })
            );
          }}
        >
          {">"}
        </div>
      </div>
    </>
  );
};

export default Paginator;
