import { useState } from "react";

const Hooks = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldOnChange = (e) => {
        setFieldValue(e.target.value);
    }

    return [fieldValue, handleFieldOnChange];
}

export default Hooks;