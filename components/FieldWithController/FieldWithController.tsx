import React from 'react';
import { Controller } from 'react-hook-form';
import { InputErrorMsg } from '..';
import { FieldWithControllerProps } from './FieldWithController.props';

export const FieldWithController = ({
  label,
  type,
  control,
  customPattern,
  required,
  className,
  children,
}: FieldWithControllerProps): JSX.Element => {
  return (
    <span className={`${className ? className : ''}`}>
      {label && (
        <label htmlFor={type} className="text-darkestGrey font-semibold">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={type}
        defaultValue={''}
        rules={{
          required: {
            value: required ? required : false,
            message: `${label ? label : 'Field'} can't be empty`,
          },
          pattern: customPattern ? customPattern : undefined,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  ...field,
                });
              }
              return child;
            })}

            <InputErrorMsg error={error} />
          </>
        )}
      />
    </span>
  );
};
