// api endpoint
export const baseURL =
  process.env.NODE_ENV !== "development"
    ? "https://lit-meadow-92442.herokuapp.com/api/"
    : "http://localhost:8000/api/";
