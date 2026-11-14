// Supabase Client for Keshav Tours and Travels
// Connected to Project: keshav-tours-and-travels (ap-south-1)

export const SUPABASE_URL = "https://cgimpedhqpsmjvpyhrtq.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnaW1wZWRocXBzbWp2cHlocnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2NjY3MDAsImV4cCI6MjExMDI0MjcwMH0.8QaqmFli0EeODQfeOZlGxsoa6R5rxz1ZjbZvoEnC7dE";

const headers = {
  "apikey": SUPABASE_ANON_KEY,
  "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
  "Content-Type": "application/json",
  "Prefer": "return=representation"
};

/**
 * Save a new tour booking reservation into Supabase
 */
export async function saveBookingToSupabase(bookingData) {
  try {
    const payload = {
      booking_id: bookingData.bookingId,
      traveler_name: bookingData.name,
      phone: bookingData.phone,
      email: bookingData.email || null,
      city: bookingData.city || null,
      travel_date: bookingData.date,
      package_title: bookingData.packageTitle,
      state: bookingData.state || null,
      duration: bookingData.duration || null,
      adults: Number(bookingData.adults) || 2,
      children: Number(bookingData.children) || 0,
      meal_plan: bookingData.mealPlan || null,
      vehicle: bookingData.vehicle || null,
      special_notes: bookingData.specialNotes || null,
      total_cost: Number(bookingData.totalCost) || 0,
      advance_token: Number(bookingData.advanceToken) || 0
    };

    const res = await fetch(`${SUPABASE_URL}/rest/v1/bookings`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Supabase booking insert error:", err);
      return { success: false, error: err };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to connect to Supabase for booking:", error);
    return { success: false, error };
  }
}

/**
 * Save a quick callback inquiry into Supabase
 */
export async function saveInquiryToSupabase(inquiryData) {
  try {
    const payload = {
      name: inquiryData.name,
      phone: inquiryData.phone,
      destination: inquiryData.destination || null,
      message: inquiryData.message || null
    };

    const res = await fetch(`${SUPABASE_URL}/rest/v1/inquiries`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Supabase inquiry insert error:", err);
      return { success: false, error: err };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to connect to Supabase for inquiry:", error);
    return { success: false, error };
  }
}

/**
 * Save a newsletter subscriber into Supabase
 */
export async function saveNewsletterSubscriber(email) {
  try {
    const payload = { email };

    const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers: {
        ...headers,
        "Prefer": "resolution=ignore-duplicates,return=representation"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Supabase newsletter insert error:", err);
      return { success: false, error: err };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to connect to Supabase for newsletter:", error);
    return { success: false, error };
  }
}

