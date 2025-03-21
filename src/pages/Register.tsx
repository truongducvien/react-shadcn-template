import { RegisterFields, RegisterForm } from '@/components/form';

export default function Register() {
  const submit = (data: RegisterFields) => {
    // Call api
    // Redirect
  };

  return (
    <div className="flex flex-col w-full">
      <RegisterForm onSubmit={submit} />
    </div>
  );
}
