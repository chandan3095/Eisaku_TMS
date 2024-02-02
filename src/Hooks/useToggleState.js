import { useState } from "react";

export const useToggleState = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const handleOpen = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    return [state, handleOpen, handleClose];
};
