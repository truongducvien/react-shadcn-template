import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import fb from '@/assets/images/facebook.png';
import gg from '@/assets/images/google.png';
import { RHFInput } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { MESSAGES } from '@/constant';
import ROUTE_PATH from '@/router/path';

interface Props {
  onSubmit: SubmitHandler<z.infer<typeof formSchema>>;
}

export type LogInFields = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z
    .string()
    .min(1, MESSAGES.email_is_required)
    .email({ message: MESSAGES.invalid_email_add }),
  password: z.string().min(8, { message: MESSAGES.invalid_password }),
});

export const LogInForm = ({ onSubmit }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { control, handleSubmit } = form;

  return (
    <div className="flex flex-col gap-3 w-full m-auto sm:w-[300px] p-4 my-4 shadow">
      <Form {...form}>
        <RHFInput control={control} name={'email'} label="Email" />
        <RHFInput control={control} name={'password'} label="Password" />
        <div className="flex justify-end w-full">
          <a className="text-blue-700 text-sm font-medium" href="./">
            Forgot password?
          </a>
        </div>
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Form>

      <div className="flex flex-col gap-3">
        <p className="text-center">
          Don&apos;t have an account?{' '}
          <a href={ROUTE_PATH.register} className="text-blue-700">
            Sign up
          </a>
        </p>

        <div className="w-full flex items-center gap-1">
          <div className="w-full h-0 border border-border" />
          <span className="text-nowrap text-sm">Or connect with</span>
          <div className="w-full h-0 border border-border" />
        </div>
        <div className="flex justify-center gap-2">
          <img src={gg} alt="Google-Icon" className="w-5 cursor-pointer" />
          <img src={fb} alt="Facebook-Icon" className="w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
