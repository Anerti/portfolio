"use server";

export async function submitContact(formData: FormData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!firstName || !lastName || !email || !subject || !message) {
    throw new Error("Tous les champs sont requis.");
  }

  console.log("Contact form submitted", { firstName, lastName, email, subject, message });
}
