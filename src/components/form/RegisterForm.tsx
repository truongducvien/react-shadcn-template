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

export type RegisterFields = z.infer<typeof formSchema>;

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, MESSAGES.email_is_required)
      .email({ message: MESSAGES.invalid_email_add }),
    password: z.string().min(8, { message: MESSAGES.invalid_password }),
    confirmPassword: z.string().min(8, { message: MESSAGES.invalid_password }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: MESSAGES.password_not_match,
    path: ['confirmPassword'],
  });

export const RegisterForm = ({ onSubmit }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const { control, handleSubmit } = form;

  return (
    <div className="flex flex-col gap-3 w-full m-auto sm:w-[300px] p-4 my-4 shadow">
      <Form {...form}>
        <RHFInput control={control} name={'email'} label="Email" />
        <RHFInput control={control} name={'password'} label="Password" />
        <RHFInput control={control} name={'confirmPassword'} label="Confirm password" />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Form>
    </div>
  );
};
