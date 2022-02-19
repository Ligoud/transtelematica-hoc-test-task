import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserAction } from "../../store/actions/user_actions";
import constants from "./constants";
import "../../css/autocomplete.css";
import Paginator from "./paginator";

const Autocomplete = ({ category }) => {
  const { items = [] } = useSelector((state) => state.item);
  const dispatch = useDispatch();

  const { PAGE_SIZE } = constants;

  const [page, setPage] = useState(0);
  const [filteredElems, setFilteredElems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);

  /* #region  Input */
  const [text, setText] = useState("");

  const onChangeText = useCallback((e) => {
    const value = e.target.value;
    dispatch(
      addUserAction({
        name: "AutocompletetTextInput",
        value,
      })
    );
    setText(value);
    setPage(0);
  }, []);
  /* #endregion */

  // Ресет стейта формы
  const reset = useCallback(() => {
    setPage(0);
    setText("");
  }, []);

  // Фильтр по категории
  useEffect(() => {
    const matchCategories = items.filter((el) => el.parent_id === category);
    //
    setFilteredElems(matchCategories);
    setCategoryItems(matchCategories);
    //
    reset();
  }, [category, items]);

  // Автокомплит
  useEffect(() => {
    const filtered = categoryItems.filter(({ name = "" }) =>
      name.includes(text)
    );

    setFilteredElems(filtered);
  }, [text, categoryItems]);

  return (
    <>
      {category && (
        <>
          <div className="input-box">
            <input
              type="text"
              onChange={onChangeText}
              placeholder="Введите текст"
            />
            <ul>
              {filteredElems
                .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
                .map((el) => {
                  const isChecked = !!el.isChecked;
                  return (
                    <li
                      className={`option ${isChecked ? "checked" : ""}`}
                      key={el.id}
                      onClick={() => {
                        const copied = filteredElems.map((item) =>
                          item.id === el.id
                            ? {
                                ...el,
                                isChecked: !isChecked,
                              }
                            : item
                        );
                        console.log(copied);
                        dispatch(
                          addUserAction({
                            name: "CheckItem",
                            value: `${el.id}-${!isChecked}`,
                          })
                        );
                        setFilteredElems(copied);
                      }}
                    >
                      {el.name}
                    </li>
                  );
                })}
            </ul>
            <Paginator
              page={page}
              setPage={setPage}
              filterString={`${category}-${text}`}
              elementsCount={filteredElems.length}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Autocomplete;
