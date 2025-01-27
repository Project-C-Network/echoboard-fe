import React from 'react';

export default function LiveBlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
