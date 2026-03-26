/**
 * Slot service — calls the WLHORIZON `getAvailableSlots` Cloud Function.
 *
 * Cloud Function deployed in europe-west1:
 *   - getAvailableSlots (callable)
 *
 * Returns the real-time slot availability from Firestore so the web checkout
 * uses the same source of truth as the Flutter app and the POS.
 */

import { httpsCallable } from "firebase/functions";
import { getClientFunctions } from "@/config/firebase-client";
import type { TimeSlotInfo } from "@/types/order";

export type { TimeSlotInfo };

export interface GetAvailableSlotsParams {
  appId: string;
  /** Date in YYYY-MM-DD format */
  date: string;
}

/**
 * Calls the WLHORIZON `getAvailableSlots` Cloud Function.
 * Returns the list of time slots with their live availability status.
 */
export async function getAvailableSlots(
  params: GetAvailableSlotsParams,
): Promise<TimeSlotInfo[]> {
  const functions = getClientFunctions();
  const callable = httpsCallable(functions, "getAvailableSlots");
  const result = await callable(params);
  // The CF may return { slots: [...] } or directly an array
  const data = result.data as { slots?: TimeSlotInfo[] } | TimeSlotInfo[];
  if (Array.isArray(data)) return data;
  return data.slots ?? [];
}
