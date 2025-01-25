import React from "react";
import PropsTypes from "prop-types";
import Input from "./input";
import Label from "./label";

const InputLabel = ({ icon, type, id, placeholder, label }) => {
    return (
      <>
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          {icon}
        </div>
        <Input type={type} id={id} placeholder={placeholder} />
        <Label htmlFor={id} label={label} />
      </>
    );
}

export default InputLabel;

InputLabel.propTypes = {
  icon: PropsTypes.element,
  type: PropsTypes.string,
  id: PropsTypes.string,
  placeholder: PropsTypes.string,
  label: PropsTypes.string,
}