// Converte um link de YouTube, Vimeo ou Google Drive no endereço do player incorporado.
export function toEmbedUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^(www|m)\./, "");
  const path = parsed.pathname;

  if (host === "youtu.be") return youtube(path.slice(1));
  if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (path === "/watch") return youtube(parsed.searchParams.get("v"));
    const match = path.match(/^\/(embed|shorts|live)\/([\w-]+)/);
    if (match) return youtube(match[2]);
  }
  if (host === "vimeo.com") {
    const match = path.match(/^\/(\d+)/);
    if (match) return `https://player.vimeo.com/video/${match[1]}`;
  }
  if (host === "player.vimeo.com") return parsed.href;
  if (host === "drive.google.com") {
    const match = path.match(/\/file\/d\/([\w-]+)/);
    if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return null;
}

function youtube(id) {
  return id && /^[\w-]{6,}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}
