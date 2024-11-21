import { notFound } from 'next/navigation';

// * Catching unknown routes
// * To catch unknown routes too, we defined a catch-all route that explicitly calls the notFound function.
export default function CatchAllPage() {
  notFound();
}
