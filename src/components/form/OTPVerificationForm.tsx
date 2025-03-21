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

export type OTPVerificationFields = z.infer<typeof formSchema>;

const formSchema = z.object({
  otp: z.string().min(1, MESSAGES.otp_is_required),
});

export const OTPVerificationForm = ({ onSubmit }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: '',
    },
  });
  const { control, handleSubmit } = form;

  return (
    <div className="flex flex-col gap-3 w-full m-auto sm:w-[300px] p-4 my-4 shadow">
      <Form {...form}>
        <RHFInput control={control} name={'otp'} label="OTP" />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Form>
    </div>
  );
};
