"use server";

export async function getProjects() {
  try {
    const response = await fetch("http://localhost:3000/api/projects");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
