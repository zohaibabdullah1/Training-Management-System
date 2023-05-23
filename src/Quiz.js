import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from 'react-toastify';
// import "./Quiz.css";

function Quiz() {
    const questions = [
        {
          question: "What is the main function in C++?",
          options: ["int main()", "void main()", "int main(void)", "void main(void)"],
        },
        {
          question: "What is the correct syntax for declaring a variable in C++?",
          options: ["int x;", "x = 5;", "variable x;", "x = int;"],
        },
        {
          question: "What is the object-oriented programming feature in C++?",
          options: ["Classes and objects", "Pointers", "Structures", "Loops"],
        },
        {
          question: "Which keyword is used to allocate memory dynamically in C++?",
          options: ["new", "malloc", "allocate", "dynamic"],
        },
        {
          question: "What is the scope resolution operator in C++?",
          options: ["::", ".", ":", "->"],
        },
        {
          question: "What is the correct way to initialize an array in C++?",
          options: ["int arr[] = {1, 2, 3};", "int arr() = {1, 2, 3};", "int arr[3] = {1, 2, 3};", "int arr{} = {1, 2, 3};"],
        },
        {
          question: "What is the difference between reference and pointer in C++?",
          options: ["References cannot be null, pointers can be null.", "Pointers can be used to access array elements, references cannot.", "References are used for dynamic memory allocation, pointers are not.", "Pointers cannot be used as function parameters, references can."],
        },
        {
          question: "What is the size of the 'int' data type in C++?",
          options: ["Depends on the system architecture (typically 4 bytes)", "1 byte", "8 bytes", "Depends on the compiler"],
        },
        {
          question: "What is the purpose of 'const' keyword in C++?",
          options: ["To declare a constant variable", "To declare a pointer variable", "To define a function", "To specify the return type of a function"],
        },
        {
          question: "What is the output of the following code?\nint x = 5;\ncout << x++ << endl;\ncout << ++x << endl;",
          options: ["5\n7", "6\n7", "6\n6", "5\n6"],
        },
      ];
      

  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));

  const handleOptionChange = (index, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[index] = option;
      return newSelectedOptions;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Process the selected options
    console.log(selectedOptions);
  
    // Show toast notification
    toast.success('Quiz submitted!', {
    //   position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
    <>
    <div>

    <h2 className="quiz-header">Quiz</h2>
    </div>
    
   
    <div className="quiz-container">
      
      <form onSubmit={handleSubmit} className="quiz-form">
        {questions.map((question, index) => (
          <QuestionComponent
            key={index}
            question={question}
            index={index + 1}
            selectedOption={selectedOptions[index]}
            handleOptionChange={(option) => handleOptionChange(index, option)}
          />
        ))}
        <Button type="submit" variant="primary" className="submit-btn">Submit</Button>
      </form>
    </div>
    </>
  );
}

function QuestionComponent({ question, index, selectedOption, handleOptionChange }) {
  const { question: questionText, options } = question;

  return (
    <div className="question-container">
      <p className="question-text">
        Q{index}. {questionText}
      </p>

      <div className="options-container">
        {options.map((option, optionIndex) => (
          <Form.Check 
            key={optionIndex}
            type="radio"
            id={`question${index}_option${optionIndex + 1}`}
            name={`question${index}`}
            aria-label={`option ${optionIndex + 1}`}
            label={`${String.fromCharCode(65 + optionIndex)}. ${option}`}
            checked={selectedOption === `question${index}_option${optionIndex + 1}`}
            onChange={() => handleOptionChange(`question${index}_option${optionIndex + 1}`)}
            className="radio-option"
          />
        ))}
      </div>
    </div>
    
  );
}

export default Quiz;
