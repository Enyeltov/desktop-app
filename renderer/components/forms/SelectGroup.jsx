export default function SelectGroup({ name, text, optionData, register, validate, errors, classes, defaultValue = 'default', disabled = false }) {
    // if (defaultValue){
    //     defaultValue = defaultValue.toString()
    //     console.log({defaultValue: defaultValue, name: name});
    // }

    // const DV = defaultValue ? defaultValue.toString() : undefined;
    // console.log({defaultValue: DV, name: name});
    console.log(optionData, 'optionData');

    return (
        <div className={classes.div}>
            <label
                className={classes.label}
                htmlFor={name}
            >
                {text}
            </label>
            <select
                className={classes.select}
                {...register(name, validate)}
                value={register(name).value}
                defaultValue = {defaultValue}
                disabled = {disabled}
            >
                {/* the first option should be a disabled tooltip  */}
                <option disabled value='default' >Selecciona una opción</option>
                {optionData.map(el => {
                    return <option value={el.value} > {el.optionName}</option>
                })}
                
            </select>
            {errors[name]?.message !== undefined ? <span className={classes.error}>{errors[name]?.message}</span> : null}
        </div>
    );
}
