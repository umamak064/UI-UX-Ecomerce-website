
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Create a noop storage for server-side or environments without window
const createNoopStorage = () => {
  return {
    // Specify more concrete types for better type safety
    getItem(_key: string): Promise<string | null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, _value: string): Promise<void> {
      return Promise.resolve();
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
};

// Determine which storage to use based on whether `window` is defined
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;
