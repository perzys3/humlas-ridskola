export type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
};

const INSTAGRAM_USERNAME = "humlas_ridskola";

export function getInstagramProfileUrl() {
  return `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;
}

export async function getInstagramPosts(
  limit = 3,
): Promise<InstagramPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return null;
  }

  try {
    const url = new URL(`https://graph.instagram.com/${userId}/media`);
    url.searchParams.set(
      "fields",
      "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
    );
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("access_token", token);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("Instagram API error:", await response.text());
      return null;
    }

    const data = (await response.json()) as { data?: InstagramPost[] };
    return data.data ?? [];
  } catch (error) {
    console.error("Failed to fetch Instagram posts:", error);
    return null;
  }
}

export function getPostImageUrl(post: InstagramPost) {
  if (post.media_type === "VIDEO") {
    return post.thumbnail_url ?? post.media_url;
  }

  return post.media_url ?? post.thumbnail_url;
}

export function truncateCaption(caption: string | undefined, maxLength = 120) {
  if (!caption) {
    return "";
  }

  const trimmed = caption.trim().replace(/\s+/g, " ");

  if (trimmed.length <= maxLength) {
    return trimmed;
  }

  return `${trimmed.slice(0, maxLength).trim()}…`;
}

export function formatPostDate(timestamp: string) {
  return new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(timestamp));
}
