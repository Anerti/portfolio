"use server";

export type FormState = { success?: boolean; error?: string }

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!firstName || !lastName || !email || !subject || !message) {
    return { error: "Tous les champs sont requis." };
  }

  try {
    const res = await fetch("https://formspree.io/f/mwvzakon", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, subject, message }),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });

    if (!res.ok) {
      const body = await res.json();
      return { error: body.error || "Une erreur est survenue." };
    }

    return { success: true };
  } catch {
    return { error: "Impossible d'envoyer le message. Réessayez plus tard." };
  }
}
