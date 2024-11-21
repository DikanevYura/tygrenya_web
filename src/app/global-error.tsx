'use client';

import NextError from 'next/error';

export default function GlobalError() {
  return (
    <html lang="en">
      <body>

        <NextError statusCode={0} />
      </body>
    </html>
  );
}
