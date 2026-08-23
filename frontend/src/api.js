// src/api.js
// Practical Concept: Practical 3 and Practical 6
// Central file for all Event API requests

const BASE_URL = "http://localhost:5000/api";


// GET all events
export async function getEvents() {
  const response = await fetch(`${BASE_URL}/events`);

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}


// GET one event
export async function getEventById(id) {
  const response = await fetch(`${BASE_URL}/events/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch event");
  }

  return response.json();
}


// CREATE event
export async function createEvent(eventData) {
  const response = await fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create event");
  }

  return response.json();
}


// UPDATE event
export async function updateEvent(id, eventData) {
  const response = await fetch(`${BASE_URL}/events/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error("Failed to update event");
  }

  return response.json();
}


// DELETE event
export async function deleteEvent(id) {
  const response = await fetch(`${BASE_URL}/events/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete event");
  }

  return response.json();
}
