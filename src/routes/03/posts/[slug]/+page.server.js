import * as db from '$lib/server/postsDatabase';

export async function load({ params }) {
  const post = db.getBySlug(params.slug);
  return { post };
}