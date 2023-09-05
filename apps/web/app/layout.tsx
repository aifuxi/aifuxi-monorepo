import { Navbar } from "@/components/client/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 防止切换主题时闪烁 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          if (
            localStorage.getItem('data-theme') === 'dark' ||
            (!('data-theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          ) {
            document.documentElement.setAttribute('data-theme', 'light');
          } else {
            document.documentElement.setAttribute('data-theme', 'light');
          }
        })();
      `,
          }}
        />
      </head>
      <body className="text-typography">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
