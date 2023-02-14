import clsx from "clsx";

function Group({ children, className }) {
  return <div className={`${className ?? ""}`}>{children}</div>;
}

function Label({ children, htmlFor }) {
  return (
    <label
      className={clsx("block mb-1.5", "text-sm uppercase tracking-widest")}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

function Input({ placeholder, type, id, dispatch, state, update }) {
  return (
    <input
      className={clsx(
        "border border-gray-200",
        "px-4 py-3",
        "block w-full rounded-md",
        "text-sm placeholder:text-sm",
        "sm:text-lg sm:placeholder:text-lg"
      )}
      id={id}
      value={state}
      onChange={(e) => dispatch({ type: update, payload: e.target.value })}
      type={type ?? "text"}
      placeholder={placeholder}
    />
  );
}

function Button({ children }) {
  return (
    <button
      className={clsx(
        "bg-slate-900 text-white rounded-md",
        "block w-full",
        "py-4"
      )}
    >
      {children}
    </button>
  );
}

const Form = {
  Group,
  Label,
  Input,
  Button,
};

export default Form;
