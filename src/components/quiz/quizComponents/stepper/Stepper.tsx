import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface CustomStepperProps {
  activeStep: number;
  steps: number;
}

const StepperContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

const StepBlock = styled(Box)<{ isActive: boolean; isCompleted: boolean }>(
  ({ theme, isActive, isCompleted }) => ({
    marginRight: "10px",
    width: "30%",
    height: 10,
    borderRadius: "2px",
    backgroundColor: isActive ? "#b30000" : isCompleted ? "#333333" : "#cccccc",
    display: "flex",
  })
);

const CustomStepper: React.FC<CustomStepperProps> = ({ activeStep, steps }) => {
  return (
    <StepperContainer>
      {Array.from({ length: steps }).map((_, index) => (
        <StepBlock
          key={index}
          isActive={index === activeStep}
          isCompleted={index < activeStep}
        ></StepBlock>
      ))}
    </StepperContainer>
  );
};

export default CustomStepper;
