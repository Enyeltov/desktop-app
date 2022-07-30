export default function InputGroup({ name, type, placeholder, text, register, validate, errors, classes, value = undefined, defaultValue = undefined, checked = null, disabled = false, pattern = null }) {
  console.log('name:', name, 'defaultValue:', defaultValue, typeof(defaultValue));
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
        {...register(name,{value:value})}
        type={type}
        value ={value}
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
