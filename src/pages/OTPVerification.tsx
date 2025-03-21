import { OTPVerificationFields, OTPVerificationForm } from '@/components/form';

const OTPVerification = () => {
  const submit = (data: OTPVerificationFields) => {
    // Call api
    // Save token
    // Redirect
  };

  return (
    <div className="flex flex-col w-full">
      <OTPVerificationForm onSubmit={submit} />
    </div>
  );
};

export default OTPVerification;
