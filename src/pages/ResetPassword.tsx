import { ResetPasswordFields, ResetPasswordForm } from '@/components/form';

export default function ResetPassword() {
  const submit = (data: ResetPasswordFields) => {
    // Call api
    // Redirect
  };

  return (
    <div className="flex flex-col w-full">
      <ResetPasswordForm onSubmit={submit} />
    </div>
  );
}
