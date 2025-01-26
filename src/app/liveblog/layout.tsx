import React from 'react';

export default function liveBlogLayout({
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
