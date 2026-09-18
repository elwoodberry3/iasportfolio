/**
 * YouTubeEmbed — responsive 16:9 YouTube player. Driven by a video id so the
 * same component is reused anywhere (hero, build pages, trailers). Uses the
 * privacy-enhanced nocookie domain and lazy-loads the iframe.
 */
export function YouTubeEmbed({
  id,
  title,
  className = "",
}: {
  id: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-card border border-primary-800 bg-primary-950 shadow-[0_8px_40px_rgba(3,15,18,0.4)] ${className}`}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        style={{ border: 0 }}
        allow="autoplay; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}