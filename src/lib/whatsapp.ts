export const defaultWaText = 'Hello, I would like to enquire about a property.';

const digits = (n: string) => {
  let d = n.replace(/\D/g, '');
  if (d.startsWith('0')) d = '92' + d.slice(1);
  return d;
};

/** Desktop link: opens the chat in WhatsApp Web directly (no api.whatsapp.com landing page). */
export function waHref(number: string, text = defaultWaText) {
  return `https://web.whatsapp.com/send?phone=${digits(number)}&text=${encodeURIComponent(text)}`;
}

/** Opens the chat with that number: WhatsApp app on phones, WhatsApp Web on desktop. */
export function openWhatsApp(number: string, text = defaultWaText) {
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${digits(number)}&text=${encodeURIComponent(text)}`;
  } else {
    const chat = window.open(waHref(number, text), '_blank');
    if (chat) chat.opener = null;
    else window.location.assign(waHref(number, text));
  }
}

export const waClick = (number: string, text?: string) => (e: { preventDefault: () => void }) => {
  // Keep desktop anchors native: browsers can open the real href without a scripted popup.
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) {
    e.preventDefault();
    openWhatsApp(number, text);
  }
};
