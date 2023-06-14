import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm)

    const onInputChange = (event) => {
        const {name, value} = event.target;
        setformState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setformState({
            ...initialForm
        })
    }

  return {
    formState,
    onInputChange,
    onResetForm
  }
}
