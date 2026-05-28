import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-col h-screen space-y-8 items-center">
      <div className="text-center">
        <h1>404</h1>
        <p>The page you are looking is not found</p>
      </div>
      <button
        className="underline"
        onClick={() => navigate("/", { replace: true })}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
