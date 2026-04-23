import { useState, useEffect } from "react";
import Modal from "@components/ui/Modal";
import { preorderConfig } from "../../../config/pages/Home/preorder.config";

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreOrderModal = ({ isOpen, onClose }: PreOrderModalProps) => {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState<string | null>(null);
  const [variant, setVariant] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name) newErrors.name = "Name required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateStep4()) return;

    const order = { plan, variant, ...form };

    localStorage.setItem("preorder", JSON.stringify(order));

    setStep(5);
  };

  const getTimeRemaining = (targetDate: string) => {
    const total = Date.parse(targetDate) - Date.now();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
    };

  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeRemaining(preorderConfig.launchDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(getTimeRemaining(preorderConfig.launchDate));
    }, 1000);

    return () => clearInterval(timer);
    }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <h2>Launch Countdown</h2>
          <p>Be among the first to experience Quantum Leap.</p>

          <div className="grid grid-cols-2 gap-4 my-6">
            {preorderConfig.advantages.map((a) => (
              <div key={a.title} className="card">
                <h4>{a.title}</h4>
                <p>{a.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 my-6 text-center">
            <div>
                <p className="text-2xl">{timeLeft.days}</p>
                <span>Days</span>
            </div>
            <div>
                <p className="text-2xl">{timeLeft.hours}</p>
                <span>Hours</span>
            </div>
            <div>
                <p className="text-2xl">{timeLeft.minutes}</p>
                <span>Min</span>
            </div>
            </div>

          <div className="flex gap-4 my-6">
            <button onClick={onClose} className="btn btn-demure w-full disabled:opacity-50">
              Cancel
            </button>
            <button onClick={next} className="btn btn-secondary w-full disabled:opacity-50">
              Continue
            </button>
          </div>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <h2>Select Your Plan</h2>

          <div className="grid gap-4">
            {preorderConfig.plans.map((p) => (
              <div
                key={p.id}
                onClick={() => setPlan(p.id)}
                className={`card cursor-pointer ${
                  plan === p.id ? "border-2 border-cyan-400 scale-105" : ""
                }`}
              >
                <h3>{p.name}</h3>
                <p>${p.price}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <button onClick={back} className="btn btn-demure w-full disabled:opacity-50">
              Back
            </button>
            <button disabled={!plan} onClick={next} className="btn btn-secondary w-full disabled:opacity-50">
              Continue
            </button>
          </div>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <h2>Choose Variant</h2>

          {preorderConfig.variants.map((v) => (
            <div
              key={v.id}
              onClick={() => setVariant(v.id)}
              className={`card cursor-pointer ${
                variant === v.id ? "border-2 border-cyan-400 scale-105" : ""
              }`}
            >
              {v.name}
            </div>
          ))}

          <div className="flex gap-4 mt-4">
            <button onClick={back} className="btn btn-demure w-full disabled:opacity-50">
              Back
            </button>
            <button disabled={!variant} onClick={next} className="btn btn-secondary w-full disabled:opacity-50">
              Continue
            </button>
          </div>
        </>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <>
          <h2>Your Details</h2>

          <input
            className="input"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p>{errors.name}</p>}

          <input
            className="input"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p>{errors.email}</p>}

          <input
            className="input"
            placeholder="Phone"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <div className="flex gap-4 mt-4">
            <button onClick={back} className="btn btn-demure w-full disabled:opacity-50">
              Back
            </button>
            <button onClick={handleSubmit} className="btn btn-primary w-full disabled:opacity-50">
              Confirm Pre-Order
            </button>
          </div>
        </>
      )}

      {/* STEP 5 */}
      {step === 5 && (
        <>
          <h2>🎉 You're In!</h2>
          <p>Your pre-order has been received.</p>
          <button onClick={onClose} className="btn btn-primary disabled:opacity-50">
            Close
          </button>
        </>
      )}

    </Modal>
  );
};

export default PreOrderModal;