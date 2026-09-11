"use client";

import { useActionState } from "react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState | null = null;

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state?.success) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-lg shadow-forest/5">
        <h3 className="font-serif text-2xl font-semibold text-forest">
          Tack för ditt meddelande!
        </h3>
        <p className="mt-4 leading-relaxed text-mountain">
          Vi har tagit emot din förfrågan och återkommer så snart vi kan.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl bg-white p-8 shadow-lg shadow-forest/5"
    >
      <h3 className="font-serif text-2xl font-semibold text-forest">
        Skicka ett meddelande
      </h3>

      <div className="mt-6 space-y-4">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Lämna tomt</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-forest">
            Namn
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            className="mt-1 w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-2.5 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Ditt namn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-forest">
            E-post
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            className="mt-1 w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-2.5 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="din@epost.se"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-forest">
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            maxLength={5000}
            className="mt-1 w-full resize-none rounded-lg border border-cream-dark bg-cream/50 px-4 py-2.5 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Berätta vad du är intresserad av..."
          />
        </div>

        {state?.error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-forest py-3 font-semibold text-white transition-colors hover:bg-forest-light disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Skickar..." : "Skicka meddelande"}
        </button>
      </div>
    </form>
  );
}
