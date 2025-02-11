import toast from "react-hot-toast";

// Component
const useToast = () => {
  // Method
  const successToast = (message: any) => {
    return toast.success(message, {
      style: { fontSize: "1.4rem", fontWeight: "400" },
    });
  };

  const errorToast = (message: any) => {
    return toast.error(message, {
      style: { fontSize: "1.4rem", fontWeight: "400" },
    });
  };

  

  return { successToast, errorToast };
};

export default useToast;
