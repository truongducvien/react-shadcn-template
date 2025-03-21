import { BG_404 } from '@/constant';

export default function NotFoundPage() {
  return (
    <div
      style={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>404</h1>
      <div>
        <img src={BG_404} alt="" />
      </div>

      <div>
        <p>the page you are looking for not avaible!</p>
        <a href="./">
          <p>Go to Home</p>
        </a>
      </div>
    </div>
  );
}
