import {
  formatPostDate,
  getInstagramPosts,
  getInstagramProfileUrl,
  getPostImageUrl,
  truncateCaption,
} from "@/lib/instagram";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function InstagramFallback() {
  const profileUrl = getInstagramProfileUrl();

  return (
    <div className="rounded-2xl border border-cream-dark bg-white p-10 text-center shadow-lg shadow-forest/5">
      <InstagramIcon className="mx-auto h-10 w-10 text-accent" />
      <p className="mt-4 text-lg text-mountain">
        Följ oss på Instagram för senaste nytt från ridbanan och äventyren.
      </p>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-white transition-colors hover:bg-forest-light"
      >
        <InstagramIcon className="h-5 w-5" />
        @humlas_ridskola
      </a>
    </div>
  );
}

export default async function InstagramFeed() {
  const posts = await getInstagramPosts(3);
  const profileUrl = getInstagramProfileUrl();

  return (
    <section id="nyheter" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Nyheter
            </p>
            <h2 className="font-serif text-4xl font-bold text-forest md:text-5xl">
              Senaste från Instagram
            </h2>
            <p className="mt-4 max-w-xl text-mountain">
              Här visas de tre senaste inläggen från{" "}
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-forest underline decoration-accent/50 underline-offset-4 hover:text-accent"
              >
                @humlas_ridskola
              </a>
              .
            </p>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-5 py-2.5 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-cream"
          >
            <InstagramIcon className="h-4 w-4" />
            Följ på Instagram
          </a>
        </div>

        {!posts || posts.length === 0 ? (
          <InstagramFallback />
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => {
              const imageUrl = getPostImageUrl(post);

              return (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-forest/5 transition-transform hover:-translate-y-1"
                >
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative aspect-square overflow-hidden bg-cream">
                      {imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={imageUrl}
                          alt={truncateCaption(post.caption, 80) || "Instagram-inlägg"}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-mountain">
                          <InstagramIcon className="h-12 w-12 opacity-40" />
                        </div>
                      )}
                      {post.media_type === "VIDEO" && (
                        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                          Video
                        </span>
                      )}
                      {post.media_type === "CAROUSEL_ALBUM" && (
                        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                          Album
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <time
                        dateTime={post.timestamp}
                        className="text-xs font-semibold uppercase tracking-wide text-accent"
                      >
                        {formatPostDate(post.timestamp)}
                      </time>
                      {post.caption && (
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mountain">
                          {truncateCaption(post.caption)}
                        </p>
                      )}
                      <p className="mt-4 text-sm font-semibold text-forest group-hover:text-accent">
                        Visa inlägg på Instagram →
                      </p>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
