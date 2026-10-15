/**
 * Privacy-respecting Google Analytics 4 event dispatcher.
 * Only sends events if NEXT_PUBLIC_GA_ID is set in the environment.
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | EventAction,
      config?: Record<string, unknown>
    ) => void;
  }
}

export type EventAction =
  | "whatsapp_click"
  | "phone_click"
  | "inquiry_submit"
  | "book_stay_click"
  | "room_reserve_click";

export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  roomName?: string;
  source?: string;
  [key: string]: unknown;
}

export const trackEvent = (
  action: EventAction,
  params: AnalyticsEventParams = {}
): void => {
  if (typeof window === "undefined") return;

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId || !window.gtag) {
    // If no GA ID configured or gtag not loaded, do not execute or log sensitive info
    return;
  }

  try {
    window.gtag("event", action, {
      event_category: params.category || "Engagement",
      event_label: params.label || action,
      value: params.value,
      ...params,
    });
  } catch {
    // Fail silently without disrupting user interaction
  }
};
