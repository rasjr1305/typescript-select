import { Dispatch, useEffect, useState } from "react";
import styles from "./Select.module.css";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options: SelectOption[];
  setSelectedValue: Dispatch<React.SetStateAction<string | number | undefined>>;
  setSelectedLabel: Dispatch<React.SetStateAction<string | number | undefined>>;
};

export function Select({
  options,
  setSelectedValue,
  setSelectedLabel,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [optionLabel, setOptionLabel] = useState<SelectOption | undefined>(
    options[0]
  );

  function clearOptions() {
    setOptionLabel(undefined);
    setSelectedValue("");
    setSelectedLabel("");
  }

  function selectOption(option: SelectOption) {
    setOptionLabel(option);
    setSelectedValue(option.value);
    setSelectedLabel(option.label);
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    setSelectedValue(options[0].value);
    setSelectedLabel(options[0].label);
  }, []);

  return (
    <>
      <div
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        className={styles.container}
      >
        <span className={styles.value}>{optionLabel?.label}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          &times;
        </button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
          {options.map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`${styles.option} ${
                option === optionLabel ? styles.selected : ""
              }
              ${index === highlightedIndex ? styles.highlighted : ""}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
