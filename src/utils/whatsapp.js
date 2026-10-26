const WHATSAPP_NUMBER = "918928638767";

export const openWhatsApp = (medicineName = "") => {
  const message = medicineName
    ? `Hello, I have a requirement for ${medicineName}. I would like to know about availability and the required documentation.`
    : `Hello, I have a medicine requirement. I would like to know about availability and the required documentation.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
};