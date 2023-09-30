import StepperForm from "@/components/StepperForm/StepperForm";
import { Button } from "antd";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  return (
    <div>
      <h1>Create student page</h1>

      <StepperForm steps={steps}></StepperForm>
    </div>
  );
};

export default CreateStudentPage;
