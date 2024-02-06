import Stepper from "./components/Stepper/Stepper";
import { Step as StepType } from "../pages/components/Stepper/shared/constants";

//Simulated external source of data (api call) or JSON file. 
const externalSteps: StepType[] = [
  { type: "Confirm Booking", state: "completed" },
  { type: "Review Order", state: "ready" },
  { type: "Payment Options", state: "ready" },
  { type: "Complete Move", state: "ready" },
  { type: "Check", state: "ready" },
  { type: "Additionals", state: "ready" },
  { type: "External config", state: "ready" },
  { type: "Wife gifts", state: "ready" },
  { type: "Checkout", state: "ready" },
];

function Home() {
  return (
    <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
      <Stepper data-testid="stepper" externalSteps={externalSteps} />
    </div>
  )
}

export default Home;
