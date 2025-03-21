import { HTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label?: string;
  className?: HTMLAttributes<HTMLFormElement>['className'];
}

const RHFInput = ({ control, name, label, ...rest }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="gap-1 w-full">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field} {...rest} />
          </FormControl>
          {fieldState.error?.message && <FormMessage>{fieldState.error?.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default RHFInput;
