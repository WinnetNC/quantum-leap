import { useState } from "react";
import Modal from "@components/ui/Modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  { id: "basic", label: "Starter", price: 499 },
  { id: "pro", label: "Pro", price: 899 },
];

const variants = [
  { id: "black", label: "Midnight Black" },
  { id: "silver", label: "Quantum Silver" },
];

const PreOrderModal = ({ isOpen, onClose }: Props) => {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState(plans[0].id);
  const [variant, setVariant] = useState(variants[0].id);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    const order = { email, plan, variant };

    localStorage.setItem("preorder", JSON.stringify(order));

    console.log("ORDER:", order);

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      <h2 className="mb-4">Pre-Order Quantum Leap</h2>

      {/* Plan Selection */}
      <div className="mb-4">
        <label className="block mb-2">Select Plan</label>
        <select
          className="input"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          {plans.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label} - ${p.price}
            </option>
          ))}
        </select>
      </div>

      {/* Variant */}
      <div className="mb-4">
        <label className="block mb-2">Choose Variant</label>
        <select
          className="input"
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
        >
          {variants.map((v) => (
            <option key={v.id} value={v.id}>
              {v.label}
            </option>
          ))}
        </select>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      {/* Submit */}
      <button className="btn btn-primary w-full" onClick={handleSubmit}>
        Confirm Pre-Order
      </button>

    </Modal>
  );
};

export default PreOrderModal;