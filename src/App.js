import "./App.css";
import { motion } from "framer-motion/dist/framer-motion";

function App() {
  return (
    <motion.form
      animate={{ x: "0" }}
      style={{
        position: "absolute",
        top: "15%",
        transform: "translateX(-100vw)",
      }}
      transition={{ type: "spring", duration: 1 }}
    >
      <h1>Create An Account</h1>
      <label>
        Email:
        <input name="email" type="email" required />
      </label>
      <label>
        Password:
        <input name="password" type="password" required />
      </label>
      <button>Sign Up!</button>
    </motion.form>
  );
}

export default App;
