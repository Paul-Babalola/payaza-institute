import React, { useRef, useState } from "react";
import { useSelectState } from "@react-stately/select";
import { useSelect } from "@react-aria/select";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { Item } from "@react-stately/collections";

export function StyledMultiSelect({
  label,
  options,
  selectedKeys,
  onAdd,
  error,
}) {
  const [tempKey, setTempKey] = useState("");
  const availableOptions = options.filter(
    (opt) => !selectedKeys.includes(opt.key)
  );
  const state = useSelectState({
    selectedKey: tempKey,
    onSelectionChange: (key) => {
      if (key && !selectedKeys.includes(key)) {
        onAdd(key);
        setTempKey("");
      }
    },
    items: availableOptions,
    children: (item) => <Item key={item.key}>{item.name}</Item>,
    label,
    placeholder: `Select ${label.toLowerCase()}...`,
  });

  const ref = useRef(null);
  const { labelProps, triggerProps, menuProps } = useSelect(
    {
      label,
      items: availableOptions,
      selectedKey: tempKey,
      onSelectionChange: (key) => {
        if (key && !selectedKeys.includes(key)) {
          onAdd(key);
          setTempKey("");
        }
      },
      placeholder: `Select ${label.toLowerCase()}...`,
    },
    state,
    ref
  );
  const { buttonProps } = useButton(triggerProps, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <div
      className="form-field"
      style={{ width: "54.7vw", position: "relative" }}
    >
      <label
        {...labelProps}
        className="section-subtitle"
        style={{ marginBottom: 8 }}
      >
        {label}
      </label>
      <button
        {...buttonProps}
        {...focusProps}
        ref={ref}
        className={`styled-select-trigger${error ? " error" : ""}`}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "12px",
          borderRadius: "6px",
          border: error ? "1.5px solid #e74c3c" : "1px solid #dedae1",
          background: "#fff",
          fontSize: "16px",
          color: tempKey ? "#211e23" : "#938999",
          outline: isFocusVisible ? "2px solid #8f66a3" : "none",
          boxShadow: isFocusVisible ? "0 0 0 2px #dacce0" : "none",
          transition: "border 0.2s, box-shadow 0.2s",
          cursor: "pointer",
        }}
      >
        {tempKey
          ? availableOptions.find((opt) => opt.key === tempKey)?.name
          : `Select ${label.toLowerCase()}...`}
        <span style={{ float: "right", opacity: 0.5, pointerEvents: "none" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 8l4 4 4-4"
              stroke="#938999"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {state.isOpen && (
        <ul
          {...menuProps}
          className="styled-select-dropdown"
          style={{
            position: "absolute",
            zIndex: 100,
            background: "#fff",
            border: "1px solid #dedae1",
            borderRadius: "6px",
            marginTop: 4,
            left: 0,
            top: "100%",
            width: "100%",
            boxShadow: "0 4px 24px rgba(56, 30, 114, 0.08)",
            padding: 0,
            listStyle: "none",
            maxHeight: 220,
            overflowY: "auto",
            animation: "fadeIn 0.15s",
          }}
        >
          {[...state.collection].map((item) => (
            <li
              key={item.key}
              className="styled-select-option"
              style={{
                padding: "12px",
                cursor: "pointer",
                color: "#211e23",
                background: tempKey === item.key ? "#f4f0f8" : "#fff",
                fontWeight: tempKey === item.key ? 600 : 400,
                transition: "background 0.15s, color 0.15s",
              }}
              aria-selected={tempKey === item.key}
              onClick={() => {
                state.setSelectedKey(item.key);
                state.close();
              }}
            >
              {item.rendered}
            </li>
          ))}
        </ul>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
