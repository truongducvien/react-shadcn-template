import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { RHFInput } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { MESSAGES } from '@/constant';

interface Props {
  onSubmit: SubmitHandler<z.infer<typeof formSchema>>;
}

export type ResetPasswordFields = z.infer<typeof formSchema>;

const formSchema = z
  .object({
    password: z.string().min(8, { message: MESSAGES.invalid_password }),
    newPassword: z.string().min(8, { message: MESSAGES.invalid_password }),
    confirmNewPassword: z.string().min(8, { message: MESSAGES.invalid_password }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: MESSAGES.password_not_match,
    path: ['confirmNewPassword'],
  });

export const ResetPasswordForm = ({ onSubmit }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });
  const { control, handleSubmit } = form;

  return (
    <div className="flex flex-col gap-3 w-full m-auto sm:w-[300px] p-4 my-4 shadow">
      <Form {...form}>
        <RHFInput control={control} name={'password'} label="Current password" />
        <RHFInput control={control} name={'newPassword'} label="New password" />
        <RHFInput control={control} name={'confirmNewPassword'} label="Confirm new password" />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Form>
    </div>
  );
};
