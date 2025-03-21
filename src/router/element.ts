import { lazy } from 'react';

const Auth = lazy(() => import('@/pages/Auth'));
const OTPVerification = lazy(() => import('@/pages/OTPVerification'));
const Register = lazy(() => import('@/pages/Register'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));
const Home = lazy(() => import('@/pages/Home'));
const NotFoundPage = lazy(() => import('@/pages/404'));

export { Auth, Register, ResetPassword, Home, NotFoundPage, OTPVerification };
