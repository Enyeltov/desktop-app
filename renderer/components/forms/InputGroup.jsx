export default function InputGroup({ name, type, placeholder, text, register, validate, errors, classes, defaultValue = undefined, checked = null, disabled = false, pattern = null }) {
  return (
    <div className={classes.div}>
      <label
        className={classes.label}
        htmlFor={name}
      >
        {text}
      </label>
      <input
        className={classes.input}
        {...register(name, validate)}
        type={type}
        defaultValue={defaultValue}
        checked={checked}
        placeholder={placeholder}
        disabled = {disabled}
        pattern = {pattern}
      />
      {errors[name]?.message !== undefined ? <span className={classes.error}>{errors[name]?.message}</span> : null}
    </div>
  );
}
