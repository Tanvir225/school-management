const getSections = async () => {
  const response = await fetch(
    "http://localhost:3000/dashboard/students/api/getSections",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};

export default getSections;
