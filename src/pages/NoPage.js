import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function NoPage() {
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, []);

  return null;
}

export default NoPage;
